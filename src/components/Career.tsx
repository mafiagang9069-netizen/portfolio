import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          Education <span>&</span>
          <br /> Certifications
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Bachelor of Technology (B.Tech)</h4>
                <h5>Computer Science Engineering</h5>
              </div>
              <h3>2027</h3>
            </div>
            <p>
              Expected Graduation: 2027. Gaining deep knowledge in Computer Science, 
              focusing on Cybersecurity and Software Engineering fundamentals.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Ethical Hacking</h4>
                <h5>Certification</h5>
              </div>
              <h3>CERT</h3>
            </div>
            <p>
              Certified in Ethical Hacking, gaining hands-on experience in identifying
              vulnerabilities and securing systems.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Networking & Linux Admin</h4>
                <h5>Certifications</h5>
              </div>
              <h3>CERT</h3>
            </div>
            <p>
              Completed certifications in Networking Fundamentals and Linux Administration, 
              mastering server configuration and network security basics.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
