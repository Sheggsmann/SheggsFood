import { useState } from "react";
import { StyleSheet, Image, KeyboardAvoidingView, ScrollView, SafeAreaView } from "react-native";
import { AuthStackScreenProps } from "@src/types";
import { View } from "@components/Themed";
import { GradientButton, IconButton } from "@components/Button";
import { Input } from "@components/Input";
import useColorScheme from "@hooks/useColorScheme";
import Styles from "@constants/Styles";
import Images from "@constants/Images";
import FigText from "@components/StyledText";
import Colors from "@constants/Colors";

export default function ResetPassword({ navigation }: AuthStackScreenProps<"ResetPassword">) {
  const colorScheme = useColorScheme();
  const darkMode = colorScheme === "dark";

  const [field1Visible, setField1Visible] = useState(true);
  const [field2Visible, setField2Visible] = useState(true);

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
        <KeyboardAvoidingView style={{ flex: 1 }} behavior="height">
          <ScrollView
            style={styles.form}
            keyboardDismissMode="interactive"
            showsVerticalScrollIndicator={false}
          >
            {/* Header Text */}
            <FigText weight="medium" style={Styles.g.authHeaderTitle}>
              Reset your password{"\n"}here
            </FigText>

            {/* Header subtitle */}
            <FigText style={Styles.g.authHeaderText}>
              Enter your new password to{"\n"}secure your account
            </FigText>

            {/* Form */}
            <Input
              placeholder="New Password"
              secureTextEntry={field1Visible}
              containerStyle={Styles.g.formSpacing}
              rightIcon="show"
              rightIconPressed={() => setField1Visible((prev) => !prev)}
              rightIconStyle={{
                tintColor: !field1Visible
                  ? Colors.primary
                  : !darkMode
                  ? Colors.light.text2
                  : undefined,
              }}
            />
            <Input
              placeholder="Confirm Password"
              secureTextEntry={field2Visible}
              containerStyle={Styles.g.formSpacing}
              rightIcon="show"
              rightIconPressed={() => setField2Visible((prev) => !prev)}
              rightIconStyle={{
                tintColor: !field2Visible
                  ? Colors.primary
                  : !darkMode
                  ? Colors.light.text2
                  : undefined,
              }}
            />
          </ScrollView>
        </KeyboardAvoidingView>

        <GradientButton
          text="Next"
          containerStyle={styles.button}
          onPress={() => {
            navigation.navigate("Success", {
              successText: "Password reset successful",
              buttonText: "Back",
            });
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
});
