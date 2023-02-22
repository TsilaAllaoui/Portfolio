import "../css/Contact.scss";
import {AiFillFacebook, AiFillGithub, AiFillLinkedin} from "react-icons/ai"

function Contact(){
    return <div className="contact">
        <div className="social">
            <AiFillGithub id="github"/>
            <div className="linker">
                <div className="dot"></div>
                <div className="line"></div>
                <div className="dot"></div>
            </div>
            <AiFillFacebook id="fb"/>
            <div className="linker-right">
                <div className="dot"></div>
                <div className="line"></div>
                <div className="dot"></div>
            </div>
            <AiFillLinkedin id="linkedin"/>
        </div>
        <div className="copyright">
            <p>TsilaAlloui - 2023</p>
        </div>
    </div>;
}

export default Contact;