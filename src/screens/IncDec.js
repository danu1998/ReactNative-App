import { StatusBar } from "expo-status-bar";
import { Box, Text } from "native-base";
import React, { useState } from "react";
import { TouchableOpacity } from "react-native";

const IncDec = () => {
  const [counter, setCounter] = useState(0);
  function Add() {
    return setCounter(counter + 1);
  }

  function Less() {
    return setCounter(counter - 1);
  }
  return (
    <Box>
      <StatusBar />
      <Text textAlign="center">
        If you click the add button it will increase by one, vice versa if you
        click the less button it will decrease by one
      </Text>

      <Text fontSize={50} style={{ color: "#273c75" }}>
        {counter}
      </Text>

      <TouchableOpacity
        onPress={Add}
        style={{
          backgroundColor: "#487eb0",
          height: 40,
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 10,
          margin: 10,
        }}
      >
        <Text color={{ color: "white" }}>Add</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={Less}
        style={{
          backgroundColor: "#487eb0",
          height: 40,
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 10,
        }}
      >
        <Text color={{ color: "white" }}>Less</Text>
      </TouchableOpacity>
    </Box>
  );
};

export default IncDec;
