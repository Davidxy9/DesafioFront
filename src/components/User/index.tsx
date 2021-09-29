import api from '../../services/api';
import { useState, useEffect } from 'react';
import { Container, Grid, Content, Form } from './styles';
import {Loading} from '../Loading';

interface UsersData {
    id: string;
    name: string;
    email: string;
    unitId: string;
    companyId: string;

}

export function User() {
    const [users, setUsers] = useState<UsersData[]>([])
    const [userSearch, setUserSearch] = useState('');
    const [isLoad, setIsLoad] = useState(false);


    useEffect(() => {
        api.get('https://my-json-server.typicode.com/tractian/fake-api/users')
            .then(response => setUsers(response.data))
            
        setIsLoad(false);
    }, [])

    const filterUsers = users.filter((user) => user.name.toLowerCase().includes(userSearch))


    return (
        <>
            {isLoad ? <Loading /> :
            <>
            <Container>
                <div>
                    <h1>
                        Grade de usuários
                    </h1>
                    <Form>
                        <input
                            placeholder="Digite o nome"
                            value={userSearch}
                            onChange={(event) => setUserSearch(event.target.value)}
                        />
                    </Form>
                </div>
            </Container>

            <Content>
                <Grid>
                    {filterUsers.map(user => (
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
            }
            
        </>
    );
}