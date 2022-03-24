import {
  Box,
  Pressable,
  VStack,
  Text,
  FlatList,
  View,
  Button,
} from "native-base";
import { Feather } from "@expo/vector-icons";
import { StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
const Main = ({ navigation, route }) => {
  const [post, setPost] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getPost = () => {
    setIsLoading(true);
    let url = "http://localhost:5000/api/recipes";
    axios
      .get(url)
      .then((res) => {
        setPost(res.data.recipeData);
        setIsLoading(false);
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
        alert("Error Fetch Data");
        setIsLoading(false);
      });
  };

  const getDelete = (id, key) => {
    setIsLoading(true);
    axios
      .delete(`http://localhost:5000/api/recipe/${id}`)
      .then((res) => {
        setComments(res.data);
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    getPost();
    getDelete();
  }, []);

  const _renderItem = ({ item }) => {
    return (
      <Box flex={1} p={5}>
        <Pressable
          onPress={() => navigation.navigate("DetailRecipe", item)}
          style={{
            backgroundColor: "#487eb0",
            height: 120,
            width: "100%",
            alignItems: "flex-start",
            padding: 20,
            justifyContent: "center",
            borderRadius: 10,
          }}
        >
          <Text>{item.tittle}</Text>
          <Button marginTop={30} onPress={() => getDelete(item.id)}>
            <Feather name="trash" size={24} color="white" />
          </Button>
        </Pressable>
      </Box>
    );
  };

  return (
    <View style={style.container}>
      <View>
        <FlatList
          data={post}
          renderItem={_renderItem}
          keyExtractor={(item) => item.id}
          refreshing={isLoading}
          onRefresh={getPost}
        />
      </View>
    </View>
  );
};

export default Main;

const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
});
