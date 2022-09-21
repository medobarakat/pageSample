import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Icon } from "native-base";
import { FontAwesome5, AntDesign } from "@expo/vector-icons";
import back from "../images/1.jpg";
const Header = ({ title }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <View>
          <Pressable onPress={() => navigation.goBack()}>
            <Icon
              as={AntDesign}
              name="left"
              color={"white"}
              size={17}
              marginTop={1}
            />
          </Pressable>
        </View>
        <View>
          <Text style={styles.leftContainertxt}>Scan code</Text>
        </View>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#c3c5c9",
    paddingVertical: "5%",
    paddingTop: "10%",
    paddingHorizontal: "5%",
  },
  leftContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "40%",
  },
  leftContainertxt: {
    marginRight: 10,
    color: "white",
    fontSize: 17,
  },
});
