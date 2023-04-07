import { View, StyleSheet, ImageBackground } from "react-native";
import FigText from "@components/StyledText";
import Device from "@constants/Device";
import Colors from "@constants/Colors";
import { Sizes } from "@constants/Theme";
import Images from "@constants/Images";
import { LinearGradient } from "expo-linear-gradient";
import { Button } from "@components/Button";
import Styles from "@constants/Styles";
import { useColorScheme } from "react-native";

type PriceInfoprops = {
  onButtonPress?: () => void;
};

export default function PriceInfo({ onButtonPress }: PriceInfoprops) {
  const colorScheme = useColorScheme();

  const gradientColors =
    colorScheme === "dark"
      ? [Colors.primary, Colors.tintPrimary]
      : [Colors.primary, Colors.primary];

  return (
    <LinearGradient start={{ x: 0.05, y: 0.3 }} colors={gradientColors} style={styles.container}>
      <ImageBackground
        source={Images.pattern2}
        resizeMode="cover"
        style={{
          borderRadius: Sizes.radius,
          width: "100%",
          height: "100%",
          padding: Sizes.small,
          justifyContent: "space-between",
        }}
      >
        {/* <View style={styles.container}> */}
        {/* </View> */}
        <View style={styles.row}>
          <FigText style={styles.text}>Sub-Total</FigText>
          <FigText style={styles.text}>120 $</FigText>
        </View>
        <View style={styles.row}>
          <FigText style={styles.text}>Delivery Charge</FigText>
          <FigText style={styles.text}>10 $</FigText>
        </View>
        <View style={styles.row}>
          <FigText style={styles.text}>Discount</FigText>
          <FigText style={styles.text}>20 $</FigText>
        </View>

        <View style={[styles.row, styles.totalRow]}>
          <FigText style={{ fontSize: Sizes.mediumFont, color: "#fff" }}>Total</FigText>
          <FigText style={{ fontSize: Sizes.mediumFont, color: "#fff" }}>150$</FigText>
        </View>

        <Button
          text="Place My Order"
          containerStyle={{ backgroundColor: "#fff", width: "100%" }}
          textStyle={{ color: Colors.primary }}
          onPress={() => {
            onButtonPress && onButtonPress();
          }}
        />
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignSelf: "center",
    overflow: "hidden",
    backgroundColor: Colors.tintPrimary,
    borderRadius: Sizes.radius,
    marginHorizontal: Sizes.large,
    height: Device.isSmall ? 160 : 190,
  },

  text: {
    fontSize: Sizes.smallFont,
    color: "#fff",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  totalRow: {
    marginVertical: Sizes.xxSmall,
  },
});
