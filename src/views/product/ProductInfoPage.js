import React, { useEffect, useState } from "react";
import ProductInfoContainer from "../../containers/ProductContainer/ProductInfoContainer";
import { useParams } from "react-router-dom";

export default function ProductInfoPage() {
  const [product, setProduct] = useState({});
  let { productId } = useParams();
  useEffect(() => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      `http://test.indiaindex.com/products/${productId}.json`,
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => {
        result = result.replaceAll(" ", "");
        const obj = JSON.parse(result);
        setProduct({ ...obj });
      })
      .catch((error) => console.log("error", error));
  }, [[productId]]);

  return <ProductInfoContainer product={product} />;
}
