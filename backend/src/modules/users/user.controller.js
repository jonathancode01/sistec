import { UserService } from './user.service.js';

export class UserController {
    constructor(){
        this.userService = new UserService();
    }

    list = (req, res) => {
        const users = this.userService.listUsers();
        return res.json(users);
    };

    create = (req, res) => {
        const user = this.userService.createUser(req.body);
        return res.status(201).json(user);
    };

    update = (req, res) => {
        const user = this.userService.updateUser(req.params.id, req.body);
        return res.json(user);
    };

    delete = (req, res) => {
        this.userService.deleteUser(req.params.id);
        return res.status(204).send();
    }
}