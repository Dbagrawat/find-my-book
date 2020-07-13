import React from "react";

const BookCard = (props) => {
    return props.data.books.map((book) => (
        <div className="col-3 mb-4" key={book.id}>
            <div className="card w-100 h-100">
                <div className="card-body">
                    <img
                        className="card-img-top mb-4"
                        src="https://via.placeholder.com/150"
                        alt="Card image cap"
                    />
                    <h5 className="card-title">
                        Book Title: {book.book_title}
                    </h5>
                    <p className="card-text">Book pages: {book.book_pages}</p>
                    <p className="card-text">
                        Publication country: {book.book_publication_country}
                    </p>
                    <p className="card-text">
                        Publication city: {book.book_publication_city}
                    </p>
                </div>
                <div className="card-footer">
                    <small className="text-muted">
                        Publication year: {book.book_publication_year}
                    </small>
                </div>
            </div>
        </div>
    ));
};

export default BookCard;
