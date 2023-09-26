import React from 'react'
import {
    Container,
    Typography,
    Card,
    CardContent,
    CardMedia,
    Grid,
    
  } from "@mui/material";
  
export default function InfoCardComponent({product}) {
  return (
    <Card elevation={3} style={{ display: "flex", flexDirection: "row" }}>
    {/* Main Product Image */}
    <CardMedia
      component="img"
    //   height="auto"
      image={product.thumbnail}
      alt={product.title}
      style={{ width: "100%", height: "100%", objectFit: "fit",flex:"1" }}
    />

    {/* Product Details */}
    <CardContent style={{ flex: 3, padding: "16px" }}>
      <Typography variant="h5" gutterBottom>
        {product.title}
      </Typography>
      <Typography variant="subtitle1" color="textSecondary">
        {product.brand}
      </Typography>
      <Typography variant="body1" paragraph>
        {product.description}
      </Typography>
      <Typography variant="h6">Price: ${product.price}</Typography>
      <Typography variant="subtitle2" color="textSecondary">
        Rating: {product.rating} ★
      </Typography>
      <Typography variant="subtitle2" color="textSecondary">
        In Stock: {product.stock} units
      </Typography>
      <Typography variant="subtitle2" color="textSecondary">
        Category: {product.category}
      </Typography>
      <Grid container spacing={2} style={{ marginTop: "16px" }}>
        {product?.images?.map((image, index) => (
          <Grid item xs={4} key={index}>
            <Card  style={{ height: "100%", display: "flex", flexDirection: "column" }}>
              <CardMedia
                component="img"
                style={{ width: "100%", height: "100%", objectFit: "fit" }}

                image={image}
                alt={`Image ${index + 1}`}
              />
            </Card>
          </Grid>
        ))}
      </Grid>
    </CardContent>
  </Card>
  )
}
