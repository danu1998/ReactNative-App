import { Form, Box, Button, FormControl, Input, VStack } from "native-base";
import * as React from "react";

const AddRecipe = () => {
  return (
    <Box flex={1} p={10} w="100%">
      <VStack>
        <FormControl>
          <Input placeholder="Tittle" />
        </FormControl>
        <FormControl style={{ marginTop: 20 }}>
          <Input placeholder="Content" />
        </FormControl>
        <FormControl style={{ marginTop: 20 }}>
          <Input placeholder="Author" />
        </FormControl>
        <FormControl style={{ marginTop: 20 }}>
          <Input placeholder="Duration" />
        </FormControl>
        <FormControl style={{ marginTop: 20 }}>
          <Button>Add Data</Button>
        </FormControl>
      </VStack>
    </Box>
  );
};

export default AddRecipe;
