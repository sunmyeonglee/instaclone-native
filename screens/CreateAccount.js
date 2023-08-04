import React from "react";
import styled from "styled-components/native";
import AuthLayout from "../components/auth/AuthLayout";
import AuthButton from "../components/auth/AuthButton";
import { TextInput } from "react-native-gesture-handler";

const Container = styled.View`
  flex: 1;
  background-color: black;
`;

export default function CreateAccount() {
  return (
    <AuthLayout>
      <TextInput
        placeholder="First Name"
        placeholderTextColor="grey"
        returnKeyType="next"
        style={{ backgroundColor: "white", width: "100%" }}
      />
      <TextInput
        placeholder="Last Name"
        placeholderTextColor="grey"
        returnKeyType="next"
        style={{ backgroundColor: "white", width: "100%" }}
      />
      <TextInput
        placeholder="Username"
        placeholderTextColor="grey"
        returnKeyType="next"
        style={{ backgroundColor: "white", width: "100%" }}
      />
      <TextInput
        placeholder="Email"
        placeholderTextColor="grey"
        keyboardType="email-address"
        returnKeyType="next"
        style={{ backgroundColor: "white", width: "100%" }}
      />
      <TextInput
        placeholder="Password"
        placeholderTextColor="grey"
        secureTextEntry
        returnKeyType="done"
        style={{ backgroundColor: "white", width: "100%" }}
      />
      <AuthButton text="Create Account" disabled={true} />
    </AuthLayout>
  );
}
