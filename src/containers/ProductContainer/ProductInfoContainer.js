// ProductInfo.js

import React from "react";
import {
  Container,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Grid,
} from "@mui/material";
import InfoCardComponent from "../../components/InfoCardComponent";

const ProductInfoContainer = ({ product }) => {
   
      
  return (
    <Container maxWidth="false">
      <InfoCardComponent product={product}/>
    </Container>
  );
};

export default ProductInfoContainer;
