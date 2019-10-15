import React, { useState } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import styles from './styles';

const SelectableRow = (props) => {
    const [isSelected, updateSelected] = useState(false);
    const checkControl = isSelected ? styles.checked : styles.unChecked;
    return (
        <TouchableOpacity
            onPress={() => { props.onSelect(props.item); updateSelected(!isSelected); } }
            style={styles.container}>
            <View style={{ ...styles.radioButton, ...checkControl }}></View>
            <Text numberOfLines={2} adjustsFontSizeToFit ellipsizeMode={'clip'} style={styles.title}>{props.item.title}</Text>
        </TouchableOpacity>
    );
}

export default SelectableRow;
