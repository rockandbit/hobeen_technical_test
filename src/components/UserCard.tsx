import { Card, Paragraph, Title } from "react-native-paper";
import { User } from "../types";
import { Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";

export const UserCard = ({ user }: { user: User }) => {
    const navigation = useNavigation();

    const handleNavigate = () => {
        navigation.navigate('UserDetail', {user: user});
    };
    const screenWidth = Dimensions.get('window').width;
    const numColumns = screenWidth > 600 ? 3 : 2;
   
    const cardWidth = screenWidth / numColumns;
    return (
        <Card style={{ margin: 10,  width: cardWidth }} onPress={handleNavigate}>
            <Card.Cover source={{ uri: user.avatar_url }} />
            <Card.Content>
                <Title>{user.login}</Title>
                <Paragraph>Score: {user.score}</Paragraph>
            </Card.Content>
        </Card>
    );
};
  