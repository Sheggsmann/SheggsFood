import { ViewStyle, StyleSheet, Image } from "react-native";
import { View } from "@components/Themed";
import { Sizes } from "@constants/Theme";
import { GradientButton } from "@components/Button";
import { useNavigation } from "@react-navigation/native";
import Colors from "@constants/Colors";
import FigText from "@components/StyledText";
import Images from "@constants/Images";

type LocationFooterProps = {
  containerStyle?: ViewStyle;
};

export default function LocationFooter({ containerStyle }: LocationFooterProps) {
  const navigation = useNavigation();

  return (
    <View transparent style={[styles.container, containerStyle]}>
      <View style={styles.wrapper}>
        <FigText
          lightColor={Colors.light.text2}
          darkColor={Colors.dark.text2}
          style={{ fontSize: Sizes.font - 1 }}
        >
          Your Location
        </FigText>

        <View transparent style={styles.flex}>
          <Image source={Images.pinLogo} style={styles.logo} />
          <View transparent style={{ flex: 1 }}>
            <FigText style={{ fontSize: Sizes.font - 1 }}>
              4517 Washington Ave, Manchester Kentucky 34958
            </FigText>
          </View>
        </View>

        <GradientButton
          text="Set Location"
          containerStyle={{ width: "100%" }}
          onPress={() => navigation.navigate("AppNavigation", { screen: "TrackOrder" })}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingHorizontal: Sizes.large,
  },
  logo: {
    width: 35,
    height: 35,
  },
  wrapper: {
    padding: Sizes.medium,
    borderRadius: Sizes.radius,
  },
  flex: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: Sizes.medium,
    marginVertical: Sizes.medium,
  },
});
