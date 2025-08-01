import {View, Text, Alert} from 'react-native'
import React, {useState} from 'react'
import  * as Sentry from '@sentry/react-native';
import {Link, router} from "expo-router";
import CustomInput from "@/components/CustomInput";
import CustomButton from "@/components/CustomButton";
import {signIn} from "@/lib/appwrite";

const SignIn = () => {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [form, setForm] = useState({email: '', password: ''})


    const submit = async () => {
        const {email, password} = form;
        if(!email || !password) return Alert.alert("Error", "Please fill all the fields")
        setIsSubmitting(true);
        try{
            await signIn({email, password})
            Alert.alert("Success", "You are logged in");
            router.replace('/')
        }catch (error : any){
            Alert.alert("Error", error.message);
            Sentry.captureEvent(error);
        }finally {
            setIsSubmitting(false);
        }

    }
    return (
        <View className={'gap-10 bg-white rounded-lg p-5 mt-5'}>
            <CustomInput
                placeholder={'Enter your email'}
                value={form.email}
                onChangeText={(text) => setForm({...form, email: text})}
                label={'Email'}
                keyboardType={'email-address'}
            /><CustomInput
                placeholder={'Enter your password'}
                value={form.password}
                onChangeText={(text) => setForm({...form, password: text})}
                label={'Password'}
                secureTextEntry={true}
            />
            <CustomButton title={'Sign In'} isLoading={isSubmitting} onPress={submit}/>
            <View className={'flex gap-2 justify-center flex-row mt-5 items-center'}>
                <Text className={'text-gray-100 text-base'}>
                    Don&#39;t have an account?
                </Text>
                <Link href={'/sign-up'}>
                    <Text className={'text-primary base-bold'}> Sign Up</Text>
                </Link>
            </View>
        </View>
    )
}
export default SignIn
