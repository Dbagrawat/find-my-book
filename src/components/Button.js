import React from "react";

const Button = (props) => {
    let isDisabled = "";
    if (props.currentPage === 1) {
        isDisabled = true;
    } else if (props.currentPage === false) {
        isDisabled = false;
    } else if (props.currentPage === true) {
        isDisabled = true;
    }

    console.log(props.currentPage);
    return (
        <button
            className="ml-5 flex-fill btn btn-primary"
            onClick={() => props.prevPage()}
            disabled={isDisabled}
        >
            {props.label}
        </button>
    );
};
export default Button;
