import { Platform, StyleSheet, View, ViewProps } from "react-native";

interface FormContainerProps extends ViewProps {
  children: React.ReactNode;
}

const FormContainer: React.FC<FormContainerProps> = ({ children, ...props }) => {
  const boxShadow = Platform.select({
    android: {
      elevation: 2,
    },
    ios: {
      shadowColor: '#000',
      shadowOpacity: 0.15,
      shadowRadius: 2.6,
      shadowOffset: {
        width: 1.95,
        height: 1.95,
      },
    },
    default: {},
  });

  return (
    <View style={[styles.formContainer, boxShadow]} {...props}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    backgroundColor: '#fff',
    width: '90%',
    paddingHorizontal: 15,
    borderRadius: 5,
  },
});

export default FormContainer;
