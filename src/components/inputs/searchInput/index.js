import React, { Component } from 'react'
import { TextInput, View, Image } from 'react-native'
import styles from './styles'
import { assets } from '../../../config';

class SearchInput extends Component {
    constructor(props){
        super(props);
        this.state = {
            keyword: ''
        };
    }

    onKeyPressEmail = ({ nativeEvent: { key: keyValue } }) => {
        if (keyValue === 'Enter') {
          Keyboard.dismiss();
        }
    }

    onChangeKeyword = (keyword) => {
        this.props.onChange(keyword);
        this.setState({ keyword });
    }

    render() {
        const {
            onKeyPressEmail,
            onChangeKeyword,
            state: { keyword },
            props: { onEndEditing }
        } = this;

        return (
            <View style={styles.inputContainer}>
                <Image source={assets.icons.search} style={styles.img} />
                <TextInput
                    placeholder={'PESQUISE O TEMA DO SEU CONTEÚDO'}
                    keyboardType={'default'}
                    onKeyPress={onKeyPressEmail}
                    onChangeText={onChangeKeyword}
                    onEndEditing={onEndEditing}
                    value={keyword}
                />
            </View>
        )
    }
}

export default SearchInput;
