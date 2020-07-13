import { Router } from 'express';

import AuthenticateUserService from '../services/AuthenticateUserService';

const sessionsRouter = Router();

// POST: /sessions
sessionsRouter.post('/', async (request, response) => {
    try {
        const {email, password} = request.body;
        const autheticateUserService = new AuthenticateUserService();

        const {user} = await autheticateUserService.execute({
            email,
            password
        });

        delete user.password;

        return response.json({ user });
    } catch (err) {
        return response.status(400).json({ error: err.message });
    }
});

export default sessionsRouter;
