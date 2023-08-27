import { useCallback, useState } from "react";
import { View, Text, TextInput, FlatList, Image } from "react-native";
import _ from "lodash";

import { styles } from "./style";
import { colors } from "../../constants/style";

import SearchIconSvg from "../../../assets/search-icon.svg"
import foyerImage from "../../../assets/foyer.png"
import { audioBooks } from "../../mock/audioBooks";
import { generateUUID } from "../../mock/helpers/generateUuid";
import AudioBookCard from "../../components/AudioBookCard";

const Search = () => {
    const [inputValue, setInputValue] = useState("");
    const [data, setData] = useState(null);

    const handlSearchQueryChange = _.debounce((searchQuery) => {
        if (searchQuery.length === 0) {
            setData(null);
            return;
        }
        setData(audioBooks.map((audioBook) => ({ ...audioBook, id: generateUUID() })));
    }, 300);

    const loadMoreData = useCallback(() => {
        setData((prevState) => [...prevState, ...audioBooks.map((audioBook) => ({ ...audioBook, id: generateUUID() }))])
    }, [setData])

    const handleInputChange = useCallback((text) => {
        setInputValue(text);
        handlSearchQueryChange(text);
    }, [setInputValue]);

    const renderItem = useCallback(({ item }) => (
        <AudioBookCard
            title={item.title}
            author={item.author}
            description={item.description}
            price={item.price}
            likeCount={item.likeCount}
            isLiked={item.isLiked}
            isPurchased={item.isPurchased}
            imageUrl={item.imageUrl}
        />
    ), []);

    return (
        <View style={styles.container}>
            <View style={styles.inputCont} >
                <TextInput
                    placeholder="Search here..."
                    value={inputValue}
                    placeholderTextColor={colors.aluminium}
                    style={styles.input}
                    onChangeText={handleInputChange}
                />
                <View style={styles.searchIconCont}>
                    <SearchIconSvg stroke={colors.aluminium} width={24} height={24} />
                </View>
            </View>
            {
                (!data || data.length === 0) &&
                (
                    <View style={styles.foyerContainer} >
                        <Image style={styles.foyerImage} source={foyerImage} />
                        <Text style={styles.foyerText} >You can find any audio books</Text>
                    </View>
                )
            }
            {
                data && data.length > 0 &&
                (
                    <FlatList
                        data={data}
                        renderItem={renderItem}
                        keyExtractor={(item) => item.id}
                        onEndReached={loadMoreData}
                        onEndReachedThreshold={0.2}
                    />
                )
            }
        </View>
    );
}

export default Search