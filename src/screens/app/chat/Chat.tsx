import { Image, SafeAreaView, ScrollView } from "react-native";
import { View } from "@components/Themed";
import { IconButton } from "@components/Button";
import { RootTabScreenProps } from "@src/types";
import { Sizes } from "@constants/Theme";
import { chatList } from "@mocks/chats";
import ChatListItem from "@components/chat/ChatListItem";
import FigText from "@components/StyledText";
import Styles from "@constants/Styles";
import useColorScheme from "@hooks/useColorScheme";
import Images from "@constants/Images";

export default function Chat({ navigation }: RootTabScreenProps<"Chat">) {
  const colorScheme = useColorScheme();
  const darkMode = colorScheme === "dark";

  return (
    <SafeAreaView style={Styles.mode(colorScheme).screen}>
      <Image source={Images.pattern1} style={Styles.g.imageBg2} />

      <ScrollView style={[Styles.g.screenPadding]}>
        <FigText style={{ fontSize: Sizes.bigFont, marginBottom: Sizes.medium }}>Chat</FigText>

        {chatList.map((user, index) => (
          <ChatListItem
            image={user.image}
            name={user.name}
            lastMessage={user.lastMessage}
            timestamp={user.timestamp}
            key={index}
            onPress={() =>
              navigation.navigate("AppNavigation", { screen: "Messages", params: { user } })
            }
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
