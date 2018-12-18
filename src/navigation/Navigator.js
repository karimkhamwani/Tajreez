import { createStackNavigator } from 'react-navigation';
import Login from '../screens/login/login';
import Signup from '../screens/signup/signup';
import ForgetPassword from '../screens/ForgetPassword/Forgetpassword';
import DrawerNavigator from './DrawerNavigator';
import TransitionConfig from './TransitionConfig';
import AboutUs from '../screens/AboutUs/AboutUs';


export default AppNavigator = createStackNavigator({
  LoginScreen: {
    screen: Login,
  },
  SignupScreen: {
    screen: Signup,
  },
  ForgetPasswordScreen: {
    screen: ForgetPassword,
  },
  HomeScreen: {
    screen: DrawerNavigator,
  },
  AboutUsScreen: {
    screen: AboutUs,
  },
},
{
  initialRouteName: 'AboutUsScreen',
  headerMode: 'none',
  transitionConfig: TransitionConfig,
});
