import Link from 'next/link';
import { Container, Content } from './styles'
export function Header() {
    return (
        <Container>
            <Content>
                <nav>
                    <Link href="/">
                        <a >
                            <img src="/images/headerIcon.png" alt="headerIcon" />
                        </a>
                    </Link>
                </nav>
                <nav>
                    <Link href="/assets">
                        <a>Ativos</a>

                    </Link>

                    <Link href="/users">
                        <a>Usuários</a>

                    </Link>
                    <Link href="/units">
                        <a >Unidades</a>

                    </Link>
                    <Link href="/companies">
                        <a>Empresas</a>

                    </Link>

                </nav>

            </Content>
        </Container>
    );
}