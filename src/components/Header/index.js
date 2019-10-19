import React from 'react';
import { Image, TouchableWithoutFeedback } from 'react-native';
import PropTypes from 'prop-types';

import { Container, ShoppingBasketIcon, NotificationDot } from './styles';
import Logo from '../../assets/Logo.png';

export default function Header({ navigation }) {
  return (
    <Container>
      <TouchableWithoutFeedback onPress={() => navigation.navigate('Main')}>
        <Image source={Logo} />
      </TouchableWithoutFeedback>
      <ShoppingBasketIcon onPress={() => navigation.navigate('Cart')} />
      <NotificationDot>9+</NotificationDot>
    </Container>
  );
}

Header.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};
