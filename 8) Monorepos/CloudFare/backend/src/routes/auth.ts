import { Hono } from 'hono';
import jwt from 'jsonwebtoken';
import { User } from '../db';
import { SignupInput } from '@gopalepic/common/dist';

const app = new Hono();
app.post('/signup', async (c) => {
    const { username, password } = await c.req.json();
    const parsedInput = SignupInput.safeParse({ username, password });
    if (!parsedInput.success) {
      return c.json({ message: 'error' }, 403);
    }
    const user = await User.findOne({ username });
    if (user) {
      return c.json({ message: 'User already exist' }, 403);
    } else {
      const newUser = new User({ username, password });
      await newUser.save();
      const token = jwt.sign({ id: newUser._id }, SECRET, { expiresIn: '1h' });
      return c.json({ message: 'Sign up successfully', token });
    }
  });
  
  app.post('/signin', async (c) => {
    const { username, password } = await c.req.json();
    const user = await User.findOne({ username, password });
    if (user) {
      const token = jwt.sign({ id: user._id }, SECRET, { expiresIn: '1h' });
      return c.json({ message: 'Logged in successfully', token });
    } else {
      return c.json({ message: 'User not found' }, 403);
    }
  });

app.get('/me', async (c) => {
  const userId = c.req.header('userId');
  const user = await User.findOne({ _id: userId });
  if (!user) {
    return c.json({ message: 'User not found' }, 404);
  } else {
    return c.json({ username: user.username });
  }
});


app.fire();