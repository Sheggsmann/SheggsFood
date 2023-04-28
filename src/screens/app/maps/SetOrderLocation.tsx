import { useState, useEffect } from "react";
import { StyleSheet } from "react-native";
import { AppStackScreenProps } from "@src/types";
import { View } from "@components/Themed";
import { Sizes } from "@constants/Theme";
import FigText from "@components/StyledText";
import useColorScheme from "@hooks/useColorScheme";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import MapSearch from "@components/maps/MapSearch";
import Styles from "@constants/Styles";
import Device from "@constants/Device";
import LocationFooter from "@components/maps/LocationFooter";
import mapStyle from "./mapStyle.json";

export default function SetOrderLocation({}: AppStackScreenProps<"SetOrderLocation">) {
  const colorScheme = useColorScheme();

  return (
    <View transparent style={{ flex: 1 }}>
      <MapSearch containerStyle={styles.searchContainer} />
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        showsUserLocation={true}
        customMapStyle={colorScheme === "light" ? undefined : mapStyle}
        userInterfaceStyle={colorScheme}
        initialRegion={{
          latitude: 7.420582134955091,
          longitude: 3.8699597044416976,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      ></MapView>
      <LocationFooter containerStyle={styles.footer} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchContainer: {
    position: "absolute",
    top: Device.iPhoneNotch ? 50 : 20,
    left: 0,
    zIndex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
  footer: {
    position: "absolute",
    bottom: 30,
    left: 0,
    zIndex: 1,
  },
});
