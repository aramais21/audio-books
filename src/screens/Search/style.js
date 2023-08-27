import { StyleSheet } from "react-native";

import { colors } from "../../constants/style";

export const styles = StyleSheet.create({
    inputCont: {
        position: "relative"
    },
    input: {
        width: "100%",
        borderBottomColor: colors.cosmicCobalt,
        borderBottomWidth: 1,
        height: 60,
        fontSize: 24,
        color: colors.aluminium,
        paddingLeft: 54,
        paddingRight: 20,
    },
    container: {
        backgroundColor: colors.blackBlue,
        flex: 1
    },
    foyerContainer: {
        flex: 1,
        flexWrap: "nowrap",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    },
    foyerImage: {
        width: 288,
        opacity: 0.4,
    },
    foyerText: {
        color: colors.persianBlue,
        maxWidth: 235,
        fontSize: 24,
        textAlign: "center",
        opacity: 0.5,
    },
    searchIconCont: {
        position: "absolute",
        left: 20,
        width: 24,
        height: 24,
        top: "50%",
        transform: [{ translateY: -12 }],
    }
});