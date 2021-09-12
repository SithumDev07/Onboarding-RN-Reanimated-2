import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { PageInterface } from "../constants";

interface PageProps {
  page: PageInterface;
}

const { width: PAGE_WIDTH, height: PAGE_HEIGHT } = Dimensions.get("window");

const Page: React.FC<PageProps> = ({ page }) => {
  return (
    <View style={styles.container}>
      <Text></Text>
    </View>
  );
};

export default Page;

const styles = StyleSheet.create({
  container: {
    width: PAGE_WIDTH,
    height: PAGE_HEIGHT,
  },
});
