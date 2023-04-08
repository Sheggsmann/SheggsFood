import { useState } from "react";
import { Image, TouchableOpacity, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { createBottomTabNavigator, BottomTabBarButtonProps } from "@react-navigation/bottom-tabs";
import { RootTabParamList } from "@src/types";
import { Sizes } from "@constants/Theme";
import { View } from "@components/Themed";
import useColorScheme from "@hooks/useColorScheme";
import Chat from "@screens/app/chat/Chat";
import Home from "@screens/app/home/Home";
import Profile from "@screens/app/profile/Profile";
import OrderDetails from "@screens/app/orders/OrderDetails";
import Colors from "@constants/Colors";
import Icon from "@constants/Icon";
import FigText from "@components/StyledText";
import Device from "@constants/Device";
import Styles from "@constants/Styles";
import { Haptics } from "@src/utils/haptics";
import Animated from "react-native-reanimated";
import Dot from "@components/Dot";

const TAB_HEIGHT = 80;

const BottomTab = createBottomTabNavigator<RootTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();
  const [chats, setChats] = useState(true);
  const [orders, setOrders] = useState(1);

  const insets = useSafeAreaInsets();

  const shadow = colorScheme === "light" ? Styles.g.lightShadow : Styles.g.darkShadow;

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: colorScheme === "dark" ? Colors.darkTint : "#fff",
          position: "absolute",
          left: Device.width * 0.05,
          right: Device.width * 0.05,
          width: Device.width * 0.9,
          height: TAB_HEIGHT,
          bottom: insets.bottom || Sizes.bottomInset,
          borderRadius: Sizes.radius,
          paddingHorizontal: Sizes.large,
          ...shadow,
        },
        tabBarHideOnKeyboard: true,
      }}
    >
      <BottomTab.Screen
        name="Home"
        component={Home}
        options={() => ({
          tabBarButton: (props) => <TabButton {...props} icon="home1" name="Home" />,
        })}
      />
      <BottomTab.Screen
        name="Profile"
        component={Profile}
        options={() => ({
          tabBarButton: (props) => <TabButton {...props} icon="profile1" name="Profile" />,
        })}
      />
      <BottomTab.Screen
        name="Order"
        component={OrderDetails}
        options={() => ({
          tabBarButton: (props) => (
            <TabButton {...props} icon="buy" name="Orders" notification={orders} />
          ),
        })}
      />
      <BottomTab.Screen
        name="Chat"
        component={Chat}
        options={() => ({
          tabBarButton: (props) => (
            <TabButton {...props} icon="chat" name="Chat" notification={chats} />
          ),
        })}
      />
    </BottomTab.Navigator>
  );
}

type TabButtonProps = BottomTabBarButtonProps & {
  icon: keyof typeof Icon;
  name: string;
  notification?: boolean | number;
};

function TabButton(props: TabButtonProps) {
  const colorScheme = useColorScheme();

  const { icon, name, notification, onPress, accessibilityState } = props;
  const focused = accessibilityState?.selected;

  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={(e) => {
        Haptics.medium();
        onPress && onPress(e);
      }}
      style={{
        flex: focused ? 1 : 0.65,
        alignItems: "center",
        justifyContent: "center",
        height: TAB_HEIGHT,
      }}
    >
      <View transparent style={{ ...StyleSheet.absoluteFillObject, justifyContent: "center" }}>
        <Animated.View
          style={{
            height: 45,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: focused ? Colors.tintPrimary : "transparent",
            borderRadius: Sizes.radius,
            columnGap: 8,
          }}
        >
          <View transparent>
            <Image
              source={Icon[icon]}
              style={{
                width: Sizes.icon,
                height: Sizes.icon,
                tintColor: focused
                  ? Colors[colorScheme].tabIconSelected
                  : Colors[colorScheme].tabIconDefault,
              }}
            />
            {notification && <Dot count={notification} />}
          </View>

          <View transparent>{focused && <FigText>{name}</FigText>}</View>
        </Animated.View>
      </View>
    </TouchableOpacity>
  );
}
