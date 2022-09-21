import React from "react";
import { NativeBaseProvider } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/screens/Home";
import Details from "./src/screens/Details";
import Header from "./src/components/Header";
import Qrscann from "./src/screens/Qrscann";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              header: () => <Header title={"products"} />,
            }}
          />
          <Stack.Screen
            name="Details"
            component={Details}
            options={{
              header: () => <Header />,
            }}
          />
          <Stack.Screen
            name="Qrscann"
            component={Qrscann}
            options={{
              header: () => <Header />,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
