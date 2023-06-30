import React, {useState} from 'react';
import {
  createBottomTabNavigator,
  BottomTabBarProps,
} from '@react-navigation/bottom-tabs';
import HomeScreen from '../features/home/screens/HomeScreen';
import styled from 'styled-components/native';
import {NavigationContainer} from '@react-navigation/native';
import {Ionicons} from '@expo/vector-icons';
import {Theme} from '../types/Theme';
import LoginScreen from '../features/auth/screens/LoginScreen';

const Tab = createBottomTabNavigator<any>();

interface RouteBtnItemsType {
  id: number;
  icon: string;
  name: string;
}

const routeBtnItems: Array<RouteBtnItemsType> = [
  {
    id: 1,
    icon: 'src/assets/images/.png',
    name: 'Home',
  },
  {
    id: 2,
    icon: 'src/assets/images/.png',
    name: 'Community',
  },
  {
    id: 3,
    icon: 'src/assets/images/.png',
    name: 'Plus',
  },
  {
    id: 4,
    icon: 'src/assets/images/.png',
    name: 'List',
  },
  {
    id: 5,
    icon: 'src/assets/images/.png',
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
                {/* <Ionicons name={item.icon} /> */}
                {/* <Icon source={item.source}/> */}
                <Label>{item.name}</Label>
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
        <Tab.Screen name={'Login'} component={LoginScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const RouteBtnContainer = styled.View`
  flex-direction: row;
  height: 60px;
  border-radius: 999px;
  background-color: ${Theme.colors.orangeLight};
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
`;

const Icon = styled.Image<{isFocused?: boolean}>`
  width: 30px;
  height: 30px;
  tint-color: ${(props: any) => (props.isFocused ? '' : '#fafafa')};
`;

const RouteBtn = styled.TouchableOpacity``;

const Label = styled.Text`
  font-size: 12px;
  color: ${Theme.colors.orange};
`;

export default Route;
