import React from 'react';
import SplashScreen from './FinalProject/src/pages/SplashScreen';
import SignUp from './FinalProject/src/pages/SignUp';
import SignIn from './FinalProject/src/pages/SignIn';
import Dashboard from './FinalProject/src/pages/Dashboard';
import Product from './FinalProject/src/pages/Product/Product';
import Cart from './FinalProject/src/pages/Cart';
import ProductDetail from './FinalProject/src/pages/ProductDetail';
import ProfilePage from './FinalProject/src/pages/Profile';
import ProfileSettings from './FinalProject/src/pages/ProfileSettings';
import CheckoutPage from './FinalProject/src/pages/CheckOut';
import {CartProvider} from './FinalProject/src/contexts/CartContext';
import {ProductProvider} from './FinalProject/src/contexts/ProductContext';
import './FinalProject/src/config/Firebase';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import FlashMessage from 'react-native-flash-message';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <ProductProvider>
      <CartProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="SplashScreen"
              component={SplashScreen}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="SignIn"
              component={SignIn}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="SignUp"
              component={SignUp}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Dashboard"
              component={Dashboard}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Product"
              component={Product}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Cart"
              component={Cart}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="ProductDetail"
              component={ProductDetail}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Profile"
              component={ProfilePage}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="ProfileSettings"
              component={ProfileSettings}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Checkout"
              component={CheckoutPage}
              options={{headerShown: false}}
            />
          </Stack.Navigator>
          <FlashMessage position="top" />
        </NavigationContainer>
      </CartProvider>
    </ProductProvider>
  );
};

export default App;
