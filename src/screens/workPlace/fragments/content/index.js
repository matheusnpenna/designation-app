import React, { Component } from 'react'
import { TextInput, Text, View, Image, Keyboard } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { assets } from '../../../../config'
import { SearchInput, SelectableList, LargeButton } from '../../../../components'
import {  DesignationApi } from '../../../../services'
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

    onEndEditing = () => {
        const { keyword } = this.state;
        this.setState({ isLoading: true });
        DesignationApi.
        getContentIdeas(keyword,
            (contentList) => {
                this.setState({ contentList, isLoading: false });
            });
    }

    onChangeKeyword = (keyword) => this.setState({ keyword });

    onSelectKeywordList = (selectedList) => this.setState({ selectedList });
    
    render() {
        const { contentList } = this.state;

        return (
            <KeyboardAwareScrollView contentContainerStyle={styles.container}>
                {
                    contentList.length <= 0 ? 
                        <Image source={assets.images.logoWithName} style={styles.img} /> :
                        <Text style={styles.title}>ESCOLHA OS MELHORES TEMAS</Text>
                
                }
                <SearchInput onChange={this.onChangeKeyword} onEndEditing={this.onEndEditing} />
                {(contentList.length <= 0) && <Text style={styles.subtitle}>Pesquise por palavras-chave</Text>}
                {(contentList.length > 0) && <SelectableList onSelectList={this.onSelectKeywordList} list={contentList} />}
                {(contentList.length > 0) && 
                    <View style={styles.submitButtonContainer}>
                        <LargeButton
                            containerCustomStyle={styles.buttonContainer}
                            textCustomStyle={styles.buttonText}
                            text={'Gerar Layout'}
                            onPress={() => {}}
                              />
                    </View>
                }
            </KeyboardAwareScrollView>
        );
    }
}
export default ContentFragment;