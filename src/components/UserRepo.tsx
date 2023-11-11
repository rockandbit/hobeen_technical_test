import { Text, View } from "react-native";
import { Title } from "react-native-paper";
import { IUserRepo } from "../types";

export const UserRepo = ({ repo }: { repo: IUserRepo }) => 
    <View>
        <Title>{repo.name}</Title>
        <Text>Score: {repo.private}</Text>
    </View>;
  