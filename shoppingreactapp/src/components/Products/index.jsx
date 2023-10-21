import React from "react";
import styled from "styled-components";
import { popularProducts } from "../../Pages/data";
import ProductItem from "../ProductItem.jsx";

const Container = styled.div`
padding:20px;
display:flex;
flex-wrap:wrap;
justify-content: space-between;

`

const Products = () => {
  return (
    <Container>
      {popularProducts.map((item) => (
        <ProductItem item={item} key={item.id}/>
      ))}
    </Container>
  );
};

export default Products;
