import "../css/Projects.scss"
import placeholder from "../assets/placeholder.svg"

function Project()
{
    return <div class="Project">
        <div class="header">
            <p>Project1</p>
        </div>
        <span>Description</span>
        <img src={placeholder} alt="" />
    </div>;
}

function Projects()
{
    return <div class="Projects-container">
        <Project/>
    </div>;
}

export default Projects