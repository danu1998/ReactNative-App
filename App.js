//Import React Native Gesture Handler
import "react-native-gesture-handler";

import * as React from "react";

// Import 'NativeBaseProvider' component
import { NativeBaseProvider, extendTheme } from "native-base";

// Import font with Expo
import AppLoading from "expo-app-loading";
import { useFonts, Poppins_400Regular } from "@expo-google-fonts/poppins";

// Import Container
import Container from "./Container";

export default function App() {
  // Load Font with Expo
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
  });

  // Setup Font
  const fontConfig = {
    Poppins: {
      400: {
        normal: "Poppins_400Regular",
      },
    },
  };

  // Setup Custome Theme
  const customeColor = {
    primary: {
      50: "#E3F2F9",
      100: "#C5E4F3",
      200: "#A2D4EC",
      300: "#7AC1E4",
      400: "#47A9DA",
      500: "#0088CC",
      600: "#007AB8",
      700: "#006BA1",
      800: "#005885",
      900: "#003F5E",
    },
    amber: {
      400: "#d97706",
    },
  };

  // Configuration Native Base Custom Theme
  const theme = extendTheme({
    colors: customeColor,
    fontConfig,
    fonts: {
      heading: "Poppins",
      body: "Poppins",
      mono: "Poppins",
    },
    config: { initialColorMode: "dark" },
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <NativeBaseProvider theme={theme}>
        <Container />
      </NativeBaseProvider>
    );
  }
}

// import "react-native-gesture-handler";
// import * as React from "react";
// import { NavigationContainer, StackActions } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";

// //Import Screen
// import Posts from "./src/MainScreen/Posts";
// import DetailPost from "./src/MainScreen/DetailPost";

// const Stack = createStackNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="Posts" component={Posts} />
//         <Stack.Screen name="DetailPost" component={DetailPost} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }
