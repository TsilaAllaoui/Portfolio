import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";
import "../styles/Contact.scss";
import { ImPhone } from "react-icons/im";
import { MdEmail } from "react-icons/md";
import { useRef, useState } from "react";

function Contact() {
  const sendMail = () => {
    const nameValue = name.current!.value;
    const emailValue = email.current!.value;
    const message = textarea.current!.value;

    console.log(nameValue + " : " + emailValue + " : " + message);
  };

  const [nameValue, setNameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [message, setMessage] = useState("");

  const name = useRef<HTMLInputElement>(null);
  const email = useRef<HTMLInputElement>(null);
  const textarea = useRef<HTMLTextAreaElement>(null);

  const minimize = (event: React.FocusEvent<HTMLInputElement>) => {
    const element = event.currentTarget.parentElement as HTMLLabelElement;
    element.style.fontSize = "0.75rem";
  };

  const normalize = (event: React.FocusEvent<HTMLInputElement>) => {
    const element = event.currentTarget.parentElement as HTMLLabelElement;
    element.style.fontSize = "1rem";
  };

  const resetFields = () => {
    name.current!.value = "";
    email.current!.value = "";
    textarea.current!.value = "";
  };

  return (
    <div id="contact">
      <div id="contact-header">
        <h1>Contact Me</h1>
        <h3>
          Any question or remarks? Or just wanna chat? Write me or contact me 👋
        </h3>
      </div>
      <div id="contact-body">
        <div id="infos">
          <div id="first-circle"></div>
          <div id="second-circle"></div>
          <p id="info-header">Informations</p>
          <div id="coordinates">
            <div id="number">
              <ImPhone className="info-icon" />
              <p>+261327728820</p>
            </div>
            <div id="email">
              <MdEmail className="info-icon" />
              <p>tsila.allaoui@gmail.com</p>
            </div>
          </div>
          <div id="social-icons">
            <div className="icon">
              <a href="https://www.facebook.com/tsilavomaminiaina.rasoloallaoui">
                <FaFacebookF />
              </a>
            </div>
            <div className="icon">
              <a href="https://www.linkedin.com/in/rasolo-allaoui-tsilavo-maminiaina-manatombo-948634201">
                <FaLinkedinIn />
              </a>
            </div>
            <div className="icon">
              <a href="https://github.com/TsilaAllaoui">
                <FaGithub />
              </a>
            </div>
          </div>
        </div>
        <div id="message">
          <div id="inputs">
            <div className="input">
              <label>Name</label>
              <input
                type="text"
                ref={name}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setNameValue(e.currentTarget.value)
                }
                onFocus={minimize}
                onBlur={normalize}
              />
            </div>
            <div className="input">
              <label>Email</label>
              <input
                type="email"
                ref={email}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setEmailValue(e.currentTarget.value)
                }
                onFocus={minimize}
                onBlur={normalize}
              />
            </div>
          </div>
          <div id="text-area">
            <p>Message</p>
            <textarea
              id="content"
              ref={textarea}
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                setMessage(e.currentTarget.value)
              }
            ></textarea>
          </div>
          <div id="buttons">
            {nameValue != "" && emailValue != "" && message != "" ? (
              <a
                href={`mailto:tsila.allaoui@gmail.com`}
                data-address={emailValue}
                data-domain={nameValue}
                data-subject="Contact from your portofolio"
                data-body={message}
              >
                <button id="send-button" style={{ backgroundColor: "#740824" }}>
                  Send
                </button>
              </a>
            ) : (
              <button disabled={true} id="send-button">
                Send
              </button>
            )}
            <button onClick={resetFields}>Reset</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
