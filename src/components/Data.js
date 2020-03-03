import React from "react";

const Data = (props) => {
    return (
        <div className="apod-card">
            <h2>Film title: {props.title}</h2>
            <p>{props.explanation}</p>
            <p>{props.media_type}</p>
            <video src={props.video_url} controls></video>
        </div>
    );
};
export default Data;
