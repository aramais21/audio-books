import { StyleSheet } from "react-native";

import { colors } from "../constants/style";

export const commonStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexDirection: "column",
        backgroundColor: colors.blackBlue,
    },
    text: {
        color: colors.white,
    },
    safeAreaView: {
        flex: 1,
        backgroundColor: colors.royalBlue,
    }
});