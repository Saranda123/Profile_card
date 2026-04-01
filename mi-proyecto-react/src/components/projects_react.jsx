import { Link } from "react-router-dom";
import Oferksa from "../assets/oferksa.png";
import Notas from "../assets/notas.png";

function Projects_react() {
    return (
        <div className="projects-container">

            <div className="back-button">
                <Link to="/" className="Button primarybutton">⬅ Volver al inicio</Link>
            </div>

            <h2>Proyectos en React</h2>

            <div className="projects-list">

                <div className="project-item">
                    <img src={Oferksa} alt="Oferksa App" className="project-img" />

                    <h3>Proyecto 1: Oferksa</h3>

                    <p>
                        Web application focused on task management and personal organization.
                        Developed with React, it implements state management with hooks, reusable components,
                        and an intuitive interface to improve user productivity.
                    </p>

                    <div className="buttons">
                        <a href="https://github.com/Saranda123/Oferksa" className="Button primarybutton">Ver en GitHub</a>
                        <a href="https://oferksa.netlify.app/" className="Button secondarybutton">Producción</a>
                    </div>
                </div>

                <div className="project-item">
                    <img src={Notas} alt="App de Notas" className="project-img" />

                    <h3>Proyecto 2: App de Notas Inteligente</h3>

                    <p>
                        Application in development oriented towards personal note management.
                        It will allow creating, editing, and organizing notes, with future functionalities
                        such as cloud storage, intelligent search, and categorization.
                    </p>

                    <div className="buttons">
                        <a href="https://github.com/Saranda123/notas" className="Button primarybutton">Ver en GitHub</a>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Projects_react;