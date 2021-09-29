import { Container, Content } from './styles'
export function Header() {
    return (
        <Container>
            <Content>
                <nav>
                <a href="/">
                    <img src="/images/headerIcon.png" alt="headerIcon" />
                </a>
                </nav>
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