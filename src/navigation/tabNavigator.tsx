import { Image, TouchableOpacity } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { RootTabParamList } from "@src/types";
import { Sizes } from "@constants/Theme";
import { View } from "@components/Themed";
import useColorScheme from "@hooks/useColorScheme";
import Chat from "@screens/app/chat/Chat";
import Home from "@screens/app/home/Home";
import Colors from "@constants/Colors";
import Icon from "@constants/Icon";
import FigText from "@components/StyledText";
import Device from "@constants/Device";
import Styles from "@constants/Styles";

const BottomTab = createBottomTabNavigator<RootTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  const insets = useSafeAreaInsets();

  const shadow = colorScheme === "light" ? Styles.g.lightShadow : Styles.g.darkShadow;

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarInactiveTintColor: Colors.tintPrimary,
        tabBarActiveTintColor: Colors[colorScheme].tint,
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: colorScheme === "dark" ? Colors.darkTint : "#fff",
          position: "absolute",
          left: Device.width * 0.05,
          right: Device.width * 0.05,
          width: Device.width * 0.9,
          height: 75,
          bottom: insets.bottom,
          borderRadius: Sizes.radius,
          paddingVertical: Sizes.xLarge,
          paddingHorizontal: Sizes.xLarge,
          ...shadow,
          //   flexDirection: "row",
          //   alignItems: "center",
          //   justifyContent: "center",
        },
        tabBarHideOnKeyboard: true,
      }}
    >
      <BottomTab.Screen
        name="Home"
        component={Home}
        options={() => ({
          tabBarIcon: ({ focused, color }) => (
            <TabBarIcon name="home" color={color} focused={focused} />
          ),
        })}
      />
      <BottomTab.Screen
        name="Profile"
        component={Home}
        options={() => ({
          tabBarIcon: ({ focused, color }) => (
            <TabBarIcon name="profile" color={color} focused={focused} />
          ),
        })}
      />
      <BottomTab.Screen
        name="Order"
        component={Home}
        options={() => ({
          tabBarIcon: ({ focused, color }) => (
            <TabBarIcon name="buy" color={color} focused={focused} />
          ),
        })}
      />
      <BottomTab.Screen
        name="Chat"
        component={Chat}
        options={() => ({
          tabBarIcon: ({ focused, color }) => (
            <TabBarIcon name="chat" color={color} focused={focused} />
          ),
        })}
      />
    </BottomTab.Navigator>
  );
}

function TabBarIcon(props: { name: keyof typeof Icon; color: string; focused?: boolean }) {
  return (
    <View
      style={{
        position: "relative",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        // props.name === "home" ? "flex-start" : props.name === "chat" ? "flex-end" : "center",
        minWidth: 100,
        backgroundColor: props.focused ? Colors.tintPrimary : "transparent",
        padding: Sizes.xSmall,
        borderRadius: Sizes.radius,
      }}
    >
      <Image
        source={Icon[props.name]}
        style={[{ tintColor: props.color, width: Sizes.icon, height: Sizes.icon }]}
      />
      {props.focused && (
        <FigText style={{ textTransform: "capitalize", fontSize: Sizes.small, marginLeft: 4 }}>
          {props.name}
        </FigText>
      )}
    </View>
  );
}
