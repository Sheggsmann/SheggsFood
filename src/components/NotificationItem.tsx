import Images from "@constants/Images";
import Colors from "@constants/Colors";
import Styles from "@constants/Styles";
import { INotification } from "@src/types";
import { TouchableOpacity, Image, StyleSheet } from "react-native";
import { trimText } from "@src/utils/functions";
import { View } from "./Themed";
import { Sizes } from "@constants/Theme";
import FigText from "./StyledText";

type NotificationItemProps = {
  notification: INotification;
  onPress?: () => void;
};

function getImageFromNotificationType(type: string): any {
  switch (type) {
    case "success":
      return Images.checked;
    case "money":
      return Images.money;
    case "decline":
      return Images.xButton;
    default:
      return Images.checked;
  }
}

export default function NotificationItem({ notification, onPress }: NotificationItemProps) {
  return (
    <TouchableOpacity activeOpacity={Styles.activeOpacity} onPress={onPress}>
      <View lightColor={Colors.grey} darkColor={Colors.lightGrey} style={styles.container}>
        <Image
          source={getImageFromNotificationType(notification.type)}
          style={{ width: Sizes.icon * 2, height: Sizes.icon * 2 }}
        />
        <View transparent={true} style={styles.textContainer}>
          <FigText style={{ marginBottom: Sizes.small, fontSize: Sizes.font }}>
            {trimText(notification.message)}
          </FigText>
          <FigText
            weight="regular"
            lightColor={Colors.light.text2}
            darkColor={Colors.dark.text2}
            style={{ fontSize: Sizes.smallFont }}
          >
            {notification.timestamp}
          </FigText>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: Sizes.radius,
    marginBottom: Sizes.medium,
    padding: Sizes.large,
    flexDirection: "row",
    alignItems: "center",
  },
  textContainer: {
    marginLeft: Sizes.medium,
    flex: 1,
  },
});
