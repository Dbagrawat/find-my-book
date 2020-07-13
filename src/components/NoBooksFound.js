import React from "react";

const NoBooksFound = ({ noBooks }) => (
    <div
        className="col-12"
        style={{ minHeight: "50vh", textAlign: "center", marginTop: 50 }}
    >
        <p>{noBooks}</p>
        <button
            className="btn btn-primary"
            onClick={() => window.location.reload()}
        >
            Refresh
        </button>
    </div>
);
export default NoBooksFound;
