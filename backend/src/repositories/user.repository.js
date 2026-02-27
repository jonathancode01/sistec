import prisma from '../prisma/client.js';

class UserRepository {
  async findByEmail(email) {
    return prisma.user.findUnique({
      where: { email }
    });
  }

  async create({ name, email, password }) {
    return prisma.user.create({
      data: {
        name,
        email,
        password
      }
    });
  }

  async findById(id) {
    return prisma.user.findUnique({
      where: { id }
    });
  }
}

export default new UserRepository();