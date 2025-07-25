import { Text, SafeAreaView, StatusBar} from 'react-native'
import {Slot} from "expo-router";
import {Platform} from "expo-modules-core";

export default function _Layout() {
    return (
        <SafeAreaView style={Platform.OS === 'android' ? { paddingTop: StatusBar.currentHeight } : undefined}>
            <Text>Auth Layout</Text>
            <Slot/>
        </SafeAreaView>
    )
}
