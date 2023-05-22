import { useState, useEffect } from 'react'
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import LargeBtn from "../../components/LargeBtn";
import LargeInput from "../../components/LargeInput";
import colors from "../../constants/colors"
import FormContainer from "../../components/FormContainer";
import { NavigationProp } from "@react-navigation/native";
import { RootStackParamList } from "../../constants/rootStackParamList";
import apiCall from "../../helpers/apiCall";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { setVerifedUser } from '../../redux/slices/verifedUser';
import { IUser, setUsers } from '../../redux/slices/users';

type LoginScreenNavigationProp = NavigationProp<RootStackParamList, "login">;

const Login = ({ navigation }: { navigation: LoginScreenNavigationProp }) => {
    const [errorLogin, setErrorLogin] = useState(false);
    const [ isLoggedIn, setIsLoggedIn ] = useState(false);

    apiCall();

    const { users, verifedUser } = useAppSelector((state) => state);

    const dispatch = useAppDispatch();

    interface IUserLogin {
        email: string;
        password: string;
    }
    const [userLogin, setUserLogin] = useState<IUserLogin>({
        email: "",
        password: ""
    });

    const handleChange = (name: string, value: string) => {
        setUserLogin({...userLogin, [name]: value});
    }

    const handleSubmit = () => {
        fetch("http://192.168.100.145:3001/users")
            .then((res) => res.json())
            .then((res) => {
                dispatch(setUsers(res));
                startingSession(res);
            })
            .catch((error) => console.log(error));
    }

    const onSignUp = () => {
        navigation.navigate('signup');
    }

    const startingSession = (users:IUser[]) => {
        let emailL = userLogin.email.toLowerCase();
        let emailLDB = '';
        
        for (let i = 0; i < users.length; i++) {
            emailLDB = users[i].email.toLowerCase();
            if (emailL === emailLDB && userLogin.password === users[i].password)
            {
                setErrorLogin(false);
                dispatch(setVerifedUser({
                    login: true,
                    userId: users[i].id,
                    name: users[i].name,
                    lastName: users[i].lastName,
                    email: users[i].email,
                    role: users[i].role,
                    profileImg: users[i].profileImg,
                }))
                setIsLoggedIn(true);
                return
            }
        }

        console.log("Email o password incorrectos");
        setErrorLogin(true)
    }

    useEffect(() => {
        if (isLoggedIn) {
            if (verifedUser.login) {
                console.log("Deberias ir al home");
                navigation.navigate('home');
            }
        }
    }, [isLoggedIn, verifedUser.login])

    return (
        <>
        <View style={ styles.mainContainer }>
            <FormContainer>
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
                    <LargeBtn text='Login' color={ colors.primaryBtn } onPress={handleSubmit} />
                    <LargeBtn text='Sign Up' color={ colors.secondaryBtn } onPress={onSignUp} />
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
});

export default Login;
