import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  res.send('API Gateway is running');
});

export default router; 