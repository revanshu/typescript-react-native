import { createStackNavigator } from 'react-navigation';

import Index from './LandingScreen';

const StackNavigator = createStackNavigator({
  Home: Index,
});

export default StackNavigator;
