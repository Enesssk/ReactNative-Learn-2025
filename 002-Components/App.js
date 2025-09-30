import React, {Component} from 'react';
import {SafeAreaView, Text} from 'react-native'

class App extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.Log("Component is mounted")
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.Log("Checking if component should update")
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.Log("Getting snapshot before component update")
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.Log("Component has updated")
    }

    componentWillUnmount() {
        console.log("Component will unmount")
    }

    render() {
     return (
          <SafeAreaView>
             <Text
                 onPress = {() => {
                     this.setState({name: "Nata"})
             }}>
                 Hello, {this.state?.name}!
             </Text>
          </SafeAreaView>
  )}
}

export default App;