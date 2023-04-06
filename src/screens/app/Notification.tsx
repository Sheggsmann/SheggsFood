import { useState } from "react";
import { Image, SafeAreaView, FlatList } from "react-native";
import { View } from "@components/Themed";
import { IconButton } from "@components/Button";
import { AppStackScreenProps } from "@src/types";
import { Sizes } from "@constants/Theme";
import FigText from "@components/StyledText";
import Styles from "@constants/Styles";
import useColorScheme from "@hooks/useColorScheme";
import Images from "@constants/Images";
import notifications from "@mocks/notification";
import NotificationItem from "@components/NotificationItem";

export default function Notification({ navigation }: AppStackScreenProps<"Notification">) {
  const colorScheme = useColorScheme();
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = (): void => {
    setRefreshing(true);

    setTimeout(() => {
      setRefreshing(false);
    }, 1500);
  };

  return (
    <SafeAreaView style={Styles.mode(colorScheme).screen}>
      <Image source={Images.pattern1} style={Styles.g.imageBg2} />

      <View style={[Styles.g.padding, Styles.g.header]}>
        <IconButton icon="back" onPress={() => navigation.goBack()} />
      </View>

      <FlatList
        refreshing={refreshing}
        onRefresh={onRefresh}
        contentContainerStyle={[Styles.g.screenPadding]}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={() => (
          <FigText style={{ fontSize: Sizes.bigFont, marginBottom: Sizes.medium }}>
            Notification
          </FigText>
        )}
        data={notifications}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => <NotificationItem notification={item} />}
      />
    </SafeAreaView>
  );
}
