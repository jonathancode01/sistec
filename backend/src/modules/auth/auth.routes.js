import { Router } from 'express';
import { login, register } from './auth.controller.js';
import { authMiddleware } from './auth.middleware.js'
import { authorizeRoles } from './role.middleware.js';


const router = Router();

// rotas publicas
router.post('/register', register);
router.post('/login', login)


// fazer as rotas protegidas dos usuarios principais
router.get(
    '/admin',
    authMiddleware,
    authorizeRoles('admin'),
    (req, res) => {
        res.json({ message: 'Área do admin' });
    }
);

router.get(
    '/tecnico',
    authMiddleware,
    authorizeRoles('admin', 'tecnico'),
    (req, res) => {
        res.json({ message: 'Área técnico'});
    }
);

router.get(
    '/usuario',
    authMiddleware,
    authorizeRoles('admin', 'tecnico', 'usuario'),
    (req, res) => {
        res.json({ message: 'Área do usuário'});
    }
);

export default router;