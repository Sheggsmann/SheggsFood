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

export default function RateFood({ navigation }: AppStackScreenProps<"RateFood">) {
  const colorScheme = useColorScheme();
  const insets = useSafeAreaInsets();

  const [rating, setRating] = useState(0);

  return (
    <Pressable
      style={[
        Styles.mode(colorScheme).container,
        { paddingBottom: insets.bottom | Sizes.bottomInset },
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
              <Image source={Images.food1} style={styles.image} />
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
            }}
          >
            <FigText style={{ fontSize: Sizes.titleFont }}>Thank You!</FigText>
            <FigText style={{ fontSize: Sizes.titleFont, marginTop: 2 }}>Enjoy Your Meal</FigText>
            <FigText style={{ fontSize: Sizes.font, marginTop: Sizes.xxLarge }}>
              Please rate your Food
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
              navigation.navigate("RateRestaurant");
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
    width: 170,
    height: 170,
    borderRadius: 85,
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
