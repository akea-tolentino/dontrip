import {FaGithubSquare} from "react-icons/fa";
import {FaLinkedin} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "./LinksFooter.css"

export default function LinksFooter() {

    return (
        <div className="links-wrapper">
            <div className="Anthony-links">
                <a className="links" target="_blank" href={"https://github.com/a-wong-8"}>
                    <FaGithubSquare size={50}/>
                </a>
                <a className="links" target="_blank" href={"https://www.linkedin.com/in/anthony-wong-26723813b/"}>
                    <FaLinkedin size={50}/>
                </a>
                <p>Anthony Wong</p>
            </div>
            <div className="Thomas-links">
                <a className="links" target="_blank" href={"https://github.com/thomasly13"}>
                    <FaGithubSquare size={50}/>
                </a>
                <a className="links" target="_blank" href={"https://www.linkedin.com/in/thomas-ly-88559b255/"}>
                    <FaLinkedin size={50}/>
                </a>
                <p>Thomas Ly</p>
            </div>
            <div className="Akea-links">
                <a className="links" target="_blank" href={"https://github.com/akea-tolentino"}>
                    <FaGithubSquare size={50}/>
                </a>
                <a className="links" target="_blank" href={"https://www.linkedin.com/in/jamesbradley-akea-tolentino-813555229/"}>
                    <FaLinkedin size={50}/>
                </a>
                <p>Akea Tolentino</p>
            </div>
            <div className="Rocco-links">
                <a className="links" target="_blank" href={"https://github.com/rlattanz1"}>
                    <FaGithubSquare size={50}/>
                </a>
                <a className="links" target="_blank" href={"https://www.linkedin.com/in/rocco-lattanzio-a8aba5a5/"}>
                    <FaLinkedin size={50}/>
                </a>
                <p>Rocco Lattanzio</p>
            </div>
        </div>
    )
};
