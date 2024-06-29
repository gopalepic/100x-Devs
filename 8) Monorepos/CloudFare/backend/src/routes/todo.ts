import { Hono } from 'hono';
import { Todo } from '../db';
import { authenticateJWT, SECRET } from './middlewares/index';

const app = new Hono();

app.post('/newtodo', authenticateJWT, async (c) => {
  const { title, description } = await c.req.json();
  const done = false;
  const userId = c.req.header('userId');

  const newTodo = new Todo({ title, description, done, userId });

  try {
    const savedTodo = await newTodo.save();
    return c.json(savedTodo, 201);
  } catch (err) {
    return c.json({ error: 'Failed to create a new todo' }, 500);
  }
});

app.get('/todos', authenticateJWT, async (c) => {
  const userId = c.req.header('userId');

  try {
    const todos = await Todo.find({ userId });
    return c.json(todos);
  } catch (err) {
    return c.json({ error: 'Failed to retrieve todos' }, 500);
  }
});

app.patch('/todos/:todoId/done', authenticateJWT, async (c) => {
  const { todoId } = c.req.param();
  const userId = c.req.header('userId');

  try {
    const updatedTodo = await Todo.findOneAndUpdate({ _id: todoId, userId }, { done: true }, { new: true });
    if (!updatedTodo) {
      return c.json({ error: 'Todo not found' }, 404);
    }
    return c.json(updatedTodo);
  } catch (err) {
    return c.json({ error: 'Failed to update todo' }, 500);
  }
});

export default app;