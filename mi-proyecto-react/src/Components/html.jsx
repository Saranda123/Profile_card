import { Link } from 'react-router-dom';

function Html() {
    return(
        <article className="project border">
            <h3>HTML + CSS</h3>
            <Link className="Button primarybutton" to="/html">Ver mas</Link>
        </article>
    )
}

export default Html;