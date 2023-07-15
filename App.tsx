import React, {useEffect} from 'react';
import Route from './src/navigations/Route';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import RNBootSplash from 'react-native-bootsplash';
import {CustomProvider} from 'src/stores/StoreProvider';
import rootStore from 'src/stores/RootStore';
import {Toast} from 'react-native-toast-message/lib/src/Toast';

const App = () => {
  useEffect(() => {
    const hideSplash = async () => {
      await RNBootSplash.hide({fade: true, duration: 1000});
    };
    hideSplash();
  }, []);

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <CustomProvider {...rootStore}>
        <Route />
        <Toast />
      </CustomProvider>
    </GestureHandlerRootView>
  );
};

export default App;
