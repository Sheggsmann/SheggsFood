import { useState, useRef, useEffect } from "react";
import { StyleSheet, Keyboard, TextInput as DefaultTextInput } from "react-native";
import { View } from "./Themed";
import { Sizes } from "@constants/Theme";
import { codeFromMap } from "@src/utils/functions";
import Colors from "@constants/Colors";
import useColorScheme from "@hooks/useColorScheme";

type OtpInputProps = {
  onChange?: (c: string) => void;
};

type InputRef = DefaultTextInput | null;

export default function OtpInput({ onChange }: OtpInputProps) {
  const colorScheme = useColorScheme();

  const [codes, setCodes] = useState([-1, -1, -1, -1]);
  const refs = [
    useRef<InputRef>(null),
    useRef<InputRef>(null),
    useRef<InputRef>(null),
    useRef<InputRef>(null),
  ];

  useEffect(() => {
    const timeout = setTimeout(() => {
      refs[0]?.current?.focus();
    }, 500);

    return () => clearTimeout(timeout);
  }, []);

  const keyPressed = (index: number, text: string) => {
    if (text) {
      if (index !== codes.length - 1) {
        refs[index + 1].current?.focus();
      } else {
        Keyboard.dismiss();
      }
    }

    // Cancel Pressed
    if (!text && index > 0) {
      refs[index - 1].current?.focus();
    }

    setCodes((prev) => {
      const oldCodes = [...prev];

      if (text) {
        oldCodes[index] = parseInt(text);
      } else {
        oldCodes[index] = -1;
      }

      onChange && onChange(codeFromMap(oldCodes));
      return oldCodes;
    });
  };

  return (
    <View
      style={{
        width: "100%",
        height: 100,
        flexDirection: "row",
        backgroundColor: Colors.lightGrey,
        borderRadius: Sizes.radius,
        overflow: "hidden",
        columnGap: 2,
      }}
    >
      {codes.map((c, index) => (
        <DefaultTextInput
          onChangeText={(text) => keyPressed(index, text)}
          value={c === -1 ? "" : `${codes[index]}`}
          ref={refs[index]}
          key={index}
          style={[
            styles.input,
            { color: colorScheme === "light" ? Colors.light.text : Colors.dark.text },
          ]}
          keyboardType="number-pad"
          maxLength={1}
          selectionColor={colorScheme === "light" ? Colors.light.text : Colors.dark.text}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    fontSize: Sizes.bigFont,
  },
});
