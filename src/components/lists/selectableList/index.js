import React, { Component } from 'react'
import { Text, View, FlatList } from 'react-native'
import SelectableRow from './row';
import styles from './styles'

class SelectableList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedList: []
        };
    }

    onSelectItem = (item) => {
        const {
            props: { onSelectList },
            state: { selectedList }
        } = this;
        const i = selectedList.indexOf(item);
        if(i == -1) {
            selectedList.push(item);
        } else {
            selectedList.splice(i, 1);
        }
        onSelectList(selectedList);
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
                    ItemSeparatorComponent={() => <View style={styles.separator}
                    contentContainerStyle={styles.flatList} />}
                />
            </View>
        )
    }
}

export default SelectableList;