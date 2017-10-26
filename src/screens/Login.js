import React, { Component } from 'react';
import {
    ScrollView,
    Text,
    TextInput,
    View,
    Button
} from 'react-native';

export default class Login extends Component {

    render() {
        return (
            <ScrollView style={{padding: 20}}>
                <Text
                    style={{fontSize: 27}}>
                    Geeky TO DO PORTAL
                </Text>

                <View style={{margin:7}} />
                <Button
                        onPress={this.props.onLoginPress}
                        title="Masuk Ke Aplikasi"
                    />
                </ScrollView>
            )
    }
}
