import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Animated, {
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";

interface DotsProps {
  index: number;
  activeDot: Animated.SharedValue<number>;
}

const Dots: React.FC<DotsProps> = ({ activeDot, index }) => {
  const rDotStyle = useAnimatedStyle(() => {
    const isActive = activeDot.value === index;

    return {
      backgroundColor: withTiming(isActive ? "black" : "white", {
        duration: 150,
      }),
    };
  });

  return <Animated.View style={[styles.dot, rDotStyle]} />;
};

const styles = StyleSheet.create({
  dot: {
    width: 10,
    height: 10,
    marginHorizontal: 5,
    borderRadius: 10,
    borderWidth: 1,
  },
});

export default Dots;
