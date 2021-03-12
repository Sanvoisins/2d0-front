import React, { Component } from 'react'
import { Text, View, StyleSheet, Button } from 'react-native'

export class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
          items: [],
          isLoaded: false,
        };
      }
     getTask = () => {
        return fetch('http://localhost:5000/api/task/1')
          .then((response) => response.json())
          .then((json) => {
            return json;
          })
          .catch((error) => {
            console.error(error);
          });
      };
    componentDidMount() {
        const task = this.getTask();
        console.log(task)
    }

    render() {
        
        const Separator = () => (
            <View style={styles.separator} />
        );
        return (
            <View>
                 <View>
                    <Text style={styles.title}>
                    To Do 1
                    </Text>
                    <Button
                    title="Complete"
                    onPress={() => console.log('complete todo1')}
                    />
                    <Button
                    title="Delete"
                    onPress={() => console.log('delete todo1')}
                    />
                </View>
                <Separator/> 
                <View>
                    <Text style={styles.title}>
                    To Do 2
                    </Text>
                    <Button
                    title="Complete"
                    onPress={() => console.log('complete todo2')}
                    />
                    <Button
                    title="Delete"
                    onPress={() => console.log('delete todo2')}
                    />
                </View>
                <Separator/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      marginHorizontal: 16,
    },
    title: {
      textAlign: 'center',
      marginVertical: 8,
    },
    fixToText: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    separator: {
      marginVertical: 8,
      borderBottomColor: '#737373',
      borderBottomWidth: StyleSheet.hairlineWidth,
    },
  });
export default Home
