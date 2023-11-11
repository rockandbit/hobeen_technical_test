import React from 'react';
import { View, Text, ScrollView, Dimensions, StyleSheet } from 'react-native';
import { UserCard } from './UserCard';
import { User } from '../types';

interface UsersProps {
  items: User[];
}

const Users: React.FC<UsersProps> = ({ items }) => {
    if (items.length === 0) return <View><Text>No users</Text></View>;
 
    return (
        <ScrollView>
            <View style={styles.container}>

                {items.map((user: User) => (
                    <UserCard key={user.id} user={user}/>
                ))}
            </View>
        </ScrollView>
    );
};
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
    },
});

export default Users;
