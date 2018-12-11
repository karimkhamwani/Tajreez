/* eslint-disable global-require */
import React, { Component } from 'react';
import {
  View, Text, ImageBackground,
} from 'react-native';
import { styles } from '../../constants';
import DrawerItem from '../../common/DrawerItem/DrawerItem';
import { Div, SecondTextView, TextStyle, ListView, ButtonArea, ButtonViewLogin, ButtonTextAreaRegister, ButtonTextAreaLogin, ButtonViewRegister } from './style';



const { drawer } = styles;

class DrawerContent extends Component {
  componentWillMount() {
    const { navigation } = this.props;
    navigation.openDrawer()
  }
  render() {
    const { navigation } = this.props;
    return (
      <Div>
        <View style={{ flex: 0.3, backgroundColor: 'transparent' }}>
          <ImageBackground
            style={{
              flex: 1, flexDirection: 'column'
            }}
            blurRadius={2}
            source={require('../../assets/sidemenu.jpeg')}
          >

            <FirstTextView>
              <TextStyle>
                Which car do
                </TextStyle>
            </FirstTextView>
            <SecondTextView>
              <TextStyle>
                you want to driver today?
              </TextStyle>
            </SecondTextView>
          </ImageBackground>
        </View>
        <View style={{ flex: 0.7, backgroundColor: drawer.backgroundColor }}>
          <View style={{ flex: 1 }}>
            <ListView>
              <View style={{ flex: 0.1, marginTop: 20 }} />
              <DrawerItem itemName={'My Booking'} />
              <DrawerItem itemName={'Payments'} />
              <DrawerItem itemName={'About Us'} />
              <DrawerItem itemName={'Settings'} />
              <DrawerItem itemName={'Privacy Policy'} />
              <DrawerItem itemName={'Help'} />
              <DrawerItem itemName={'Contact Us'} />
            </ListView>

            <ButtonArea>
              <ButtonViewLogin>
                <ButtonTextAreaLogin>LOGIN</ButtonTextAreaLogin>
              </ButtonViewLogin>
              <ButtonViewRegister>
                <ButtonTextAreaRegister>REGISTER NOW</ButtonTextAreaRegister>
              </ButtonViewRegister>

            </ButtonArea>
          </View>

        </View>
        </Div>
    );
  }
}

export default DrawerContent;