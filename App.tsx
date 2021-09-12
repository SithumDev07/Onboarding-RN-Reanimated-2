import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from "react-native-reanimated";
import Page from "./components/Page";
import { BACKGROUND_COLOR, PAGES } from "./constants";

import { AntDesign } from "@expo/vector-icons";

export default function App() {
  const translateX = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      translateX.value = event.contentOffset.x;
    },
  });

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Animated.ScrollView
        style={styles.scrollView}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={scrollHandler}
        scrollEventThrottle={16}
      >
        {PAGES.map((page, index) => (
          <Page
            key={index.toString()}
            page={page}
            translateX={translateX}
            index={index}
          />
        ))}
      </Animated.ScrollView>
      <View style={styles.footer}>
        {/* // * Paginator*/}
        <View style={styles.fillCenter}>
          {PAGES.map((_, index) => {
            return <View key={index.toString()} />;
          })}
        </View>
        {/* // * textContainer */}
        <View style={styles.fillCenter}>
          <Text style={styles.text}>View Board</Text>
        </View>
        {/* // * iconContainer */}
        <View style={styles.fillCenter}>
          <AntDesign name="arrowright" size={24} color="black" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BACKGROUND_COLOR,
  },
  scrollView: {
    flex: 1,
  },
  footer: {
    height: 50,
    marginBottom: 10,
    flexDirection: "row",
    backgroundColor: "rgba(0,0,0,0)",
  },
  fillCenter: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 16,
    textTransform: "uppercase",
    letterSpacing: 1.7,
    fontWeight: "500",
  },
});
