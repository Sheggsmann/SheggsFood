import { useState } from "react";
import { StyleSheet, ImageBackground, Image, Pressable, Keyboard } from "react-native";
import { AppStackScreenProps } from "@src/types";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { View } from "@components/Themed";
import { Sizes } from "@constants/Theme";
import useColorScheme from "@hooks/useColorScheme";
import Feedback from "@components/orders/Feedback";
import Rating from "@components/orders/Rating";
import Colors from "@constants/Colors";
import Styles from "@constants/Styles";
import Images from "@constants/Images";
import FigText from "@components/StyledText";

export default function FinishOrder({ navigation, route }: AppStackScreenProps<"FinishOrder">) {
  const colorScheme = useColorScheme();
  const insets = useSafeAreaInsets();

  const [rating, setRating] = useState(0);

  return (
    <Pressable
      style={[
        Styles.mode(colorScheme).container,
        { paddingBottom: insets.bottom || Sizes.bottomInset },
      ]}
      onPress={() => {
        if (Keyboard.isVisible()) Keyboard.dismiss();
      }}
    >
      <ImageBackground
        source={colorScheme === "light" ? Images.patternWhite : Images.pattern}
        style={Styles.imageBG}
      >
        <View transparent style={{ flex: 1 }}>
          {/* Animated Image */}
          <View transparent style={styles.imageContainer}>
            <View transparent style={styles.imageWrapper}>
              <Image source={Images.user4} style={styles.image} />
            </View>
          </View>

          {/* Text */}
          <View
            transparent
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
              marginTop: 10,
              //   backgroundColor: "green",
            }}
          >
            <FigText style={{ fontSize: Sizes.titleFont }}>Thank You!</FigText>
            <FigText style={{ fontSize: Sizes.titleFont, marginTop: 2 }}>Order Completed</FigText>
            <FigText style={{ fontSize: Sizes.font, marginTop: Sizes.xxLarge }}>
              Please rate your last Driver
            </FigText>
          </View>

          {/* Ratings Component */}
          <Rating
            rating={rating}
            onChange={(value: number) => setRating(value)}
            style={{ flex: 0.4, ...Styles.screenPadding }}
          />

          {/* Feedback Component */}
          <Feedback
            onSubmit={() => {
              navigation.goBack();
            }}
            onSkip={() => {
              navigation.navigate("RateFood");
            }}
          />
        </View>
      </ImageBackground>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignSelf: "center",
  },
  imageContainer: {
    flex: 2,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  imageWrapper: {
    width: 150,
    height: 150,
    borderRadius: 75,
    overflow: "hidden",
    borderWidth: 5,
    borderColor: Colors.primary,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
});
