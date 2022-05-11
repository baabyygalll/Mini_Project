import { useSubscription } from '@apollo/client';
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import  Navbar  from '../../Components/Navbar/Navbar';
import { GET_PRODUCTS } from '../../GraphQL/Products/queries';
import { Card } from "react-bootstrap"



function DetailProduct() {

// const [data, loading, error] = useSubscription(GET_PRODUCTS);

  return (
    <div>
      <Navbar />
     
    </div>
  );
}

export default DetailProduct