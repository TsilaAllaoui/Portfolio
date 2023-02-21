import "../css/Projects.scss"
import placeholder from "../assets/placeholder.svg"

const projects = [
    {
        name: "GasyBoy Emulator",
        desc: "A Gameboy Emulator written in C++ and use SDL2 for the graphics and GUI"
    }
]

function Project(props)
{
    return <div className="card-container">
        <div className="card">
            <div className="image">
                <img src={placeholder} alt="" />
            </div>
            <div className="card-details">
                <div className="name">{props.name}</div>
                <div className="desc">
                    <p>{props.desc}</p>
                </div>
                <div className="goto">Go to project</div>
            </div>
        </div>
    </div>;
}

function Projects()
{
    return <div class="Projects-container">
        {projects.map((item, index) => <Project name={item.name} desc={item.desc}/>)}
    </div>;
}

export default Projects