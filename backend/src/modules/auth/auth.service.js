import bcrypt from 'bcrypt';

const users = [];

export async function registerUser({ name, email, password }) {
    const userExists = users.find(user => user.email === email);
    if (userExists) {
        throw new Error('Usuário já existe');
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = {
        id: users.length + 1,
        name,
        email,
        password: hashedPassword
    };

    users.push(newUser);

    return {
        id: newUser.id,
        name: newUser.name,
        email: newUser.email
    };
}

// login
export async function loginUser({ email, password }) {
    const user = users.find(user => user.email === email);
    if (!user) {
        throw new Error('Email ou senha invalidos');
    }
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
        throw new Error('Email ou senha invalidos')
    }

    return user;
}