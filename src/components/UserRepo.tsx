import { Text, View } from "react-native";
import { Title } from "react-native-paper";
import { IUserRepo } from "../types";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const UserRepo = ({ repo }: { repo: IUserRepo }) => 
    <View>
        <Title>{repo.name}</Title>
        <Text>Score: {repo.private}</Text>
    </View>;
  