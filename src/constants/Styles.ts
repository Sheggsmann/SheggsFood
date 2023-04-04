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
    screenPadding: { flex: 1, paddingHorizontal: Sizes.large, paddingTop: Sizes.medium },
    transparent: { backgroundColor: "transparent" },
    formSpacing: { marginBottom: Sizes.small },
    authHeaderTitle: { fontSize: Sizes.bigFont, marginVertical: Sizes.xLarge },
    authHeaderText: { fontSize: Sizes.font, marginBottom: Sizes.xLarge },
  }),
  activeOpacity: 0.7,
  imageBG: {
    flex: 1,
  },
  screenPadding: { paddingHorizontal: Sizes.large },
  mode(colorScheme: "light" | "dark") {
    return {
      container: {
        backgroundColor: colorScheme === "light" ? Colors.light.background : Colors.dark.background,
        flex: 1,
      },
      screen: {
        paddingHorizontal: 100,
        backgroundColor: colorScheme === "light" ? Colors.light.background : Colors.dark.background,
        flex: 1,
      },
    };
  },
};
