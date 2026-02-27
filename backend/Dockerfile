# backend/Dockerfile

FROM node:20-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

# Gera o Prisma Client DENTRO do container (Linux)
RUN npx prisma generate

EXPOSE 3000

CMD ["npm", "run", "dev"]