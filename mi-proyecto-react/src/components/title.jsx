import Photo from "../assets/Photo.jpeg"

function Title() {
    return (
        <>
            <header className="title margin">
                <div className="info">
                    <div className="name">
                        <h1>Santiago Aranda</h1>
                        <h2>Software Engineer</h2>
                        <h3>Web Developer</h3>
                        <p>Bogota D.C (Colombia) </p>
                    </div>
                    <div className="buttons">
                        <a className="Button primarybutton" target="_blank" href="https://github.com/Saranda123">Github</a>
                        <a className="Button secondarybutton" target="_blank" href="https://drive.google.com/file/d/1uhIJuAQgpUvtcSWu5UqGZkANuBGML2Fj/view?usp=sharing">cv</a>
                    </div> 
                    {/* buttons*/}
                </div>
                {/* info*/}
                <div className="image">
                    <img src={Photo} alt="mi_perfil" />
                </div>
                {/* image*/}
                
            </header> 
            {/* title*/}
        </>
    )
}

export default Title