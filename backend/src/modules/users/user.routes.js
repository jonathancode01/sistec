import { Router } from 'express';
import { authMiddleware } from '../auth/auth.middleware.js';
import { authorizeRoles } from '../auth/role.middleware.js';
import { UserController } from './user.controller.js';

const router = Router();
const controller = new UserController();

router.use(authMiddleware);
router.use(authorizeRoles('admin'));

router.get('/', controller.list);
router.post('/', controller.create);
router.put('/:id', controller.update);
router.delete('/:id', controller.delete);

export default router;