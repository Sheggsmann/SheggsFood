import { StyleSheet, Image, SafeAreaView, TouchableOpacity } from "react-native";
import { AuthStackScreenProps } from "@src/types";
import { View } from "@components/Themed";
import { GradientButton, IconButton } from "@components/Button";
import { Sizes } from "@constants/Theme";
import useColorScheme from "@hooks/useColorScheme";
import Colors from "@constants/Colors";
import Styles from "@constants/Styles";
import Images from "@constants/Images";
import FigText from "@components/StyledText";

export default function UploadPhoto({ navigation }: AuthStackScreenProps<"UploadPhoto">) {
  const colorScheme = useColorScheme();

  return (
    <SafeAreaView style={[Styles.mode(colorScheme).screen]}>
      <Image source={Images.pattern1} style={Styles.g.imageBg2} />

      <View transparent style={[Styles.g.screenPadding, Styles.vPadding]}>
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

          {/* Form */}
          <TouchableOpacity
            style={styles.sourceCard}
            activeOpacity={Styles.activeOpacity}
            onPress={() => navigation.navigate("UploadPreview")}
          >
            <Image source={Images.gallery} style={styles.sourceCardImg} />
            <FigText style={{ fontSize: Sizes.font }}>From Gallery</FigText>
          </TouchableOpacity>
          <TouchableOpacity style={styles.sourceCard} activeOpacity={Styles.activeOpacity}>
            <Image source={Images.camera} style={styles.sourceCardImg} />
            <FigText style={{ fontSize: Sizes.font }}>Take Photo</FigText>
          </TouchableOpacity>
        </View>

        <GradientButton
          text="Next"
          containerStyle={styles.button}
          onPress={() => {
            navigation.navigate("UploadPreview");
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
});
