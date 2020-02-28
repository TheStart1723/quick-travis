import React, { useState } from "react";
import "rbx/index.css";
import ProductCard from "./ProductCard";
import { Grid, Container } from "@material-ui/core";
import ProductDescriptionCard from './ProductDescriptionCard';

const ProductList = ({ productIds, user, userRole }) => {
  const [showDetailpage, setShowDetailPage] = useState(false);
  const [selectProductId, setSelectProductId] = useState(null);

  const handleSelectProduct = (productId) => {
    setSelectProductId(productId);
    setShowDetailPage(true);
  }

  if (productIds && productIds.length > 0) {

    return (
      <Container>
        <Grid container spacing={2}>
          {
            productIds.map(productId => {
              return (
                <Grid onClick={() => { handleSelectProduct(productId) }} key={productId} item xs={6} md={3}>
                  <ProductCard productId={productId} />
                </Grid>
              );
            })
          }
        </Grid>
        <ProductDescriptionCard
          productId={selectProductId}
          open={showDetailpage}
          setOpen={setShowDetailPage}
          user={user}
          userRole={userRole}
        />

      </Container>
    );
  } else {
    return (
      <div style={{ textAlign: 'center', height: '100vh', width: '100vw', alignItems: 'center' }}>
        <img src='bookshelf.png' style={{ height: '200px', left: '50%', top: '50%' }}></img>
        <br />
        There is nothing here<br />
        Add an item to start
      </div>
    );
  }
};
export default ProductList;
