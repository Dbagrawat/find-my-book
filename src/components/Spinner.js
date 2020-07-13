import React from "react";

export default function Spinner({ loading }) {
    return (
        <div
            className="col-12"
            style={{ minHeight: "50vh", textAlign: "center", marginTop: 50 }}
        >
            <div className="spinner-border" role="status">
                <span className="sr-only">{loading}</span>
            </div>
        </div>
    );
}
