import React, { Component, PropTypes } from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Button
} from 'react-native';

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: ''
    };
    this.submit = this.submit.bind(this)
  }
  submit() {
    // TODO save form to server
    const { state: { title, description } } = this
    const formData = {
      title,
      description
    }
    console.log(formData)
  }
  render() {
    return(
      <View style={styles.container}>
        <TextInput
          style={styles.title}
          onChangeText={(title) => this.setState({ title })}
          value={this.state.title}
          placeholder='Title'
        />
        <TextInput
          style={styles.description}
          onChangeText={(description) => this.setState({ description })}
          value={this.state.description}
          placeholder='Description'
          multiline={true}
        />
        <Button
          title='Submit'
          onPress={this.submit}
        />
      </View>
    )
  }
}

const styles = {
  container: {
    marginTop: 60,
    padding: 10,
    backgroundColor: '#F5FCFF',
    flex: 1
  },
  text: {
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 6,
    marginBottom: 20,
    padding: 4
  }
};

styles.title = {
  height: 30,
  ...styles.text
}

styles.description = {
  flex: 1,
  ...styles.text
}

styles = StyleSheet.create(styles);
