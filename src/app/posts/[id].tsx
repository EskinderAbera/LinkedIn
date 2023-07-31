import posts from "../../../assets/data/posts.json";
import PostListItem from "@/components/PostListItem";
import { useLocalSearchParams } from "expo-router";
import { ScrollView } from "react-native";
import { Text } from "@/components/Themed";

export default function PostDetailsScreen() {
  const { id } = useLocalSearchParams();
  const post = posts.find((post) => post.id === id);

  if (!post) {
    return <Text>Post not found</Text>;
  }

  return (
    <ScrollView>
      <PostListItem post={post} />
    </ScrollView>
  );
}