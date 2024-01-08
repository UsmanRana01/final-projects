import React from "react";
import { SafeAreaView, View, Text, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import RowText from "../components/RowText";
import {weatherType} from '../utilities/weatherType'

const CurrentWeather = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <Feather name="sun" size={100} color="black" />
        <Text style={styles.temp}>22</Text>
        <Text style={styles.feels}>Feels Like 20</Text>
        <RowText
          msgOne={"High: 25"}
          msgTwo={"Low: 18"}
          containerStyles={styles.highLowWrapper}
          msgOneStyles={styles.highLow}
          msgTwoStyles={styles.highLow}
        />
      </View>
      <RowText
        msgOne={"It's Sunny"}
        msgTwo={weatherType['Thunderstorm'].message}
        containerStyles={styles.bodyWrapper}
        msgOneStyles={styles.desc}
        msgTwoStyles={styles.message}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "lightpink",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  temp: {
    fontSize: 50,
    color: "black",
  },
  feels: {
    fontSize: 20,
    color: "black",
    fontWeight: "bold",
  },
  highLow: {
    color: "black",
    fontSize: 16,
  },
  highLowWrapper: {
    flexDirection: "row",
  },
  bodyWrapper: {
    justifyContent: "flex-end",
    alignContent: "flex-start",
    paddingLeft: 25,
    marginBottom: 40,
  },
  desc: {
    fontSize: 48,
  },
  message: {
    fontSize: 30,
  },
});

export default CurrentWeather;
