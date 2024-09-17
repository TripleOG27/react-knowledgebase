<<<<<<< HEAD
=======
// App.js
>>>>>>> b4799fa (Transfer From Thymeleaf)
import React, { useState } from 'react';
import Navigation from './Navbar';
import Sidebar from './Sidebar';
import Footer from './Footer';
<<<<<<< HEAD
import ArticleListItem from './ArticleListItem';
=======
>>>>>>> b4799fa (Transfer From Thymeleaf)
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async (searchQuery) => {
    if (searchQuery.length >= 3) {
      try {
        const response = await fetch(`http://localhost:8080/api/article/search?pattern=${searchQuery}`);
        const data = await response.json();
        setSearchResults(data);
      } catch (error) {
        console.error('Error fetching search results:', error);
      }
    } else {
      setSearchResults([]);
    }
  };

  const handleChange = (event) => {
    const value = event.target.value;
    setSearchQuery(value);
    handleSearch(value);
  };

  return (
    <>
      <Navigation isLoggedIn={isLoggedIn} />
      <div className="container-fluid">
        <div className="row">
          {isLoggedIn && <Sidebar isLoggedIn={isLoggedIn} />}
          <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
          <h1>Search</h1>
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Enter at least 3 characters"
                value={searchQuery}
                onChange={handleChange}
              />
              <div className="input-group-append">
                <button
                  className="btn btn-outline-secondary"
                  type="button"
                  onClick={() => handleSearch(searchQuery)}
                >
                  Search
                </button>
              </div>
            </div>
            {undefined !== searchResults && searchResults.length > 0 && (
              <ul>
                {searchResults.map((result) => (
<<<<<<< HEAD
                  <li key={result.id} data-date={result.createdDate}>                    
                    <ArticleListItem key={result.id} result={result} />
=======
                  <li key={result.id} data-date={result.createdDate}>
                    <span>{result.createdDate}: </span>
                    {result.title}
>>>>>>> b4799fa (Transfer From Thymeleaf)
                  </li>
                ))}
              </ul>
            )}
          </main>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default App;
