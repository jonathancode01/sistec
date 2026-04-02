# Porto's Bar — Sistema de Gestão de Eventos

Sistema web para automatizar a **contratação, orçamento, contrato, pagamento e organização de eventos de open bar**.

---

## Visão Geral

O Porto's Bar é um sistema desenvolvido para centralizar e automatizar todo o fluxo de um evento de open bar: desde o primeiro contato com o cliente, passando pela geração de orçamento e contrato, até o controle de pagamento e organização do evento.

---

## Stack

### Backend
- **Node.js** + **Express 5**
- **Prisma ORM** + **PostgreSQL**
- **JWT** para autenticação
- **bcrypt** para hash de senhas
- Arquitetura modular: `controller / service / repository`

### Frontend
- **React 19** + **Vite**
- **TailwindCSS v4**
- **shadcn/ui** + **Radix UI**
- **React Router v7**
- **Framer Motion** + **tsParticles**

---

## Funcionalidades Previstas

- **Orçamento** — geração de proposta com valores, pacotes e personalização do evento
- **Contrato** — criação e gestão de contratos por evento
- **Pagamento** — controle de parcelas, status e confirmações
- **Organização do Evento** — agenda, checklist e responsáveis
- **Autenticação** — acesso diferenciado por perfil (admin / usuário)

---

## Estrutura do Projeto

```
sistec-main/
├── docker-compose.yml
├── backend/
│   ├── prisma/
│   │   ├── schema.prisma
│   │   └── migrations/
│   └── src/
│       ├── app.js
│       ├── server.js
│       └── modules/
│           ├── auth/        # login, register, JWT middleware
│           └── users/       # CRUD de usuários (admin only)
└── frontend/
    └── src/
        ├── pages/           # Index, Login, Dashboard
        ├── components/
        │   ├── landing/     # HeroSection, Navbar, PlansSection...
        │   └── ui/          # Componentes shadcn/ui
        ├── auth/            # AuthContext + AuthProvider
        ├── services/        # auth.service.js
        └── routes/          # AppRoutes + ProtectedRoute
```

---

## Rodando o Projeto

### Pré-requisitos
- Docker e Docker Compose instalados

### Subindo os serviços

```bash
docker compose up --build
```

| Serviço       | URL                     |
|---------------|-------------------------|
| Frontend      | http://localhost:5173   |
| API           | http://localhost:3000   |
| Prisma Studio | http://localhost:5555   |
| PostgreSQL    | localhost:5432          |

### Variáveis de ambiente

```bash
cp backend/.env.example backend/.env
```

---

## Autenticação

| Método | Rota           | Descrição         | Acesso  |
|--------|----------------|-------------------|---------|
| POST   | /auth/register | Cadastrar usuário | Público |
| POST   | /auth/login    | Fazer login       | Público |
| GET    | /users         | Listar usuários   | Admin   |
| POST   | /users         | Criar usuário     | Admin   |
| PUT    | /users/:id     | Atualizar usuário | Admin   |
| DELETE | /users/:id     | Remover usuário   | Admin   |

---

## Banco de Dados

### Modelo atual

```prisma
model User {
  id        Int      @id @default(autoincrement())
  name      String
  email     String   @unique
  password  String
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}
```

### Executar migrations

```bash
cd backend
npx prisma migrate dev
```

---

## Scripts

### Backend

```bash
npm run dev    # Desenvolvimento com hot reload
npm start      # Produção
```

### Frontend

```bash
npm run dev    # Servidor de desenvolvimento
npm run build  # Build de produção
npm run lint   # Verificar código
```

---

## Licença

Projeto privado — Porto's Bar © 2026
