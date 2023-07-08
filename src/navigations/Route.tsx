import React, {useLayoutEffect, useRef, useState} from 'react';
import {
  createBottomTabNavigator,
  BottomTabBarProps,
} from '@react-navigation/bottom-tabs';
import HomeScreen from '../features/home/screens/HomeScreen';
import styled, {css} from 'styled-components/native';
import {NavigationContainer} from '@react-navigation/native';
import {Theme} from '../types/Theme';
import LoginScreen from '../features/auth/screens/LoginScreen';
import RegisterScreen from '../features/auth/screens/RegisterScreen';
import CommunityScreen from 'src/features/community/screens/CommunityScreen';
import PetContentsScreen from 'src/features/petContents/PetContentsScreen';
import MyScreen from 'src/features/my/screens/MyScreen';
import {observer} from 'mobx-react';
import {useStore} from 'src/stores/StoreProvider';
import {Animated, View} from 'react-native';

const Tab = createBottomTabNavigator<any>();

interface RouteBtnItemsType {
  id: number;
  image: string;
  route: string;
  name: string;
  size?: number;
}

const routeBtnItems: Array<RouteBtnItemsType> = [
  {
    id: 1,
    image: require('../assets/images/navigation/home.png'),
    route: 'Home',
    name: '홈',
  },
  {
    id: 2,
    image: require('../assets/images/navigation/people.png'),
    route: 'Community',
    name: '커뮤니티',
  },
  {
    id: 3,
    image: require('../assets/images/navigation/plus.png'),
    route: 'Plus',
    name: 'Plus',
    size: 35,
  },
  {
    id: 4,
    image: require('../assets/images/navigation/paws.png'),
    route: 'Pet',
    name: '견종백서',
  },
  {
    id: 5,
    image: require('../assets/images/navigation/person.png'),
    route: 'My',
    name: '마이',
  },
];

const Route = observer(() => {
  const {uiStore} = useStore();
  const [currentTab, setCurrentTab] = useState<string>('Home');

  const translateY = useRef<Animated.Value>(new Animated.Value(0)).current;

  const handleBottomTabAnimation = () => {
    if (uiStore.isBottomTabShow) {
      Animated.timing(translateY, {
        toValue: 0,
        useNativeDriver: true,
        duration: 500,
      }).start();
    } else {
      Animated.timing(translateY, {
        toValue: 70,
        useNativeDriver: true,
        duration: 500,
      }).start();
    }
  };

  console.log(translateY);

  const customTabBar = (props: BottomTabBarProps) => {
    return (
      <RouteBtnContainer
        style={{
          transform: [
            {
              translateY: translateY,
            },
          ],
        }}>
        <>
          {routeBtnItems.map((item: RouteBtnItemsType) => {
            return (
              <RouteBtn
                key={item.id}
                id={item.id}
                isCurrent={item.name === currentTab}
                onPress={() => {
                  props.navigation.navigate(item.route);
                  setCurrentTab(item.route);
                }}>
                <Icon
                  size={item?.size}
                  source={item.image}
                  isCurrent={item.route === currentTab}
                />
                {item.id !== 3 && (
                  <Label isCurrent={item.route === currentTab}>
                    {item.name}
                  </Label>
                )}
              </RouteBtn>
            );
          })}
        </>
      </RouteBtnContainer>
    );
  };

  useLayoutEffect(() => {
    handleBottomTabAnimation();
  }, [uiStore.isBottomTabShow]);

  return (
    <NavigationContainer>
      <Tab.Navigator tabBar={customTabBar} initialRouteName="Home">
        <Tab.Screen name={'Home'} component={HomeScreen} />
        <Tab.Screen name={'LoginScreen'} component={LoginScreen} />
        <Tab.Screen name={'RegisterScreen'} component={RegisterScreen} />
        <Tab.Screen name={'Community'} component={CommunityScreen} />
        <Tab.Screen name={'Pet'} component={PetContentsScreen} />
        <Tab.Screen name={'My'} component={MyScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
});

const RouteBtnContainer = styled(Animated.createAnimatedComponent(View))`
  flex-direction: row;
  height: 70px;
  border-top-right-radius: 30px;
  border-top-left-radius: 30px;
  background-color: ${Theme.colors.orangeLight};
  justify-content: space-between;
  align-items: center;
  padding: 0 50px 10px;
`;

const Icon = styled.Image<{isCurrent?: boolean; size?: number; id?: number}>`
  width: ${(props: any) => (props.size ? props.size : 25)}px;
  height: ${(props: any) => (props.size ? props.size : 25)}px;
  tint-color: ${(props: any) =>
    props.isCurrent ? Theme.colors.orange : '#878282'};
`;

const RouteBtn = styled.TouchableOpacity<{id?: number; isCurrent?: boolean}>`
  align-items: center;
  ${(props: any) =>
    props.id === 3 &&
    css`
      border-color: ${(props: any) =>
        props.isCurrent ? Theme.colors.orange : '#878282'};
      border-width: 1px;
      border-radius: 50px;
    `}
`;

const Label = styled.Text<{isCurrent?: boolean}>`
  font-size: 10px;
  margin-top: 2px;
  color: ${(props: any) => (props.isCurrent ? Theme.colors.orange : '#878282')};
`;

export default Route;
