import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Page from "./components/Page";
import { BACKGROUND_COLOR, PAGES } from "./constants";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ScrollView style={styles.scrollView} horizontal>
        {PAGES.map((page, index) => (
          <Page key={index.toString()} page={page} />
        ))}
      </ScrollView>
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
});
