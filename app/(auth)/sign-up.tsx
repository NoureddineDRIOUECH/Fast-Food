import {View, Text, Alert} from 'react-native'
import React, {useState} from 'react'
import {Link, router} from "expo-router";
import CustomInput from "@/components/CustomInput";
import CustomButton from "@/components/CustomButton";
import {createUser} from "@/lib/appwrite";

const SignUp = () => {

    const [isSubmitting, setIsSubmitting] = useState(false)
    const [form, setForm] = useState({name:'',email: '', password: ''})


    const submit = async () => {
        const {name, email, password} = form;
        if(!name || !email || !password) return Alert.alert("Error", "Please fill all the fields")
        setIsSubmitting(true);
        try{
           await createUser({email, password, name})
            router.replace('/')
        }catch (error : any){
            Alert.alert("Error", error.message);
        }finally {
            setIsSubmitting(false);
        }

    }
    return (
        <View className={'gap-10 bg-white rounded-lg p-5 mt-5'}>
            <CustomInput
                placeholder={'Enter your name'}
                value={form.name}
                onChangeText={(text) => setForm({...form, name: text})}
                label={'Full name'}
            />
            <CustomInput
                placeholder={'Enter your email'}
                value={form.email}
                onChangeText={(text) => setForm({...form, email: text})}
                label={'Email'}
                keyboardType={'email-address'}
            />
            <CustomInput
            placeholder={'Enter your password'}
            value={form.password}
            onChangeText={(text) => setForm({...form, password: text})}
            label={'Password'}
            secureTextEntry={true}
        />
            <CustomButton title={'Sign Up'} isLoading={isSubmitting} onPress={submit}/>
            <View className={'flex gap-2 justify-center flex-row mt-5 items-center'}>
                <Text className={'text-gray-100 text-base'}>
                    Already have an account?
                </Text>
                <Link href={'/sign-in'}>
                    <Text className={'text-primary base-bold'}> Sign In</Text>
                </Link>
            </View>
        </View>
    )
}
export default SignUp
