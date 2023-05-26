import React, { useState, useEffect } from 'react';
import './News.css';
import Navbar from '../TopNavbar/Navbar';
import Footer from '../Footer/Footer';

function NewsItem({ title, date, summary, url,image }) {
  const formattedDate = new Date(date).toLocaleDateString();
  return (
    
    <div className="news-item">
      <img className='new-item__image' src={image} alt="image" />
      <h2 className="news-item__title">{title}</h2>
      <p className="news-item__date">{formattedDate}</p>
      <p className="news-item__summary">{summary}</p>
      <a href={url} className="news-item__button" target="_blank" rel="noopener noreferrer">Read More</a>
    </div>
 
    
  );
}

function AllNews() {
  const [newsItems, setNewsItems] = useState([]);
  const [isLoading, setIsloading] = useState(false)

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    setIsloading(true);
   await fetch('https://newsapi.org/v2/everything?q=nigeria&apiKey=db1d173bf1324fc2aa3fbaf5bf3f343e')
      .then(response => response.json())
      .then(data => setNewsItems(data.articles))
      .catch(error => console.error(error));

      setIsloading(false);
  }, []);

  return (
    <>
    <Navbar/>
    <h1 className="news__header">News Feeds</h1>
    <div className="news"> 
    {
      isLoading ? <h1>Fetching</h1> : 
      <>
      {
        newsItems?.map((item, index) => (
          <NewsItem
            key={index}
            title={item.title}
            date={item.publishedAt}
            summary={item.description}
            image={item.urlToImage}
            url ={item.url}
          />
        ))
      }
      </>
    }  
    </div>
    <Footer/>
    </>
  );
}

export default AllNews;
