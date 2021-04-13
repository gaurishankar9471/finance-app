/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import HomeScreen from './src/screens/HomeScreen';
import ProfileScreen from './src/screens/ProfileScreen';

import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {NavigationContainer} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import LoginScreen from './src/screens/LoginScreen';
import DashboardScreen from './src/screens/DashboardScreen';

MaterialCommunityIcons.loadFont();
Ionicons.loadFont();

const App = () => {
  const Tab = createMaterialBottomTabNavigator();

  function MyTabs() {
    return (
      <Tab.Navigator
        initialRouteName="HomeScreen"
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === 'HomeScreen') {
              console.log('here');
              iconName = focused
                ? 'ios-information-circle'
                : 'ios-information-circle-outline';
            } else if (route.name === 'Settings') {
              iconName = focused ? 'ios-list-box' : 'ios-list';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        barStyle={{backgroundColor: 'transparent', padding: 20}}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}>
        <Tab.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            tabBarLabel: '',
            tabBarIcon: ({color, focused}) =>
              focused ? (
                <View
                  style={{
                    backgroundColor: '#45A161',
                    borderRadius: 25,
                    width: 50,
                    height: 50,
                    justifyContent: 'center',
                  }}>
                  <Ionicons
                    name="home"
                    color={color}
                    size={26}
                    style={{alignSelf: 'center'}}
                  />
                </View>
              ) : (
                <Ionicons
                  name="home-outline"
                  color={color}
                  size={26}
                  style={{alignSelf: 'center'}}
                />
              ),
          }}
        />

        <Tab.Screen
          name="Flash"
          showLabel={false}
          component={ProfileScreen}
          options={{
            tabBarLabel: '',
            tabBarIcon: ({color, focused}) =>
              focused ? (
                <View
                  style={{
                    backgroundColor: '#45A161',
                    borderRadius: 25,
                    width: 50,
                    height: 50,
                    justifyContent: 'center',
                  }}>
                  <Ionicons
                    name="flash"
                    color={color}
                    size={26}
                    style={{alignSelf: 'center'}}
                  />
                </View>
              ) : (
                <Ionicons
                  name="flash-outline"
                  color={color}
                  size={26}
                  style={{alignSelf: 'center'}}
                />
              ),
          }}
        />

        <Tab.Screen
          name="Account"
          showLabel={false}
          component={ProfileScreen}
          options={{
            tabBarLabel: '',
            tabBarIcon: ({color, focused}) =>
              focused ? (
                <View
                  style={{
                    backgroundColor: '#45A161',
                    borderRadius: 25,
                    width: 50,
                    height: 50,
                    justifyContent: 'center',
                  }}>
                  <Ionicons
                    name="person"
                    color={color}
                    size={26}
                    style={{alignSelf: 'center'}}
                  />
                </View>
              ) : (
                <Ionicons
                  name="person-outline"
                  color={color}
                  size={26}
                  style={{alignSelf: 'center'}}
                />
              ),
          }}
        />
        <Tab.Screen
          name="Notification"
          component={HomeScreen}
          options={{
            tabBarLabel: '',
            tabBarIcon: ({color, focused}) =>
              focused ? (
                <View
                  style={{
                    backgroundColor: '#45A161',
                    borderRadius: 25,
                    width: 50,
                    height: 50,
                    justifyContent: 'center',
                  }}>
                  <Ionicons
                    name="notifications"
                    color={color}
                    size={26}
                    style={{alignSelf: 'center'}}
                  />
                </View>
              ) : (
                <Ionicons
                  name="notifications-outline"
                  color={color}
                  size={26}
                  style={{alignSelf: 'center'}}
                />
              ),
          }}
        />
      </Tab.Navigator>
    );
  }

  return (
    <>
      <NavigationContainer>
        <LinearGradient
          colors={['#1B2D21', '#181818', '#181818']}
          style={styles.container}>
          <StatusBar barStyle="light-content" />
          {MyTabs()}
        </LinearGradient>
      </NavigationContainer>
      {/* <DashboardScreen /> */}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
  },
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
