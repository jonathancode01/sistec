import bcrypt from 'bcrypt';
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
    password: hashedPassword
  });

  return {
    id: user.id,
    name: user.name,
    email: user.email
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

  return user;
}