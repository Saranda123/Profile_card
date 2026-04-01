import { Link } from "react-router-dom";
import Freelancer from "../assets/freelancer.png";
import FrontEndStore from "../assets/FrontEndStore.png";

function Projects_html() {
    return (
        <div className="projects-container">
    
             <div className="back-button">
                <Link to="/" className="Button primarybutton">⬅ Volver al inicio</Link>
            </div>
    
            <h2>Proyectos en HTML</h2>

            <div className="projects-list">
    
                <div className="project-item">
                    <img src={Freelancer} alt="Freelancer App" className="project-img" />
    
                    <h3>Proyecto 1: freelancer</h3>
    
                    <p>
                        Web application focused on task management and personal organization.
                        Developed with HTML and CSS, it implements responsive design, reusable components,
                        and an intuitive interface to improve user productivity.
                    </p>
    
                    <div className="buttons">
                        <a href="https://github.com/Saranda123/freelancer" className="Button primarybutton">Ver en GitHub</a>
                        <a href="https://sanriagofreelancer.netlify.app/" className="Button secondarybutton">Producción</a>
                    </div>
                </div>
    
                <div className="project-item">
                    <img src={FrontEndStore} alt="Freelancer App" className="project-img" />
    
                    <h3>Proyecto 2: FrontEnd-Store</h3>
    
                    <p>
                        E-commerce website for frontend development tools and resources.
                        Developed with HTML and CSS, it features a clean design, product catalog,
                        and user-friendly navigation for an optimal shopping experience.
                    </p>
    
                    <div className="buttons">
                        <a href="https://github.com/Saranda123/FrontEnd-Store" className="Button primarybutton">Ver en GitHub</a>
                        <a href="https://resonant-sable-5f21bc.netlify.app/" className="Button secondarybutton">Producción</a>
                    </div>
                </div>
    
            </div>
        </div>
    );
}

export default Projects_html;