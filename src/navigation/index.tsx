import { NavigationContainer, DefaultTheme, DarkTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ColorSchemeName } from "react-native";
import { AppStackParamList, AuthStackParamList, RootStackParamList } from "@src/types";

import Colors from "@constants/Colors";
import useColorScheme from "@hooks/useColorScheme";
import AuthNavigator from "./authNavigator";
import BottomTabNavigator from "./tabNavigator";
import AppNavigator from "./appNavigator";

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  // Add Linking Configuration
  return (
    <NavigationContainer theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */

type StackParamList = RootStackParamList & AuthStackParamList;

const Stack = createNativeStackNavigator<StackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator initialRouteName="AuthNavigation">
      <Stack.Screen
        name="AuthNavigation"
        component={AuthNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AppNavigation"
        component={AppNavigator}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
