
import { View, StyleSheet, Text } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const DrawerList = [
    { label: 'Home', navigateTo: 'Home' },


];

const DrawerLayout = ({ label, navigateTo }) => {
    const navigation = useNavigation();

    return (
        <DrawerItem
            label={label}
            onPress={() => {
                navigation.navigate(navigateTo);
            }}
        />
    );
};

const DrawerItems = props => {
    return DrawerList.map((el, i) => {
        return (
            <DrawerLayout
                key={i}
                label={el.label}
                navigateTo={el.navigateTo}
            />
        );
    });
};

function DrawerContent(props) {
    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <TouchableOpacity activeOpacity={0.8}>
                        <View style={styles.userInfoSection}>
                            <Text style={styles.title}>UserName</Text>
                            <Text style={styles.caption} numberOfLines={1}>
                                Myid@gmail.com
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <View style={styles.drawerSection}>
                        <DrawerItems />
                    </View>
                </View>
            </DrawerContentScrollView>
            <View style={styles.bottomDrawerSection}>
                <DrawerItem
                    label="Sign Out"
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    drawerContent: {
        flex: 1,
    },
    userInfoSection: {
        paddingLeft: 20,
    },
    title: {
        fontSize: 16,
        marginTop: 3,
        fontWeight: 'bold',
    },
    caption: {
        fontSize: 13,
        lineHeight: 14,
        // color: '#6e6e6e',
        width: '100%',
    },


    drawerSection: {
        marginTop: 15,
        borderBottomWidth: 0,
        borderBottomColor: '#dedede',

    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#dedede',
        borderTopWidth: 1,
        borderBottomColor: '#dedede',
        borderBottomWidth: 1,
    },

});

export default DrawerContent;