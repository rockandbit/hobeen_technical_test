import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { fetchRepos } from '../backend/fetchRepos';
import { UserRepos } from '../components/UserRepos';
import { IUserRepo } from '../types';

const UserDetailsScreen = ({ route }) => {
    const { user } = route.params;
    const [repos, setRepos] = useState<IUserRepo[]>([]);
    
    const getRepos = async () => {
        try {
            const newRepos: IUserRepo[] = await fetchRepos(user.login);
            setRepos(newRepos);
        } catch (error) {
            throw new Error (`Error in request of user repositories`);
        }   
    };

    useEffect(() => {
        getRepos();
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.detail}>Score: {user.score}</Text>
            <Image source={{ uri: user.avatar_url }} style={styles.avatar} />
            <Text style={styles.title}>{user.login}</Text>
            <UserRepos repos={repos}/>
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
