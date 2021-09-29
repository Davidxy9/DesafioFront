import { Container, Content } from './styles'
export function Header() {
    return (
        <Container>
            <Content>
                <a href="/">
                    {/* <img src="/images/miau.png" alt="Soumteste" /> */}
                </a>
                <nav>
                    <a href="/assets">Ativos</a>
                    <a href="/users">Usuários</a>
                    <a href="/units">Unidades</a>
                    <a href="/companies">Empresas</a>

                </nav>

            </Content>
        </Container>
    );
}