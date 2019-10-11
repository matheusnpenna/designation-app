import React, { Component } from 'react'
import { Image, TouchableOpacity } from 'react-native'
import { assets } from '../../config'
import styles from './styles';

const onBack = (props) => {
    const { backPage } = props;
    if (backPage) {
        props.navigation.navigate(backPage);
    } else {
        props.navigation.goBack();
    }
}

const CloseButton = (props) => {

    return (
        <TouchableOpacity
            style={styles.closeContainer}
            onPress={() => onBack(props)}>
            <Image
                source={assets.icons.close}
                style={styles.closeImg} />
        </TouchableOpacity>
    );
}

export default CloseButton;
