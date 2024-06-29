import { Hono } from 'hono';
import { cors } from 'hono/cors';
import authRoutes from './routes/auth';
import todoRoutes from './routes/todo';

const app = new Hono();

app.use('*', cors());

app.route('/auth', authRoutes);
app.route('/todo', todoRoutes);

app.fire();