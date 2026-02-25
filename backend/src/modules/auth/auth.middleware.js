// src/modules/auth/auth.middleware.js
import jwt, { decode } from 'jsonwebtoken'

export function authMiddleware(req, res, next) {
  const authHeader = req.headers.authorization;

// verifica se o header existe
if (!authHeader){
  return res.status(401).json({
    message: 'Token não fornecido'
  });
}

// esperar token 
const parts = authHeader.split(' ');

if(parts.length !== 2) {
  return res.status(401).json({
    message: 'Token mal formatado'
  });
}

const [schema, token] = parts;

if (!/^Bearer$/i.test(schema)) {
  return res.status(401).json({
    message: 'Token mal fornecido'
  });
}

// validar o token
try {
  const decoded = jwt.verify(token, process.env.JWT_SECRET);

  // salva dados do usuario na requisição
  req.user = decode;

  return next();
} catch (error) {
  return res.status(401).json({
    message: 'Token inválido ou expirado'
  });
}

}

module.exports = authMiddleware;