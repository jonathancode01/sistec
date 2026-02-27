import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import UserRepository from '../../repositories/user.repository.js';

export async function registerUser({ name, email, password }) {
  const userExists = await UserRepository.findByEmail(email);

  if (userExists) {
    throw new Error('Usuário já existe');
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await UserRepository.create({
    name,
    email,
    password: hashedPassword,
    role: 'usuario' // 👈 importante para RBAC
  });

  return {
    id: user.id,
    name: user.name,
    email: user.email,
    role: user.role
  };
}

export async function loginUser({ email, password }) {
  const user = await UserRepository.findByEmail(email);

  if (!user) {
    throw new Error('Email ou senha inválidos');
  }

  const passwordMatch = await bcrypt.compare(password, user.password);

  if (!passwordMatch) {
    throw new Error('Email ou senha inválidos');
  }

  // 🔐 Geração do JWT
  const token = jwt.sign(
    {
      id: user.id,
      role: user.role
    },
    process.env.JWT_SECRET,
    { expiresIn: '1d' }
  );

  return {
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role
    },
    token
  };
}