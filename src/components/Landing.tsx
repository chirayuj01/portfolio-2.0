import { PropsWithChildren, useEffect, useState } from "react";
import "./styles/Landing.css";

const roleVariants = [
  { lead: "Full-Stack", main: "Developer" },
  { lead: "Python", main: "Developer" },
  { lead: "Competitive", main: "Programmer" }
];
const Landing = ({ children }: PropsWithChildren) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % roleVariants.length);
    }, 3000);

    return () => window.clearInterval(interval);
  }, []);

  const currentRole = roleVariants[activeIndex];

  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <h2>Hello! I'm</h2>
            <h1>
              CHIRAYU
              <br />
              <span>JAIN</span>
            </h1>
          </div>
          <div className="landing-info">
            <h3 key={`lead-${activeIndex}`} className="landing-role-lead">
              {currentRole.lead}
            </h3>
            <h2 key={`main-accent-${activeIndex}`} className="landing-info-h2 landing-role-main">
              <div className="landing-h2-1">{currentRole.main}</div>
              <div className="landing-h2-2">{currentRole.main}</div>
            </h2>
            <h2 key={`main-base-${activeIndex}`} className="landing-role-main">
              <div className="landing-h2-info">{currentRole.main}</div>
              <div className="landing-h2-info-1">{currentRole.main}</div>
            </h2>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;
