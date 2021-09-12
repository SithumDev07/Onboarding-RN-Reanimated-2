import React from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";
import { PageInterface } from "../constants";

interface PageProps {
  page: PageInterface;
  translateX: Animated.SharedValue<number>;
  index: number;
}

const { width: PAGE_WIDTH, height: PAGE_HEIGHT } = Dimensions.get("window");

const Page: React.FC<PageProps> = ({ page, translateX, index }) => {
  const inputRange = [
    (index - 1) * PAGE_WIDTH,
    index * PAGE_WIDTH,
    (index + 1) * PAGE_WIDTH,
  ];
  const rCircleStyle = useAnimatedStyle(() => {
    const scale = interpolate(
      translateX.value,
      inputRange,
      [0, 1, 0],
      Extrapolate.CLAMP
    );
    return {
      transform: [{ scale }],
    };
  });

  return (
    <View style={styles.container}>
      <View style={styles.circleContainer}>
        <Animated.View style={[styles.circle, rCircleStyle]} />
        <Animated.Image
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

export default Page;
