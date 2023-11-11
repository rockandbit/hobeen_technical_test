import { Card, Paragraph, Title } from "react-native-paper";
import { User } from "../types";
import { Dimensions } from "react-native";

export const UserCard = ({ user }: { user: User }) => {
    // Calcula la cantidad de columnas en función del ancho de la pantalla
    const screenWidth = Dimensions.get('window').width;
    const numColumns = screenWidth > 600 ? 3 : 2;
   
    // Calcula el ancho de cada tarjeta de usuario
    const cardWidth = screenWidth / numColumns;
    return (
        <Card style={{ margin: 10,  width: cardWidth }}>
            <Card.Cover source={{ uri: user.avatar_url }} />
            <Card.Content>
                <Title>{user.login}</Title>
                <Paragraph>Score: {user.score}</Paragraph>
            </Card.Content>
        </Card>
    );
};
  