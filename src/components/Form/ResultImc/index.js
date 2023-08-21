import React from "react";
import { View, Text, TouchableOpacity, Share } from "react-native";
import styles from "./style";

const url = "https://awesome.contents.com/";
const title = "Awesome Contents";

export default function ResultImc(props) {
  const onShare = async () => {
    const result = await Share.share({
      message: "Meu imc hoje é: " + props.resultImc,
      url: "https://awesome.contents.com/",
      title: "Awesome Contents",
    });
  };

  return (
    <View style={styles.contextImc}>
      <View style={styles.boxSharebutton}>
        <Text style={styles.titleResultImc}>{props.messageResultIMc}</Text>
        <Text style={styles.resultImc}>{props.resultImc}</Text>
        <TouchableOpacity onPress={onShare} style={styles.shared}>
          <Text style={styles.sharedText}>Share</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
