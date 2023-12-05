import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import BookList from "./components/BookList";
import MainLayout from "./layouts/MainLayout";
import BookForm from "./components/BookForm";
import BookDetails from "./components/BookDetails";
import Home from "./components/Home";
import NoMatch from "./components/exceptions/NoMatch";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="home" element={<Home/>} />
          <Route path="bookList" element={<BookList />} />
          <Route path="bookForm" element={<BookForm />} />
          <Route path="book/:id" element={<BookDetails />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
