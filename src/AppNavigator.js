import {createStackNavigator, createAppContainer} from 'react-navigation';
import LoginForm from './components/LoginForm';
import RegistrationForm from './components/RegistrationForm';

const MainNavigator = createStackNavigator({
  LoginForm: {screen: LoginForm},
  RegistrationForm: {screen: RegistrationForm},
});

const AppNavigator = createAppContainer(MainNavigator);

export default AppNavigator;
