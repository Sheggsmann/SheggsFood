import { AuthStackParamList } from "@src/types";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OnBoard1 from "@screens/onboard/OnBoard1";
import OnBoard2 from "@screens/onboard/OnBoard2";
import SignUp from "@screens/auth/SignUp";
import SignIn from "@screens/auth/SignIn";
import UserProfile from "@screens/auth/UserProfile";
import PaymentMethod from "@screens/auth/PaymentMethod";
import UploadPhoto from "@screens/auth/UploadPhoto";
import UploadPreview from "@screens/auth/UploadPreview";
import SetLocation from "@screens/auth/SetLocation";

type StackParamList = AuthStackParamList;

const Stack = createNativeStackNavigator<StackParamList>();

export default function AuthNavigator() {
  return (
    <Stack.Navigator initialRouteName="OnBoard1">
      <Stack.Screen name="OnBoard1" component={OnBoard1} options={{ headerShown: false }} />
      <Stack.Screen name="OnBoard2" component={OnBoard2} options={{ headerShown: false }} />
      <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }} />
      <Stack.Screen name="UserProfile" component={UserProfile} options={{ headerShown: false }} />
      <Stack.Screen
        name="PaymentMethod"
        component={PaymentMethod}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="UploadPhoto" component={UploadPhoto} options={{ headerShown: false }} />
      <Stack.Screen name="SetLocation" component={SetLocation} options={{ headerShown: false }} />
      <Stack.Screen
        name="UploadPreview"
        component={UploadPreview}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="SignIn" component={SignIn} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}
