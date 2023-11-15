import { Router } from 'express';

const router = Router();

router.get('/health', function (req, res, next) {
  res.send('Everything works !');
});

export default router;
