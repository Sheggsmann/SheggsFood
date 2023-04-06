import { useState } from "react";
import { StyleSheet, ImageBackground, Image } from "react-native";
import { AppStackScreenProps } from "@src/types";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { View } from "@components/Themed";
import { Sizes } from "@constants/Theme";
import { IconButton } from "@components/Button";
import useColorScheme from "@hooks/useColorScheme";
import Colors from "@constants/Colors";
import Styles from "@constants/Styles";
import Images from "@constants/Images";
import FigText from "@components/StyledText";
import Device from "@constants/Device";

export default function CallRinging({ navigation, route }: AppStackScreenProps<"CallRinging">) {
  const colorScheme = useColorScheme();
  const insets = useSafeAreaInsets();

  const user = route.params.user;

  const [ringing, setRinging] = useState(false);
  const [mute, setMute] = useState(false);

  const onCancel = () => {
    navigation.goBack();
  };

  const onMute = () => {
    setMute((prev) => !prev);
  };

  return (
    <View style={[Styles.mode(colorScheme).container, { paddingBottom: insets.bottom }]}>
      <ImageBackground
        source={colorScheme === "light" ? Images.patternWhite : Images.pattern}
        style={Styles.imageBG}
      >
        <View transparent style={{ flex: 1 }}>
          <View transparent style={{ flex: 0.8, justifyContent: "center", alignItems: "center" }}>
            <View style={styles.imageContainer}>
              <Image source={user.image} style={{ width: "100%", height: "100%" }} />
            </View>
            <FigText style={{ fontSize: Sizes.titleFont }}>{user.name}</FigText>
            <FigText style={{ fontSize: Sizes.font, marginTop: Sizes.medium }}>Ringing ...</FigText>
          </View>

          <View
            transparent
            style={{
              flex: 0.2,
              flexDirection: "row",
              columnGap: Sizes.xLarge,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <IconButton
              icon={mute ? "volumeOff" : "volumeUp"}
              onPress={onMute}
              containerStyle={{ ...styles.button, backgroundColor: Colors.tintPrimary }}
            />
            <IconButton
              icon="closeIcon"
              onPress={onCancel}
              containerStyle={{ ...styles.button, backgroundColor: Colors.error }}
            />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 70,
    height: 70,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 35,
  },
  flexCenter: {
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  imageContainer: {
    width: Device.width / 2.4,
    height: Device.width / 2.4,
    borderRadius: Device.width / 2.4,
    overflow: "hidden",
    marginBottom: Sizes.xLarge,
    borderWidth: 5,
    borderColor: Colors.primary,
    marginTop: Sizes.xxLarge * 2,
  },
});
