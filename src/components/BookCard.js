import React from "react";
import { Col, Card } from "react-bootstrap";

const BookCard = (props) => {
    return props.data.books.map((book) => (
        <Col
            className="col-xs-12 col-sm-6 col-md-4 col-lg-3 mb-4"
            key={book.id}
        >
            <Card className="w-100 h-100">
                <Card.Body>
                    <img
                        className="card-img-top mb-4"
                        src="https://via.placeholder.com/150"
                        alt="Card image cap"
                    />
                    <Card.Title>Book Title: {book.book_title}</Card.Title>
                    <Card.Text>Book pages: {book.book_pages}</Card.Text>
                    <Card.Text>
                        Publication country: {book.book_publication_country}
                    </Card.Text>
                    <Card.Text>
                        Publication city: {book.book_publication_city}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">
                        Publication year: {book.book_publication_year}
                    </small>
                </Card.Footer>
            </Card>
        </Col>
    ));
};

export default BookCard;
