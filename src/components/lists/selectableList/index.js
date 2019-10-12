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
                {list.map((v,i) => <Text> {v.title} </Text>)}
            </View>
        )
    }
}

export default SelectableList;