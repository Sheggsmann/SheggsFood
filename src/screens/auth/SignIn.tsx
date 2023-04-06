import { StyleSheet, ImageBackground, Image, KeyboardAvoidingView, ScrollView } from "react-native";
import { View } from "@components/Themed";
import { AuthStackScreenProps, RootStackScreenprops } from "@src/types";
import { GradientButton, IconTextButton } from "@components/Button";
import { Input } from "@components/Input";
import { Sizes } from "@constants/Theme";
import Device from "@constants/Device";
import useColorScheme from "@hooks/useColorScheme";
import Colors from "@constants/Colors";
import Styles from "@constants/Styles";
import Images from "@constants/Images";
import Link from "@components/Link";
import FigText from "@components/StyledText";

export default function SignIn({ navigation }: RootStackScreenprops<"AuthNavigation">) {
  const colorScheme = useColorScheme();

  return (
    <View style={[Styles.mode(colorScheme).container]}>
      <ImageBackground
        source={colorScheme === "light" ? Images.patternWhite : Images.pattern}
        style={styles.imageBG}
      >
        <ScrollView style={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
          <KeyboardAvoidingView style={{ flex: 1 }}>
            {/* Logo Container */}
            <View style={styles.logoContainer}>
              <Image
                source={colorScheme === "dark" ? Images.logo : Images.logoLight}
                style={styles.logo}
              />
            </View>

            <FigText
              style={{ fontSize: Sizes.titleFont, marginBottom: Sizes.large, textAlign: "center" }}
            >
              Login To Your Account
            </FigText>

            {/* Form Container */}
            <View style={styles.formContainer}>
              <View style={styles.form}>
                <Input
                  placeholder="Email"
                  keyboardType="email-address"
                  autoCorrect={false}
                  autoCapitalize="none"
                  containerStyle={{
                    marginBottom: Sizes.small,
                  }}
                />
                <Input placeholder="Password" secureTextEntry />

                <FigText style={{ marginTop: Sizes.large }}>Or Continue With</FigText>

                {/* Social Auth Buttons */}
                <View
                  style={{
                    width: "100%",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginTop: Sizes.large,
                    columnGap: Sizes.xLarge,
                  }}
                >
                  <IconTextButton
                    text="Facebook"
                    image={Images.facebook_icon}
                    onPress={() => console.log("SignIn with Facebook")}
                    containerStyle={{ backgroundColor: Colors.lightGrey, flex: 1 }}
                  />
                  <IconTextButton
                    text="Google"
                    image={Images.google_icon}
                    onPress={() => console.log("SignIn with Google")}
                    containerStyle={{ backgroundColor: Colors.lightGrey, flex: 1 }}
                  />
                </View>

                <Link
                  text="Forgot Your Password?"
                  style={{
                    fontSize: Sizes.smallFont,
                    color: Colors.primary,
                    textDecorationColor: Colors.primary,
                    textDecorationLine: "underline",
                    marginTop: Sizes.xLarge,
                  }}
                  onPress={() => navigation.navigate("AuthNavigation", { screen: "Via" })}
                />
              </View>

              {/* Button */}
              <GradientButton
                text="Login"
                onPress={() => navigation.replace("AppNavigation", { screen: "HomeNavigator" })}
                containerStyle={styles.button}
              />
            </View>
          </KeyboardAvoidingView>
        </ScrollView>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  imageBG: {
    flex: 1,
  },
  logoContainer: {
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: Device.width * 0.6,
    height: Device.height * 0.4,
    resizeMode: "contain",
  },
  formContainer: {
    flex: 1,
    flexDirection: "column",
    padding: Sizes.medium,
    paddingHorizontal: Sizes.xLarge,
    paddingBottom: Sizes.xxLarge,
  },
  form: {
    alignItems: "center",
  },
  button: {
    marginTop: Sizes.xxLarge,
    alignSelf: "center",
  },
});
