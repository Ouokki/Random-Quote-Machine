import React,{ useState } from 'react';
import axios from 'axios';
import './styles/styles.css';


function App() {
  const [author, setAuthor] = useState('');
  const [quote, setQuote] = useState('');

  function generateQuote() {
    axios.get(`https://random-math-quote-api.herokuapp.com`)
      .then(res => {
        const daTa = res.data;
        setAuthor(daTa.author);
        setQuote(daTa.quote);
        
        
      })
  }
  return (
    <div id="quote-box" className="container ">
	<div className="row">
	    <div className="container">
          <blockquote className="quote-card yellow-card">
            <p id="text">
             {quote}
           </p>
        
           <cite id="author" className="ml-1">
            Author : {author}
          </cite>
          <div className="row mt-2">
          <button onClick={generateQuote} className="btn btn-primary float-left" id="new-quote">New quote</button>
          <a href="https://twitter.com/intent/tweet" id="tweet-quote" className="ml-4"><button type="button" className="btn btn-social-icon btn-twitter btn-rounded"><i className="fa fa-twitter"></i></button></a>
          </div>
          
          
        </blockquote>

        </div>
	</div>
</div>
  );
}

export default App;
