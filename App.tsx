import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Home} from '@screens/Home';
import {FormItem} from '@screens/FormItem';

const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: 'Indicações',
            headerStyle: {
              backgroundColor: '#210a48',
            },
            headerTintColor: '#e0e0e0',
          }}
        />
        <Stack.Screen
          name="FormItem"
          component={FormItem}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
