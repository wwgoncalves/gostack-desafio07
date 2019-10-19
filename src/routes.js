import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Header from './components/Header';
import Main from './pages/Main';
import Cart from './pages/Cart';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Main,
      Cart,
    },
    {
      initialRouteName: 'Main',
      headerBackTitleVisible: false,
      defaultNavigationOptions: ({ navigation }) => ({
        header: <Header navigation={navigation} />,
        headerStyle: {
          backgroundColor: '#ff1920',
          borderBottomWidth: 0,
          elevation: 0,
        },
      }),
    }
  )
);

export default Routes;
