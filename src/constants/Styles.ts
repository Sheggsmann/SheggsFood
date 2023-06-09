import Colors from "./Colors";
import Device from "./Device";
import { Sizes } from "./Theme";
import { StyleSheet } from "react-native";

export default {
  g: StyleSheet.create({
    imageBg: {
      flex: 1,
    },
    imageBg2: {
      position: "absolute",
      width: Device.width,
      top: -60,
      left: 0,
      resizeMode: "contain",
    },
    padding: { paddingHorizontal: Sizes.large },
    screenPadding: { flex: 1, paddingHorizontal: Sizes.large, paddingTop: Sizes.medium },
    header: {
      marginTop: Device.iOS ? Sizes.xxSmall : Sizes.xxLarge,
      backgroundColor: "transparent",
    },
    title: { fontSize: Sizes.xxLarge },
    transparent: { backgroundColor: "transparent" },
    formSpacing: { marginBottom: Sizes.small },
    authHeaderTitle: { fontSize: Sizes.bigFont, marginVertical: Sizes.xLarge },
    authHeaderText: { fontSize: Sizes.font, marginBottom: Sizes.xLarge },
    darkShadow: {
      shadowColor: "#000",
      shadowOffset: {
        height: 2,
        width: 2,
      },
      shadowOpacity: 0.8,
      shadowRadius: 20,
    },
    lightShadow: {
      shadowColor: "#000",
      shadowOffset: {
        height: 4,
        width: 4,
      },
      shadowOpacity: 0.2,
      shadowRadius: 20,
    },
  }),

  activeOpacity: 0.7,
  imageBG: {
    flex: 1,
  },
  screenPadding: { paddingHorizontal: Sizes.large },
  vPadding: {
    paddingBottom: Device.iOS ? (Device.iPhoneNotch ? 0 : Sizes.xSmall) : Sizes.large,
    paddingTop: Device.iOS ? (Device.iPhoneNotch ? Sizes.small : Sizes.xxSmall) : Sizes.xxLarge,
  },

  insets({ top, bottom }: { top: number; bottom?: number }) {
    return {
      paddingTop: top + (Device.iPhoneNotch ? Sizes.xLarge : Sizes.xxLarge),
      paddingBottom: bottom ? bottom : 0,
    };
  },
  mode(colorScheme: "light" | "dark") {
    return {
      container: {
        backgroundColor: colorScheme === "light" ? Colors.light.background : Colors.dark.background,
        flex: 1,
      },
      screen: {
        backgroundColor: colorScheme === "light" ? Colors.light.background : Colors.dark.background,
        flex: 1,
      },
    };
  },
};
