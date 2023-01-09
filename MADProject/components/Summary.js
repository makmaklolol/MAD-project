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

export default function Summary() {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.buttonSummaryStyle}
          activeOpacity={0.5}>
          <Text style={styles.buttonTextStyle}>Summary</Text>
          <Image
          style={styles.buttonImageIconStyle}
           source={require('../assets/chart.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonBMRStyle}
          activeOpacity={0.5}>
          <Text style={styles.buttonTextStyle}>BMR</Text>
          <Image
          style={styles.buttonImageIconStyle}
           source={require('../assets/chart.png')}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    padding: 8,
    backgroundColor: '#232323',
    margin: 10,
    flexDirection: 'row'
  },

  buttonSummaryStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 0.5,
    borderColor: '#fff',
    height: 80,
    borderRadius: 10,
    width: 150,
    marginRight:10
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
    fontWeight:'bold'
  },
  buttonBMRStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 0.5,
    borderColor: '#fff',
    height: 80,
    borderRadius: 10,
    width: 150,
    marginLeft:10
  },
});