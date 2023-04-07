import { forwardRef, useLayoutEffect, useCallback } from "react";
import { StyleSheet, ViewStyle } from "react-native";
import { View } from "./Themed";
import { PanGestureHandler, PanGestureHandlerGestureEvent } from "react-native-gesture-handler";
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withTiming,
  runOnJS,
} from "react-native-reanimated";
import { Sizes } from "@constants/Theme";
import Device from "@constants/Device";
import Colors from "@constants/Colors";

const MAX_HEIGHT = Device.height * 0.9;
const MIN_HEIGHT = Device.height * 0.2;

type BottomSheetProps = {
  maxHeight?: number;
  minHeight?: number;
  children?: React.ReactNode;
  containerStyle?: ViewStyle;
  onMaxHeightReached?: () => void;
  onMinHeightReached?: () => void;
};

export type BottomSheetRefProps = {
  scrollTo: (destionation: number) => void;
};

const BottomSheet = forwardRef<BottomSheetRefProps, BottomSheetProps>(
  (
    {
      maxHeight = MAX_HEIGHT,
      minHeight = MIN_HEIGHT,
      children,
      containerStyle,
      onMaxHeightReached,
      onMinHeightReached,
    },
    ref
  ) => {
    const translateY = useSharedValue(0);

    const clampedTranslateY = useDerivedValue(() => {
      const v = translateY.value;
      const yMaxOffset = Device.height - maxHeight;
      const yMinOffset = Device.height - minHeight;

      if (v > yMinOffset) return yMinOffset;
      if (v < yMaxOffset) return yMaxOffset;
      return v;
    }, []);

    // Make use of useCallback
    const scrollTo = useCallback((destination: number) => {
      "worklet";
      translateY.value = withTiming(destination);
    }, []);

    const panGestureEvent = useAnimatedGestureHandler<
      PanGestureHandlerGestureEvent,
      { translationY: number }
    >({
      onStart: (_, ctx) => {
        ctx.translationY = clampedTranslateY.value;
      },
      onActive: (event, ctx) => {
        translateY.value = event.translationY + ctx.translationY;
      },
      onEnd: () => {
        if (clampedTranslateY.value <= Device.height - maxHeight) {
          onMaxHeightReached && runOnJS(onMaxHeightReached)();
        }

        if (clampedTranslateY.value >= Device.height - minHeight) {
          onMinHeightReached && runOnJS(onMinHeightReached)();
        }
      },
    });

    const rStyle = useAnimatedStyle(() => {
      return {
        transform: [{ translateY: clampedTranslateY.value }],
      };
    });

    useLayoutEffect(() => {
      scrollTo(Device.height - minHeight);
    }, []);

    return (
      <PanGestureHandler onGestureEvent={panGestureEvent}>
        <Animated.View style={[styles.container, { ...containerStyle }, rStyle]}>
          <View
            lightColor={Colors.lightSecondary}
            darkColor={Colors.darkTint}
            style={styles.line}
          />
          {children}
        </Animated.View>
      </PanGestureHandler>
    );
  }
);

export default BottomSheet;

const styles = StyleSheet.create({
  container: {
    top: 0,
    width: "100%",
    height: Device.height,
    position: "absolute",
    borderTopRightRadius: Sizes.radius * 2.4,
    borderTopLeftRadius: Sizes.radius * 2.4,
    zIndex: 2,
  },
  line: {
    width: 70,
    height: 8,
    borderRadius: 4,
    marginVertical: Sizes.large,
    alignSelf: "center",
  },
});
