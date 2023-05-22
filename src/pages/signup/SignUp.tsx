import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import FormContainer from "../../components/FormContainer";
import LargeInput from "../../components/LargeInput";
import LargeBtn from "../../components/LargeBtn";
import colors from "../../constants/colors";
import { NavigationProp } from "@react-navigation/native";
import { RootStackParamList } from "../../constants/rootStackParamList";

type LoginScreenNavigationProp = NavigationProp<RootStackParamList, "login">;

const SignUp = ({ navigation }: { navigation: LoginScreenNavigationProp }) => {

    const onSubmit = () => {
        console.log("submit")
    }

    const onLogin = () => {
        navigation.navigate('login');
    }

    return (
        <>
            <View style={ styles.mainContainer }>
                <FormContainer>
                    <View>
                        <Text style={ styles.titleForm }>Sign Up</Text>
                    </View>
                    <View>
                        <SafeAreaView>
                            <View>
                                <View>
                                    <Text style={ styles.inputTxt }>Name</Text>
                                    <LargeInput name='name' placeholder='Name' secureText={false} onHandleChange={null}/>
                                </View>
                                <View>
                                    <Text style={ styles.inputTxt }>Email</Text>
                                    <LargeInput name='email' placeholder='Email' secureText={false} onHandleChange={null}/>
                                </View>
                                <View>
                                    <Text style={ styles.inputTxt }>Password</Text>
                                    <LargeInput name='password' placeholder='Password' secureText={true} onHandleChange={null}/>
                                </View>
                                <View>
                                    <Text style={ styles.inputTxt }>Confirm password</Text>
                                    <LargeInput name='confirmPassword' placeholder='Password' secureText={true} onHandleChange={null}/>
                                </View>
                            </View>
                            <View>
                                <LargeBtn text='Submit' color={ colors.primaryBtn } onPress={onSubmit} />
                                <LargeBtn text='Login' color={ colors.secondaryBtn } onPress={onLogin} />
                            </View>
                        </SafeAreaView>
                    </View>
                </FormContainer>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
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
})

export default SignUp;