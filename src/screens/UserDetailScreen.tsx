import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const UserDetailsScreen = ({ route }) => {
    const { user } = route.params;

    return (
        <View style={styles.container}>
            <Text style={styles.detail}>Score: {user.score}</Text>
            <Image source={{ uri: user.avatar_url }} style={styles.avatar} />
            <Text style={styles.title}>{user.login}</Text>

            <View>
                <Text>URLs</Text>
                <Text style={styles.detail}>Followers URL: {user.followers_url}</Text>
                <Text style={styles.detail}>Events: {user.events_url}</Text>
                <Text style={styles.detail}>Organizations: {user.organizations_url}</Text>
                <Text style={styles.detail}>Details: {user.url}</Text>
            </View>
            
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 10,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    detail: {
        fontSize: 16,
        marginBottom: 8,
    },
});

export default UserDetailsScreen;
