import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Technology Intern</h4>
                <h5>NAV India</h5>
              </div>
              <h3>JAN 2026 - NOW</h3>
            </div>
            <p>
              Built and optimized AI/ML pipelines for investor verification. Reduced document processing time from 30 minutes to 3 minutes, improving extraction speed by 35% and cutting report latency by 40%.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>SDE Intern</h4>
                <h5>Vestbox</h5>
              </div>
              <h3>APR 2025 – MAY 2025</h3>
            </div>
            <p>
              Developed the Groceazy Flutter app using MVVM and SOLID principles, delivering over 10 modules for a comprehensive grocery and order management system with secure, role-based authentication.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech ECE</h4>
                <h5>IIIT Kota</h5>
              </div>
              <h3>2022-26</h3>
            </div>
            <p>
              Pursuing a Bachelor of Technology in Electronics and Communication Engineering with a current CGPA of 8.1.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
