import * as React from 'react';
import { Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import RNBootSplash from "react-native-bootsplash";
import Home from '../screens/Home';
import Infor from '../screens/Infor';
import Order from '../screens/Order';
import Points from '../screens/Points';
import Store from '../screens/Store';
import PlacesMaps from '../components/PlacesMaps';
import Ionicons from 'react-native-vector-icons/Ionicons'
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
function MyTabs() {
  return (
    <Tab.Navigator tabBarOptions={{
      keyboardHidesTabBar: true,
      showLabel: false,
      style: {
        backgroundColor: 'white',
        height: 60,
        alignItems: 'center'
      }
    }}>
      <Tab.Screen name="Home" component={Home} options={{
        tabBarIcon: ({ focused }) => {
          return <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Image
              source={require('../assets/Icon/Home.png')}
              resizeMode='contain'
              style={{
                width: 30,
                height: 30,
                tintColor: focused ? '#FE8F01' : 'grey'
              }}
            />
            <Text style={{ color: focused ? '#FE8F01' : 'grey', fontSize: 10 }}>TRANG CHỦ</Text>
          </View>
        },
      }} />
      <Tab.Screen name="Order" component={Order} options={{
        tabBarIcon: ({ focused }) => {
          return <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Image
              source={require('../assets/Icon/Order.png')}
              resizeMode='contain'
              style={{
                width: 30,
                height: 30,
                tintColor: focused ? '#FE8F01' : 'grey'
              }}
            />
            <Text style={{ color: focused ? '#FE8F01' : 'grey', fontSize: 10 }}>ĐẶT MÓN</Text>
          </View>
        },
      }} />
      <Tab.Screen name="Store" component={Store} options={{
        tabBarIcon: ({ focused }) => {
          return <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Image
              source={require('../assets/Icon/Store.png')}
              resizeMode='contain'
              style={{
                width: 30,
                height: 30,
                tintColor: focused ? '#FE8F01' : 'grey'
              }}
            />
            <Text style={{ color: focused ? '#FE8F01' : 'grey', fontSize: 10 }}>CỬA HÀNG</Text>
          </View>
        },
      }} />
      <Tab.Screen name="Points" component={Points} options={{
        tabBarIcon: ({ focused }) => {
          return <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Image
              source={require('../assets/Icon/Point.png')}
              resizeMode='contain'
              style={{
                width: 30,
                height: 30,
                tintColor: focused ? '#FE8F01' : 'grey'
              }}
            />
            <Text style={{ color: focused ? '#FE8F01' : 'grey', fontSize: 10 }}>TÍCH ĐIỂM</Text>
          </View>
        },
      }} />
      <Tab.Screen name="Infor" component={Infor} options={{
        tabBarIcon: ({ focused }) => {
          return <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Ionicons name={'menu-sharp'} size={30} color={focused ? '#FE8F01' : 'grey'} />
            <Text style={{ color: focused ? '#FE8F01' : 'grey', fontSize: 10 }}>KHÁC</Text>
          </View>
        },
      }} />
    </Tab.Navigator>
  );
}
export default function App() {
  // const token = useSelector((store) => store.authReducer.token);
  return (
    <NavigationContainer onReady={() => RNBootSplash.hide()}>
      <Stack.Navigator headerMode={false}>
        <Stack.Screen name="MyTabs" component={MyTabs} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Order" component={Order} />
        <Stack.Screen name="Store" component={Store} />
        <Stack.Screen name="Points" component={Points} />
        <Stack.Screen name="Infor" component={Infor} />
        <Stack.Screen name="PlacesMaps" component={PlacesMaps} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
