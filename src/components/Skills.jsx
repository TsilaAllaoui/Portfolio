import "../css/Skills.scss";

function Skill({title, progress})
{
    return <div class="bar">
        <div class="label">{title}</div>
        <div class="outer">
            <div  style={{
                width: progress + '%'
            }}>
                <div class="inner" style={{
                    animationDuration: `${progress/30}s`
                }}></div>
            </div>
        </div>
        
    </div>;
}

function Skills() {

    const skills = [
                    ["C++", "95"], 
                    ["Python", "50"], 
                    ["HTML", "60"], 
                    ["CSS SCSS/", "40"],
                    ["JS", "15"],
                    ["VBS", "25"],
                    ["AutoCAD/GstarCAD", "70"],
                   ];

    return <div>
        <ul class="skills">
            {}
            {skills.map((item) => (<Skill title={item[0]} progress={item[1]}/>))}
        </ul>
    </div>;
}

export default Skills;