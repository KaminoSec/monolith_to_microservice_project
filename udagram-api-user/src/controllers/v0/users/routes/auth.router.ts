import { Router } from 'express';

// Minimal stub to satisfy the build for Part IV.
// (Auth not required for validating k8s/NLB/reverse-proxy deployment.)
const router = Router();

// Optional ping so the route tree isn't empty
router.get('/status', (_req, res) => res.status(200).send({ status: 'ok' }));

export const AuthRouter = router;
