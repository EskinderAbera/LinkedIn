// import { Text, View } from "@/components/Themed";
import { useLocalSearchParams, useNavigation } from "expo-router";
import userJson from "../../../assets/data/user.json";
import { useLayoutEffect, useState } from "react";
import { Image, StyleSheet, Pressable, Text, View } from "react-native";
import { User } from "@/types";

export default function UserProfile() {
  const [user, setUser] = useState<User>(userJson);

  const { id } = useLocalSearchParams();
  const navigation = useNavigation();

  const onConnect = () => alert("connect");

  useLayoutEffect(() => {
    navigation.setOptions({ title: user.name });
  }, [user?.name]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={{ uri: user.backImage }} style={styles.backImage} />
        <View style={styles.headerContent}>
          <Image source={{ uri: user.image }} style={styles.image} />
          <Text style={styles.name}>{user.name}</Text>
          <Text>{user.position}</Text>

          <Pressable onPress={onConnect} style={styles.button}>
            <Text style={styles.buttonText}>Connect</Text>
          </Pressable>
        </View>
        {/* </View> */}
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>About</Text>
        <Text style={styles.paragraph}>{user.about}</Text>
      </View>
      {/* <View style={styles.experience}></View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  header: {
    backgroundColor: "white",
    marginBottom: 5,
  },
  backImage: {
    width: "100%",
    aspectRatio: 5 / 2,
    marginBottom: -60,
  },
  headerContent: {
    padding: 10,
    paddingTop: 0,
    backgroundColor: "transparent",
  },
  image: {
    width: 120,
    aspectRatio: 1,
    borderRadius: 60,
    borderWidth: 3,
    borderColor: "white",
  },
  name: {
    fontSize: 24,
    fontWeight: "500",
  },
  button: {
    backgroundColor: "#3B82F6",
    padding: 10,
    alignItems: "center",
    borderRadius: 50,
    marginVertical: 10,
  },
  buttonText: {
    color: "white",
    fontWeight: "600",
  },

  section: {
    padding: 10,
    marginVertical: 5,
    backgroundColor: "white",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginVertical: 5,
  },
  paragraph: {
    lineHeight: 20,
  },
});
