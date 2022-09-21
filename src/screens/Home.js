import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ImageBackground,
  Pressable,
  Image,
  ActivityIndicator,
} from "react-native";
import { Button, Icon } from "native-base";
import axios from "axios";
import { Box, Center } from "native-base";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import image from "../images/1.jpg";
import model from "../images/model.jpg";
import { getData } from "../constance/APIs";
const Home = ({ navigation }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const LoadData = async () => {
    setLoading(true);
    axios
      .get(getData)
      .then((res) => {
        if (res && res.status == 200) {
          console.log(res.data.products);
          setData(res.data.products);
          setLoading(false);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    LoadData();
  }, []);
  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        {/* <View style={styles.header}>
          <Header title={"products"} />
        </View> */}

        {loading ? (
          <View>
            <ActivityIndicator size={"large"} />
          </View>
        ) : (
          <View style={styles.FlatListcontainer}>
            <FlatList
              height={"100%"}
              keyExtractor={(item) => item.id}
              data={data}
              renderItem={({ item }) => (
                <Pressable
                  onPress={() =>
                    navigation.navigate("Details", {
                      id: item.id,
                    })
                  }
                >
                  <Box width={"92%"} height={150} style={styles.flatlistitem}>
                    <Box>
                      <Image source={model} style={styles.image1} />
                    </Box>
                    <Box style={styles.FlatListright}>
                      <Box>
                        <Text style={styles.FlatListrightfirstxt}>
                          {item.name}
                        </Text>
                      </Box>
                      <Box style={styles.FlatListrightbtns}>
                        <Pressable style={styles.FlatListrightpress}>
                          <View style={styles.FlatListrightlefticon}>
                            <Icon
                              as={AntDesign}
                              name="qrcode"
                              size={5}
                              color={"blue"}
                            />
                            <Text style={styles.FlatListrightlefticontxt}>
                              120
                            </Text>
                          </View>
                        </Pressable>
                        <Pressable style={styles.FlatListrightpress1}>
                          <View style={styles.FlatListrightlefticon}>
                            <Icon
                              as={MaterialIcons}
                              name="shopping-bag"
                              size={5}
                              color={"blue"}
                            />
                            <Text style={styles.FlatListrightlefticontxt}>
                              200
                            </Text>
                          </View>
                        </Pressable>
                      </Box>
                    </Box>
                  </Box>
                </Pressable>
              )}
            />
          </View>
        )}
      </ImageBackground>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    position: "absolute",
    top: "5%",
    width: "100%",
    height: "30%",
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  FlatListcontainer: {
    flex: 1,
    backgroundColor: "white",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingVertical: 20,
  },
  flatlistitem: {
    marginVertical: 10,
    marginHorizontal: 10,
    borderRadius: 15,
    padding: 15,
    borderWidth: 1,
    borderColor: "#f4f4f4",
    flexDirection: "row",
    paddingHorizontal: 15,
  },
  image1: {
    width: 100,
    height: 130,
  },
  FlatListrightbtns: {
    flexDirection: "row",
    marginTop: 15,
  },
  FlatListright: {
    display: "flex",
    flexDirection: "column",
    marginTop: 5,
    padding: 15,
  },
  FlatListrightfirstxt: {
    fontSize: 18,
  },
  FlatListrightpress: {
    backgroundColor: "#e2e8f0",
    marginTop: 10,
    borderRadius: 10,
  },
  FlatListrightpress1: {
    backgroundColor: "#e2e8f0",
    marginTop: 10,
    borderRadius: 10,
    marginHorizontal: 15,
  },
  FlatListrightlefticon: {
    display: "flex",
    flexDirection: "row",
    padding: 10,
    color: "blue",
  },
  FlatListrightlefticontxt: {
    marginLeft: 10,
  },
});
