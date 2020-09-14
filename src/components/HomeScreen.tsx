import { createStackNavigator } from "@react-navigation/stack";
import { getSummary } from "@store/actions";
import React, { useEffect } from "react";
import { Text, View } from "react-native";
import { Card } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useDispatch, useSelector } from "react-redux";
import { Summary, IReport } from "../models/ApiData";
import Loading from "./Loading";
import { SafeAreaView } from "react-native-safe-area-context";

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

  let totalStats: Array<IReport> = [
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
    <SafeAreaView>
      {dataSummary.Loading && <Loading loading={dataSummary.Loading} />}

      {!dataSummary.Loading && (
        <ScrollView showsVerticalScrollIndicator={false}>
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
                  <Text>{item.count?.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}</Text>
                </View>
              </Card>
            );
          })}
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

export default HomeStackScreen;
