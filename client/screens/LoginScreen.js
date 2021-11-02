import React from 'react'
import { Image, StyleSheet} from 'react-native'
import { Formik } from 'formik';
import * as Yup from "yup"

import AppButton from '../components/AppButton';
import AppTextInput from '../components/AppTextInput';
import Screen from '../components/Screen'
import ErrorMessage from '../components/ErrorMessage'
import AppText from '../components/AppText';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';

const validationSchema = Yup.object().shape({
    email:Yup.string().required().email().label("Email"),
    password:Yup.string().required().min(3).label("Password")
});

export default function LoginScreen() {
    return (
       <Screen  style={styles.container}>
            <Formik 
            initialValues={{email:"",password:""}}
            onSubmit={values => console.log(values)}
            validationSchema={validationSchema}
            >
                {({handleChange, handleSubmit,errors,setFieldTouched,touched})=>(
                <>

                    {/* <Input 
                    autoCapitalize= 'none'
                    autoCorrect={false} 
                    leftIcon={    
                        <Icon name='envelope' size={15} color='grey'/>  
                    }
                    keyboard="email-address" 
                    onBlur={()=>setFieldTouched("email")}
                    placeholder="Email"
                    textContentType='emailAddress'
                    onChangeText={handleChange("email")}
                    />
                    <ErrorMessage error={errors.email} visible={touched.email} />

                    <Input 
                    autoCapitalize= 'none'
                    autoCorrect={false} 
                    leftIcon={    
                        <Icon name='lock' size={22} color='grey'/>  
                    }
                    onBlur={()=>setFieldTouched("password")}
                    secureTextEntry
                    placeholder="Password"
                    textContentType='password'
                    onChangeText={handleChange("password")}
                    />
                    <ErrorMessage error={errors.password} visible={touched.password} />

                    <AppButton title="login" onPress={handleSubmit} /> */}
                </>
                )}
            </Formik>
            
       </Screen>
    );
}

const styles = StyleSheet.create({
    container:
    {
        padding:10
    },
    logo:
    {
        width:80,
        height:80,
        alignSelf:'center',
        marginTop:50,
        marginBottom:20
    }
})
