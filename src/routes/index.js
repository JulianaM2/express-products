/** Express router providing health check
 * @module routes/index
 * @requires express
 */

import { Router } from 'express';

const router = Router();

/**
 * Health check.
 * @name get/health
 * @function
 * @memberof module:routes/index
 * @inner
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware.
 */
router.get('/health', function (req, res) {
  res.send('Everything works !');
});

export default router;
