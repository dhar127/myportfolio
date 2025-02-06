import React, { useRef, useState } from 'react' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faHtml5, faCss3, faJs, faPython, faJava } from '@fortawesome/free-brands-svg-icons';
import CustomHook from './CustomHook';
function Skills() {
  const divs = useRef([]);
  const scrollTab = useRef();
  CustomHook(scrollTab, divs);
const [listSkills] = useState([
    {
        name: 'Python',
        des:'py.png'  ,  icon: faPython},
        {
            name: 'JAVA',
            des:'java.png',
                     icon: faJava
          },
  { name: 'HTML',
    des: 'html.png',    icon: faHtml5
  },
  {
    name: 'CSS',
    des: 'css.png',   icon: faCss3
  },
  {
    name: 'Javascript',
    des: 'js.png',  icon: faJs},
  {
    name: 'ReactJs',
    des: 'React.png' ,  icon: faReact
  },
  
  

]);
  return (
    <section className='skills' ref={scrollTab}>
       <div className="title" ref={(el) => el && divs.current.push(el)}>
        Skills & Certifications
       </div>
       <div className="des" ref={(el) => el && divs.current.push(el)}>
        {/* 20 */}
              </div>
       <div className="list">
        {
          listSkills.map((value, key) => (
            <div className={'item '} key={key} ref={(el) => el && divs.current.push(el)}>
              <FontAwesomeIcon icon={value.icon} />
              <h3>{ value.name }</h3>
              <img src={value.des} height="200px" width="315px" alt=""></img>
            </div>
          ))
        }
      </div>
      <br></br>
      <div align="center">
        <h1>Some of my notable Achievements include</h1>
        
        <li>NPTEL JAVA-EliteSilver </li><br></br>
        <li>Solved 3000+ problems in Skillrack</li><br></br>
        <li>Solved 500+ problems in LeetCode and GeeksforGeeks</li><br></br>
        <li>Invente'23 SSN paper presentation-3rd prize</li><br></br>
        <li>One among the top scorers in CSE department</li><br></br>
        
        </div>
    </section>
  )
}

export default Skills
