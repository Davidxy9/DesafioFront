import api from '../../services/api';
import { useState, useEffect } from 'react';
import { Container, Grid, Content  } from './styles';

interface UsersData {
    id: string;
    name: string;
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
        <>
        <Container>
            <div>
                <h1>
                    Grade de usuários
                </h1>
            </div>
        </Container>

        <Content>
        <Grid>
            {users.map(user => (
                <div key={user.id}>
                <img 
                    src="/images/userImage.jpg"
                    alt="image-user" 
                 />
                 <strong>{user.name}</strong>
                 <p>Email: {user.email}</p>
                 <p>NºEmpresa: {user.companyId}</p>
                 <p>Nºunidade: {user.unitId}</p>

            </div>
            ))}
            
        </Grid> 
        </Content>
        </>
    );
}