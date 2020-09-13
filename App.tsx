import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "@components/HomeScreen";
import SettingsScreen from "@components/SettingScreen";
import { NavigationContainer } from "@react-navigation/native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { store } from "@store/store";
import { Provider } from "react-redux";

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator tabBarOptions={{ activeTintColor: "#2395F6" }}>
          <Tab.Screen
            options={{
              tabBarIcon: ({ color }) => (
                <Icon name="earth" size={30} color={color} />
              ),
            }}
            name="Home"
            component={HomeScreen}
          />
          <Tab.Screen
            name="Settings"
            options={{
              tabBarIcon: ({ color }) => (
                <Icon name="flag" size={30} color={color} />
              ),
            }}
            component={SettingsScreen}
          />
          <Tab.Screen
            name="COVID Map"
            options={{
              tabBarIcon: ({ color }) => (
                <Icon name="map" size={30} color={color} />
              ),
            }}
            component={SettingsScreen}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default MyTabs;
