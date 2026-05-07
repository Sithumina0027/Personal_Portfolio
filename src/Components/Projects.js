import { Container, Row, Col } from "react-bootstrap";
import "./Projects.css";

export const Projects = () => {
  const projectsData = [
    {
      id: 1,
      title: "Food Ordering & Table Reservation App",
      description: "Android app for seamless food ordering and table reservations",
      tags: ["Java", "Kotlin", "Firebase"],
      link: "https://github.com/Sithumina0027/Food-ordering-Table-reservation-Android-application",
    },
    {
      id: 2,
      title: "Vehicle Service Center Mobile Application",
      description: "Flutter app for managing vehicle service appointments",
      tags: ["Flutter", "Firebase", "Dart"],
      link: "https://github.com/Sithumina0027/Vehicle-service-center-mobile-application",
    },
    {
      id: 3,
      title: "BMI Calculator Web Application",
      description: "Interactive BMI calculator with user-friendly interface",
      tags: ["React", "Node.js", "CSS","SQL"],
      link: "https://github.com/Sithumina0027/BMI_Calculator_web",
    },
    
    {
      id: 4,
      title: "Library Management System",
      description: "A desktop application to manage library resources and user transactions",
      tags: ["C#", "SQL" ],
      link: "https://github.com/Sithumina0027/Library_Management_System",
    },

    {
      id: 5,
      title: "Calculator Mobile Application",
      description: "A simple and efficient calculator app for basic arithmetic operations",
      tags: ["Java"],
      link: "https://github.com/Sithumina0027/Calculator",
    },

    {
      id: 6,
      title: "Online Quiz Application",
      description: "An online platform for creating and taking quizzes with real-time scoring",
      tags: ["Java","Kotlin","Firebase"],
      link: "https://github.com/Sithumina0027/Online-_Quiz-Application",
    },

     {
      id: 7,
      title: "Online Book Store",
      description: "A web application for browsing and purchasing books online",
      tags: ["C#","SQL"],
      link: "https://github.com/Sithumina0027/Online-book-store",
    },
    
     {
      id: 8,
      title: "Distributed Calculator",
      description: "A distributed system for performing calculator operations across multiple nodes",
      tags: ["C#", "ASP.NET"],
      link: "https://github.com/Sithumina0027/Distributed-Calculator",
    },

     {
      id: 9,
      title: "GRPC Client and Server Communication",
      description: "A project demonstrating client and server communication using gRPC",
      tags: ["C#", "gRPC"],
      link: "https://github.com/Sithumina0027/Grpc-Client-and-Server-communication",
    },

     {
      id: 10,
      title: "Simple Client-Server Communication Project",
      description: "A basic implementation of client-server communication using sockets",
      tags: ["C#","ASP.NET Core"],
      link: "https://github.com/Sithumina0027/Simple-Client-server-communication-project",
    },

     {
      id: 11,
      title: "Simple .NET API Project",
      description: "A simple RESTful API built with .NET Core for managing resources",
      tags: ["C#","ASP.NET Core"],
      link: "https://github.com/Sithumina0027/Simple-.NET-api-project",
    },

    {
      id: 12,
      title: "Python Basics",
      description: "A collection of basic Python programs and scripts for learning purposes",
      tags: ["Python"],
      link: "https://github.com/Sithumina0027/Python",
    },

     {
      id: 13,
      title: "Java Basics & OOP Concepts",
      description: "A collection of basic Java programs and scripts for learning purposes",
      tags: ["Java"],
      link: "https://github.com/Sithumina0027/Oop",
    },
  ];

  return (
    <section className="projects" id="projects">
      <Container>
        <Row>
          <Col xs={12}>
            <div className="section-header">
              <h2 className="section-title">Projects</h2>
              <p className="section-subtitle">Showcasing my recent work</p>
            </div>
          </Col>
        </Row>
        <div className="projects-grid">
          {projectsData.map((project) => (
            <article key={project.id} className="project-card">
              <div className="project-header">
                <h3>{project.title}</h3>
              </div>
              <p className="project-description">{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag, idx) => (
                  <span key={idx} className="project-tag">{tag}</span>
                ))}
              </div>
              {project.link ? (
                <a
                  className="project-link"
                  href={project.link}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  View Project →
                </a>
              ) : (
                <span className="project-link project-link--disabled">Coming soon</span>
              )}
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Projects;
