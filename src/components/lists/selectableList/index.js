import React, { Component } from 'react'
import { Text, View } from 'react-native'
import styles from './styles'

class SelectableList extends Component {
    constructor(props){
        super(props);
        this.state = {
            list: [],
            selectableList: []
        };
    }
    
    render() {
        const { list } = this.props;
        
        return (
            <View style={styles.container}>
                <Text> SelectableList </Text>
            </View>
        )
    }
}

export default SelectableList;