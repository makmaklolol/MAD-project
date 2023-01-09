import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
} from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import Summary from './components/Summary';
import BMR_calculator from './components/BMR_calculator';
import Diet_Goals from './components/Food';
import Chart from './components/chart';
// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

const Cat = () => {
  return (
    <Card style={styles.CardStyle}>
      <View style={styles.catcontainer}>
        <Text style={styles.calstyle}>Today Calorie Count</Text>
        <Text style={styles.kcalstyle}>2000 kcal</Text>
        <Text style={styles.calstyle}>Today Calorie Allowance</Text>
        <Text style={styles.kcalstyle}>2500 kcal</Text>
      </View>

    </Card>
  );
};

export default function App() {
  return (
    <View style={styles.container}>
      <Cat />
      <Summary />
      <BMR_calculator />
      <Diet_Goals />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    padding: 8,
    backgroundColor: '#232323',
  },

  catcontainer: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    padding: 8,
  },
  CardStyle: {
    height: 150,
    margin:26,
    marginBottom:0,
    backgroundColor: '#92d36e',
    borderRadius: 10,
  },
  calstyle: {
    fontWeight: 'bold',
    color: '#fff',
    margin: 10,
    marginBottom: 0,
    margintop: 0,
  },
  kcalstyle: {
    fontWeight: 'bold',
    color: '#fff',
    fontSize: 25,
    margin: 0,
    marginLeft: 20,
  },
});

