import { StyleSheet, Image } from "react-native";
import { View } from "@components/Themed";
import { IOrder } from "@src/types";
import { IconButton } from "@components/Button";
import { trimText } from "@src/utils/functions";
import { Sizes } from "@constants/Theme";
import { useRef } from "react";
import FigText from "@components/StyledText";
import Swipeable from "react-native-gesture-handler/Swipeable";
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";
import Colors from "@constants/Colors";
import useColorScheme from "@hooks/useColorScheme";

const STEPPER_BTN_SIZE = 30;
const IMG_CONTAINER_SIZE = 60;
const MAX_TEXT_LENGTH = 25;

type StepperInputProps = {
  onIncrement: () => void;
  onDecrement: () => void;
  value: number;
};

function StepperInput({ value, onIncrement, onDecrement }: StepperInputProps) {
  return (
    <View
      transparent
      style={{
        flexDirection: "row",
        alignItems: "center",
        columnGap: Sizes.small,
        marginTop: Sizes.xxLarge,
      }}
    >
      <IconButton
        icon="minus"
        size={12}
        containerStyle={{ ...styles.stepperBtn, ...styles.minus }}
        onPress={onIncrement}
      />
      <FigText>{value}</FigText>
      <IconButton
        icon="plus"
        size={12}
        containerStyle={{ ...styles.stepperBtn, ...styles.plus }}
        onPress={onDecrement}
      />
    </View>
  );
}

type OrderItemProps = {
  data: IOrder;
  onIncrement: () => void;
  onDecrement: () => void;
  onDelete?: () => void;
};

export default function OrderItem({ data, onIncrement, onDecrement, onDelete }: OrderItemProps) {
  const colorScheme = useColorScheme();

  let r = useSharedValue(Sizes.radius);

  const swiperStyle = useAnimatedStyle(() => {
    return {
      borderTopRightRadius: r.value,
      borderBottomRightRadius: r.value,
    };
  });

  const ref = useRef<Swipeable | null>(null);

  return (
    <View style={{ paddingRight: Sizes.large }}>
      <Swipeable
        ref={ref}
        containerStyle={{
          width: "100%",
          height: 100,
          marginBottom: Sizes.medium,
          paddingLeft: Sizes.large,
        }}
        renderRightActions={() => {
          return (
            <View
              style={{
                height: 100,
                width: 100,
                backgroundColor: Colors.yellow,
                alignItems: "center",
                justifyContent: "center",
                borderTopRightRadius: Sizes.radius,
                borderBottomRightRadius: Sizes.radius,
              }}
            >
              <IconButton
                icon="trash"
                onPress={() => {
                  ref.current?.close();
                  onDelete && onDelete();
                }}
                containerStyle={{ backgroundColor: "transparent", flex: 1, width: 100 }}
              />
            </View>
          );
        }}
        overshootRight={false}
        onSwipeableWillOpen={() => {
          r.value = withTiming(0);
        }}
        onSwipeableWillClose={() => {
          r.value = withTiming(Sizes.radius);
        }}
      >
        <Animated.View
          style={[
            {
              borderRadius: Sizes.radius,
              height: "100%",
              backgroundColor: colorScheme === "dark" ? Colors.darkTint : Colors.light.chatBg,
              paddingHorizontal: Sizes.small,
              flexDirection: "row",
              alignItems: "center",
            },
            swiperStyle,
          ]}
        >
          <View transparent style={styles.imgContainer}>
            <Image source={data.food.image} style={styles.img} />
          </View>

          <View transparent style={styles.txtContainer}>
            <FigText style={{ fontSize: Sizes.smallFont }}>
              {trimText(data.food.name, MAX_TEXT_LENGTH)}
            </FigText>
            <FigText
              lightColor={Colors.light.text2}
              darkColor={Colors.dark.text2}
              style={{ fontSize: Sizes.smallFont, marginVertical: 4 }}
            >
              {trimText(data.restaurant.name, MAX_TEXT_LENGTH)}
            </FigText>
            <FigText style={{ fontSize: Sizes.mediumFont, color: Colors.primary }}>
              $ {data.food.price}
            </FigText>
          </View>

          <StepperInput onIncrement={onIncrement} onDecrement={onDecrement} value={data.quantity} />
        </Animated.View>
      </Swipeable>
    </View>
  );
}

const styles = StyleSheet.create({
  stepperBtn: {
    width: STEPPER_BTN_SIZE,
    height: STEPPER_BTN_SIZE,
    borderRadius: 8,
  },
  plus: {
    backgroundColor: Colors.primary,
  },
  minus: {
    backgroundColor: Colors.tintPrimary,
  },
  imgContainer: {
    width: IMG_CONTAINER_SIZE,
    height: IMG_CONTAINER_SIZE,
    borderRadius: Sizes.radius,
  },
  img: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  txtContainer: {
    paddingHorizontal: Sizes.small,
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
  },
});
