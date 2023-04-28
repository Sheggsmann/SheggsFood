import { StyleSheet, Image, ViewStyle, ImageBackground } from "react-native";
import { View } from "@components/Themed";
import { Sizes } from "@constants/Theme";
import { GradientButton, IconButton } from "@components/Button";
import { useNavigation } from "@react-navigation/native";
import useColorScheme from "@hooks/useColorScheme";
import Colors from "@constants/Colors";
import Images from "@constants/Images";
import FigText from "@components/StyledText";
import Icon from "@constants/Icon";

type TrackOrderFooterProps = {
  containerStyle?: ViewStyle;
};

export default function TrackOrderFooter({ containerStyle }: TrackOrderFooterProps) {
  const colorScheme = useColorScheme();
  const navigation = useNavigation();

  return (
    <View transparent style={[styles.container, containerStyle]}>
      <ImageBackground
        source={Images.pattern1}
        style={{
          backgroundColor: colorScheme === "light" ? "#F1F1F1" : "#000",
          borderRadius: Sizes.radius,
        }}
      >
        <View transparent style={styles.wrapper}>
          <FigText style={{ fontSize: Sizes.font }}>Track Orders</FigText>

          <View lightColor="#fff" darkColor={Colors.darkTint} style={styles.driverInfo}>
            <View style={styles.profileImgWrapper}>
              <Image source={Images.user2} style={styles.profile} />
            </View>
            <View transparent>
              <FigText style={{ fontSize: Sizes.font - 1 }}>Mr Sheggsmannn</FigText>
              <View transparent style={styles.flex}>
                <Image source={Icon.compass} style={{ width: 14, height: 14 }} />
                <FigText lightColor={Colors.light.text2} darkColor={Colors.dark.text2}>
                  25 minutes on the way
                </FigText>
              </View>
            </View>
          </View>

          <View transparent style={styles.callContainer}>
            <GradientButton
              text="Call"
              containerStyle={{ flex: 1 }}
              onPress={() =>
                navigation.navigate("AppNavigation", {
                  screen: "CallRinging",
                  params: {
                    user: {
                      id: 1,
                      name: "Sheggsmann",
                      image: Images.user2,
                      mobileNumber: "8088866150",
                    },
                  },
                })
              }
            />
            <IconButton
              icon="email"
              containerStyle={{
                width: 60,
                height: 60,
                backgroundColor: colorScheme === "light" ? "#fff" : Colors.darkTint,
              }}
              onPress={() => {
                navigation.navigate("AppNavigation", {
                  screen: "Messages",
                  params: {
                    user: {
                      id: 1,
                      name: "Sheggsmann",
                      image: Images.user2,
                      lastMessage: "",
                      timestamp: "",
                      isOnline: true,
                    },
                  },
                });
              }}
            />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingHorizontal: Sizes.large,
  },
  logo: {
    width: 35,
    height: 35,
  },
  wrapper: {
    padding: Sizes.medium,
    borderRadius: Sizes.radius,
  },
  driverInfo: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: Sizes.medium,
    padding: Sizes.small,
    borderRadius: Sizes.radius,
    marginTop: Sizes.small,
  },
  profileImgWrapper: {
    width: 60,
    height: 60,
    borderRadius: Sizes.radius,
  },
  profile: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  callContainer: {
    marginTop: Sizes.small,
    flexDirection: "row",
    alignItems: "center",
    columnGap: Sizes.xSmall,
  },
  flex: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: Sizes.xxSmall,
    marginTop: Sizes.xxSmall,
  },
});
