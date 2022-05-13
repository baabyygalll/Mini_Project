import "./style.module.css"
import { useMutation, useSubscription } from '@apollo/client';
import React, { useState } from 'react';
import { Badge, Col, Container, ListGroup, Row } from 'react-bootstrap';
import Navbar from "../../Components/Navbar/Navbar";
import { GET_KERANJANG } from '../../GraphQL/Cart/queries';
import { numberWithCommas } from '../../Util/numberCommas';



function Cart() {

  const getKeranjangAll = useSubscription(GET_KERANJANG);
 

  console.log(getKeranjangAll.data)

  return (
    <div>
      <Navbar />
      {getKeranjangAll.loading === true ? (
        <h1>Loading Nichhhhh</h1>
      ) : getKeranjangAll.loading === false && getKeranjangAll.data ? (
        <ListGroup style={{ backgroundColor: "white" }}>
          {getKeranjangAll.data.keranjang.map((keranjangs) => (
            <Container className="cart-list">
              <Row>
                <Col>
                  <Badge bg="warning" text="dark">{keranjangs.jumlah}</Badge>
                </Col>
                <Col>
                  <ListGroup.Item>
                    {keranjangs.namaProduct} <br></br>
                    <span>
                      Rp {numberWithCommas(keranjangs.total_harga)}
                    </span>
                  </ListGroup.Item>
                </Col>
                <Col></Col>
              </Row>
            </Container>
          ))}
        </ListGroup>
      ) : (
        <></>
      )}
    </div>
  );
}

export default Cart