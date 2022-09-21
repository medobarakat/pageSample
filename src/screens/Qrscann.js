import { StyleSheet, Text, View, Pressable } from "react-native";
import React, { useState } from "react";
import { Modal, Icon } from "native-base";
import { AntDesign } from "@expo/vector-icons";

const Qrscann = ({ route, navigation }) => {
  const { id, openModal } = route.params;
  const showit = () => {
    navigation.navigate("Details", { id: id });
    openModal();
  };
  return (
    <View style={styles.container}>
      <Pressable onPress={() => showit()}>
        <Icon as={AntDesign} name="qrcode" size={190} color={"blue"} />
      </Pressable>
    </View>
  );
};

export default Qrscann;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
