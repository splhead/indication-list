import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import {FormItem} from './src/screens/FormItem';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="transparent" translucent={true} />
      <FormItem />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
