import { getRandomBytes } from "expo-crypto";

export const generateUUID = () => {
    const randomBytes = getRandomBytes(16);
    return (
        [0, 4, 6, 8, 10].map((offset) =>
            randomBytes[offset].toString(16).padStart(2, "0")
        ).join("") +
        "-" +
        [2, 14].map((offset) =>
            randomBytes[offset].toString(16).padStart(2, "0")
        ).join("") +
        "-" +
        [9, 11].map((offset) =>
            randomBytes[offset].toString(16).padStart(2, "0")
        ).join("") +
        "-" +
        randomBytes[15].toString(16).padStart(2, "0")
    );
};