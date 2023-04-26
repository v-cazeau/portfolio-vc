import { Container, Row, Col } from "react-bootstrap";

export default function Skill() {

    return (
        <>
            <section>
                <Container>
                    <Row>
                        <Col className="text-center">
                            <h2>Skills That Pay the Bills</h2>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <ul>
                                <li>React</li>
                                <li>JavaScript</li>
                                <li>CSS</li>
                                <li>MongoDB</li>
                                <li>MySQL</li>
                                <li>Firebase</li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}