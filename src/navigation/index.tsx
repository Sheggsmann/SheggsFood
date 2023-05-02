import { useEffect, useState } from "react";
import { ColorSchemeName } from "react-native";
import { NavigationContainer, DefaultTheme, DarkTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AppStackParamList, AuthStackParamList, RootStackParamList } from "@src/types";

import Colors from "@constants/Colors";
import useColorScheme from "@hooks/useColorScheme";
import AuthNavigator from "./authNavigator";
import AppNavigator from "./appNavigator";
import { secureStorage } from "@src/utils/storage";
import { useAppDispatch, useAppSelector } from "@redux/hooks";
import { userActions } from "@redux/userSlice";

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
  const isLoggedIn = useAppSelector((state) => state.user.loggedIn);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const restoreUser = async () => {
      const currentUser = await secureStorage.getItem("currentUser");
      if (currentUser) {
        dispatch(userActions.loggedIn({ user: currentUser, token: "1234" }));
      } else {
        dispatch(userActions.loggedOut());
      }
    };

    restoreUser();
  }, []);

  return (
    <Stack.Navigator initialRouteName="AuthNavigation">
      {!isLoggedIn ? (
        <Stack.Screen
          name="AuthNavigation"
          component={AuthNavigator}
          options={{ headerShown: false, animationTypeForReplace: "push" }}
        />
      ) : (
        <Stack.Screen
          name="AppNavigation"
          component={AppNavigator}
          options={{ headerShown: false, animationTypeForReplace: "pop" }}
        />
      )}
    </Stack.Navigator>
  );
}
