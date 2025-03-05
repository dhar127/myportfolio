import React, { useRef, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faHtml5,
  faCss3,
  faJs,
  faPython,
  faJava,
} from "@fortawesome/free-brands-svg-icons";
import CustomHook from "./CustomHook";

function Skills() {
  const divs = useRef([]);
  const scrollTab = useRef();
  CustomHook(scrollTab, divs);

  const [skills] = useState([
    { name: "HTML", level: 90, icon: faHtml5 },
    { name: "CSS", level: 85, icon: faCss3 },
    { name: "JavaScript", level: 80, icon: faJs },
    { name: "React.js", level: 75, icon: faReact },
    { name: "Python", level: 85, icon: faPython },
    { name: "Java", level: 80, icon: faJava },
  ]);

  useEffect(() => {
    const bars = document.querySelectorAll(".progress");
    bars.forEach((bar) => {
      bar.style.width = "0%";
      setTimeout(() => {
        bar.style.width = bar.dataset.level + "%";
      }, 300);
    });
  }, []);

  return (
    <section className="skills" ref={scrollTab}>
      <h2 className="title">Technical Skills</h2>
      <p className="des">My proficiency in various technologies:</p>

      <div className="skills-grid">
        {skills.map((skill, key) => (
          <div
            className="skill-item"
            key={key}
            ref={(el) => el && divs.current.push(el)}
          >
            {skill.icon ? (
              <FontAwesomeIcon icon={skill.icon} className="skill-icon" />
            ) : (
              <img src={skill.des} className="skill-icon" alt={skill.name} />
            )}
            <h3>{skill.name}</h3>
            <div className="progress-bar">
              <div className="progress" data-level={skill.level}></div>
            </div>
          </div>
        ))}
      </div>

      <div className="achievements">
        <h1>Some of my notable achievements include:</h1>
        <ul>
          <li>Solved 4500+ problems on Skillrack, LeetCode, and GeeksforGeeks</li>
          <li>Invente'23 SSN Paper Presentation - 3rd Prize</li>
          <li>She Codes August Edition Winner</li>
          <li>Top 10 among 80+ teams in Techdivathon Hackathon</li>
          <li className="highlight">
            Cleared Oracle Java Certification Exam
            <br />
            <img
              src="/oracle.png"
              alt="Oracle Java Certification"
              className="certificate-image"
            />
          </li>
        </ul>
      </div>

      <style>
        {`
          .skills {
            text-align: center;
            padding: 50px 20px;
            background: linear-gradient(135deg, rgb(43, 0, 255), #da1b60);
            color: #fff;
            border-radius: 12px;
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
          }
          .title {
            font-size: 2.2rem;
            font-weight: bold;
            margin-bottom: 15px;
            text-transform: uppercase;
            text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
          }
          .des {
            font-size: 1.2rem;
            margin-bottom: 30px;
            color: #eee;
          }
          .skills-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 20px;
            justify-content: center;
            max-width: 1000px;
            margin: 0 auto;
          }
          .skill-item {
            background: rgba(255, 255, 255, 0.1);
            padding: 18px;
            border-radius: 10px;
            transition: transform 0.4s ease-in-out, box-shadow 0.4s ease-in-out;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
            backdrop-filter: blur(10px);
            position: relative;
            overflow: hidden;
          }
          .skill-item:hover {
            transform: scale(1.05);
            box-shadow: 0 6px 15px rgba(0, 0, 0, 0.3);
          }
          .achievements {
            margin-top: 40px;
            background: rgba(255, 255, 255, 0.15);
            padding: 25px;
            border-radius: 12px;
            text-align: center;
            color: #fff;
            animation: fadeIn 1.5s ease-in-out;
          }
          .achievements h1 {
            font-size: 2rem;
            margin-bottom: 15px;
            text-transform: uppercase;
          }
          .achievements ul {
            list-style: none;
            padding: 0;
          }
          .achievements li {
            font-size: 1.2rem;
            margin-bottom: 10px;
            position: relative;
            padding-left: 30px;
            opacity: 0;
            animation: slideIn 0.5s forwards;
          }
          .achievements li::before {
            content: '⭐';
            position: absolute;
            left: 0;
            top: 0;
            font-size: 1.5rem;
          }
          .achievements .highlight {
            color:rgb(220, 213, 14);
            font-weight: bold;
            font-size: 1.3rem;
          }
          .certificate-image {
            max-width: 200px;
            margin-top: 10px;
            border: 3px solid #fff;
            border-radius: 8px;
            box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
          }
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes slideIn {
            from { opacity: 0; transform: translateX(-20px); }
            to { opacity: 1; transform: translateX(0); }
          }
          @media (max-width: 800px) {
            .skills-grid {
              grid-template-columns: repeat(2, 1fr);
            }
          }
          @media (max-width: 500px) {
            .skills-grid {
              grid-template-columns: repeat(1, 1fr);
            }
          }
        `}
      </style>
    </section>
  );
}

export default Skills;
