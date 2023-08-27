import React, { useState } from "react";
import { View, Text, Image } from "react-native";

import { styles } from "./style";
import { truncateString } from "../../helpers/string";
import HeartIconSvg from "../../../assets/heart-icon.svg"
import { colors } from "../../constants/style";

export default function AudioBookCard(props) {
    const { title, author, description, price, likeCount, isLiked, isPurchased, imageUrl } = props;
    return (
        <View
            style={styles.outterContainer}>
            <View
                style={styles.innerContainer}>
                <View
                    style={styles.imageContainer}>
                    <Image
                        source={{ uri: imageUrl }}
                        style={styles.image}
                    />
                </View>
                <View
                    style={styles.summaryContainer}>
                    <View style={styles.summaryTop}>
                        <View>
                            <Text style={styles.author}>{author}</Text>
                            <Text style={styles.title}>{title}</Text>
                        </View>
                        <View>
                            <HeartIconSvg stroke={colors.purple} />
                            <Text style={styles.likeCount} >{likeCount}</Text>
                        </View>
                    </View>
                    <View>
                        <Text style={styles.description}>{truncateString(description, 80)}</Text>
                        <Text style={styles.price}>${price}</Text>
                    </View>
                </View>
            </View>
        </View>
    );
}