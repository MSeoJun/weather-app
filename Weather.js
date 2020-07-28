import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import propTypes from "prop-types";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const weatherOptions = {
  Thunderstorm: {
    iconName: "weather-lightning",
    gradient: ["#414345", "#232526"],
    tltle: "Thunderstorm",
    desc: "번개가 우르르쾅쾅",
  },
  Drizzle: {
    iconName: "weather-rainy",
    gradient: ["#2980b9", "#2c3e50"],
    tltle: "Drizzle",
    desc: "약간의 비가 내리는 날씨",
  },
  Rain: {
    iconName: "weather-pouring",
    gradient: ["#2980b9", "#2c3e50"],
    tltle: "Rain",
    desc: "많은 비가 내리는 날씨",
  },
  Snow: {
    iconName: "weather-snowy",
    gradient: ["#A7BFE8", "#6190E8"],
    tltle: "Snow",
    desc: "눈이 내리는 날씨",
  },
  Atmosphere: {
    iconName: "weather-cloudy",
    gradient: ["#56CCF2", "#2F80ED"],
    tltle: "Atmosphere",
    desc: "뭔지 모르겠는 날씨",
  },
  Clear: {
    iconName: "weather-sunny",
    gradient: ["#F09819", "#FF512F"],
    tltle: "Clear",
    desc: "날이 좋은 날씨",
  },
  Clouds: {
    iconName: "weather-partly-cloudy",
    gradient: ["#56CCF2", "#2F80ED"],
    tltle: "Clouds",
    desc: "구름낀 날씨",
  },
  Haze: {
    iconName: "weather-fog",
    gradient: ["#D7DDE8", "#757F9A"],
    tltle: "Haze",
    desc: "안개가 낀 날씨",
  },
  Mist: {
    iconName: "weather-fog",
    gradient: ["#D7DDE8", "#757F9A"],
    tltle: "Mist",
    desc: "안개가 낀 날씨",
  },
  Dust: {
    iconName: "weather-cloudy-alert",
    gradient: ["#ACBB78", "#799F0C"],
    tltle: "Dust",
    desc: "먼지가 많은 날씨 나가지 마세요.",
  },
};

export default function Weather({ temp, condition }) {
  return (
    <LinearGradient colors={weatherOptions[condition].gradient} style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.container2}>
        <MaterialCommunityIcons
          name={weatherOptions[condition].iconName}
          size={130}
          color="white"
        />
        <Text style={styles.temp}>{temp}°</Text>
      </View>
      <View style={{ ...styles.container2, ...styles.textContainer }}>
        <Text style={styles.title}>{weatherOptions[condition].tltle}</Text>
        <Text style={styles.desc}>{weatherOptions[condition].desc}</Text>
      </View>
    </LinearGradient>
  );
}

Weather.propTypes = {
  temp: propTypes.number.isRequired,
  condition: propTypes.oneOf([
    "Thunderstorm",
    "Drizzle",
    "Rain",
    "Snow",
    "Atmosphere",
    "Clear",
    "Clouds",
    "Haze",
    "Mist",
    "Dust",
  ]).isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  temp: {
    fontSize: 35,
    color: "white",
  },
  container2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textContainer: {
    paddingHorizontal: 20,
    alignItems: "flex-start",
  },
  title: {
    color: "white",
    fontSize: 50,
    fontWeight: "300",
    marginBottom: 10,
  },
  desc: {
    color: "white",
    fontWeight: "600",
    fontSize: 25,
  },
});
