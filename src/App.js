import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

import Data from "./components/Data.js";

function App() {
    const [data, setData] = useState([]);
    const [date, setDate] = useState("");

    const changeHandler = (e) => {
        console.log(e.target.value);
        console.log(new Date(e.target.value));
        console.log(new Date(Date.now()));
        setDate(e.target.value);
    };

    useEffect(() => {
        axios
            .get(
                `https://api.nasa.gov/planetary/apod?api_key=CMQJWBxUfFBQ9MXRCtwZkzEcr6psRLcYnh50DHJq&date=${date}`
            )
            .then((response) => {
                console.log(response);
                setData([response.data]);
            })
            .catch((err) => console.log(err));
    }, [date]);

    return (
        <div className="App">
            <form>
                <input type="date" value={date} onChange={changeHandler} />
            </form>
            {data.map((item, i) => {
                return (
                    <Data
                        key={i}
                        title={item.title}
                        explanation={item.explanation}
                        media_type={item.media_type}
                        url={item.url}
                    />
                );
            })}
        </div>
    );
}

export default App;
