import React, { Component } from 'react'
import { TextInput, Text, View, Image, Keyboard } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { assets } from '../../../../config'
import { SearchInput } from '../../../../components'
import styles from './styles'

class ContentFragment extends Component {
    constructor(props){
        super(props);
        this.state = {
            keyword:''
        };
    }

    onChangeKeyword = (keyword) => this.setState({ keyword });
    
    render() {
        return (
            <KeyboardAwareScrollView contentContainerStyle={styles.container}>
                <Image source={assets.images.logoWithName} style={styles.img} />
                <SearchInput onChange={this.onChangeKeyword} />
                <Text style={styles.subtitle}>Pesquise por palavras-chave</Text>
            </KeyboardAwareScrollView>
        );
    }
}
export default ContentFragment;