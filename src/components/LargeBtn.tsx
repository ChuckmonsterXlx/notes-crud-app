import { StyleSheet, Text, TouchableOpacity } from "react-native";

interface LargeBtnProps {
    text: string;
    color: string;
    onPress: () => void;
}

const LargeBtn: React.FC<LargeBtnProps> = ({ text, color, onPress }) => {

    const styles = StyleSheet.create({
        btn: {
            paddingVertical: 15,
            paddingHorizontal: 15,
            borderRadius: 5,
            backgroundColor: color,
            marginBottom: 15,
        },
        txtBtn: {
            textAlign: 'center',
        },
    })

    return (
        <TouchableOpacity style={ styles.btn } onPress={ onPress }>
            <Text style={ styles.txtBtn }>{ text }</Text>
        </TouchableOpacity>
    )
}

export default LargeBtn;