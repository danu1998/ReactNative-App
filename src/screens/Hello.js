import { Box, Pressable, Text } from "native-base";
import * as React from "react";

const Hello = ({ navigation }) => {
  return (
    <Box>
      <Text fontFamily="body" fontWeight={400} fontStyle="italic" fontSize={30}>
        Life's too short
      </Text>
      <Pressable
        onPress={() => navigation.navigate("IncDec")}
        style={{
          backgroundColor: "orange",
          height: 45,
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 10,
          margin: 20,
        }}
      >
        <Text>Screen Increment and Decrement</Text>
      </Pressable>
    </Box>
  );
};

export default Hello;
