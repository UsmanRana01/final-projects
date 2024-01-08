import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  ImageBackground,
  StatusBar,
  View,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import IconText from "../components/IconText";

const City = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require("../../assets/newCity.jpg")}
        style={styles.imgLayout}
      >
        <Text style={styles.cityName}>Lahore</Text>
        <Text style={styles.countryName}>Pakistan</Text>
        <View style={styles.populationWrapper}>
          <IconText
            iconName={"user"}
            iconColor={"red"}
            bodyText={"13M"}
            bodyTextStyles={styles.populationText}
          />
        </View>
        <View style={styles.riseSetWrapper}>
          <IconText
            iconName={"sunrise"}
            iconColor={"white"}
            bodyText={"06:05:40am"}
            bodyTextStyles={styles.riseSetText}
          />
          <IconText
            iconName={"sunset"}
            iconColor={"white"}
            bodyText={"15:10:32pm"}
            bodyTextStyles={styles.riseSetText}
          />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imgLayout: {
    flex: 1,
  },
  cityName: {
    justifyContent: "center",
    fontSize: 40,
    fontWeight: "bold",
    alignSelf: "center",
    color: "white",
    marginTop: 30,
  },
  countryName: {
    justifyContent: "center",
    alignSelf: "center",
    fontSize: 15,
    color: "white",
    fontWeight: "bold",
  },
  populationWrapper: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
    flexDirection: "row",
  },
  populationText: {
    fontSize: 25,
    marginLeft: 7.5,
    color: "pink",
  },
  riseSetWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    marginTop: 40,
  },
  riseSetText: {
    fontSize: 20,
    color: "white",
  },
});

export default City;
