import React from 'react';
import './styles/styles.css';


function App() {
  return (
    <div id="quote-box" className="container ">
	<div className="row">
	    <div className="container">
          <blockquote className="quote-card yellow-card">
            <p id="text">
             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea tempora quia praesentium vitae ratione corporis similique, recusandae incidunt beatae, quae vel magni repellat commodi modi unde suscipit debitis labore odit!
           </p>
        
           <cite id="author" className="ml-1">
            Author
          </cite>
          <div className="row ml-1 mt-1">
          <button className="btn btn-primary float-left" id="new-quote">New quote</button>
          <a href="https://twitter.com/intent/tweet" id="tweet-quote" className="ml-4"><button type="button" className="btn btn-social-icon btn-twitter btn-rounded"><i class="fa fa-twitter"></i></button></a>
          </div>
          
          
        </blockquote>

        </div>
	</div>
</div>
  );
}

export default App;
