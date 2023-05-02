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
import Success from "@screens/auth/Success";
import Verification from "@screens/auth/Verification";
import ResetPassword from "@screens/auth/ResetPassword";
import Via from "@screens/auth/Via";

type StackParamList = AuthStackParamList;

const Stack = createNativeStackNavigator<StackParamList>();

export default function AuthNavigator() {
  return (
    <Stack.Navigator initialRouteName="OnBoard1" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="OnBoard1" component={OnBoard1} />
      <Stack.Screen name="OnBoard2" component={OnBoard2} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="UserProfile" component={UserProfile} />
      <Stack.Screen name="PaymentMethod" component={PaymentMethod} />
      <Stack.Screen name="UploadPhoto" component={UploadPhoto} />
      <Stack.Screen name="SetLocation" component={SetLocation} />
      <Stack.Screen name="Success" component={Success} />
      <Stack.Screen name="Verification" component={Verification} />
      <Stack.Screen name="Via" component={Via} />
      <Stack.Screen name="ResetPassword" component={ResetPassword} />
      <Stack.Screen name="UploadPreview" component={UploadPreview} />
      <Stack.Screen name="SignIn" component={SignIn} />
    </Stack.Navigator>
  );
}
