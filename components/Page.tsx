import React from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import { PageInterface } from "../constants";

interface PageProps {
  page: PageInterface;
}

const { width: PAGE_WIDTH, height: PAGE_HEIGHT } = Dimensions.get("window");

const Page: React.FC<PageProps> = ({ page }) => {
  return (
    <View style={styles.container}>
      <View style={styles.circleContainer}>
        <View style={styles.circle} />
        <Image
          source={page.source}
          style={styles.image}
          resizeMode={"contain"}
        />
      </View>
      <Text style={styles.title}>{page.title}</Text>
      <Text style={styles.description}>{page.description}</Text>
    </View>
  );
};

export default Page;

const CIRCLE_WIDTH = PAGE_WIDTH * 0.7;

const styles = StyleSheet.create({
  container: {
    width: PAGE_WIDTH,
    height: PAGE_HEIGHT,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 50,
  },
  circle: {
    width: "100%",
    height: "100%",
    aspectRatio: 1,
    backgroundColor: "white",
    borderRadius: CIRCLE_WIDTH / 2,
  },
  circleContainer: {
    width: CIRCLE_WIDTH,
    aspectRatio: 1,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 100,
  },
  image: {
    height: PAGE_HEIGHT * 0.5,
    aspectRatio: 1,
    position: "absolute",
  },
  title: {
    textAlign: "center",
    fontSize: 35,
    marginBottom: 15,
    fontWeight: "700",
  },
  description: {
    textAlign: "center",
    fontSize: 14,
    color: "grey",
  },
});
