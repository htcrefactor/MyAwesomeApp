import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const API_KEY = '6db15c64bb9d142e87b1426c8d6c07a3';
const queryUrl = (city) => `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`

export default class WeatherDetailScreen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: true,
        };
    }

    componentDidMount() {
        const {
            route: {
                params: { city },
            },
        } = this.props;

        fetch(queryUrl(city))
            .then(response => response.json())
            .then(info => {
                console.log(info);
                this.setState({
                    ...info,
                    isLoading: false
                });
            });
    }

    render() {
        const {
            route: {
                params: { city }
            },
            navigation
        } = this.props;

        navigation.setOptions({ title: `Weather Information:  ${city}` });

        if (this.state.isLoading) {
            return (
                <View style={styles.container}>
                    <Text>Loading data...</Text>
                </View>
            )
        }

        let celsius = this.state.main.temp - 273.15;

        return (
            <View style={styles.container}>
                <Text>Temperature: {celsius.toFixed(1)}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});