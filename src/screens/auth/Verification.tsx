import { useState } from "react";
import { StyleSheet, Image, SafeAreaView, ScrollView } from "react-native";
import { AuthStackScreenProps } from "@src/types";
import { View } from "@components/Themed";
import { GradientButton, IconButton } from "@components/Button";
import { secondsToMin } from "@src/utils/time";
import OtpInput from "@components/OtpInput";
import useInterval from "@hooks/useInterval";
import useColorScheme from "@hooks/useColorScheme";
import Styles from "@constants/Styles";
import Images from "@constants/Images";
import FigText from "@components/StyledText";

export default function Verification({ navigation }: AuthStackScreenProps<"Verification">) {
  const colorScheme = useColorScheme();
  const count = useInterval(90);

  const [code, setCode] = useState("");

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
        <ScrollView style={[Styles.g.transparent, { flex: 1 }]}>
          {/* Header Text */}
          <FigText weight="medium" style={Styles.g.authHeaderTitle}>
            Enter 4-digit{"\n"}Verification Code
          </FigText>

          {/* Header subtitle */}
          <FigText style={Styles.g.authHeaderText}>
            Code sent to +23480888****, This code{"\n"} will expire in {secondsToMin(count)}
          </FigText>

          {/* OTP */}
          <OtpInput onChange={(c: string) => setCode(c)} />
        </ScrollView>

        <GradientButton
          text="Next"
          containerStyle={styles.button}
          onPress={() => navigation.navigate("ResetPassword")}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  button: {
    alignSelf: "center",
  },
});
