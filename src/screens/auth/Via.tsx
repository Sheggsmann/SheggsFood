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
import Icon from "@constants/Icon";

export default function Via({ navigation }: AuthStackScreenProps<"Via">) {
  const colorScheme = useColorScheme();

  const renderDots = (): JSX.Element => {
    return (
      <View style={{ flexDirection: "row", backgroundColor: "transparent" }}>
        {new Array(4).fill(0).map((_, index) => (
          <View
            lightColor={Colors.dark.background}
            darkColor={Colors.light.background}
            style={styles.dot}
            key={index.toString()}
          />
        ))}
      </View>
    );
  };

  const renderContactDetail = (
    placeholder: string,
    contact: string,
    image: any,
    dotsCount?: number,
    onPress?: () => void
  ): JSX.Element => {
    return (
      <TouchableOpacity
        style={styles.contactCard}
        activeOpacity={Styles.activeOpacity}
        onPress={onPress}
      >
        <Image source={image} style={styles.contactCardImg} />
        <View style={Styles.g.transparent}>
          <FigText
            lightColor={Colors.light.text2}
            darkColor={Colors.dark.text2}
            style={styles.contactCardPlaceholder}
          >
            {placeholder}
          </FigText>

          <FigText style={styles.contactText}>
            {renderDots()}
            {"  "}
            {dotsCount && (
              <>
                {renderDots()}
                {"  "}
              </>
            )}
            {contact}
          </FigText>
        </View>
      </TouchableOpacity>
    );
  };

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
        <View style={{ flex: 1 }}>
          {/* Header Text */}
          <FigText weight="medium" style={Styles.g.authHeaderTitle}>
            Forgot Password?
          </FigText>

          {/* Header subtitle */}
          <FigText style={Styles.g.authHeaderText}>
            Which contact details should we{"\n"}use to reset your password
          </FigText>

          {/* Contact Details */}
          {renderContactDetail("Via sms:", "4325", Icon.chat, 2, () =>
            navigation.navigate("Verification")
          )}
          {renderContactDetail("Via email:", "@gmail.com", Icon.email, undefined, () =>
            navigation.navigate("Verification")
          )}
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  contactCard: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: Sizes.radius,
    backgroundColor: Colors.lightGrey,
    marginBottom: Sizes.medium,
    padding: Sizes.xLarge,
  },
  contactCardImg: {
    width: Sizes.icon * 2,
    height: Sizes.icon * 2,
    marginRight: Sizes.large,
  },
  contactCardPlaceholder: {
    marginBottom: Sizes.xSmall,
    fontSize: Sizes.font,
  },
  contactText: {
    fontSize: Sizes.font,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 10,
    marginRight: 2,
  },
  button: {
    alignSelf: "center",
  },
});
