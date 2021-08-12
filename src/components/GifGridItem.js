import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

export const GifGridItem = ({ title, url }) => {
  return (
    <Col md={3} style={{ marginBottom: "20px" }}>
      <Card className="shadow-lg p-3 mb-5 bg-white rounded animate__animated animate__bounce animate__bounceIn">
        <Card.Img
          variant="top"
          src={url}
          alt={title}
          style={{ height: "238px" }}
        />
        <Card.Body>
          <Card.Title
            style={{
              height: "30px",
              fontWeight: "900",
              textTransform: "capitalize",
            }}
          >
            {title}
          </Card.Title>
        </Card.Body>
      </Card>
    </Col>
  );
};
