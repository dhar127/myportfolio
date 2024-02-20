import React, { useState, useRef } from 'react' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPersonCircleQuestion, faEarthAmericas } from '@fortawesome/free-solid-svg-icons';
import CustomHook from './CustomHook';

function Projects() {
const [listProjects] = useState([
  {
    name: 'Movie recommendation System',
    des: 'A movie recommendation application where users can delve into various movies and their trailers,and also based on ratings. ',
    mission:'Easier analysis of different movies based on stats',
    language: 'HTML5, CSS3, React JS, Java,SpringBoot,MongoDB',
    images: '/project1.PNG'
  },
  {
    name: 'Payroll management System',
    des: 'EmployeePayrollSystem where salary of users added updated and deleted and final generation of payslip' ,
   mission: 'Frontend Designing, salary analysis',
    language: 'HTML5, CSS3, React JS, MongoDB',
    images: '/project2.PNG'
  },
  {
    name: 'Weather Application',
    des: 'Efficient application to track the weather status', 
      mission: 'Frond-end designing,using weather API',
    language: 'HTML5, CSS3, React JS',
    images: '/project3.PNG'
  },

]);
const divs = useRef([]);
const scrollTab = useRef();
CustomHook(scrollTab, divs);
  return (
    <section className='projects' ref={scrollTab}>
       <div className="title" ref={(el) => el && divs.current.push(el)}>
        Projects
       </div>
       <div className="des" ref={(el) => el && divs.current.push(el)}>
        {/* 20 */}
               </div>
       <div className="list">
        {
          listProjects.map((value, key) => (
            <div className='item' key={key} ref={(el) => el && divs.current.push(el)}>
              <div className="images">
                <img src={value.images} height="600px" width="500px" alt="" />
              </div>
              <div className="content">
                <h3>{value.name}</h3>
                <div className="des">{value.des}</div>
                <div className="mission">
                    <div><FontAwesomeIcon icon={faPersonCircleQuestion} /></div>
                    <div>
                        <h4>Mission</h4>
                        <div className="des">{value.mission}</div>
                    </div>
                </div>
                <div className="mission">
                    <div><FontAwesomeIcon icon={faEarthAmericas} /></div>
                    <div>
                        <h4>Languages</h4>
                        <div className="des">{value.language}</div>
                    </div>
                </div>
              </div>
            </div>
          ))
        }
       </div>
    </section>
  )
}
export default Projects