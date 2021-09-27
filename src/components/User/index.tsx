import api from '../../services/api';
import { useState, useEffect } from 'react';
import { Container } from './styles';

interface UsersData {
    id: string;
    email: string;
    unitId: string;
    companyId: string;

}

export function User() {
    const [users, setUsers] = useState<UsersData[]>([])

    useEffect(() => {
        api.get('https://my-json-server.typicode.com/tractian/fake-api/users')
            .then(response => setUsers(response.data))
    }, [])

    console.log(users)

    return (
        <Container>
            <div>
                <h1>
                    Grade de usuários
                </h1>
            </div>
        </Container>
    );
}