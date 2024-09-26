import Ionicons from '@expo/vector-icons/Ionicons';
import { Link } from 'expo-router';
import { StyleSheet, Platform, Pressable } from 'react-native';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

import { reactNativeInfo } from '@/constants/ReactNativeInfo';

export default function Modal() {
  const { rnVersion, routerVersion, hermesVersion, uiManager } =
    reactNativeInfo;
  // If the page was reloaded or navigated to directly, then the modal should be presented as
  // a full screen page. You may need to change the UI to account for this.
  return (
    <ThemedView style={{ backgroundColor: 'transparent' }}>
      <ThemedView
        style={{
          width: '100%',
          height: '100%',
          backgroundColor: 'transparent',
          borderColor: '#cccccc',
          borderWidth: 1,
          borderRadius: 20,
          padding: 20,
        }}
      >
        <ThemedText type="title" style={{ fontSize: 20 }}>
          About this demo
        </ThemedText>
        <ThemedText>{`expo-router: ${routerVersion}`}</ThemedText>
        <ThemedText>{`react-native-tvos: ${rnVersion}`}</ThemedText>
        {/*
      <ThemedText
        style={{ fontSize: 12, lineHeight: 14 }}
      >{`Hermes bytecode version: ${JSON.stringify(
        hermesVersion,
        null,
        2,
      )}`}</ThemedText>
      <ThemedText>{`${
        uiManager === 'Fabric' ? 'Fabric enabled' : ''
      }`}</ThemedText>
      */}
        {/* Use `../` as a simple way to navigate to the root. This is not analogous to "goBack". */}
        <Link href="../" asChild>
          <Pressable>
            {({ pressed }) => (
              <ThemedText
                style={{ fontWeight: 'bold', opacity: pressed ? 0.6 : 1.0 }}
              >
                Dismiss
              </ThemedText>
            )}
          </Pressable>
        </Link>
      </ThemedView>
    </ThemedView>
  );
}
