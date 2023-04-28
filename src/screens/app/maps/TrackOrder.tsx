import Constants from "expo-constants";
import { useState, useEffect, useRef } from "react";
import { StyleSheet, Image } from "react-native";
import { AppStackScreenProps } from "@src/types";
import { View } from "@components/Themed";
import { Sizes } from "@constants/Theme";
import { IconButton } from "@components/Button";
import FigText from "@components/StyledText";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
import useColorScheme from "@hooks/useColorScheme";
import Styles from "@constants/Styles";
import Device from "@constants/Device";
import TrackOrderFooter from "@components/maps/TrackOrderFooter";
import Colors from "@constants/Colors";
import Icon from "@constants/Icon";
import mapStyle from "./mapStyle.json";

export default function TrackOrder({ navigation }: AppStackScreenProps<"TrackOrder">) {
  const colorScheme = useColorScheme();
  const mapItemColor = colorScheme === "dark" ? Colors.primary : Colors.error;

  const mapRef = useRef<MapView | null>(null);

  return (
    <View transparent style={{ flex: 1 }}>
      <IconButton
        icon="back"
        containerStyle={{
          ...styles.backBtn,
          backgroundColor: colorScheme === "light" ? Colors.light.background : Colors.darkTint,
        }}
        onPress={() => navigation.goBack()}
      />
      <MapView
        ref={mapRef}
        style={styles.map}
        customMapStyle={colorScheme === "light" ? undefined : mapStyle}
        userInterfaceStyle={colorScheme}
        showsUserLocation={true}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: 7.420582134955091,
          longitude: 3.8699597044416976,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <MapViewDirections
          apikey={`${Constants?.expoConfig?.extra?.googleMapsApiKey}`}
          origin={{
            latitude: 7.330667839308172,
            longitude: 3.871318278071072,
          }}
          destination={{
            latitude: 7.332205513509833,
            longitude: 3.867688770610439,
          }}
          strokeWidth={4}
          strokeColor={mapItemColor}
          mode="DRIVING"
          onReady={(result) => {
            mapRef.current?.fitToCoordinates(result.coordinates, {
              edgePadding: {
                right: Device.width / 15,
                bottom: Device.height / 10,
                left: Device.width / 15,
                top: Device.height / 30,
              },
            });
          }}
        />
        <Marker
          coordinate={{ latitude: 7.330667839308172, longitude: 3.871318278071073 }}
          style={{ minWidth: 100, zIndex: 1 }}
        >
          <Image
            source={Icon.car}
            style={{
              width: Sizes.icon * 1.5,
              height: Sizes.icon * 1.5,
              tintColor: mapItemColor,
              resizeMode: "contain",
              transform: [{ rotateZ: "45deg" }],
            }}
          />
          <View style={styles.timeTracker}>
            <Image source={Icon.clock} style={styles.timeTrackerIcon} />
            <FigText>25 min</FigText>
          </View>
        </Marker>
        <Marker
          coordinate={{ latitude: 7.332205513509833, longitude: 3.867688770610439 }}
          title="Destination"
        />
      </MapView>
      <TrackOrderFooter containerStyle={styles.footer} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backBtn: {
    position: "absolute",
    top: Device.iPhoneNotch ? 50 : 20,
    left: Sizes.large,
    zIndex: 1,
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
  timeTracker: {
    width: 100,
    height: 45,
    borderRadius: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    position: "absolute",
    right: -45,
    zIndex: 1,
  },
  timeTrackerIcon: {
    width: Sizes.icon - 4,
    height: Sizes.icon - 4,
  },
  footer: {
    position: "absolute",
    bottom: 30,
    left: 0,
    zIndex: 1,
  },
});
