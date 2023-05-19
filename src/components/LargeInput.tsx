import { StyleSheet, Text, TextInput, View } from "react-native";

interface LargeInputProps {
    name: string,
    placeholder: string,
    secureText: boolean,
    onHandleChange: any,
}

const LargeInput: React.FC<LargeInputProps> = (props) => {

    const styles = StyleSheet.create({
        input: {
            height: 40,
            marginBottom: 20,
            borderWidth: 1,
            paddingVertical: 10,
            paddingHorizontal: 20,
            borderRadius: 20,
            borderColor: 'rgba(0,0,0,0.1)'
        },
    })

    return (
        <View>
            <TextInput 
                style={styles.input}
                secureTextEntry={props.secureText} 
                placeholder={ props.placeholder } 
                onChangeText={(value) => props.onHandleChange(props.name, value)}
            />
        </View>
    )
}

export default LargeInput;