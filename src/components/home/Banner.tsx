import { Image, StyleSheet } from "react-native";
import { View } from "@components/Themed";
import { Sizes } from "@constants/Theme";
import { Button } from "@components/Button";
import Styles from "@constants/Styles";
import FigText from "@components/StyledText";
import Device from "@constants/Device";
import Colors from "@constants/Colors";

type BannerProps = {
  text: string;
  btnText: string;
  image: any;
  lightBg?: boolean;
  onPress: () => void;
};

export default function Banner({ text, btnText, image, lightBg, onPress }: BannerProps) {
  return (
    <View transparent style={styles.container}>
      <Image source={image} style={styles.img} />

      <View transparent style={{ flex: 0.65 }}></View>
      <View transparent style={{ flex: 0.6 }}>
        <FigText lightColor="#fff" darkColor="#fff" weight="medium" style={styles.text}>
          {text}
        </FigText>
        <Button
          text={btnText}
          textStyle={{ color: Colors.primary, fontSize: Sizes.smallFont }}
          onPress={() => onPress()}
          containerStyle={styles.btn}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    borderRadius: Sizes.radius,
    width: Device.width * 0.9,
    backgroundColor: "green",
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    textTransform: "capitalize",
  },
  img: {
    width: "100%",
    height: "100%",
    position: "absolute",
    resizeMode: "cover",
  },
  btn: {
    backgroundColor: "#fff",
    height: 40,
    width: 100,
    borderRadius: 10,
    marginTop: Sizes.xSmall,
    ...Styles.g.darkShadow,
  },
});
