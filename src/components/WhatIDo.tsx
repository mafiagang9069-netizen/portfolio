import { useState } from "react";
import "./styles/WhatIDo.css";

const WhatIDo = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const sections = [
    {
      title: "CYBERSECURITY",
      subtitle: "Securing Digital Assets",
      description: "Passionate about Ethical Hacking and Network Security. Experienced in identifying vulnerabilities and implementing security measures to protect infrastructures. I specialize in vulnerability assessment, penetration testing basics, and web security testing. My goal is to stay ahead of evolving threats by continuously learning modern defensive and offensive techniques to protect digital ecosystems.",
      skills: ["Ethical Hacking", "Vulnerability Assessment", "Penetration Testing", "Web Security", "Kali Linux", "Nmap", "Metasploit", "Wireshark"]
    },
    {
      title: "FULL STACK",
      subtitle: "Secure Web Development",
      description: "Building scalable and secure full-stack applications using modern technologies like React, Node.js, and MongoDB. I focus on developing robust REST APIs, secure authentication systems, and responsive user interfaces. I enjoy the challenge of bridging the gap between high-performance backend logic and intuitive frontend experiences while ensuring end-to-end data security and scalability.",
      skills: ["React.js", "Node.js", "Express.js", "MongoDB", "JavaScript", "REST APIs", "Python", "C / C++"]
    },
    {
      title: "NETWORKING",
      subtitle: "Network & Server Admin",
      description: "Hands-on experience with Linux server administration, TCP/IP protocols, and firewall configurations for secure network environments. I am proficient in DNS management, port scanning, and packet analysis using tools like Wireshark and Nmap. I also leverage Bash scripting to automate server tasks and manage user permissions effectively across complex network infrastructures.",
      skills: ["Linux", "TCP/IP", "DNS", "SSH", "Firewalls", "Packet Analysis", "Bash Scripting", "Server Management"]
    }
  ];

  return (
    <div className="whatIDO">
      <div className="what-box">
        <h2 className="title">
          W<span className="hat-h2">HAT</span>
          <div>
            I<span className="do-h2"> DO</span>
          </div>
        </h2>
      </div>
      <div className="what-box">
        <div className="what-box-in">
          <div className="what-border2">
            <svg width="100%">
              <line x1="0" y1="0" x2="0" y2="100%" stroke="white" strokeWidth="2" strokeDasharray="7,7" />
              <line x1="100%" y1="0" x2="100%" y2="100%" stroke="white" strokeWidth="2" strokeDasharray="7,7" />
            </svg>
          </div>
          {sections.map((section, index) => (
            <div
              key={index}
              className={`what-content ${activeIndex === index ? "what-content-active" : ""} ${
                activeIndex !== null && activeIndex !== index ? "what-sibling" : "what-noTouch"
              }`}
              onClick={() => handleClick(index)}
            >
              <div className="what-border1">
                <svg height="100%">
                  <line x1="0" y1={index === 0 ? "0" : "100%"} x2="100%" y2={index === 0 ? "0" : "100%"} stroke="white" strokeWidth="2" strokeDasharray="6,6" />
                  {index === 0 && (
                    <line x1="0" y1="100%" x2="100%" y2="100%" stroke="white" strokeWidth="2" strokeDasharray="6,6" />
                  )}
                </svg>
              </div>
              <div className="what-corner"></div>
              <div className="what-content-in">
                <h3>{section.title}</h3>
                <h4>{section.subtitle}</h4>
                <p>{section.description}</p>
                <h5>Skillset & tools</h5>
                <div className="what-content-flex">
                  {section.skills.map((skill, sIndex) => (
                    <div key={sIndex} className="what-tags">{skill}</div>
                  ))}
                </div>
                <div className="what-arrow"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhatIDo;
