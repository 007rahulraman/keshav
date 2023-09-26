import React, { useEffect, useState } from "react";
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
} from "@mui/material";
import ApiCallService from "../../utils/ApiCallService";
import { Link, useNavigate } from "react-router-dom";
import ProductListComponent from "../../components/ProductListComponent";


const ProductLIstContainer = () => {
  const [products , setProducts] = useState([])
  useEffect(() => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch("http://test.indiaindex.com/products.json", requestOptions)
      .then((response) => response.text())
      .then((result) => {
        result = result.replaceAll(" ",'');
        const obj = JSON.parse(result);
        console.log("json response",obj.products )
        setProducts(obj.products)
      })
      .catch((error) => console.log("error", error));
  }, []);
  return (
    <div style={{ padding: 20 }}>
      <Typography variant="h4" gutterBottom>
        All Products
      </Typography>
      <ProductListComponent products={products} />
    </div>
  );
};

export default ProductLIstContainer;
