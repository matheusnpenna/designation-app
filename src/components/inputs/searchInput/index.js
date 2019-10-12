import React, { Component } from 'react'
import { TextInput, View, Image } from 'react-native'
import styles from './styles'
import { assets } from '../../../config';

class SearchInput extends Component {
    constructor(props){
        super(props);
        this.state = {
            keyword: '',
            contentIdeas: []
        };
    }

    onKeyPressEmail = ({ nativeEvent: { key: keyValue } }) => {
        if (keyValue === 'Enter') {
          Keyboard.dismiss();
        }
    }

    onChangeKeyword = (keyword) => this.setState({ keyword });

    render() {
        const { keyword } = this.state;

        return (
            <View style={styles.inputContainer}>
                <Image source={assets.icons.search} style={styles.img} />
                <TextInput
                    style={styles.input}
                    placeholder={'PESQUISE O TEMA DO SEU CONTEÚDO'}
                    keyboardType={'default'}
                    onKeyPress={this.onKeyPressEmail}
                    onChangeText={this.onChangeKeyword}
                    value={keyword}
                />
            </View>
        )
    }
}

export default SearchInput;
