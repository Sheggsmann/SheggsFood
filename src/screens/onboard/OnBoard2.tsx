import { StyleSheet, Image } from "react-native";
import { AuthStackScreenProps } from "@src/types";
import { View } from "@components/Themed";
import { GradientButton } from "@components/Button";
import { Sizes } from "@constants/Theme";
import FigText from "@components/StyledText";
import Styles from "@constants/Styles";
import Images from "@constants/Images";
import Device from "@constants/Device";
import useColorScheme from "@hooks/useColorScheme";

export default function OnBoard2({ navigation }: AuthStackScreenProps<"OnBoard2">) {
  const colorScheme = useColorScheme();

  return (
    <View style={[Styles.mode(colorScheme).container]}>
      <View style={styles.imageContainer}>
        <Image
          source={colorScheme === "dark" ? Images.illustration2 : Images.illustrationLight2}
          style={{ width: Device.width, resizeMode: "contain" }}
        />
      </View>
      <View style={styles.bottomContainer}>
        <FigText weight="bold" style={styles.title}>
          SheggsFood is Where Your{"\n"}Comfort Food Lives
        </FigText>
        <FigText weight="regular" style={styles.subtitle}>
          Enjoy a fast and smooth food delivery at{"\n"}your doorstep
        </FigText>
        <GradientButton
          text="Next"
          onPress={() => navigation.navigate("SignUp")}
          containerStyle={styles.buttonStyle}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    textAlign: "center",
    lineHeight: 30,
    fontSize: Sizes.titleFont,
  },
  subtitle: {
    fontSize: Sizes.smallFont,
    textAlign: "center",
    lineHeight: 20,
    marginTop: 12,
  },
  imageContainer: {
    width: Device.width,
    height: Device.height * 0.66,
    alignItems: "center",
    justifyContent: "center",
  },
  bottomContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  buttonStyle: {
    marginTop: 30,
  },
});
