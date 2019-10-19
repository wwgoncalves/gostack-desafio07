import React, { Component } from 'react';
// import { ActivityIndicator } from 'react-native';

import api from '../../services/api';
import { formatPrice } from '../../util/format';

import {
  Container,
  ActivityIndicator,
  List,
  ProductItem,
  ProductImage,
  ProductTitle,
  ProductPrice,
  AddButton,
  AmountContainer,
  AddShoppingCartIcon,
  AmountText,
  ActionText,
} from './styles';

export default class Main extends Component {
  state = {
    products: [],
    loading: true,
  };

  async componentDidMount() {
    const { products } = this.state;

    this.setState({ loading: true });

    const response = await api.get('/products');

    const data = response.data.map(product => ({
      ...product,
      formattedPrice: formatPrice(product.price),
    }));

    this.setState({
      products: products.length ? [...products, data] : data,
      loading: false,
    });
  }

  render() {
    const { products, loading } = this.state;
    return (
      <Container>
        {loading ? (
          <ActivityIndicator />
        ) : (
          <List
            data={products}
            keyExtractor={product => String(product.id)}
            renderItem={({ item }) => (
              <ProductItem>
                <ProductImage source={{ uri: item.image }} />
                <ProductTitle>{item.title}</ProductTitle>
                <ProductPrice>{item.formattedPrice}</ProductPrice>
                <AddButton>
                  <AmountContainer>
                    <AddShoppingCartIcon />
                    <AmountText>3</AmountText>
                  </AmountContainer>
                  <ActionText>ADD TO CART</ActionText>
                </AddButton>
              </ProductItem>
            )}
          />
        )}
      </Container>
    );
  }
}
