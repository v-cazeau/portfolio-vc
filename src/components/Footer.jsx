import { Github } from "react-bootstrap-icons";
import { Container, Row, Col } from "react-bootstrap"

export default function Footer() {

    const currentYear= new Date().getFullYear(); 
    const gitHubUrl= "https:/github.com/v-cazeau/portfolio-vc"

    return (
        <footer>
            <Container>
                <Row>
                    <Col>
                    <p className="text-center">
                        <a href={gitHubUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="button-effect"> Code in GitHub 
                            <Github size="60" color="red"/>
                            </a> 
                    </p>
                        <br />
                        <p>&copy; {currentYear} Véronie Cazeau
                        <br />
                        </p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}