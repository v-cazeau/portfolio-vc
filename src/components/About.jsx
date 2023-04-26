import { Container, Row, Col } from "react-bootstrap";

export default function About () {
    return(
        <section>
            <Container className="bg-danger"> 
                <Row>
                    <Col> 
                        <img src= "https://picsum.photos/200/300"
                            alt="profile pict" />
                    </Col>

                    <Col>
                        <h1>Hi I am Véronie </h1>
                        <p>I am a software engineer in Boca Raton, Florida. </p>
                        <p>Contact me: veronie.cazeau@gmail.com</p>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}