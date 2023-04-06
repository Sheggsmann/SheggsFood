import { StyleSheet, Image, SafeAreaView, TouchableOpacity } from "react-native";
import { AuthStackScreenProps } from "@src/types";
import { View } from "@components/Themed";
import { Button, GradientButton, IconButton } from "@components/Button";
import { Sizes } from "@constants/Theme";
import useColorScheme from "@hooks/useColorScheme";
import Colors from "@constants/Colors";
import Styles from "@constants/Styles";
import Images from "@constants/Images";
import FigText from "@components/StyledText";

export default function SetLocation({ navigation }: AuthStackScreenProps<"SetLocation">) {
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
            Set Your Location
          </FigText>

          {/* Header subtitle */}
          <FigText style={Styles.g.authHeaderText}>
            This data will be displayed in your{"\n"}account profile for security
          </FigText>

          {/* Location */}
          <View style={styles.locationCard}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image
                source={Images.pinLogo}
                style={{ width: Sizes.icon * 1.6, height: Sizes.icon * 1.6 }}
              />
              <FigText weight="medium" style={{ marginLeft: Sizes.medium, fontSize: Sizes.font }}>
                Your Location
              </FigText>
            </View>
          </View>

          <Button
            text="Set Location"
            onPress={() => console.log("Set Location")}
            containerStyle={styles.locationBtn}
          />
        </View>

        <GradientButton
          text="Next"
          containerStyle={styles.button}
          onPress={() =>
            navigation.navigate("Success", {
              successText: "Your Profile Is Ready To Use",
              buttonText: "Try Order",
            })
          }
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
  locationCard: {
    marginTop: Sizes.medium,
    backgroundColor: "green",
  },
  locationBtn: {
    width: "100%",
    backgroundColor: Colors.lightGrey,
    alignItems: "center",
    justifyContent: "center",
    marginTop: Sizes.medium,
  },
});
