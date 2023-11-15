import express, { Router } from 'express';

const router = Router();

/**
 * Health check.
 *
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware.
 */
router.get('/health', function (req, res, next) {
  res.send('Everything works !');
});

export default router;
