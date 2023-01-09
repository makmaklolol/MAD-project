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

export default function BMR_calculator() {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.buttonGoalStyle}
          activeOpacity={0.5}>
          <Text style={styles.buttonGoalTextStyle}>Goal</Text>
          <Image
          style={styles.buttonGoalImageIconStyle}
           source={require('../assets/target.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonStyle}
          activeOpacity={0.5}>
          <Text style={styles.buttonTextStyle}>Summary</Text>
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
    padding: 0,
    backgroundColor: '#232323',
    flexDirection:'row'
  },

  buttonGoalStyle: {
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
  buttonGoalImageIconStyle: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 100,
    resizeMode: 'center',
  },
  buttonGoalTextStyle: {
    color: '#232323',
    marginBottom: 4,
    marginLeft: 20,
    fontWeight:'bold'
  },
  buttonStyle: {
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
  buttonImageIconStyle: {
    padding: 10,
    paddingLeft:0,
    margin: 5,
    marginLeft:0,
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
});