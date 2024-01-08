import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  FlatList,
  StatusBar,
  ImageBackground,
} from "react-native";
import ListItems from "../components/ListItems";

const DATA = [
  {
    dt_txt: "2023-02-10 12:00:00",
    main: {
      temp_max: 8.55,
      temp_min: 7.55,
    },
    weather: [
      {
        main: "Claer",
      },
    ],
  },
  {
    dt_txt: "2022-12-05 11:00:00",
    main: {
      temp_max: 7.55,
      temp_min: 5.55,
    },
    weather: [
      {
        main: "Clouds",
      },
    ],
  },
];

const UpcomingWeather = () => {
  const newItem = ({ item }) => {
    return (
      <ListItems
        condition={item.weather[0].main}
        dt_txt={item.dt_txt}
        min={item.main.temp_min}
        max={item.main.temp_max}
      />
    );
  };
  const {container, img} = styles
  return (
    <SafeAreaView style={container}>
      <ImageBackground source={require("../../assets/upcoming.jpg")} style={img}>
      <Text>Upcoming Weather</Text>
      <FlatList
        data={DATA}
        renderItem={newItem}
        keyExtractor={(item) => item.dt_txt}
      />
      </ImageBackground>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: StatusBar.currentHeight || 0,
    backgroundColor: "blue",
  },
  img: {
    flex: 1,
  },
});
export default UpcomingWeather;
