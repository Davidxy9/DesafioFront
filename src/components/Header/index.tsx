import { Container, Content } from './styles'
export function Header() {
    return (
        <Container>
            <Content>
                <img src="/images/logo.png" alt="Soumteste" />
                <nav>
                    <a>Home</a>
                    <a>Posts</a>
                </nav>

            </Content>
        </Container>
    );
}