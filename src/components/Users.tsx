import { Text, View } from "react-native";
import { SearchResults, User } from "../types";
import _ from "lodash";

export const Users = ({items: items}: SearchResults) => {
    if (_.isEmpty(items)) return <View><Text>No users</Text></View>;
    return(
        <View>
            {items.map((user: User) => {
                return <Text key={user.id}>{user.id}</Text>;
            })}

        </View>
    );

};