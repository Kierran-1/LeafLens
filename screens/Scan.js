// Scan.js
import React, { useState, useRef } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Dimensions,
} from "react-native";
import { CameraView, useCameraPermissions } from "expo-camera";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

export default function Scan({ navigation }) {
  const [permission, requestPermission] = useCameraPermissions();
  const [flash, setFlash] = useState("off");
  const [cameraReady, setCameraReady] = useState(false);
  const cameraRef = useRef(null);
  const [photo, setPhoto] = useState(null);

  const takePicture = async () => {
    if (cameraRef.current) {
      const picture = await cameraRef.current.takePictureAsync({
        quality: 1,
        base64: true,
      });
      setPhoto(picture.uri);
    }
  };

  if (!permission) return <View />;
  if (!permission.granted) {
    return (
      <SafeAreaView style={styles.permissionContainer}>
        <Text style={styles.permissionText}>Camera access is required.</Text>
        <TouchableOpacity
          style={styles.permissionButton}
          onPress={requestPermission}
        >
          <Text style={styles.permissionButtonText}>Grant Permission</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      {!photo ? (
        <>
          <CameraView
            ref={cameraRef}
            style={styles.camera}
            facing="back"
            flash={flash}
            onCameraReady={() => setCameraReady(true)}>

            <View style={styles.topButtons}>
              <TouchableOpacity onPress={() => navigation.goBack()} style={styles.topIcon}>
                <Ionicons name="arrow-back" size={24} color="white" />
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => setFlash(flash === "on" ? "off" : "on")}
                style={styles.topIcon}>
                <Ionicons
                  name={flash === "on" ? "flash" : "flash-off"}
                  size={24}
                  color="white"/>
              </TouchableOpacity>
            </View>

            <View style={styles.overlay}>
              <View style={styles.focusFrame}>
                <Text style={styles.focusText}>Place the plant in focus</Text>
              </View>
            </View>
          </CameraView>

          {/* Buttons area inside SafeArea */}
          <View style={styles.bottomBar}>
            <TouchableOpacity style={styles.iconButton}>
              <Ionicons name="image-outline" size={28} color="white" />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.captureButton}
              onPress={takePicture}
              disabled={!cameraReady}
            >
              <View style={styles.innerButton} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.iconButton}>
              <Ionicons name="help-circle-outline" size={28} color="white" />
            </TouchableOpacity>
          </View>
          
        </>
      ) : (
        <View style={styles.previewContainer}>
          <Image source={{ uri: photo }} style={styles.preview} />
          <TouchableOpacity
            style={styles.retakeButton}
            onPress={() => setPhoto(null)}
          >
            <Text style={styles.retakeText}>Retake</Text>
          </TouchableOpacity>
        </View>
      )}
    </SafeAreaView>
  );
}

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#000" },
  camera: { flex: 1, justifyContent: "center", alignItems: "center" },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "center",
    alignItems: "center",
  },
  focusFrame: {
    borderWidth: 3,
    borderColor: "white",
    borderRadius: 20,
    width: width * 0.6,
    height: width * 0.6,
    justifyContent: "center",
    alignItems: "center",
  },
  focusText: {
    color: "white",
    fontSize: 16,
    position: "absolute",
    bottom: -30,
  },
  bottomBar: {
    backgroundColor: "#222",
    paddingVertical: 25,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  captureButton: {
    backgroundColor: "#53B175",
    width: 80,
    height: 80,
    borderRadius: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  innerButton: {
    backgroundColor: "white",
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  iconButton: {
    padding: 10,
  },
  permissionContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
  },
  permissionText: { color: "white", marginBottom: 10 },
  permissionButton: {
    backgroundColor: "#53B175",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
  },
  permissionButtonText: { color: "white", fontWeight: "600" },
  previewContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  preview: {
    width: width * 0.9,
    height: width * 1.2,
    borderRadius: 20,
  },
  retakeButton: {
    marginTop: 20,
    backgroundColor: "#53B175",
    paddingHorizontal: 30,
    paddingVertical: 12,
    borderRadius: 8,
  },
  retakeText: {
    color: "white",
    fontWeight: "600",
    fontSize: 16,
  },
  topButtons: {
  position: "absolute",
  top: 40,
  left: 0,
  right: 0,
  flexDirection: "row",
  justifyContent: "space-between",
  paddingHorizontal: 20,
  zIndex: 10,
},
topIcon: {
  backgroundColor: "rgba(0,0,0,0.4)",
  padding: 10,
  borderRadius: 50,
},
});
