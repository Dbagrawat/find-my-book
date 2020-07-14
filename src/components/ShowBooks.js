import React, { useState, useEffect } from "react";
import axios from "axios";
import { API } from "../api/endpoints";
import { useHistory, useLocation } from "react-router-dom";
import queryString from "query-string";
import { properties } from "../properties";
import BookCard from "./BookCard";
import NoBooksFound from "./NoBooksFound";
import Search from "./Search";
import Button from "./Button";
import Spinner from "./Spinner";

const ShowBooks = () => {
    const location = useLocation();
    const history = useHistory();
    const path = window.location.pathname;
    const initialQueryString = queryString.parse(location.search);
    const initialPageNumber = Number(initialQueryString.page) || 1;
    const [data, setData] = useState(true);
    const [loaded, setLoaded] = useState(false);
    const [currentPage, setCurrentPage] = useState(initialPageNumber);
    const [searchTerms, setSearchTerm] = useState("");
    const [search, setSearch] = useState(false);
    const [error, setError] = useState(false);
    const [datalen, setDatalen] = useState();

    useEffect(() => {
        history.push(`${path}?page=${currentPage}`);
    }, []);

    useEffect(() => {
        axios
            .post(API, {
                page: currentPage,
                itemsPerPage: 20,
                filters: [
                    {
                        type: "all",
                        values: [searchTerms],
                    },
                ],
            })
            .then((response) => {
                const respData = response.data;
                if (respData.books.length < 20) {
                    setDatalen(true);
                } else {
                    setDatalen(false);
                    setLoaded(10);
                }

                return setData(respData);
            })
            .catch((error) => {
                setError({ errorMessage: true });
            });
    }, [currentPage, search, datalen]);

    useEffect(() => {
        if (currentPage > 0) {
            history.push(`${path}?page=${currentPage}`);
        }
    }, [currentPage, history, path]);

    const handleSearchInputChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSearchSubmit = (event) => {
        event.preventDefault();
        setCurrentPage(1);
        setSearch(true);
    };

    function nextPage() {
        setCurrentPage(currentPage + 1);
    }
    function prevPage() {
        setCurrentPage(currentPage - 1);
    }
    return (
        <div className="container">
            <div className="text-white text-center py-5 px-4 my-5 bg-primary Jumbotron">
                <h1 className="h1 text-center">{properties.heading}</h1>
            </div>

            <div className="row">
                <div className="col-sm-6">
                    <Search
                        handleSearchInputChange={handleSearchInputChange}
                        handleSearchSubmit={handleSearchSubmit}
                        searchTerms={searchTerms}
                        label={properties.search}
                    />
                </div>

                <div className="d-flex justify-content-end col-sm-6 col-12">
                    <Button
                        prevPage={prevPage}
                        currentPage={currentPage}
                        label={properties.prevPage}
                    />

                    <Button
                        prevPage={nextPage}
                        label={properties.nextPage}
                        date={data}
                        currentPage={data ? datalen : false}
                    />
                </div>
            </div>

            <div className="mt-4 row">
                {data.count > 0 && loaded ? (
                    <BookCard data={data} />
                ) : data.count <= 0 ? (
                    <NoBooksFound noBooks={properties.noBooks} />
                ) : (
                    <Spinner loading={properties.loading} />
                )}
                
            </div>
        </div>
    );
};

export default ShowBooks;
