import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import Constants from 'expo-constants';

export default function Diet_Goals() {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <TouchableOpacity style={styles.buttonDietStyle} activeOpacity={0.5}>
          <Image
            style={styles.buttonImageIconStyle}
            source={require('../assets/chart.png')}
          />
          <Text style={styles.buttonTextStyle}>Search Food</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    padding: 8,
    backgroundColor: '#232323',
    margin: 10,
    flexDirection: 'row',
  },

  buttonDietStyle: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderWidth: 0.5,
    borderColor: '#fff',
    height: 300,
    width: 300,
    borderRadius: 10,
    marginRight: 5,
  },
  buttonImageIconStyle: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 100,
    resizeMode: 'center',
  },
  buttonTextStyle: {
    color: '#232323',
    marginBottom: 4,
    marginLeft: 10,
    fontWeight: 'bold',
  },
});