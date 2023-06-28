import React, {useState} from 'react';
import {
  createBottomTabNavigator,
  BottomTabBarProps,
} from '@react-navigation/bottom-tabs';
import HomeScreen from '../features/home/screens/HomeScreen';
import {Text} from 'react-native';
import styled from 'styled-components/native';
import {NavigationContainer} from '@react-navigation/native';

const Tab = createBottomTabNavigator<any>();

interface RouteBtnItemsType {
  id: number;
  source: string;
  name: string;
}

const routeBtnItems: Array<RouteBtnItemsType> = [
  {
    id: 1,
    source: 'src/assets/images/.png',
    name: 'Home',
  },
  {
    id: 2,
    source: 'src/assets/images/.png',
    name: 'Community',
  },
  {
    id: 3,
    source: 'src/assets/images/.png',
    name: 'Plus',
  },
  {
    id: 4,
    source: 'src/assets/images/.png',
    name: 'List',
  },
  {
    id: 5,
    source: 'src/assets/images/.png',
    name: 'My',
  },
];

const Route = () => {
  const [currentTab, setCurrentTab] = useState<string>('');

  const customTabBar = (props: BottomTabBarProps) => {
    return (
      <RouteBtnContainer>
        <>
          {routeBtnItems.map((item: RouteBtnItemsType) => {
            return (
              <RouteBtn
                key={item.id}
                onPress={() => {
                  props.navigation.navigate(item.name);
                }}>
                {/* <Icon source={item.source}/> */}
                <Text>{item.name}</Text>
              </RouteBtn>
            );
          })}
        </>
      </RouteBtnContainer>
    );
  };

  return (
    <NavigationContainer>
      <Tab.Navigator tabBar={customTabBar} initialRouteName="Home">
        <Tab.Screen name={'Home'} component={HomeScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const RouteBtnContainer = styled.View`
  flex-direction: row;
`;

const Icon = styled.Image<{isFocused?: boolean}>`
  width: 30px;
  height: 30px;
  tint-color: ${(props: any) => (props.isFocused ? '' : '#fafafa')};
`;

const RouteBtn = styled.TouchableOpacity``;

export default Route;
