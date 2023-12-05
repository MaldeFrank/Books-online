import returnVal from "./BookFacade";
import { NavLink } from "react-router-dom";

function BookList() {
  const bookList = returnVal.getBooks();

  const bookElements = bookList.map((book) => (
    <li className="list-group-item " key={book.id}>
      <NavLink to={`/book/${book.id}`} activeClassName="active">
        {book.title}
      </NavLink>
    </li>
  ));

  return (
    <div>
      <ol className="list-group list-group-numbered">{bookElements}</ol>
    </div>
  );
}

export default BookList;
