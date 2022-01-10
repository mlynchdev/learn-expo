import { StyleSheet, Text, View } from "react-native"

import StorybookUI from "../storybook"

interface MainProps {
    showSB: boolean
}

const Provider = () => {
    return (
        <View style={styles.container}>
            <Text>Hello World</Text>
        </View>
    )
}
// Conditionally render Storybook or the app Storybook.config.json
export const Main = ({ showSB }: MainProps) => {
    console.log(showSB)
    return <>{showSB ? <StorybookUI /> : <Provider />}</>
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
})
