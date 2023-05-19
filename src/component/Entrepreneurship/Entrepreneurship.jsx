import React from 'react';
import '../Education/Education.css';
import Navbar from '../TopNavbar/Navbar';
import Footer from '../Footer/Footer';

function EducationCard({ title, description, url, type }) {
  return (
    <div className="education-card">
      {type === 'video' && (
        <div className="education-card__video">
          <iframe src={url} title={title} allowFullScreen></iframe>
        </div>
      )}
      {type === 'pdf' && (
        <div className="education-card__pdf">
          <embed src={url} type="application/pdf" />
        </div>
      )}
      <div className="education-card__details">
        <h3 className="education-card__title">{title}</h3>
        <p className="education-card__description">{description}</p>
        <a className="education-card__link" href={url} target="_blank" rel="noopener noreferrer">
          {type === 'video' ? 'Watch Now' : 'View PDF'}
        </a>
      </div>
    </div>
  );
}

function Entrepreneurship() {
  const educationItems = [
    {
      title: 'Introduction to React',
      description: 'Learn the basics of React',
      url: 'https://www.youtube.com/embed/Ke90Tje7VS0',
      type: 'video',
    },
    {
      title: 'How to Start a Business',
      description: 'Learn how to start your own business',
      url: 'https://www.sample-videos.com/pdf/Sample-pdf-5mb.pdf',
      type: 'pdf',
    },
    {
      title: 'Advanced JavaScript Concepts',
      description: 'Take your JavaScript skills to the next level',
      url: 'https://www.youtube.com/embed/W6NZfCO5SIk',
      type: 'video',
    },
    {
      title: 'The Lean Startup',
      description: 'Read the book that inspired a generation of entrepreneurs',
      url: 'https://www.sample-videos.com/pdf/Sample-pdf-10-mb.pdf',
      type: 'pdf',
    },
    {
        title: 'The Lean Startup',
        description: 'Read the book that inspired a generation of entrepreneurs',
        url: 'https://www.sample-videos.com/pdf/Sample-pdf-10-mb.pdf',
        type: 'pdf',
      },
      {
        title: 'The Lean Startup',
        description: 'Read the book that inspired a generation of entrepreneurs',
        url: 'https://www.sample-videos.com/pdf/Sample-pdf-10-mb.pdf',
        type: 'pdf',
      },
      {
        title: 'The Lean Startup',
        description: 'Read the book that inspired a generation of entrepreneurs',
        url: 'https://www.sample-videos.com/pdf/Sample-pdf-10-mb.pdf',
        type: 'pdf',
      },
  ];

  return (<>
  <Navbar/>
  <h2 className="education__header">Entrepreneurship Resources</h2>
    <div className="education">
      
      <div className="education__cards">
        {educationItems.map((item, index) => (
          <EducationCard
            key={index}
            title={item.title}
            description={item.description}
            url={item.url}
            type={item.type}
          />
        ))}
      </div>
    </div>
    <Footer/>
    </>
  );
}

export default Entrepreneurship;
