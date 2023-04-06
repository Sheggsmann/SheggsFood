import { StyleSheet, ImageBackground } from "react-native";
import { AuthStackScreenProps } from "@src/types";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { View } from "@components/Themed";
import { GradientButton } from "@components/Button";
import { Sizes } from "@constants/Theme";
import useColorScheme from "@hooks/useColorScheme";
import Colors from "@constants/Colors";
import Styles from "@constants/Styles";
import Images from "@constants/Images";
import Animations from "@constants/Animations";
import FigText from "@components/StyledText";
import LottieView from "lottie-react-native";
import Device from "@constants/Device";

export default function Success({ navigation, route }: AuthStackScreenProps<"Success">) {
  const { successText, buttonText, destScreen } = route.params;
  const colorScheme = useColorScheme();
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        Styles.mode(colorScheme).container,
        { paddingBottom: insets.bottom || Sizes.bottomInset },
      ]}
    >
      <ImageBackground
        source={colorScheme === "light" ? Images.patternWhite : Images.pattern}
        style={Styles.imageBG}
      >
        <View
          style={[
            Styles.g.transparent,
            { flex: 1, alignItems: "center", justifyContent: "center", marginTop: -150 },
          ]}
        >
          <LottieView
            autoPlay
            loop={false}
            style={{ width: Device.width, height: Device.width }}
            source={Animations.successAnimation}
          />
          <View style={[Styles.g.transparent, { marginTop: -100, alignItems: "center" }]}>
            <FigText
              style={{
                fontSize: Sizes.bigFont,
                color: Colors.lightPrimary,
                marginVertical: Sizes.small,
              }}
            >
              Congrats!
            </FigText>
            <FigText style={{ fontSize: Sizes.large }}>{successText}</FigText>
          </View>
        </View>

        {/* Take User to the main app navigation */}
        <GradientButton
          text={buttonText}
          containerStyle={styles.button}
          onPress={() => {
            destScreen ? navigation.navigate(destScreen as any) : navigation.goBack();
          }}
        />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    alignSelf: "center",
  },
});
