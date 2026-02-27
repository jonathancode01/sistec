const users = [];

// Esta classe UserRepository fornece métodos para buscar usuários por e-mail no array 'users'.
export class UserRepository {
    findbyEmail(email) {
        return users.find(u => u.email === email);
    }

    findbyId(id) {
        return users.find(u => u.id === Number(id));
    }

    findAll() {
        return users;
    }

    create(user){
        users.push(user);
        return user;
    }

    update(id, data) {
        const user = this.findbyId(id);
        if(!user) return null;

        Object.assign(user, data);
        return user;
    }

    delete(id){
        const index = users.findIndex(u => u.id === Number(id));
        if(index === -1) return false;

        users.splice(index, 1);
        return true;
    }
}