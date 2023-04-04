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

export default function OnBoard1({ navigation }: AuthStackScreenProps<"OnBoard1">) {
  const colorScheme = useColorScheme();

  return (
    <View style={[Styles.mode(colorScheme).container]}>
      <View style={styles.imageContainer}>
        <Image
          source={colorScheme === "dark" ? Images.illustration1 : Images.illustrationLight1}
          style={{ width: Device.width, resizeMode: "contain" }}
        />
      </View>
      <View style={styles.bottomContainer}>
        <FigText weight="bold" style={styles.title}>
          Find your Comfort{"\n"}Food here
        </FigText>
        <FigText weight="regular" style={styles.subtitle}>
          Here you can find a chef or dish for{"\n"}every taste and color. Enjoy!
        </FigText>
        <GradientButton
          text="Next"
          onPress={() => navigation.navigate("OnBoard2")}
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
