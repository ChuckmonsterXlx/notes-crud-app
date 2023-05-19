import { Platform, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import LargeBtn from "../../components/LargeBtn";
import LargeInput from "../../components/LargeInput";

const handleChange = (name: string, value: string) => {
    console.log(name, value);
}

const Login = () => {
    return (
        <>
            <View style={ styles.mainContainer }>
                <View style={[ styles.formContainer, boxShadow ]}>
                    <View>
                        <Text style={ styles.titleForm }>Log in</Text>
                    </View>
                    <View>
                        <SafeAreaView>
                            <View>
                                <Text style={ styles.inputTxt }>Email</Text>
                                <LargeInput name='email' placeholder='Email' secureText={false} onHandleChange={handleChange}/>
                            </View>
                            <View>
                                <Text style={ styles.inputTxt }>Password</Text>
                                <LargeInput name='password' placeholder='Password' secureText={true} onHandleChange={handleChange}/>
                            </View>
                            <View>
                                <LargeBtn text='Login' color='rgba(104,104,255,1)' />
                                <LargeBtn text='Sign Up' color='rgba(177,177,255,1)' />
                            </View>
                        </SafeAreaView>
                    </View>
                </View>
            </View>
        </>
    )
}

const boxShadow = ( Platform.OS === 'android' 
    ? 
        {
            elevation: 2,
        }
    : 
        {
            shadowColor: '#000',
            shadowOpacity: 0.15,
            shadowRadius: 2.6,
            shadowOffset: {
            width: 1.95,
            height: 1.95,
            },
        }
)

const styles = StyleSheet.create({
    mainContainer: {
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    formContainer: {
        backgroundColor: '#fff',
        width: '90%',
        paddingHorizontal: 15,
        borderRadius: 5,
    },
    titleForm: {
        fontSize: 22,
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 25,
    },
    inputTxt: {
        marginBottom: 10,
        fontSize: 15,
    },
});

export default Login;