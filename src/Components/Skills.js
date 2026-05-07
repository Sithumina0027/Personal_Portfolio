import { Container, Row, Col } from "react-bootstrap";
import "./Skills.css";
import {
  FaReact,
  FaJava,
  FaJsSquare,
  FaHtml5,
  FaPhp,
  FaPython,
  FaFigma,
  FaShieldAlt,
  FaChartLine,
  FaCloud,
  FaFire,
  FaDatabase,
  FaMobile,
  FaCode,
  FaLeaf,
  FaNetworkWired
} from "react-icons/fa";

export const Skills = () => {
  const skillsData = [
    { name: "React ", icon: FaReact },
    { name: "Java"  , icon: FaJava },
    { name: "JavaScript", icon: FaJsSquare },
    { name: "HTML & CSS", icon: FaHtml5 },
    { name: "PHP",  icon: FaPhp },
    { name: "Python", icon: FaPython },
    { name: "Figma Design", icon: FaFigma },
    { name: "QA Testing", icon: FaShieldAlt },
    { name: "Business Analysis", icon: FaChartLine },
    { name: "Cloud & AI Basics", icon: FaCloud },
    { name: "Firebase", icon: FaFire },
    { name: "MySQL", icon: FaDatabase },
    { name: "Flutter", icon: FaMobile },
    { name: "C# ", icon: FaCode },
    { name: "Kotlin", icon: FaLeaf },
    { name: "Network", icon: FaNetworkWired }
  ];

  return (
    <section className="skills" id="skills">
      <Container>
        <Row>
          <Col xs={12}>
            <div className="section-header">
              <h2 className="section-title">Skills</h2>
              <p className="section-subtitle">Technologies and tools I work with</p>
            </div>
          </Col>
        </Row>

        <Row className="skills-grid">
          {skillsData.map((skill, idx) => {
            const IconComponent = skill.icon;

            return (
              <Col lg={3} md={4} sm={6} xs={12} key={idx} className="skill-item">
                <div className="skill-card">
                  <div className="skill-header">
                    <IconComponent className="skill-icon" />
                  </div>
                  <h5>{skill.name}</h5>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
};

export default Skills;
