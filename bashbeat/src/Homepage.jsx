import React from 'react';
import './Homepage.css';
import Tiltedcard from './Tiltedcard.jsx'
import {Link} from "react-router-dom"


import Tamilimg from './assets/Music photos/Tamil.jpg'
import Teluguimg from './assets/Music photos/Telugu.jpg'
import Kannadaimg from './assets/Music photos/Kannada.jpg'
import Hindiimg from './assets/Music photos/Hindi.jpg'
import Malayalamimg from './assets/Music photos/Malayalam.jpg'
import Punjabiimg from './assets/Music photos/Punjabi.jpg'
import Englishimg from './assets/Music photos/English.jpg'
import Gujaratiimg from './assets/Music photos/Gujarati.jpg'
import Maratiimg from './assets/Music photos/Marati.jpg'
import Bojpuriimg from './assets/Music photos/Bojpuri.jpg'



const categories = [
  { title: " TAMIL ", image: Tamilimg , link:"/Tamil"}  ,
  { title: " TELUGU ", image: Teluguimg ,link:"/Telugu" },
  { title: " KANNADA ", image: Kannadaimg ,link:"/Kannada" },
  { title: " HINDI ", image: Hindiimg ,link:"/Hindi" },
  { title: " MALAYALAM ", image: Malayalamimg ,link:"/Malayalam" },
  { title: " PUNJABI ", image: Punjabiimg ,link:"/Tamil" },
  { title: " ENGLISH ", image: Englishimg ,link:"/Tamil" },
  { title: " GUJARATI ", image: Gujaratiimg ,link:"/Tamil" },
  { title: " MARATI ", image: Maratiimg ,link:"/Tamil" },
  { title: " BOJPURI ", image: Bojpuriimg ,link:"/Tamil" },
  
];

const Homepage = () => {
  return (
    <div className='tot'>
      <h2 className='title'>Languages</h2>
      <div className="categories-container">
        <div className="categories-grid">
          {categories.map((category, index) => (
            
            <div className="category-card" key={index}>
              <Link to={category.link} />
              <Tiltedcard
              overlayContent={
                <div className="category-title">{category.title}</div>
              }
              imageSrc={category.image} alt={category.title} className="category-image" />
              
              
              
            </div>
            
          ))}
        </div>
      </div>
    </div>
  );
};

export default Homepage;