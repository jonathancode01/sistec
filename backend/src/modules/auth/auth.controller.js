import jwt from 'jsonwebtoken';

import { registerUser, loginUser } from './auth.service.js';

export async function register(req, res) {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({
        message: 'Todos os campos são obrigatórios'
      });
    }

    const user = await registerUser({ name, email, password });

    return res.status(201).json({
      message: 'Usuário criado com sucesso',
      user
    });

  } catch (error) {
    return res.status(400).json({
      message: error.message
    });
  }
}

// login do usuario
export async function login(req, res){
  try{
    // console.log('Request body:', req.body);
    const{ email, password } = req.body;

    if(!email || !password){
      return res.status(400).json({ message: 'Email e senha são orbigatórios' });
    }

    const user = await loginUser({ email, password});

        // configurar o jwt pra gerar o token
        const token = jwt.sign(
          { id: user.id, email: user.email },
            process.env.JWT_SECRET,
          { expiresIn: process.env.JWT_EXPIRES_IN });

    return res.status(200).json({
      message: 'Login realizado com sucesso',
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email
      }
    });
  } catch(error){
    return res.status(401).json({ message: error.message });
  }
}

