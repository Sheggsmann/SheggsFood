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

export default function PaymentMethod({ navigation }: AuthStackScreenProps<"PaymentMethod">) {
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

        <View transparent style={styles.form}>
          {/* Header Text */}
          <FigText weight="medium" style={Styles.g.authHeaderTitle}>
            Payment Method
          </FigText>

          {/* Header subtitle */}
          <FigText style={Styles.g.authHeaderText}>
            This data will be displayed in your{"\n"}account profile for security
          </FigText>

          {/* Form */}
          <TouchableOpacity style={styles.paymentCard} activeOpacity={Styles.activeOpacity}>
            <Image
              source={colorScheme === "dark" ? Images.paypal : Images.paypalLight}
              style={styles.paymentCardImg}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.paymentCard} activeOpacity={Styles.activeOpacity}>
            <Image
              source={colorScheme === "dark" ? Images.visa : Images.visaLight}
              style={styles.paymentCardImg}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.paymentCard} activeOpacity={Styles.activeOpacity}>
            <Image
              source={colorScheme === "dark" ? Images.payoneer : Images.payoneerLight}
              style={styles.paymentCardImg}
            />
          </TouchableOpacity>
        </View>

        <GradientButton
          text="Next"
          containerStyle={styles.button}
          onPress={() => {
            navigation.navigate("UploadPhoto");
          }}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  form: {
    flex: 1,
  },
  button: {
    alignSelf: "center",
  },
  paymentCard: {
    width: "100%",
    height: 75,
    backgroundColor: Colors.lightGrey,
    marginBottom: Sizes.medium,
    borderRadius: Sizes.radius,
    alignItems: "center",
    justifyContent: "center",
  },
  paymentCardImg: {
    width: 100,
    resizeMode: "contain",
  },
});
