//Main React import
import React, { useState } from 'react';
import { useTheme } from 'react-native-paper';
//Our Styles for Project
import { Form, Body, Line } from './styles/wrapper';
import { BigButton, RoundedButton } from './styles/buttons';
import { SubTitle, Title, CheckText } from './styles/text';
import { NewInput } from './styles/input';

const ForgotPasswordScreen = ({ navigation }) => {


    return (

        <Body>
            <Title>Reset Password</Title>
            <SubTitle>Enter your mail and we will send you a rescue mail immediately.</SubTitle>
            <Form>
                <NewInput
                    label="E-mail Adress"
                    color="blue"
                    textColor="green"
                    botRadius="15"
                    botMargin="5px"
                    mode="flat"
                    value={setData.password}
                    secureTextEntry={data.secureTextEntry ? true : false}
                    theme={{
                        colors: {
                            text: colors.darker,
                            primary: colors.blue,
                            placeholder: colors.gray,
                            background: colors.white,
                        },
                    }}
                    left={
                        <NewInput.Icon name="email" color={colors.gray} size={33} />
                    }

                />

                <RoundedButton
                    color="#2d9cdb"
                    title="Send Reset Mail"
                    onPress={""} //will be added later on 
                    textColor="#000000"
                />

                <RoundedButton
                    margin="10px"
                    color="#ffff"
                    onPress={() => navigation.navigate("Login")}
                    title="Login"
                    textColor="#000000"

                />



            </Form>
        </Body>








    )




}