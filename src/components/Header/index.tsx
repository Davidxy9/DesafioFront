import { Container, Content } from './styles'
export function Header() {
    return (
        <Container>
            <Content>
                <img src="/images/miau.png" alt="Soumteste" />
                <nav>
                    <a href="/products">Ativos</a>
                    <a>Usuários</a>
                    <a>Unidades</a>
                    <a>Empresas</a>

                </nav>

            </Content>
        </Container>
    );
}