import React from 'react';
import { Image } from 'react-native';

import { Container, ShoppingBasketIcon, NotificationDot } from './styles';
import Logo from '../../assets/Logo.png';

export default function Header({ navigation }) {
  return (
    <Container>
      <Image source={Logo} />
      <ShoppingBasketIcon onPress={() => navigation.navigate('Cart')} />
      <NotificationDot>9+</NotificationDot>
    </Container>
  );
}
