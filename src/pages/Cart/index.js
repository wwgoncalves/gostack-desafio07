import React from 'react';

import {
  Container,
  ScrollableContainer,
  NoShoppingCartIcon,
  EmptyCartText,
  CartItem,
  ItemHeader,
  ItemImage,
  ItemDescription,
  ItemName,
  ItemPrice,
  DeleteForeverIcon,
  ItemFooter,
  AmountContainer,
  RemoveCircleOutlineIcon,
  ItemAmount,
  AddCircleOutlineIcon,
  Subtotal,
  GrandTotalLabel,
  GrandTotalPrice,
  CheckoutButton,
  ActionText,
} from './styles';

export default function Cart() {
  return (
    <Container>
      <ScrollableContainer>
        {true ? (
          <CartItem>
            <NoShoppingCartIcon />
            <EmptyCartText>Your cart is empty.</EmptyCartText>
          </CartItem>
        ) : (
          <>
            <CartItem>
              <ItemHeader>
                <ItemImage
                  source={{
                    uri:
                      'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis1.jpg',
                  }}
                />
                <ItemDescription>
                  <ItemName>Tênis de Caminhada Leve Número Um</ItemName>
                  <ItemPrice>R$109,99</ItemPrice>
                </ItemDescription>
                <DeleteForeverIcon />
              </ItemHeader>
              <ItemFooter>
                <AmountContainer>
                  <RemoveCircleOutlineIcon />
                  <ItemAmount>2</ItemAmount>
                  <AddCircleOutlineIcon />
                </AmountContainer>
                <Subtotal>R$219,98</Subtotal>
              </ItemFooter>
            </CartItem>
            <CartItem>
              <ItemHeader>
                <ItemImage
                  source={{
                    uri:
                      'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis2.jpg',
                  }}
                />
                <ItemDescription>
                  <ItemName>Tênis de Caminhada Leve Número Dois</ItemName>
                  <ItemPrice>R$109,99</ItemPrice>
                </ItemDescription>
                <DeleteForeverIcon />
              </ItemHeader>
              <ItemFooter>
                <AmountContainer>
                  <RemoveCircleOutlineIcon />
                  <ItemAmount>2</ItemAmount>
                  <AddCircleOutlineIcon />
                </AmountContainer>
                <Subtotal>R$219,98</Subtotal>
              </ItemFooter>
            </CartItem>

            <GrandTotalLabel>GRAND TOTAL</GrandTotalLabel>
            <GrandTotalPrice>R$439,96</GrandTotalPrice>
            <CheckoutButton>
              <ActionText>PROCEED TO CHECKOUT</ActionText>
            </CheckoutButton>
          </>
        )}
      </ScrollableContainer>
    </Container>
  );
}
