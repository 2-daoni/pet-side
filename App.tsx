import React, {useEffect} from 'react';
import Route from './src/navigations/Route';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import RNBootSplash from 'react-native-bootsplash';

const App = () => {
  useEffect(() => {
    const hideSplash = async () => {
      await RNBootSplash.hide({fade: true, duration: 1000});
    };
    hideSplash();
  }, []);

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <Route />
    </GestureHandlerRootView>
  );
};

export default App;
