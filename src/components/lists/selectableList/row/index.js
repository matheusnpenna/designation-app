import React, { useState } from 'react'
import { Text, View } from 'react-native'
import styles from './styles';

const SelectableRow = (props) => {
    const [isSelected, setSelected] = useState(false);
        return (
            <View>
                <Text style={styles.title}>{props.title}</Text>
            </View>
        );
}

export default SelectableRow;
