/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  View,
  Text,
  useColorScheme,
} from 'react-native';
import {Provider} from 'react-redux';
import {store} from './src/app/store';
import PokemonList from './src/components/PokemonList';


function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <Provider store={store}>
       <View>
          <PokemonList/>
      </View>
    </Provider>
  );
}



export default App;
