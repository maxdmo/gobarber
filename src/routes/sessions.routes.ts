import { Router } from 'express';

import AuthenticateUserService from '../services/AuthenticateUserService';

const sessionsRouter = Router();

// POST: /sessions
sessionsRouter.post('/', async (request, response) => {
    const { email, password } = request.body;
    const autheticateUserService = new AuthenticateUserService();

    const { user, token } = await autheticateUserService.execute({
        email,
        password,
    });

    delete user.password;

    return response.json({ user, token });
});

export default sessionsRouter;
