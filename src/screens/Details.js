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
} from "react-native";
import { Box, Center, Modal } from "native-base";
import { Button, Icon } from "native-base";
import { MaterialIcons, AntDesign } from "@expo/vector-icons";
import image from "../images/1.jpg";
import model from "../images/model.jpg";
import model2 from "../images/model2.jpg";
import model3 from "../images/model3.jpg";

import axios from "axios";
import { LinearGradient } from "expo-linear-gradient";
const Details = ({ route, navigation }) => {
  const { id } = route.params;
  const [data, setData] = useState([]);
  const [desc, setDesc] = useState("");
  const [loading, setLoading] = useState(false);
  const [flatlistdata, setFlatlistdata] = useState([
    {
      id: 1,
      url: require("../images/model.jpg"),
    },
    {
      id: 2,
      url: require("../images/model2.jpg"),
    },
    {
      id: 3,
      url: require("../images/model3.jpg"),
    },
  ]);
  const [showModal, setShowModal] = useState(false);
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
  const openModal = () => {
    setShowModal(true);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <View style={styles.container}>
      {/* end of Loading modal */}
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        {loading ? (
          <View>
            <ActivityIndicator size={"large"} />
          </View>
        ) : (
          <>
            <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
              <Modal.Content
                maxWidth="150px"
                borderRadius={150}
                minHeight="100px"
              >
                <LinearGradient
                  style={styles.btn2}
                  colors={["#5c4cdbb3", "#01e7db"]}
                  start={[0.5, 1]}
                >
                  <Modal.Body>
                    <View style={styles.centerizedCol}>
                      <View>
                        <Text
                          style={[
                            styles.centerizedColtxt,
                            {
                              fontWeight: "bold",
                              fontSize: 35,
                              marginBottom: -10,
                            },
                          ]}
                        >
                          100
                        </Text>
                      </View>
                      <View>
                        <Text style={styles.centerizedColtxt}>points</Text>
                      </View>
                    </View>
                  </Modal.Body>
                </LinearGradient>
              </Modal.Content>
            </Modal>
            <View style={styles.detailscontainer}>
              <View style={styles.detailscontainer1}>
                <FlatList
                  pagingEnabled={true}
                  showsHorizontalScrollIndicator={false}
                  height={200}
                  style={styles.FirstImgContainer}
                  horizontal
                  keyExtractor={(item) => item.id}
                  data={flatlistdata}
                  renderItem={({ item }) => (
                    <View style={styles.flatitem}>
                      <Image
                        source={item.url}
                        resizeMode={"contain"}
                        style={styles.imagelogo}
                      />
                    </View>
                  )}
                />

                {/* <Image source={model} style={styles.imagelogo} /> */}
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
                    <Text style={styles.txtblue}>Color</Text>
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
                    <Text style={styles.txtblue}>Size</Text>
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
                      <Pressable>
                        <Icon
                          as={AntDesign}
                          name="qrcode"
                          size={45}
                          color={"blue"}
                        />
                      </Pressable>
                    </View>
                    <View style={styles.col}>
                      <Text style={styles.txt2}>scan</Text>
                      <Text>& get 100 points</Text>
                    </View>
                  </View>
                  <View>
                    <Pressable
                      onPress={() =>
                        navigation.navigate("Qrscann", {
                          id: id,
                          openModal: openModal,
                        })
                      }
                    >
                      <LinearGradient
                        style={styles.btn}
                        colors={["#5c4cdbb3", "#01e7db"]}
                        start={[0.5, 1]}
                      >
                        <Text>Scan</Text>
                      </LinearGradient>
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
                    <Pressable>
                      <LinearGradient
                        style={styles.btn2}
                        colors={["#5c4cdbb3", "#01e7db"]}
                        start={[0.5, 1]}
                      >
                        <Text>add to cart</Text>
                      </LinearGradient>
                    </Pressable>
                  </View>
                </View>
              </Box>
            </View>
          </>
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
    marginHorizontal: 35,
    width: 150,
    height: 150,
    marginBottom: 60,
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
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 10,
  },
  btn2: {
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 10,
  },
  linearGradient: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    height: 200,
    width: 350,
  },
  txtblue: {
    color: "blue",
    marginTop: 5,
  },
  centerizedCol: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  centerizedColtxt: {
    fontSize: 25,
    color: "white",
  },
  FirstImgContainer: {
    marginTop: 10,
  },
  bannerImg: {
    width: 50,
    height: 50,
  },
  flatitem: {
    marginRight: 85,
  },
});
