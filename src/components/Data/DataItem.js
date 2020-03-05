import React from "react";
import { Container, Row, Col } from "reactstrap";

import "./Data.css";

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
                    width="680"
                    height="680"
                    src={props.url}
                />
            );
            break;
        default:
            break;
    }

    return (
        <Container>
            <Row className="content-wrapper">
                <Row>
                    <input
                        type="date"
                        value={props.date}
                        onChange={props.changeHandler}
                    />
                </Row>
                <Row>
                    <Col xs="4">
                        <h2>Film title: {props.title}</h2>
                        <p>{props.explanation}</p>
                    </Col>
                    <Col xs="8">{element}</Col>
                </Row>
            </Row>
        </Container>
    );
};
export default DataItem;
