const {
    View,
    Text,
    Image,
    TextInput,
    TouchableOpacity,
    ScrollView,
} = require('react-native');
import { useNavigation } from '@react-navigation/native';
import styles from './style';

import FontAwesome from 'react-native-vector-icons/FontAwesome';

function Login({ }) {
    const navigation = useNavigation();
    const handleLogin = () => {

        navigation.navigate('Home');
    };

    return (
        <ScrollView
            contentContainerStyle={{ flexGrow: 1 }}
            showsVerticalScrollIndicator={false}
            //   keyboardShouldPersistTaps={true}
            style={{ backgroundColor: 'white' }}>
            <View>
            <View style={styles.logoContainer}>
                <Image
                    style={styles.logo}
                    source={require('../assets/icon.png')}
                />
            </View>
            <View style={styles.loginContainer}>
                <Text style={styles.text_header}>Login !!!</Text>
                <View style={styles.action}>
                    <FontAwesome name="user-o" color="#098396" style={styles.smallIcon} />
                    <TextInput placeholder="Mobile or Email" style={styles.textInput} />
                </View>
                <View style={styles.action}>
                    <FontAwesome name="lock" color="#098396" style={styles.smallIcon} />
                    <TextInput placeholder="Password" style={styles.textInput} />
                </View>
                <View
                    style={{
                        justifyContent: 'flex-end',
                        alignItems: 'flex-end',
                        marginTop: 8,
                        marginRight: 10,
                    }}>
                    <Text style={{ color: '#098396', fontWeight: '700' }}>
                        Forgot Password
                    </Text>
                </View>
            </View>
            <View style={styles.button}>
                <TouchableOpacity style={styles.inBut} onPress={handleLogin}>
                    <View>
                        <Text style={styles.textSign}>Log in</Text>
                    </View>
                </TouchableOpacity>
                <Text style={{
                    justifyContent: 'flex-end',

                    marginTop: 8,
                    marginRight: 10,
                }}>
                    Already Dont have account?<Text style={styles.link} onPress={() => navigation.navigate('SignUp')}> SignUp here</Text>
                </Text>
            </View>

        </View>
        </ScrollView>
    );
}
export default Login;