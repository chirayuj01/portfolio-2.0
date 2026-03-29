import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Connect</h4>
            <p>
              <a
                href="https://www.linkedin.com/in/chirayu-jain-597070257/"
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
              >
                LinkedIn — chirayu-jain
              </a>
            </p>
            <h4>Education</h4>
            <p>
              B.Tech ECE, IIIT Kota — 2022–Present (CGPA: 8.1)
            </p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://github.com/chirayuj01"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              GitHub <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/chirayu-jain-597070257/"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              LinkedIn <MdArrowOutward />
            </a>
          </div>
        </div>
        <div className="contact-footer">
          <p>Designed and Developed by <span>Chirayu Jain</span> <MdCopyright /> 2026</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
