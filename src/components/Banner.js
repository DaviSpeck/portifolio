import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Me from "../assets/img/Me.png";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Web Developer", "Web Designer", "UI/UX Designer" ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">Bem vinda(a) ao meu portifólio!</span>
                <h1>{`Olá! Eu sou o Davi`} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Fullstack Developer", "Front-end", "Back-end", "Devops Cloud" ]'><span className="wrap">{text}</span></span></h1>
                  <p>Eu tenho 20 anos e sou um amante da tecnologia... Hoje eu sou Desenvolvedor Fullstack, sempre pronto para novos desafios! Acredito que tudo na vida conquistamos com dedicação e por isso tenho procurado ampliar cada vez mais minha curva de aprendizado, meus mais recentes estudos englobam Back-end e Cloud Computing.</p>
                  <button onClick={() =>  window.open("https://wa.me/5561996570568?text=Ol%C3%A1%21+Vim+atrav%C3%A9s+do+seu+portif%C3%B3lio+e+gostaria+de+conversar+com+voc%C3%AA%21")}>Clique para conversar comigo!<ArrowRightCircle size={25} /></button>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn img-responsive" : "img-responsive"}>
                  <img src={Me} alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
