import React from "react";
import PropTypes from "prop-types";

const Search = ({
    handleSearchInputChange,
    handleSearchSubmit,
    searchTerms,
}) => {
    return (
        <form
            className="mb-4 mb-sm-1 form-inline"
            onSubmit={(event) => handleSearchSubmit(event)}
        >
            {console.log(searchTerms)}
            <div className="input-group sm-3">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Search"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                    onChange={(event) => handleSearchInputChange(event)}
                />
                <div className="input-group-append">
                    <button
                        className="btn btn-primary"
                        id="basic-addon2"
                        type="submit"
                        disabled={!searchTerms ? "disabled" : ""}
                    >
                        Search
                    </button>
                </div>
            </div>
        </form>
    );
};

Search.propTypes = {
    searchTerms: PropTypes.string,
    handleSearchSubmit: PropTypes.func,
    handleSearchInputChange: PropTypes.func,
};

export default Search;
