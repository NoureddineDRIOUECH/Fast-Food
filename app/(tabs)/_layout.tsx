import {View, Text} from 'react-native'
import React from 'react'
import {Redirect, Slot} from "expo-router";

export default function _Layout() {
    const isAuthenticated = true
    if (!isAuthenticated) return <Redirect href={'/sign-in'}/>
    return (

        <Slot/>
    )
}
