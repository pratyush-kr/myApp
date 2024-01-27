import { StackNavigationProp } from "@react-navigation/stack";

type RootStack = {
  Home: undefined;
  Login: undefined;
  Settings: undefined;
};

export type LoginScreenNavigation = StackNavigationProp<RootStack, "Login">;
export type HomeScreenNavigation = StackNavigationProp<RootStack, "Home">;
