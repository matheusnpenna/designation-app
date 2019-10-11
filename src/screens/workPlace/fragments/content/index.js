import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'
import styles from './styles';
import { assets } from '../../../../config';

class ContentFragment extends Component {
    
    render() {
        return (
            <View styles={styles.container}>
                <Image source={assets.images.logoWithName} />
            </View>
        );
    }
}
export default ContentFragment;