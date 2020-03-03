import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

import Data from "./components/Data.js";

function App() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios
            .get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
            .then((response) => {
                console.log(response);
                setData([response.data]);
            })
            .catch((err) => console.log(err));
    }, []);

    return (
        <div className="App">
            {data.map((item, i) => {
                return (
                    <Data
                        key={i}
                        title={item.title}
                        explanation={item.explanation}
                        media_type={item.media_type}
                        video_url={item.url}
                    />
                );
            })}
        </div>
    );
}

export default App;
