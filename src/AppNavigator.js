import {createStackNavigator, createAppContainer} from 'react-navigation';
import LoginForm from './components/LoginForm';
import RegistrationForm from './components/RegistrationForm';
import ContentScreen from './components/ContentScreen';

const MainNavigator = createStackNavigator({
  LoginForm: {screen: LoginForm},
  RegistrationForm: {screen: RegistrationForm},
  ContentScreen: {screen: ContentScreen},
});

const AppNavigator = createAppContainer(MainNavigator);

export default AppNavigator;
