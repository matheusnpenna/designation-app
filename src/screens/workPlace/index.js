import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { CloseButton } from '../../components';
import { ContentFragments } from './fragments';
import styles from './styles';

export default class WorkPlaceScreen extends Component {
  static navigationOptions = ({ navigationOptions }) => ({ header: null });
  
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  renderFragments = (props) => {
    const { inEdit } = this.props;
    if (inEdit) {
      // here render the tab with all actions
    } else {
      // Define contents is the first screent o appear
      return <ContentFragments />;
    }
  }

  render() {
    const { props } = this;
    return (
      <View style={styles.container}>
        <CloseButton navigation={this.props.navigation} />
        {this.renderFragments(props)}
      </View>
    );
  }
}
