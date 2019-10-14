import React, { Component } from 'react'
import { Text, View, FlatList } from 'react-native'
import SelectableRow from './row';
import styles from './styles'

class SelectableList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
            selectableList: []
        };
    }

    onSelectItem = () => {

    }

    render() {
        const { 
            onSelectItem,
            props: { list }
        } = this;

        return (
            <View style={styles.container}>
                <FlatList
                    data={list}
                    renderItem={({ item }) => <SelectableRow onSelect={onSelectItem} title={item.title} />}
                    keyExtractor={(item, index) => item.title+index}
                />
            </View>
        )
    }
}

export default SelectableList;