import { createStackNavigator } from "@react-navigation/stack";
import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { Card } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useDispatch, useSelector } from "react-redux";
import { getSummary } from "@store/actions";
import { Summary } from "../models/ApiData";
import Loading from "./Loading";

const HomeStack = createStackNavigator();

const HomeStackScreen = () => (
  <HomeStack.Navigator
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
    <HomeStack.Screen
      name="Home"
      component={HomeScreen}
      options={{
        title: "Total Stats",
      }}
    />
  </HomeStack.Navigator>
);

const HomeScreen = () => {
  const dataSummary = useSelector((state: Summary) => state);
  const dispatch = useDispatch();
  interface ISummary {
    title: string;
    icon: string;
    count?: number;
  }
  let totalStats: Array<ISummary> = [
    {
      title: "New Confirmed",
      icon: "newspaper",
      count: dataSummary?.Global.NewConfirmed,
    },
    {
      title: "Total Confirmed",
      icon: "clipboard-text",
      count: dataSummary?.Global.TotalConfirmed,
    },
    {
      title: "New Deaths",
      icon: "account-remove",
      count: dataSummary?.Global.NewDeaths,
    },
    {
      title: "Total Deaths",
      icon: "close",
      count: dataSummary?.Global.TotalDeaths,
    },
    {
      title: "New Recovered",
      icon: "refresh",
      count: dataSummary?.Global.NewRecovered,
    },
    {
      title: "Total Recovered",
      icon: "clipboard-check",
      count: dataSummary?.Global.TotalRecovered,
    },
  ];

  // componentDidMount
  useEffect(() => {
    dispatch(getSummary());
  }, []);

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Loading loading={dataSummary.Loading} />
      {totalStats.map((item, index) => {
        return (
          <Card key={index}>
            <Card.Title style={{ fontSize: 15 }}>{item.title}</Card.Title>
            <Card.Divider />
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Icon name={item.icon} size={35} />
              <Text style={{ color: "grey" }}>
                {dataSummary?.Date?.substr(0, 10)}
              </Text>
              <Text>{item.count?.toLocaleString("en-us")}</Text>
            </View>
          </Card>
        );
      })}
    </ScrollView>
  );
};

export default HomeStackScreen;
