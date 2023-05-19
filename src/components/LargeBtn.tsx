import { StyleSheet, Text, TouchableOpacity } from "react-native";

interface LargeBtnProps {
    text: string;
    color: string
}

const LargeBtn: React.FC<LargeBtnProps> = (props) => {

    const styles = StyleSheet.create({
        btn: {
            paddingVertical: 15,
            paddingHorizontal: 15,
            borderRadius: 5,
            backgroundColor: props.color,
            marginBottom: 15,
        },
        txtBtn: {
            textAlign: 'center',
        },
    })

    return (
        <TouchableOpacity style={ styles.btn }>
            <Text style={ styles.txtBtn }>{ props.text }</Text>
        </TouchableOpacity>
    )
}

export default LargeBtn;