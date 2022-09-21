import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ImageBackground,
  Pressable,
  ActivityIndicator,
  Image,
  ScrollView,
} from "react-native";
import { Box, Center } from "native-base";
import { Button, Icon } from "native-base";
import { MaterialIcons, AntDesign } from "@expo/vector-icons";
import image from "../images/1.jpg";
import model from "../images/model.jpg";
import axios from "axios";

const Details = ({ route, navigation }) => {
  const { id } = route.params;
  const [data, setData] = useState([]);
  const [desc, setDesc] = useState("");
  const [loading, setLoading] = useState(false);
  const [active, setActive] = useState("");

  const getData = async () => {
    setLoading(true);
    const url = `https://api-dev.yeshtery.com/v1/yeshtery/product?product_id=${id}`;
    axios
      .get(url)
      .then((res) => {
        if (res && res.status == 200) {
          console.log(res.data);
          setData(res.data);
          setDesc(res.data.description.slice(0, 180));
          setLoading(false);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        {loading ? (
          <View>
            <ActivityIndicator size={"large"} />
          </View>
        ) : (
          <View style={styles.detailscontainer}>
            <View style={styles.detailscontainer1}>
              <Image source={model} style={styles.imagelogo} />
            </View>
            <View style={styles.detailscontainer2}>
              <Text>{data.name}</Text>
              <Text style={styles.detailscontainer2rightxt}>
                ( {data.price} EGP )
              </Text>
            </View>
            <Box width={"80%"} marginTop={"6%"}>
              <View>
                <Text style={styles.descriptiontxt}>{desc} ...</Text>
              </View>
              <View>
                <View>
                  <Text>Color</Text>
                </View>
                <View style={styles.colorrow}>
                  <View
                    style={[styles.rounded, { backgroundColor: "#aa3636" }]}
                  />
                  <View
                    style={[styles.rounded, { backgroundColor: "black" }]}
                  />
                  <View
                    style={[styles.rounded, { backgroundColor: "#4531ca" }]}
                  />
                  <View
                    style={[styles.rounded, { backgroundColor: "#cdd131" }]}
                  />
                </View>
              </View>
              <View>
                <View>
                  <Text>Size</Text>
                </View>
                <View style={styles.sizesrow}>
                  <View style={styles.rounded2}>
                    <Text>S</Text>
                  </View>
                  <View style={styles.rounded2}>
                    <Text>M</Text>
                  </View>
                  <View style={styles.rounded2}>
                    <Text>L</Text>
                  </View>
                </View>
              </View>
              <View
                style={[
                  styles.row,
                  { justifyContent: "space-between", marginTop: 15 },
                ]}
              >
                <View style={styles.row}>
                  <View style={styles.icon2}>
                    <Icon
                      as={AntDesign}
                      name="qrcode"
                      size={45}
                      color={"blue"}
                    />
                  </View>
                  <View style={styles.col}>
                    <Text style={styles.txt2}>scan</Text>
                    <Text>& get 100 points</Text>
                  </View>
                </View>
                <View>
                  <Pressable style={styles.btn}>
                    <Text>Click</Text>
                  </Pressable>
                </View>
              </View>
              <View
                style={[
                  styles.row,
                  { justifyContent: "space-between", marginTop: 15 },
                ]}
              >
                <View style={styles.row}>
                  <View style={styles.icon2}>
                    <Icon
                      as={MaterialIcons}
                      name="shopping-bag"
                      size={45}
                      color={"blue"}
                    />
                  </View>
                  <View style={styles.col}>
                    <Text style={styles.txt2}>Buy & Submit</Text>
                    <Text>the recipe for 120 points</Text>
                  </View>
                </View>
                <View>
                  <Pressable style={styles.btn}>
                    <Text>Click</Text>
                  </Pressable>
                </View>
              </View>
            </Box>
          </View>
        )}
      </ImageBackground>
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  detailscontainer: {
    flex: 1,
    backgroundColor: "white",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingVertical: 20,
    alignItems: "center",
  },
  detailscontainer1: {
    justifyContent: "center",
    alignItems: "center",
    height: "30%",
    borderRadius: 15,
    padding: 15,
    borderWidth: 1,
    borderColor: "#f4f4f4",
    width: "50%",
  },
  imagelogo: {
    width: "50%",
    height: "100%",
  },
  detailscontainer2: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "70%",
    marginTop: 15,
  },
  detailscontainer2rightxt: {
    color: "blue",
  },
  descriptiontxt: {
    color: "#777",
    lineHeight: 23,
  },
  colorrow: {
    flexDirection: "row",
  },
  rounded: {
    width: 25,
    height: 25,
    borderRadius: 25,
    marginRight: 5,
    marginTop: 10,
  },
  sizesrow: {
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  rounded2: {
    paddingHorizontal: 25,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: "blue",
    borderRadius: 15,
    marginRight: 15,
    marginTop: 10,
  },
  row: {
    display: "flex",
    flexDirection: "row",
  },
  col: {
    display: "flex",
    flexDirection: "column",
  },
  icon2: {
    marginRight: 15,
  },
  txt2: {
    color: "blue",
    textTransform: "capitalize",
  },
  btn: {
    backgroundColor: "blue",
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 10,
  },
});
