import { Colors } from "@/utils/Colors";
import React from "react";
import {
  GestureResponderEvent,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";

type ButtonProps = {
  title: string;
  type: "top" | "right" | "number";
  onPress: Function;
};

export default function Button({ title, type, onPress }: ButtonProps) {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        {
          backgroundColor:
            type === "top"
              ? Colors.btnDark
              : type === "right"
              ? Colors.btnRight
              : Colors.btnLight,
        },
      ]}
      onPress={onPress as (event: GestureResponderEvent) => void}
    >
      <Text
        style={{
          fontSize: 34,
          color: type === "number" ? Colors.black : Colors.white,
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 70,
    width: 70,
    borderRadius: 10,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.btnDark,
  },
});
