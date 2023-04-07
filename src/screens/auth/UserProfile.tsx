import { StyleSheet, Image, KeyboardAvoidingView, ScrollView, SafeAreaView } from "react-native";
import { AuthStackScreenProps } from "@src/types";
import { View } from "@components/Themed";
import { GradientButton, IconButton } from "@components/Button";
import { Input } from "@components/Input";
import { Sizes } from "@constants/Theme";
import useColorScheme from "@hooks/useColorScheme";
import Styles from "@constants/Styles";
import Images from "@constants/Images";
import FigText from "@components/StyledText";

export default function UserProfile({ navigation }: AuthStackScreenProps<"UserProfile">) {
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
        <KeyboardAvoidingView style={{ flex: 1 }} behavior="height">
          <ScrollView
            style={styles.form}
            keyboardDismissMode="interactive"
            showsVerticalScrollIndicator={false}
          >
            {/* Header Text */}
            <FigText weight="medium" style={Styles.g.authHeaderTitle}>
              Fill in your bio to get{"\n"}started
            </FigText>

            {/* Header subtitle */}
            <FigText style={Styles.g.authHeaderText}>
              This data will be displayed in your{"\n"}account profile for security
            </FigText>

            {/* Form */}
            <Input placeholder="First Name" containerStyle={Styles.g.formSpacing} />
            <Input placeholder="Last Name" containerStyle={Styles.g.formSpacing} />
            <Input placeholder="Mobile Number" keyboardType="number-pad" />
          </ScrollView>
        </KeyboardAvoidingView>

        <GradientButton
          text="Next"
          containerStyle={styles.button}
          onPress={() => {
            navigation.navigate("PaymentMethod");
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
