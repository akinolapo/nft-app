// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
import {createStackNavigator} from '@react-navigation/stack'
import(NavigationContainer, DefaultTheme} from '@react-navigation/native'

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello World!</Text>
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
