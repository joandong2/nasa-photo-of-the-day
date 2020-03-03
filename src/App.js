import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

import ApodCard from "./components/ApodCard.js";

function App() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios
            .get(
                "https://api.nasa.gov/planetary/apod?api_key=CMQJWBxUfFBQ9MXRCtwZkzEcr6psRLcYnh50DHJq"
            )
            .then((response) => {
                setData([response.data]);
            })
            .catch((err) => console.log(err));
    }, []);

    return (
        <div className="App">
            {data.map((item, i) => {
                return (
                    <ApodCard
                        key={i}
                        title={item.title}
                        explanation={item.explanation}
                        media_type={item.media_type}
                    />
                );
            })}
        </div>
    );
}

export default App;
