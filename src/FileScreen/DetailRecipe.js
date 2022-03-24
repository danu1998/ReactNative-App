import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  FlatList,
  RefreshControl,
} from "react-native";
import { ListItem, Avatar } from "react-native-elements";

// Import Axios
import axios from "axios";

const DetailRecipe = ({ route }) => {
  //init Props
  console.log(route.params);

  const { id, tittle, content, author, duration } = route.params;

  //Init State
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // Create LifeCycle
  //Function Exception
  useEffect(() => {
    getComment();
  }, []);

  // Create Function to fetch

  const getComment = () => {
    setIsLoading(true);

    axios
      .get(`http://localhost:5000/api/recipe/${id}`)
      .then((res) => {
        setComments(res.data);
        setIsLoading(false);
      })
      .catch(() => {
        alert("Error Get Comments");
        setIsLoading(false);
      });
  };

  //   Create Component List
  const _renderItem = ({ item }) => {
    return (
      <ListItem key={item.id} bottomDivider>
        <ListItem.Content>
          <ListItem.Title numberOfLines={1}>{item.author}</ListItem.Title>
          <ListItem.Subtitle>{`${item.tittle} - ${item.content}`}</ListItem.Subtitle>
          <ListItem.Subtitle>{`${item.author} - ${item.duration}`}</ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
    );
  };

  return (
    <View style={style.container}>
      <Text h2 style={{ fontWeight: "bold" }}>
        {tittle}
      </Text>

      <Text>{content}</Text>
      <Text>{author}</Text>
      <Text>{duration}</Text>

      <FlatList
        data={comments}
        renderItem={_renderItem}
        keyExtractor={(item) => item.id}
        refreshControl={
          <RefreshControl refreshing={isLoading} onRefresh={getComment} />
        }
      />
    </View>
  );
};

export default DetailRecipe;

const style = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    padding: 16,
    flex: 1,
  },
});
