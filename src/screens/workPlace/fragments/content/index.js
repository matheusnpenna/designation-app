import React, { Component } from 'react'
import { TextInput, Text, View, Image, Keyboard } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { assets } from '../../../../config'
import { SearchInput, SelectableList } from '../../../../components'
import styles from './styles'

class ContentFragment extends Component {
    constructor(props){
        super(props);
        this.state = {
            keyword:'',
            contentList: [],
            selectedList: []
        };
    }

    onChangeKeyword = (keyword) => this.setState({ keyword });

    onSelectKeywordList = (contentIdeas) => this.setState({ contentIdeas });

    
    render() {
        const { contentList } = this.state;
        return (
            <KeyboardAwareScrollView contentContainerStyle={styles.container}>
                <Image source={assets.images.logoWithName} style={styles.img} />
                <SearchInput onChange={this.onChangeKeyword} />
                {(contentList.length > 0) && <Text style={styles.subtitle}>Pesquise por palavras-chave</Text>}
                {(contentList.length > 0) && <SelectableList onSelectList={this.onSelectKeywordList} />}
            </KeyboardAwareScrollView>
        );
    }
}
export default ContentFragment;