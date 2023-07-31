import { Pressable, StyleSheet, TextInput } from "react-native";

import { Text, View } from "@/components/Themed";
import { useNavigation } from "expo-router";
import { useLayoutEffect, useState } from "react";

export default function NewPostScreen() {
  const [content, setContent] = useState("");

  const navigation = useNavigation();

  const onPost = () => {
    console.log(content);

    setContent("");
    navigation.goBack();
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "New Post",
      headerRight: () => (
        <Pressable onPress={onPost} style={styles.postButton}>
          <Text style={styles.postButtonText}>Submit</Text>
        </Pressable>
      ),
    });
  }, [onPost]);

  return (
    <View style={styles.container}>
      <TextInput
        value={content}
        onChangeText={setContent}
        placeholder="say something"
        style={styles.input}
        multiline
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  input: {
    fontSize: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  postButton: {
    backgroundColor: "royalblue",
    padding: 5,
    paddingHorizontal: 15,
    borderRadius: 50,
    marginRight: 10,
  },
  postButtonText: {
    color: "white",
    fontWeight: "bold",
  },
});
