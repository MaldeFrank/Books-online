import React, { useState } from 'react';
import returnVal from './BookFacade';

function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const findBook = () => {
    const books = returnVal.getBooks();
    const filteredBooks = books.filter((book) =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(filteredBooks);
  };

  return (
    <div>
      <h1>Books online</h1>
      <input
        onChange={(e) => setSearchTerm(e.target.value)}
        type="text"
        placeholder="Search.."
      />
      <button onClick={findBook}>Search</button>
      <ul>
        {searchResults.map((book) => (
          <li key={book.id}>
            {book.title} - {book.info}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
