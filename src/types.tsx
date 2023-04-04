/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { CompositeScreenProps, NavigatorScreenParams } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type RootStackParamList = {
  Root: NavigatorScreenParams<RootTabParamList> | undefined;
  AuthNavigation: NavigatorScreenParams<AuthStackParamList> | undefined;
  AppNavigation: NavigatorScreenParams<AppStackParamList> | undefined;
};

export type RootStackScreenprops<Screen extends keyof RootStackParamList> = NativeStackScreenProps<
  RootStackParamList,
  Screen
>;

export type RootTabParamList = {
  TabOne: undefined;
  TabTwo: undefined;
};

export type RootTabScreenProps<Screen extends keyof RootTabParamList> = CompositeScreenProps<
  BottomTabScreenProps<RootTabParamList, Screen>,
  NativeStackScreenProps<RootStackParamList>
>;

export type AuthStackParamList = {
  OnBoard1: undefined;
  OnBoard2: undefined;
  SignIn: undefined;
  SignUp: undefined;
  UserProfile: undefined;
  PaymentMethod: undefined;
  UploadPhoto: undefined;
  UploadPreview: undefined;
  SetLocation: undefined;
  Verification: undefined;
  SignUpSuccess: undefined;
  Via: undefined;
  ResetPassword: undefined;
  ResetPasswordSuccess: undefined;
};

export type AuthStackScreenProps<Screen extends keyof AuthStackParamList> = NativeStackScreenProps<
  AuthStackParamList,
  Screen
>;

export type AppStackParamList = {
  Home: undefined;
  Explore: undefined;
  Filter: undefined;
  ExploreMenu: undefined;
  Message: undefined;
  ChatDetails: undefined;
  CallRinging: undefined;
  Call: undefined;
  FinishOrder: undefined;
  RateFood: undefined;
  RateRestaurant: undefined;
  Voucher: undefined;
  Notification: undefined;
  Order: undefined;
  Payment: undefined;
  EditPayment: undefined;
  EditLocation: undefined;
  YourOrders: undefined;
  SetLocation: undefined;
  TrackOrder: undefined;
  ProductDetail: undefined;
  DetailMenu: undefined;
  Profile: undefined;
};

export type AppStackScreenProps<Screen extends keyof AppStackParamList> = NativeStackScreenProps<
  AppStackParamList,
  Screen
>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
