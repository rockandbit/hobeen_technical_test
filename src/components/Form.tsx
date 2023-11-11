import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Users from './../components/Users';
import { useQuery } from './../hooks/useQuery';
import { useUsers } from './../hooks/useUsers';

export const Form = () => {
    const {query, updateQuery, error} = useQuery();
    const {users, getUsers, loading} = useUsers(query);

    const handleOnSubmit = () => {
        getUsers();
    };

    return (
        <View style={styles.container}>
            <Text>Search Users in GITHUB</Text>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder={`Enter a user name ...`}
                    onChangeText={(text) => updateQuery(text)}
                    value={query}
                />
                <TouchableOpacity style={styles.button} onPress={handleOnSubmit}>
                    <Text style={styles.buttonText}>Buscar</Text>
                </TouchableOpacity>
            </View>
            <View>
                <Text>User List</Text>
                {loading ? <Text>Loading users ....</Text> : <Users items={users} />}
            </View>
            <StatusBar style="auto" />
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
        flex: 1, // Para que el TextInput tome todo el espacio disponible
    },
    button: {
        backgroundColor: 'blue',
        padding: 10,
        marginLeft: 10,
        borderRadius: 5,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
    },
});