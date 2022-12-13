import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import thiagosPrime from "../assets/img/thiagos-prime.png";
import vinumEventos from "../assets/img/vinum-eventos.png";
import netflixClone from "../assets/img/netflix-clone.png";
import imgOVNIS from "../assets/img/img-OVNIS.png";
import imgAccelerometer from "../assets/img/img-accelerometer.png";
import cyberTech from "../assets/img/cyber-tech.png";
import kmsCriptografia from "../assets/img/cyber-tech.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projectsFullstack = [
    {
      title: "Thiago's Prime",
      description: "Design & Development",
      imgUrl: thiagosPrime,
      link: "https://thiagosprime.com.br/"
    },
    {
      title: "Vinum Eventos",
      description: "Design & Development",
      imgUrl: vinumEventos,
      link: "https://www.vinumeventos.com.br/"
    }
  ];

  const projectsFrontend = [
    {
      title: "Clone Netflix",
      description: "Design & Development",
      imgUrl: netflixClone,
      link: "https://netflix-clone-davispeck.vercel.app/"
    },
    {
      title: "CyberTech",
      description: "Design & Development",
      imgUrl: cyberTech,
      link: "https://cybertech-davispeck.vercel.app/"
    },
  ];

  const projectsBackend = [
    {
      title: "Criptografia KMS",
      description: "Study & Development",
      imgUrl: kmsCriptografia,
      link: "https://github.com/DaviSpeck/encrypt-with-kms-in-golang"
    },
  ];

  const projectsMobile = [
  ];

  const projectsDevops = [
  ];
  
  const projectsDataScience = [
    {
      title: "UFO Appearances",
      description: "Study & Development",
      imgUrl: imgOVNIS,
      link: "https://github.com/DaviSpeck/data-science-OVNIS"
    },
    {
      title: "Accelerometer to actions",
      description: "Study & Development",
      imgUrl: imgAccelerometer,
      link: "https://github.com/DaviSpeck/data-science-accelerometer"
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projetos</h2>
                <p>Aqui estão os meus projetos mais significativos. Essa seção será atualizada recorrentemente, por isso, fiquem atentos!</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-3 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Fullstack</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Front-end</Nav.Link>
                    </Nav.Item>
                  <Nav.Item>
                      <Nav.Link eventKey="third">Back-end</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="fourth">Mobile</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="fifth">Devops</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="sixth">Data Science</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projectsFullstack.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <Row>
                        {
                          projectsFrontend.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <Row>
                        {
                          projectsBackend.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="fourth">
                      <Row>
                        {
                          projectsMobile.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="fifth">
                    <Row>
                        {
                          projectsDevops.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="sixth">
                    <Row>
                        {
                          projectsDataScience.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
