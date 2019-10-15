import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { CloseButton } from '../../components';
import { ContentFragments, LayoutFragments } from './fragments';
import { userActions } from '../../redux';
import { getWorkPlaceControl } from '../../redux/ui';
import styles from './styles';

class WorkPlaceScreen extends Component {
  static navigationOptions = ({ navigationOptions }) => ({ header: null });
  
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  renderFragments = (props) => {
    const { workPlaceControl: { inEdit, resourceInFocus } } = this.props;
    if (inEdit) {
      return Fragments[resourceInFocus];
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

const mapStateToProps = state => ({ workPlaceControl: getWorkPlaceControl(state) });

const mapDispatchToProps = dispatch => ({
  setWorkPlaceControl: workPlace => dispatch(userActions.setWorkPlaceControl(workPlace))
});


export default connect(mapStateToProps, mapDispatchToProps)(WorkPlaceScreen);