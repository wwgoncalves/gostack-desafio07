import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as CartActions from '../../store/modules/cart/actions';
import { formatPrice } from '../../util/format';

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
  Button,
} from './styles';

function Cart({ cart, total, removeFromCart }) {
  return (
    <Container>
      <ScrollableContainer>
        {cart.length ? (
          <>
            {cart.map(product => (
              <CartItem key={String(product.id)}>
                <ItemHeader>
                  <ItemImage source={{ uri: product.image }} />
                  <ItemDescription>
                    <ItemName>{product.title}</ItemName>
                    <ItemPrice>{product.price}</ItemPrice>
                  </ItemDescription>
                  <Button>
                    <DeleteForeverIcon
                      onPress={() => removeFromCart(product.id)}
                    />
                  </Button>
                </ItemHeader>
                <ItemFooter>
                  <AmountContainer>
                    <Button>
                      <RemoveCircleOutlineIcon />
                    </Button>
                    <ItemAmount>{product.amount}</ItemAmount>
                    <Button>
                      <AddCircleOutlineIcon />
                    </Button>
                  </AmountContainer>
                  <Subtotal>{product.price}</Subtotal>
                </ItemFooter>
              </CartItem>
            ))}

            <GrandTotalLabel>GRAND TOTAL</GrandTotalLabel>
            <GrandTotalPrice>{total}</GrandTotalPrice>
            <CheckoutButton>
              <ActionText>PROCEED TO CHECKOUT</ActionText>
            </CheckoutButton>
          </>
        ) : (
          <CartItem>
            <NoShoppingCartIcon />
            <EmptyCartText>Your cart is empty.</EmptyCartText>
          </CartItem>
        )}
      </ScrollableContainer>
    </Container>
  );
}

const mapStateToProps = state => ({
  cart: state.cart,
  total: formatPrice(
    state.cart.reduce((total, product) => {
      return total + product.price * product.amount;
    }, 0)
  ),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
