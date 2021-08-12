import React from "react";
import { GifGridItem } from "./GifGridItem";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { Row, Container } from "react-bootstrap";
export const GifGrid = ({ category }) => {
  const { data, loading } = useFetchGifs(category);

  return (
    <div>
      <Container className="rounded animate__animated animate__bounce animate__bounceIn">
        <h1>{category}</h1>
        {loading && <p>Loading</p>}
      </Container>
      
      <Container>
        <Row>
          {data.map((img) => (
            <GifGridItem key={img.id} {...img} />
          ))}
        </Row>
      </Container>
    </div>
  );
};
