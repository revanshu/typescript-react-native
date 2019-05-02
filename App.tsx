/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * 
 * Generated with the TypeScript template
 * https://github.com/emin93/react-native-template-typescript
 * 
 * @format
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, ActivityIndicator} from 'react-native';
import { createStackNavigator, withNavigationFocus } from 'react-navigation';
import { capabilitiesLoader, httpService } from '@gif/gifuicommon';
import StackNavigator from './src';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

// interface Props {}

const CAPABILITY_URL_MAP: any = {
  US: {
    // stage: 'https://qa-int.gif-ui-helper-services.us.cloud.walmart.com/gif-ui-helper-services/resources/v1/metaCapabilities',
    stage: 'https://qa-int.gif-cloud-helper-services.prod.us.walmart.net/api/v1/metaCapabilities?market=walmart',
  },
  UK: {
  },
  MX: {
  },
  CA: {
  },
};

type props = {
  navigation: any,
  isFocused: boolean,
}

type states = {

}
class HomeScreen extends Component<props,states >{
  state = {
    isLoading: false,
  };

  componentDidMount = async () => {
    // i18n.init(
    //     {
    //       lng: 'en-US',
    //       fallbackLng: 'en-US',
    //     },
    // );
    this.setState({ isLoading: true });
    httpService.config({
      headers: {
        'Accept-Language': 'en-US',
        'X-countryCode': 'US',
        'X-nodeId': '5585',
        'X-UserId': 'sbk0006',
        'X-consumerId': 'gif-ui',
      },
    });
    const urlMapper = (environment: any, country: any) => `${CAPABILITY_URL_MAP[country.toUpperCase()][environment]}`;
    await capabilitiesLoader.initialize(urlMapper('stage', 'US'), true);
    this.setState({ isLoading: false });
  }

  render() {
    const { navigation } = this.props;
    const { isLoading } = this.state;
    return (
        <View style={styles.container}>
          <Text style={styles.welcome}>Main App!</Text>
          <Button
              disabled={isLoading}
              onPress={() => {
                navigation.navigate('Module', {
                  userInfo: {
                    countryCode: 'US',
                    // siteId: '5505',
                    siteId: '5585',
                    userId: 'sbk0006',
                  },
                  storeInfo: {
                    // apiVersion: '1.0',
                    apiVersion: '2.0',
                  },
                });
              }}
              title="Quality Check"
              color="#841584"
          />
          {isLoading
          && (
              <View style={styles.ActivityIndicator}>
                <ActivityIndicator
                    size={50}
                />
              </View>
          )
          }
        </View>
    );
  }
}

const App = createStackNavigator(
  {
    Home: withNavigationFocus(HomeScreen),
    Module: {
      screen: StackNavigator,
      navigationOptions: () => ({
        header: null,
      }),
    },
  },
);

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  ActivityIndicator: {
    position: 'absolute',
  },
});