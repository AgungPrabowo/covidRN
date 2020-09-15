import { createStackNavigator } from "@react-navigation/stack";
import React, { useState } from "react";
import { ModalProps, Text } from "react-native";
import { BottomSheet, ListItem } from "react-native-elements";
import Flag from "react-native-flags-typescript";
import { ScrollView, TouchableHighlight } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useSelector } from "react-redux";
import Loading from "../components/Loading";
import { Country, IReport, Summary } from "../models/ApiData";

const RegionStack = createStackNavigator();

const RegionStackScreen = () => (
  <RegionStack.Navigator
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
    <RegionStack.Screen
      name="Region"
      component={RegionScreen}
      options={{
        title: "Region Stats",
      }}
    />
  </RegionStack.Navigator>
);

const RegionScreen = () => {
  const dataSummary = useSelector((state: Summary) => state);
  const initialCountry: Country = {
    Country: "",
    CountryCode: "",
    Slug: "",
    NewConfirmed: 0,
    TotalConfirmed: 0,
    NewDeaths: 0,
    TotalDeaths: 0,
    NewRecovered: 0,
    TotalRecovered: 0,
    Date: "",
  };

  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [country, setCountry] = useState<Country>(initialCountry);
  let modalProps: ModalProps = {
    transparent: true,
    visible: isVisible,
    onRequestClose: () => setIsVisible(false),
  };
  let totalStats: Array<IReport> = [
    {
      title: "New Confirmed",
      icon: "newspaper",
      count: country?.NewConfirmed,
    },
    {
      title: "Total Confirmed",
      icon: "clipboard-text",
      count: country?.TotalConfirmed,
    },
    {
      title: "New Deaths",
      icon: "account-remove",
      count: country?.NewDeaths,
    },
    {
      title: "New Recovered",
      icon: "refresh",
      count: country?.NewRecovered,
    },
  ];

  return (
    <SafeAreaView>
      {dataSummary.Loading && <Loading loading={dataSummary.Loading} />}

      <BottomSheet isVisible={isVisible} modalProps={modalProps}>
        <ListItem bottomDivider containerStyle={{ backgroundColor: "#EA5E2B" }}>
          <Flag code={country.CountryCode} size={32} />
          <ListItem.Content>
            <ListItem.Title style={{ fontSize: 15, color: "white" }}>
              {country.Country}
            </ListItem.Title>
          </ListItem.Content>
          <Icon
            name="close"
            color="white"
            size={25}
            onPress={modalProps.onRequestClose}
          />
        </ListItem>
        {totalStats.map((item, index) => {
          return (
            <ListItem key={index} bottomDivider>
              <Icon name={item.icon} size={25} />
              <ListItem.Content>
                <ListItem.Title style={{ fontSize: 15 }}>
                  {item.title}
                </ListItem.Title>
              </ListItem.Content>
              <Text style={{ color: "grey" }}>
                {item.count
                  ?.toFixed(0)
                  .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}
              </Text>
            </ListItem>
          );
        })}
      </BottomSheet>

      {!dataSummary.Loading && (
        <ScrollView showsVerticalScrollIndicator={false}>
          {dataSummary.Countries.map((item, index) => {
            return (
              <TouchableHighlight
                key={index}
                onPress={() => {
                  setCountry(item);
                  setIsVisible(true);
                }}
              >
                <ListItem bottomDivider>
                  <Flag code={item.CountryCode} size={48} />
                  <ListItem.Content>
                    <ListItem.Title>{item.Country}</ListItem.Title>
                    <ListItem.Subtitle>
                      {dataSummary.Date.substr(0, 10)}
                    </ListItem.Subtitle>
                  </ListItem.Content>
                  <Text style={{ color: "#2395F6" }}>
                    {item.TotalConfirmed.toFixed(0).replace(
                      /(\d)(?=(\d{3})+(?!\d))/g,
                      "$1,"
                    )}
                    <Icon name="chevron-down" size={25} color="red" />
                  </Text>
                </ListItem>
              </TouchableHighlight>
            );
          })}
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

export default RegionStackScreen;
