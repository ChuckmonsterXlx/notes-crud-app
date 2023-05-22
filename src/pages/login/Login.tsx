import { Platform, SafeAreaView, StyleSheet, Text, View } from "react-native";
import LargeBtn from "../../components/LargeBtn";
import LargeInput from "../../components/LargeInput";
import colors from "../../constants/colors"
import FormContainer from "../../components/FormContainer";
import { NavigationProp } from "@react-navigation/native";
import { RootStackParamList } from "../../constants/rootStackParamList";

type LoginScreenNavigationProp = NavigationProp<RootStackParamList, "login">;

const Login = ({ navigation }: { navigation: LoginScreenNavigationProp }) => {
  const handleChange = (name: string, value: string) => {
    console.log(name, value);
  }

  const onLogin = () => {
    console.log("login")
  }

  const onSignUp = () => {
    navigation.navigate('signup');
  }

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
                <LargeBtn text='Login' color={ colors.primaryBtn } onPress={onLogin} />
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
