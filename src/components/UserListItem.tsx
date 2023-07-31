import { Post, User } from "@/types";
import { Text, View } from "./Themed";
import { StyleSheet, Image, Pressable } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Link } from "expo-router";

type UserListItemProps = {
  user: User;
};

export default function UserListItem({ user }: UserListItemProps) {
  return (
    <Link href={`/users/${user.id}`} asChild>
      <Pressable style={styles.header}>
        <Image source={{ uri: user.image }} style={styles.userImage} />
        <View>
          <Text style={styles.username}>{user.name}</Text>
          <Text>{user.position}</Text>
        </View>
      </Pressable>
    </Link>
  );
}

const styles = StyleSheet.create({
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
});
