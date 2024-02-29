import { StyleSheet, Text, View, Button } from 'react-native';

function Home(props) {
    console.log(props);
    return (
        <View style={styles.viewStyle}>
            <Text style={styles.headingStyle}>Login & Register In React Native</Text>

        </View>
    );
}
const styles = StyleSheet.create({
    viewStyle: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },

    headingStyle: {
        fontSize: 30,
        color: 'black',
        textAlign: 'center',
    },
});
export default Home;