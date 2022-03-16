import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {FormItem} from './src/screens/FormItem';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar backgroundColor="transparent" translucent={true} />
      <FormItem />
    </SafeAreaView>
  );
};

export default App;
