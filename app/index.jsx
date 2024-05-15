import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import CircularProgress from "react-native-circular-progress-indicator";
import { SafeAreaView } from "react-native-safe-area-context";

const App = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
    >
      <ScrollView>
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            marginVertical: 30,
          }}
        >
          <CircularProgress
            value={300000}
            radius={130}
            duration={2000}
            activeStrokeColor="#04387D"
            progressValueColor={"#04387D"}
            progressValueFontSize={30}
            progressValueStyle={{
              fontFamily: "SpaceMono",
              fontWeight: "bold",
            }}
            maxValue={1000000}
            valuePrefix={"Rp "}
            title="30%"
            titleColor="#ACA5A5"
            titleFontSize={20}
          />
        </View>
        <View style={styles.detailsContainer}>
          <Text style={styles.detailsTitle}>Details</Text>
          <View style={styles.detailsItem}>
            <View style={styles.blueDot}></View>
            <Text style={styles.itemTitle}>Jumlah Uang</Text>
            <Text style={styles.itemValue}>Rp 300.000,-</Text>
          </View>
          <View style={styles.detailsItem}>
            <View style={styles.blueDot}></View>
            <Text style={styles.itemTitle}>Volume</Text>
            <Text style={styles.itemValue}>30%</Text>
          </View>
          <View style={styles.detailsItem}>
            <View style={styles.blueDot}></View>
            <Text style={styles.itemTitle}>Jumlah Donatur</Text>
            <Text style={styles.itemValue}>17 Orang</Text>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Reset</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Unlock</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>View Location</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  detailsContainer: {
    marginVertical: 10,
    paddingHorizontal: 20,
  },
  detailsTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  detailsItem: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#D9D9D9",
    paddingVertical: 10,
  },
  itemTitle: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 5,
  },
  itemValue: {
    fontSize: 16,
    marginBottom: 5,
    marginLeft: "auto",
  },
  blueDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#04387D",
    marginRight: 10,
  },
  buttonContainer: {
    marginVertical: 20,
    paddingHorizontal: 20,
  },
  button: {
    backgroundColor: "#04387D",
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderRadius: 50,
    marginTop: 15,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default App;
