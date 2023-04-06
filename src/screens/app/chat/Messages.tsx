import { useRef, useEffect, useState } from "react";
import { ImageBackground, ScrollView, Keyboard } from "react-native";
import { View } from "@components/Themed";
import { IconButton } from "@components/Button";
import { AppStackScreenProps, IChatList, IMessage, RootTabScreenProps } from "@src/types";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Sizes } from "@constants/Theme";
import { messages as chats } from "@mocks/chats";
import Styles from "@constants/Styles";
import useColorScheme from "@hooks/useColorScheme";
import Images from "@constants/Images";
import ChatProfile from "@components/chat/ChatProfile";
import Message from "@components/chat/Message";
import MessageInput from "@components/chat/MessageInput";

export default function Messages({ navigation, route }: AppStackScreenProps<"Messages">) {
  const colorScheme = useColorScheme();
  const insets = useSafeAreaInsets();
  const darkMode = colorScheme === "dark";

  const scrollRef = useRef<ScrollView>(null);
  const user: IChatList = route.params.user;

  const [messages, setMessages] = useState<IMessage[]>(chats);

  useEffect(() => {
    scrollRef.current?.scrollToEnd({ animated: true });
  }, []);

  const onSend = (msg: string) => {
    setMessages((prev) => [
      ...prev,
      { id: 1, timestamp: new Date(), senderId: 2, receiverId: 1, message: msg },
    ]);
  };

  return (
    <View style={Styles.mode(colorScheme).screen}>
      <ImageBackground
        source={darkMode ? Images.pattern : Images.patternWhite}
        style={[Styles.imageBG, { paddingTop: insets.top + Sizes.medium }]}
      >
        <View transparent={true} style={[Styles.g.padding]}>
          <IconButton icon="back" onPress={() => navigation.goBack()} />
        </View>

        <ChatProfile
          containerStyle={{ margin: Sizes.large }}
          imageContainerStyle={{}}
          user={user}
          onCallPress={() => navigation.navigate("CallRinging", { user })}
        />

        <View transparent style={{ flex: 1 }}>
          <ScrollView
            ref={scrollRef}
            scrollEventThrottle={16}
            onContentSizeChange={() => scrollRef.current?.scrollToEnd({ animated: true })}
            style={{ flex: 1, padding: Sizes.large, paddingBottom: 100 }}
            keyboardDismissMode="interactive"
            onScroll={() => Keyboard.dismiss()}
          >
            {messages.map((message, index) => (
              <Message
                key={index.toString()}
                message={message}
                isCurrentUser={message.senderId === 2}
              />
            ))}
            <View style={{ height: 30 }}></View>
          </ScrollView>

          <View style={{ height: 110 }}></View>

          <MessageInput
            onSend={onSend}
            containerStyle={{
              position: "absolute",
              bottom: insets.bottom,
              // bottom: 350,
              paddingHorizontal: Sizes.large,
            }}
          />
        </View>
      </ImageBackground>
    </View>
  );
}
