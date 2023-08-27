import { StyleSheet } from "react-native";

import { colors } from "../../constants/style";

export const styles = StyleSheet.create({
    outterContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 8,
    },
    innerContainer: {
        flexDirection: "row",
        width: 366,
        height: 122,
        alignItems: "center",
        backgroundColor: colors.royalBlue,
        borderRadius: 5
    },
    imageContainer: {
        width: "30%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    summaryContainer: {
        width: "70%",
        height: 107,
        flexDirection: "column",
    },
    summaryTop: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingRight: 20,
        height: "30%",
    },
    author: {
        color: colors.spanishGrey,
        fontSize: 12,
        marginBottom: 2
    },
    title: {
        color: colors.white,
        fontSize: 14,
        fontWeight: "500"
    },
    description: {
        color: colors.lightGrey,
        fontSize: 12,
        fontWeight: "300",
        marginTop: 10
    },
    price: {
        fontSize: 16,
        fontWeight: "bold",
        color: colors.neonPink,
        marginTop: 10
    },
    likeCount: {
        color: colors.purple,
        marginTop: 3
    },
    image: {
        width: 80,
        height: 107,
        resizeMode: "cover",
    },
});