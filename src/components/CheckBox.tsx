import { TouchableOpacity, Image } from "react-native";
import Colors from "@constants/Colors";
import Styles from "@constants/Styles";
import Icon from "@constants/Icon";
import { Haptics } from "@src/utils/haptics";

type CheckBoxProps = {
  checked: boolean;
  onPress?: () => void;
};

export default function CheckBox({ checked, onPress }: CheckBoxProps) {
  return (
    <TouchableOpacity
      activeOpacity={Styles.activeOpacity}
      style={{
        width: 25,
        height: 25,
        borderRadius: 40,
        borderWidth: 1,
        borderColor: Colors.primary,
        alignItems: "center",
        justifyContent: "center",
      }}
      onPress={() => {
        Haptics.medium();
        onPress && onPress();
      }}
    >
      {checked && <Image source={Icon.check} style={{ width: 26, height: 26 }} />}
    </TouchableOpacity>
  );
}
