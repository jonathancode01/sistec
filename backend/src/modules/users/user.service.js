import bcrypt from 'bcrypt';
import { UserRepository } from './user.repository.js';
import { AppError } from '../../shared/error/AppError.js';


export class UserService {
    constructor() {
        this.UserRepository = new UserRepository();
    }

    createUser({ name, email, password, role }) {
        const exists = this.UserRepository.findbyEmail(email);
        if(exists){
            throw new AppError('Usuário já existe', 400);
        }

        const hashedPassword = bcrypt.hashSync(password, 10);

        const user = {
            id: Date.now(),
            name,
            email,
            password: hashedPassword,
            role
        };

        this.UserRepository.create(user);

        const { password: _, ...safeUser } = user;
        return safeUser;
    }

    listUsers() {
        return this.UserRepository.findAll().map(({ password, ...user }) => user);
    }

    updateUser(id, data) {
        const user = this.UserRepository.update(id, data);
        if (!user) {
            throw new AppError('Usuário não encontrado', 404);
        }
        return false
    }

    deleteUser(id) {
        const deleted = this.UserRepository.delete(id);
        if (!deleted) {
            throw new AppError('Usuário não encontrado', 404);
        }
    }
}