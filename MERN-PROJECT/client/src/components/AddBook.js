import React from "react";

export default function AddBook({ book, handleChange, addBook }) {
  return (
    <div>
      <div className="container w-50  mt-5 border border-secondary border border-3 rounded-3  ">
        <form style={{ padding: "20px 20px 10px 20px" }}>
          <div className="form-floating mb-3">
            <input
              type="text"
              value={book.bookName}
              onChange={handleChange}
              name="bookName"
              className="form-control"
              id="floatingInput"
              placeholder="bookname"
            />
            <label for="floatingInput">Book Name</label>
          </div>

          <div className="form-floating mb-3">
            <input
              type="text"
              value={book.author}
              onChange={handleChange}
              name="author"
              className="form-control"
              id="floatingInput"
              placeholder="author"
            />
            <label for="floatingInput"> Author </label>
          </div>

          <div className="form-floating mb-3">
            <input
              type="number"
              value={book.quantity}
              onChange={handleChange}
              name="quantity"
              className="form-control"
              id="floatingInput"
              placeholder="quantity"
            />
            <label for="floatingInput">Quantity</label>
          </div>

          <div className="form-floating mb-3">
            <select
              className="form-select"
              value={book.department}
              onChange={handleChange}
              name="department"
              id="floatingSelect"
              aria-label="Floating label select example"
            >
              <option selected>Departments</option>
              <option value="History& Criticism">History& Criticism</option>
              <option value="Religious">Religious</option>
              <option value="Music">Music</option>
              <option value="Study & Teaching">Study & Teaching </option>
              <option value="Classic"> Classic </option>
            </select>
            <label for="floatingSelect">Select Book Department</label>
          </div>

          <div className="form-floating mb-3">
            <textarea
              className="form-control"
              value={book.comments}
              onChange={handleChange}
              name="comments"
              placeholder="Leave a comment here"
              id="floatingTextarea"
            ></textarea>
            <label for="floatingTextarea">Comments</label>
          </div>

          <div style={{ textAlign: "center" }}>
            {" "}
            <button
              onClick={addBook}
              type="button"
              className="btn btn-primary "
            >
              ADD BOOK
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
