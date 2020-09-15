import { createStackNavigator } from "@react-navigation/stack";
import { getMap } from "@store/actions";
import React, { useEffect, useState } from "react";
import MapView, { Marker } from "react-native-maps";
import { useDispatch, useSelector } from "react-redux";
import { Map } from "../models/ApiData";

const MapStack = createStackNavigator();

const MapStackScreen = () => (
  <MapStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: "#2395F6",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold",
      },
    }}
  >
    <MapStack.Screen
      name="Map"
      component={MapScreen}
      options={{
        title: "Covid Map US",
      }}
    />
  </MapStack.Navigator>
);

const MapScreen = () => {
  const dispatch = useDispatch();
  const dataMap = useSelector((state: Map) => state);

  // componentDidMount
  useEffect(() => {
    dispatch(getMap());
  }, []);

  const currentLocation = {
    longitude: -118.24532,
    latitude: 34.053490000000004,
  };

  const [region, setRegion] = useState({
    ...currentLocation,
    latitudeDelta: 3,
    longitudeDelta: 3,
  });

  return (
    <MapView
      style={{ flex: 1 }}
      region={region}
      onRegionChangeComplete={(region) => setRegion(region)}
    >
      {dataMap.message.slice(0, 100).map((item, index) => {
        return (
          <Marker
            key={index}
            coordinate={{
              longitude: item.longitude,
              latitude: item.latitude,
            }}
            title={item.county_name}
            description={`Confirmed: ${item.confirmed
              .toFixed(0)
              .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}`}
          />
        );
      })}
    </MapView>
  );
};

export default MapStackScreen;
