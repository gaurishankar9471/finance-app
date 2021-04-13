import React from 'react';
import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const DashboardScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Hello</Text>
      <View style={styles.mainCard}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Icon name="bars" size={15} color="#363E78" style={{margin: 20}} />
          <Icon
            name="ellipsis-v"
            size={15}
            color="#363E78"
            style={{margin: 20}}
          />
        </View>
        <Image
          style={styles.tinyLogo}
          source={{
            uri: 'https://reactnative.dev/img/tiny_logo.png',
          }}
        />
      </View>
    </View>
  );
};

export default DashboardScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F8FE',
    padding: 20,
  },
  mainCard: {
    height: 300,
    backgroundColor: '#ffffff',
    margin: 10,
    borderRadius: 20,
    elevation: 30,
    shadowColor: '#000',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.1,
    shadowRadius: 20,
    marginTop: 20,
  },
  tinyLogo: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginTop: 20,
    borderRadius: 50,
  },
});
