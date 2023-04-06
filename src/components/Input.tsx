import { ViewStyle, Image, Pressable, ImageStyle } from "react-native";
import { TextInput, TextInputProps } from "./Themed";
import { View } from "./Themed";
import { Font, Sizes } from "@constants/Theme";
import Icon from "@constants/Icon";
import Colors from "@constants/Colors";
import useColorScheme from "@hooks/useColorScheme";
import Device from "@constants/Device";

type InputProps = TextInputProps & {
  placeholder?: string;
  icon?: keyof typeof Icon;
  rightIcon?: keyof typeof Icon;
  rightIconPressed?: () => void;
  rightIconStyle?: ImageStyle;
  containerStyle?: ViewStyle;
  inputStyle?: ViewStyle;
};

export function Input({
  placeholder,
  icon,
  rightIcon,
  rightIconPressed,
  rightIconStyle,
  containerStyle,
  inputStyle,
  ...otherTextProps
}: InputProps) {
  const colorScheme = useColorScheme();

  return (
    <View
      style={[
        {
          width: "100%",
          backgroundColor: colorScheme === "light" ? Colors.grey : Colors.lightGrey,
          height: Device.isSmall ? 50 : 57,
          minWidth: 100,
          borderRadius: Sizes.radius,
          overflow: "hidden",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        },
        containerStyle,
      ]}
    >
      {icon && (
        <Image
          source={Icon[icon]}
          style={{ width: Sizes.icon, height: Sizes.icon, marginHorizontal: Sizes.small }}
        />
      )}
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={
          colorScheme === "dark" ? Colors.dark.placeholder : Colors.light.placeholder
        }
        style={[
          {
            flex: 1,
            alignItems: "center",
            fontFamily: Font.medium,
            fontSize: Sizes.font,
            padding: Sizes.medium,
            paddingHorizontal: icon ? 0 : Sizes.medium,
          },
          inputStyle,
        ]}
        {...otherTextProps}
      />
      {rightIcon && (
        <Pressable
          style={{
            height: "100%",
            alignItems: "center",
            justifyContent: "center",
          }}
          onPress={rightIconPressed}
        >
          <Image
            source={Icon[rightIcon]}
            style={{
              width: Sizes.icon,
              height: Sizes.icon,
              marginHorizontal: Sizes.small,
              ...rightIconStyle,
            }}
          />
        </Pressable>
      )}
    </View>
  );
}
