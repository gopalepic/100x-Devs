import { db } from 'hono-db';

const users = db.collection('users', {
  schema: {
    username: { type: String },
    password: { type: String },
  },
});

const todos = db.collection('todos', {
  schema: {
    title: { type: String },
    description: { type: String },
    done: { type: Boolean },
    userId: { type: String },
  },
});

export { users, todos };