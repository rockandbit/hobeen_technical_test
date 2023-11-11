import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { useQuery } from './src/hooks/useQuery';
import { useUsers } from './src/hooks/useUsers';
import { Users } from './src/components/Users';

export default function App() {
    const {query, updateQuery, error} = useQuery();
    const {users, getUsers, loading} = useUsers(query);

    const handleOnSubmit = () => {
        getUsers();
    };

    return (
        <View style={styles.container}>
            <Text>Search Users in GITHUB</Text>
            <View style={styles.container}>
                <TextInput
                    style={styles.input}
                    placeholder={`Enter a user name ...`}
                    onChangeText={(text) => updateQuery(text)}
                    value={query}
                />
                <Button title="Buscar" onPress={handleOnSubmit} />
            </View>
            <View>
                <Text>User List</Text>
                {
                    loading
                        ? <Text>Cargando ....</Text> 
                        : <Users items={users}/>
                }
            </View>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
        width: '100%',
    },
});
