import _ from 'lodash';
import {MobXProviderContext} from 'mobx-react';
import React, {createContext, useContext} from 'react';
import {DevSettings} from 'react-native';
import rootStore from 'src/stores/RootStore';

const CustomContext = createContext(rootStore);

// MobX와 Hook을 동시에 사용하기 위해서는 다음과 같은 Wrapper가 필요하다.
export const useStore = () => useContext(CustomContext);

export const CustomProvider = (props: any) => {
  const {children, ...stores} = props;
  const parentValue = React.useContext(CustomContext);
  const mutableProviderRef = React.useRef({...parentValue, ...stores});
  const value = mutableProviderRef.current;

  if (__DEV__) {
    const newValue = {...value, ...stores};
    if (!_.isEqual(value, newValue)) {
      console.log('[Store] App has restarted cause store has change');
      DevSettings.reload();
    }
  }

  return (
    <MobXProviderContext.Provider value={value}>
      {children}
    </MobXProviderContext.Provider>
  );
};
