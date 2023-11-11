import { UserRepo } from "./UserRepo";
import { StyleSheet, Text, View } from "react-native";
import _ from "lodash";
import { IUserRepo } from "../types";

export const UserRepos = ({ repos }: { repos: IUserRepo[] | IUserRepo}) => {
    if(!Array.isArray(repos) || !_.isEmpty(repos)) return (
        <View style={styles.container}>
            <Text style={styles.messageText}>No available repositories in this moment. Check it later, please.</Text> 
            <Text>{(repos as IUserRepo).message}</Text>     
        </View>
    );
    return (
        <View>
            <Text>Repositories</Text>
            {
                repos?.map((repo) => <UserRepo repo={repo}/>)
            }
        </View>

    );  
};
const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: '#f8d7da', 
        borderRadius: 4,
    },
    messageText: {
        color: '#721c24', 
    },
    warningText: {
        fontWeight: 'bold',
    },
});