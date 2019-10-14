import React, { Component } from 'react'
import { Text, View, FlatList } from 'react-native'
import SelectableRow from './row';
import styles from './styles'

class SelectableList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
            selectedList: []
        };
    }

    onSelectItem = (item) => {
        this.state.selectableList
        console.log('Parent', item);
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
                    renderItem={({ item }) => <SelectableRow onSelect={onSelectItem} item={item}/>}
                    keyExtractor={(item, index) => item.title+index}
                    ItemSeparatorComponent={() => <View style={styles.separator} />}
                />
            </View>
        )
    }
}

export default SelectableList;