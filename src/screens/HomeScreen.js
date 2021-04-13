import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import ProfileScreen from './ProfileScreen';

const Tab = createMaterialBottomTabNavigator();

Icon.loadFont();

const data = [
  {
    id: '1',
    title: 'Salary',
    caategory: 'Belong Interaction',
    amount: '+$2000',
    cat_img: '',
    icon_name: 'briefcase',
  },
  {
    id: '2',
    title: 'Paypal',
    caategory: 'Financial Payment',
    amount: '$45:00',
    cat_img: '',
    icon_name: 'paypal',
  },
];

const HomeScreen = () => {
  return (
    <ScrollView>
      <LinearGradient
        colors={['#1B2D21', '#181818', '#181818']}
        style={styles.linearGradient}>
        <View style={styles.container}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: 20,
            }}>
            <View style={{marginTop: 20}}>
              <Text
                style={{
                  fontSize: 30,
                  fontWeight: '700',
                  color: '#fff',
                }}>
                Hi Gauri
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: '300',
                  color: '#758283',
                  marginTop: 5,
                }}>
                Welcome Back
              </Text>
            </View>
            <View
              style={{
                backgroundColor: '#758283',
                width: 50,
                height: 50,
                borderRadius: 25,
                justifyContent: 'center',
              }}>
              <Icon
                name="user"
                size={30}
                color="#fff"
                style={{alignSelf: 'center'}}
              />
            </View>
          </View>

          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            colors={['#45A161', '#45A161', '#275B2F']}
            style={styles.card}>
            <View>
              <Icon name="credit-card" size={30} color="#fff" />
              <Text
                style={{
                  color: '#fff',
                  fontWeight: '400',
                  fontSize: 23,
                  marginTop: 25,
                }}>
                4562 1122 4595 7852
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginTop: 20,
                }}>
                <View style={{justifyContent: 'flex-start'}}>
                  <Text
                    style={{
                      color: '#fff',
                      fontSize: 10,
                      fontWeight: '300',
                    }}>
                    {' '}
                    CARD HOLDER
                  </Text>
                  <Text style={{color: '#fff', marginTop: 10}}>
                    {' '}
                    Gauri Shankar Gupta
                  </Text>
                </View>
                <View style={{justifyContent: 'flex-end'}}>
                  <Icon
                    name="cc-mastercard"
                    size={30}
                    color="#fff"
                    style={{alignSelf: 'flex-end'}}
                  />

                  <Text style={{color: '#fff'}}> Mastercard</Text>
                </View>
              </View>
            </View>
          </LinearGradient>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View style={styles.balance}>
              <Text style={{color: '#758283', fontSize: 20, fontWeight: '400'}}>
                Balance
              </Text>
              <Text
                style={{
                  color: '#fff',
                  fontSize: 30,
                  fontWeight: '800',
                }}>
                $ 92,510
              </Text>
            </View>
            <LinearGradient
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
              colors={['#45A161', '#45A161', '#275B2F']}
              style={{
                padding: 10,
                paddingLeft: 20,
                paddingRight: 20,
                borderRadius: 20,
                flexDirection: 'row',
                marginTop: 20,
              }}>
              <Icon name="long-arrow-down" size={16} color="#fff" />

              <Text
                style={{
                  color: '#fff',
                  fontSize: 16,
                  fontWeight: '800',
                  marginLeft: 5,
                }}>
                5.9%
              </Text>
            </LinearGradient>
          </View>
          <View style={styles.balance}>
            <Text style={{color: '#758283', fontSize: 20, fontWeight: '400'}}>
              Upcoming payments
            </Text>

            <ScrollView horizontal={true}>
              {data.map((item) => (
                <LinearGradient
                  start={{x: 0, y: 0}}
                  end={{x: 1, y: 0}}
                  colors={['#292929', '#161616', '#181818']}
                  key={item.id}
                  style={styles.pCard}>
                  <View>
                    <Icon
                      name={item.icon_name}
                      size={30}
                      color="#fff"
                      style={{alignSelf: 'center'}}
                    />
                    <Text
                      style={{
                        color: '#fff',
                        fontSize: 20,
                        fontWeight: '400',
                        alignSelf: 'center',
                        marginTop: 10,
                      }}>
                      {item.title}
                    </Text>
                    <Text
                      style={{
                        color: '#fff',
                        fontSize: 12,
                        fontWeight: '400',
                        alignSelf: 'center',
                        marginTop: 5,
                      }}>
                      {item.caategory}
                    </Text>
                    <Text
                      style={{
                        color: '#fff',
                        fontSize: 18,
                        fontWeight: '600',
                        alignSelf: 'center',
                        marginTop: 10,
                      }}>
                      {item.amount}
                    </Text>
                  </View>
                </LinearGradient>
              ))}
            </ScrollView>
          </View>
        </View>
      </LinearGradient>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: null,
  },
  card: {
    height: 200,
    marginTop: 30,
    borderRadius: 30,
    padding: 30,
  },
  balance: {
    marginTop: 40,
  },
  pCard: {
    margin: 30,
    backgroundColor: '#66AD47',
    borderRadius: 30,
    height: 200,
    width: 150,
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    alignSelf: 'center',
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
});
