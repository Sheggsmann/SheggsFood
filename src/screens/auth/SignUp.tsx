import { useState } from "react";
import {
  StyleSheet,
  ImageBackground,
  Image,
  KeyboardAvoidingView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { AuthStackScreenProps } from "@src/types";
import { View } from "@components/Themed";
import { GradientButton } from "@components/Button";
import { Input } from "@components/Input";
import { Sizes } from "@constants/Theme";
import CheckBox from "@components/CheckBox";
import Device from "@constants/Device";
import useColorScheme from "@hooks/useColorScheme";
import Colors from "@constants/Colors";
import Styles from "@constants/Styles";
import Images from "@constants/Images";
import Link from "@components/Link";
import FigText from "@components/StyledText";

export default function SignUp({ navigation }: AuthStackScreenProps<"SignUp">) {
  const colorScheme = useColorScheme();

  const [passwordVisible, setPasswordVisible] = useState(true);
  const [persistSignIn, setPersistSignIn] = useState(true);
  const [newsletter, setNewsletter] = useState(true);

  return (
    <View style={[Styles.mode(colorScheme).container]}>
      <ImageBackground
        source={colorScheme === "light" ? Images.patternWhite : Images.pattern}
        style={Styles.imageBG}
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
              Sign Up For Free
            </FigText>

            {/* Form Container */}
            <View style={styles.formContainer}>
              <View style={styles.form}>
                <Input
                  placeholder="Username"
                  icon="profile"
                  autoCapitalize="words"
                  containerStyle={{
                    marginBottom: Sizes.small,
                    // borderWidth: 1,
                  }}
                />
                <Input
                  placeholder="Email"
                  inputMode="email"
                  keyboardType="email-address"
                  autoCorrect={false}
                  spellCheck={false}
                  autoCapitalize="none"
                  icon="message"
                  containerStyle={{
                    marginBottom: Sizes.small,
                  }}
                />
                <Input
                  placeholder="Password"
                  icon="lock"
                  rightIcon="show"
                  rightIconPressed={() => setPasswordVisible((prev) => !prev)}
                  secureTextEntry={passwordVisible}
                  autoCapitalize="none"
                  spellCheck={false}
                />

                {/* Check Boxes */}
                <TouchableOpacity
                  style={[styles.checkContainer, { marginTop: Sizes.medium }]}
                  activeOpacity={Styles.activeOpacity}
                  onPress={() => setPersistSignIn((prev) => !prev)}
                >
                  <CheckBox
                    checked={persistSignIn}
                    onPress={() => setPersistSignIn((prev) => !prev)}
                  />
                  <FigText
                    weight="regular"
                    style={styles.checkText}
                    lightColor={Colors.light.text2}
                    darkColor={Colors.dark.text2}
                  >
                    Keep Me Signed In
                  </FigText>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.checkContainer}
                  activeOpacity={Styles.activeOpacity}
                  onPress={() => setNewsletter((prev) => !prev)}
                >
                  <CheckBox checked={newsletter} onPress={() => setNewsletter((prev) => !prev)} />
                  <FigText
                    weight="regular"
                    style={styles.checkText}
                    lightColor={Colors.light.text2}
                    darkColor={Colors.dark.text2}
                  >
                    Email Me About Special Pricing
                  </FigText>
                </TouchableOpacity>
              </View>

              {/* Button */}
              <GradientButton
                text="Create Account"
                onPress={() => navigation.navigate("UserProfile")}
                containerStyle={styles.button}
              />

              {/* Link */}
              <Link
                text="already have an account?"
                style={{
                  fontSize: Sizes.smallFont,
                  color: Colors.primary,
                  textDecorationColor: Colors.primary,
                  textDecorationLine: "underline",
                  marginTop: Sizes.large,
                  alignSelf: "center",
                }}
                onPress={() => navigation.navigate("SignIn")}
              />
            </View>
          </KeyboardAvoidingView>
        </ScrollView>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
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
  form: {},
  checkContainer: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 5,
    marginTop: Sizes.small,
  },
  checkText: {
    fontSize: Sizes.smallFont,
  },
  button: {
    marginTop: Sizes.xxLarge,
    alignSelf: "center",
    minWidth: Device.width * 0.5,
  },
});
