import { StyleSheet, Image, SafeAreaView } from "react-native";
import { AuthStackScreenProps } from "@src/types";
import { View } from "@components/Themed";
import { GradientButton, IconButton } from "@components/Button";
import { Sizes } from "@constants/Theme";
import useColorScheme from "@hooks/useColorScheme";
import Colors from "@constants/Colors";
import Styles from "@constants/Styles";
import Images from "@constants/Images";
import FigText from "@components/StyledText";

export default function UploadPreview({ navigation }: AuthStackScreenProps<"UploadPreview">) {
  const colorScheme = useColorScheme();

  return (
    <SafeAreaView style={[Styles.mode(colorScheme).screen]}>
      <Image source={Images.pattern1} style={Styles.g.imageBg2} />

      <View style={[Styles.g.screenPadding, Styles.g.transparent]}>
        {/* Header Button */}
        <IconButton
          icon="back"
          onPress={() => {
            navigation.goBack();
          }}
        />
        <View style={styles.form}>
          {/* Header Text */}
          <FigText weight="medium" style={Styles.g.authHeaderTitle}>
            Upload Your Photo{"\n"}Profile
          </FigText>

          {/* Header subtitle */}
          <FigText style={Styles.g.authHeaderText}>
            This data will be displayed in your{"\n"}account profile for security
          </FigText>

          {/* Profile */}
          <View style={{ alignItems: "center", marginTop: Sizes.medium }}>
            <View style={{ borderRadius: Sizes.radius, overflow: "hidden" }}>
              <Image source={Images.user4} />
              <IconButton
                icon="closeIcon"
                containerStyle={styles.closeIconBtn}
                onPress={() => console.log("Close Image")}
              />
            </View>
          </View>
        </View>

        <GradientButton
          text="Next"
          containerStyle={styles.button}
          onPress={() => {
            navigation.navigate("SetLocation");
          }}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  form: {
    flex: 1,
    ...Styles.g.transparent,
  },
  button: {
    alignSelf: "center",
  },
  sourceCard: {
    width: "100%",
    height: 130,
    backgroundColor: Colors.lightGrey,
    marginBottom: Sizes.medium,
    borderRadius: Sizes.radius,
    alignItems: "center",
    justifyContent: "center",
    padding: Sizes.xxLarge,
  },
  sourceCardImg: {
    width: 60,
    height: 80,
    resizeMode: "contain",
  },
  closeIconBtn: {
    width: 40,
    height: 40,
    borderRadius: 25,
    position: "absolute",
    top: 10,
    right: 10,
    backgroundColor: "rgba(255, 255, 255, 0.4)",
  },
});
