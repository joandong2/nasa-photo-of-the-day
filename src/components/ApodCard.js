import React from "react";

const ApodCard = (props) => {
    return (
        <div className="apod-card">
            <h2>Film title: {props.title}</h2>
            <p>{props.explanation}</p>
            <p>{props.media_type}</p>
        </div>
    );
};
export default ApodCard;
