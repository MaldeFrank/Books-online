import { useState } from "react";
import returnVal from "./BookFacade";
function BookForm() {

  const init = {
    title: "",
    info: ""
  };

  const [book, setBook] = useState(init);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setBook((prevBook) => ({
      ...prevBook,
      [id]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    returnVal.addBook(book)
    console.log(book);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title"></label>
        <input
          onChange={handleInputChange}
          value={book.title}
          id="title"
          type="text"
          placeholder="Title"
        />

        <label htmlFor="info"></label>
        <input
          onChange={handleInputChange}
          value={book.info}
          id="info"
          type="text"
          placeholder="Info"
        />

        <button type="submit">Add</button>
        <button type="button" onClick={() => console.log("Update", book)}>Update</button>
      </form>
    </div>
  );
}

export default BookForm;
