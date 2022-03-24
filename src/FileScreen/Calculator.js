import React, { useContext, useState } from "react";
import { Image, TouchableOpacity } from "react-native";
import {
  View,
  FormControl,
  Stack,
  VStack,
  HStack,
  Box,
  Flex,
  Text,
  Alert,
  Center,
  IconButton,
  CloseIcon,
} from "native-base";

export default function Calculator() {
  const [hasil, setHasil] = useState("");
  const [cal, setCal] = useState("");

  const calculator = () => {
    try {
      setCal(eval(hasil));
    } catch (error) {
      if (error) {
        setHasil("");
        setCal("");
        return;
      }
    }
    // if(value == '%'){
    //    return setCal(eval(hasil / value)*(100))
    // }
  };

  const handleTap = (value) => {
    setHasil(hasil + value);
  };
  const handleOperation = (value) => {
    let operations = ["DEL", "+", "-", "*", "/"];
    if (value == "AC") {
      setHasil("");
      setCal("");
      return;
    }
    if (value == "DEL") {
      return setHasil(hasil.toString().substring(0, hasil.length - 1));
    }
    if (value == "=") {
      return calculator();
    }
    if (operations.includes(hasil.toString().split("").pop())) return;
    setHasil(hasil + value);
  };

  return (
    <Box w="90%" flex="1" p={60}>
      <FormControl
        justifyContent="center"
        alignItems="center"
        height={100}
        backgroundColor="gray.300"
      >
        <Stack>
          <Text style={{ color: "red", fontSize: 24 }}>{cal}</Text>
        </Stack>
        <Stack>
          <Text style={{ color: "red", fontSize: 24 }}>{hasil}</Text>
        </Stack>
      </FormControl>
      <View>
        <Flex direction="row" justifyContent="center" style={{ marginTop: 10 }}>
          <TouchableOpacity
            style={{ margin: 10 }}
            onPress={() => handleOperation("AC")}
          >
            <Text
              style={{
                width: 56,
                height: 56,
                borderRadius: 10,
                backgroundColor: "blue",
                justifyContent: "center",
                textAlign: "center",
                alignItems: "center",
                fontSize: 36,
              }}
            >
              AC
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ margin: 10 }}
            onPress={() => handleOperation("DEL")}
          >
            <Text
              style={{
                width: 56,
                height: 56,
                borderRadius: 10,
                backgroundColor: "blue",
                justifyContent: "center",
                textAlign: "center",
                alignItems: "center",
                fontSize: 36,
              }}
            >
              C
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ margin: 10 }} onPress={() => handleTap(1)}>
            <Text
              style={{
                width: 56,
                height: 56,
                borderRadius: 10,
                backgroundColor: "blue",
                justifyContent: "center",
                textAlign: "center",
                alignItems: "center",
                fontSize: 42,
              }}
            >
              1
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ margin: 10 }} onPress={() => handleTap(2)}>
            <Text
              style={{
                width: 56,
                height: 56,
                borderRadius: 10,
                backgroundColor: "blue",
                justifyContent: "center",
                textAlign: "center",
                alignItems: "center",
                fontSize: 42,
              }}
            >
              2
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ margin: 10 }}
            onPress={() => handleOperation("-")}
          >
            <Text
              style={{
                width: 56,
                height: 56,
                borderRadius: 10,
                backgroundColor: "blue",
                justifyContent: "center",
                textAlign: "center",
                alignItems: "center",
                fontSize: 42,
              }}
            >
              -
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ margin: 10 }}
            onPress={() => handleOperation("+")}
          >
            <Text
              style={{
                width: 56,
                height: 56,
                borderRadius: 10,
                backgroundColor: "blue",
                justifyContent: "center",
                textAlign: "center",
                alignItems: "center",
                fontSize: 42,
              }}
            >
              +
            </Text>
          </TouchableOpacity>
        </Flex>
        <Flex direction="row" justifyContent="center" style={{ marginTop: 10 }}>
          <TouchableOpacity style={{ margin: 10 }} onPress={() => handleTap(3)}>
            <Text
              style={{
                width: 56,
                height: 56,
                borderRadius: 10,
                backgroundColor: "blue",
                justifyContent: "center",
                textAlign: "center",
                alignItems: "center",
                fontSize: 42,
              }}
            >
              3
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ margin: 10 }} onPress={() => handleTap(4)}>
            <Text
              style={{
                width: 56,
                height: 56,
                borderRadius: 10,
                backgroundColor: "blue",
                justifyContent: "center",
                textAlign: "center",
                alignItems: "center",
                fontSize: 42,
              }}
            >
              4
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ margin: 10 }}
            onPress={() => handleOperation("/")}
          >
            <Text
              style={{
                width: 56,
                height: 56,
                borderRadius: 10,
                backgroundColor: "blue",
                justifyContent: "center",
                textAlign: "center",
                alignItems: "center",
                fontSize: 42,
              }}
            >
              /
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ margin: 10 }}
            onPress={() => handleOperation("*")}
          >
            <Text
              style={{
                width: 56,
                height: 56,
                borderRadius: 10,
                backgroundColor: "blue",
                justifyContent: "center",
                textAlign: "center",
                alignItems: "center",
                fontSize: 42,
              }}
            >
              *
            </Text>
          </TouchableOpacity>
        </Flex>
        <Flex direction="row" justifyContent="center" style={{ marginTop: 10 }}>
          <TouchableOpacity style={{ margin: 10 }} onPress={() => handleTap(5)}>
            <Text
              style={{
                width: 56,
                height: 56,
                borderRadius: 10,
                backgroundColor: "blue",
                justifyContent: "center",
                textAlign: "center",
                alignItems: "center",
                fontSize: 42,
              }}
            >
              5
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ margin: 10 }} onPress={() => handleTap(6)}>
            <Text
              style={{
                width: 56,
                height: 56,
                borderRadius: 10,
                backgroundColor: "blue",
                justifyContent: "center",
                textAlign: "center",
                alignItems: "center",
                fontSize: 42,
              }}
            >
              6
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ margin: 10 }}
            onPress={() => handleOperation("%")}
          >
            <Text
              style={{
                width: 56,
                height: 56,
                borderRadius: 10,
                backgroundColor: "blue",
                justifyContent: "center",
                textAlign: "center",
                alignItems: "center",
                fontSize: 42,
              }}
            >
              %
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ margin: "10px" }}
            onPress={() => handleOperation("=")}
          >
            <Text
              style={{
                width: 56,
                height: 56,
                borderRadius: 10,
                backgroundColor: "blue",
                justifyContent: "center",
                textAlign: "center",
                alignItems: "center",
                fontSize: 42,
              }}
            >
              =
            </Text>
          </TouchableOpacity>
        </Flex>
        <Flex direction="row" justifyContent="center" style={{ marginTop: 10 }}>
          <TouchableOpacity style={{ margin: 10 }} onPress={() => handleTap(7)}>
            <Text
              style={{
                width: 56,
                height: 56,
                borderRadius: 10,
                backgroundColor: "blue",
                justifyContent: "center",
                textAlign: "center",
                alignItems: "center",
                fontSize: 42,
              }}
            >
              7
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ margin: "10px" }}
            onPress={() => handleTap(8)}
          >
            <Text
              style={{
                width: 56,
                height: 56,
                borderRadius: 10,
                backgroundColor: "blue",
                justifyContent: "center",
                textAlign: "center",
                alignItems: "center",
                fontSize: 42,
              }}
            >
              8
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ margin: "10px" }}
            onPress={() => handleTap(9)}
          >
            <Text
              style={{
                width: 56,
                height: 56,
                borderRadius: 10,
                backgroundColor: "blue",
                justifyContent: "center",
                textAlign: "center",
                alignItems: "center",
                fontSize: 42,
              }}
            >
              9
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ margin: "10px" }}
            onPress={() => handleTap(0)}
          >
            <Text
              style={{
                width: 56,
                height: 56,
                borderRadius: 10,
                backgroundColor: "blue",
                justifyContent: "center",
                textAlign: "center",
                alignItems: "center",
                fontSize: 42,
              }}
            >
              0
            </Text>
          </TouchableOpacity>
        </Flex>
      </View>
    </Box>
  );
}
