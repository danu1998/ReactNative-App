import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useTheme } from "native-base";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import FormNativeBase from "./src/screens/FormNativeBase";
import Hello from "./src/screens/Hello";
import IncDec from "./src/screens/IncDec";
import ListSoc from "./src/screens/ListSoc";
import DetailSoc from "./src/screens/DetailSoc";
import Main from "./src/FileScreen/Main";
import AddRecipe from "./src/FileScreen/AddRecipe";
import Calculator from "./src/FileScreen/Calculator";
import DetailRecipe from "./src/FileScreen/DetailRecipe";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function MyTab() {
  const theme = useTheme();
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        headerMode: "screen",
        headerTintColor: "white",
        headerStyle: { backgroundColor: theme.colors.primary["300"] },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "ios-home" : "ios-home-outline";
          } else if (route.name === "AddData") {
            iconName = focused ? "ios-add-circle" : "ios-add-circle-outline";
          } else if (route.name === "Calculator") {
            iconName = focused ? "ios-list-circle" : "ios-list-circle-outline";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: theme.colors.primary["800"],
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen name="Home" component={Main} />
      <Tab.Screen name="AddData" component={AddRecipe} />
      <Tab.Screen name="Calculator" component={Calculator} />
    </Tab.Navigator>
  );
}
const Container = () => {
  const theme = useTheme();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={MyTab}
          options={{
            title: false,
          }}
        />

        <Stack.Screen
          name="IncDec"
          component={IncDec}
          options={{
            title: "Increment Decrement",
          }}
        />
        <Stack.Screen
          name="DetailRecipe"
          component={DetailRecipe}
          options={{
            title: "Detail Recipe",
            headerMode: "screen",
            headerTintColor: "white",
            headerStyle: { backgroundColor: theme.colors.primary["300"] },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Container;
