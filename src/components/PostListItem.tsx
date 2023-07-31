import { Post } from "@/types";
import { Text, View } from "./Themed";
import { StyleSheet, Image, Pressable } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Link } from "expo-router";

type PostListItemProps = {
  post: Post;
};

type FooterButtonProps = {
  text: string;
  icon: React.ComponentProps<typeof FontAwesome>["name"];
};

function FooterButton({ text, icon }: FooterButtonProps) {
  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <FontAwesome name={icon} size={16} color={"gray"} />
      <Text style={{ marginLeft: 5, color: "gray", fontWeight: "500" }}>
        {text}
      </Text>
    </View>
  );
}

export default function PostListItem({ post }: PostListItemProps) {
  return (
    <Link href={`/posts/${post.id}`} asChild>
      <Pressable style={styles.container}>
        <View style={styles.header}>
          <Image source={{ uri: post.author.image }} style={styles.userImage} />
          <View>
            <Text style={styles.username}>{post.author.name}</Text>
            <Text>{post.author.position}</Text>
          </View>
        </View>
        <Text style={styles.content}>{post.content}</Text>
        {post.image && (
          <Image source={{ uri: post.image }} style={styles.postImage} />
        )}
        <View style={styles.footer}>
          <FooterButton text="Like" icon="thumbs-o-up" />
          <FooterButton text="Comment" icon="comment-o" />
          <FooterButton text="Share" icon="share" />
        </View>
      </Pressable>
    </Link>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    // make the maxwidth of the container 500 and make it center for web
    width: "100%",
    maxWidth: 500,
    alignSelf: "center",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 10,
    padding: 10,
  },
  username: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 5,
  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  content: {
    margin: 10,
    marginTop: 0,
  },
  postImage: {
    width: "100%",
    aspectRatio: 1,
  },
  footer: {
    flexDirection: "row",
    padding: 10,
    justifyContent: "space-around",
    borderTopWidth: StyleSheet.hairlineWidth,
    borderColor: "lightgray",
  },
});
