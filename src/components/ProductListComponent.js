import React from "react";
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function ProductListComponent({ products }) {
  const navigate = useNavigate();

  const navigateToProduct = (pid) =>{
    navigate(`/products/${pid}`, { replace: true })
  }
  return (
    <Grid container spacing={2}>
      {products?.map((product) => (
        <Grid item xs={12} sm={6} md={4} key={product.id}>
          <Card
            style={{ height: "100%", display: "flex", flexDirection: "column" }}
          >
            <CardMedia
              component="img"
              style={{ width: "100%", height: "100%", objectFit: "fill" }}
              image={product.thumbnail}
              alt={product.title}
            />
            <CardContent style={{ flex: 1 }}>
              <Typography variant="h6" component="div">
                {product.title}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                {product.description}
              </Typography>
              <Typography variant="h6" color="textPrimary">
                ${product.price}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                {product.stock} in stock
              </Typography>
            </CardContent>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "0 16px 16px",
              }}
            >
              <Button
                size="small"
                color="primary"
                onClick={() => navigateToProduct(product.id)}
              >
                See Product Details
              </Button>
              <Typography variant="body2" color="textSecondary">
                {product.rating} ★
              </Typography>
            </div>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
