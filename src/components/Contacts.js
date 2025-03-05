import React, { useState, useRef} from 'react';
import CustomHook from './CustomHook'; // Import the custom hook with the new name
import './Contacts.css';
function Contacts() {
  const [listContacts] = useState([
    
    {
      title: 'whatsapp.png',
      value: 'https://wa.me/7305841274?text=Hello Dharani!!' // Add WhatsApp contact number
    },
    {
      title: 'gmail.png',
      value: 'dharaniponnivalavan@gmail.com'
    },
    {
      title: 'instagram.png',
      value: 'https://www.instagram.com/d_p12.7/'
    },
    {
      title: 'linkedin.png',
      value: 'https://www.linkedin.com/in/dharani-p-57327b259/' // Add your LinkedIn profile link
    },
    {
      title: 'github.png',
      value: 'https://github.com/dhar127' // Add your GitHub profile link
    }
  ]);
  const divs = useRef([]);
  const scrollTab = useRef();
  CustomHook(scrollTab, divs); // Apply the custom hook with the new name

 
  return (
    <section className='contacts' ref={scrollTab}>
      <div className="title" ref={(el) => el && divs.current.push(el)}>
        Contact me 
      </div>
      <div className="des" ref={(el) => el && divs.current.push(el)}>
        {/* Description or additional content can go here */}
      </div>
      <div className="list" ref={(el) => el && divs.current.push(el)}>
        {
          listContacts.map((value, key) => (
            <div className='item' key={key}>
              <a href={value.value}><img src={value.title} width="50px" height="50px" href={value.title} alt=""></img></a>
              {value.title === 'Phone Number' || value.title === 'WhatsApp' || value.title === 'Instagram' ? (
                <div>{value.value}</div>
              ):(null) }
            </div>
          ))
        }
      
        {/* Add the email registration form */}
        
      </div>
    </section>
  );
}

export default Contacts;
