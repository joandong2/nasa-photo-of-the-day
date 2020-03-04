import React from "react";

const DataItem = (props) => {
    let element = null;
    switch (props.media_type) {
        case "image":
            element = <img src={props.url} alt="adop_image" />;
            break;
        case "video":
            element = (
                <iframe
                    title="apod_video"
                    width="420"
                    height="315"
                    src={props.url}
                />
            );
            break;
        default:
            break;
    }

    return (
        <div className="apod-card">
            <h2>Film title: {props.title}</h2>
            <p>{props.explanation}</p>
            {element}
        </div>
    );
};
export default DataItem;
