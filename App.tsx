import React, {useEffect} from 'react';
import Route from './src/navigations/Route';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import SplashScreen from 'react-native-splash-screen';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <Route />
    </GestureHandlerRootView>
  );
};

export default App;
