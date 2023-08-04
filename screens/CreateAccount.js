import React, { useRef } from "react";
import styled from "styled-components/native";
import AuthLayout from "../components/auth/AuthLayout";
import AuthButton from "../components/auth/AuthButton";
import { TextInput } from "react-native-gesture-handler";

export default function CreateAccount() {
  const lastNameRef = useRef();
  const usernameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const onNext = (nextOne) => {
    nextOne?.current?.focus();
  };
  const onDone = () => {
    alert("done!");
  };
  return (
    <AuthLayout>
      <TextInput
        placeholder="First Name"
        placeholderTextColor="grey"
        returnKeyType="next"
        style={{ backgroundColor: "white", width: "100%" }}
        onSubmitEditing={() => onNext(lastNameRef)}
      />
      <TextInput
        ref={lastNameRef}
        placeholder="Last Name"
        placeholderTextColor="grey"
        returnKeyType="next"
        style={{ backgroundColor: "white", width: "100%" }}
        onSubmitEditing={() => onNext(usernameRef)}
      />
      <TextInput
        ref={usernameRef}
        placeholder="Username"
        placeholderTextColor="grey"
        returnKeyType="next"
        style={{ backgroundColor: "white", width: "100%" }}
        onSubmitEditing={() => onNext(emailRef)}
      />
      <TextInput
        ref={emailRef}
        placeholder="Email"
        placeholderTextColor="grey"
        keyboardType="email-address"
        returnKeyType="next"
        style={{ backgroundColor: "white", width: "100%" }}
        onSubmitEditing={() => onNext(passwordRef)}
      />
      <TextInput
        ref={passwordRef}
        placeholder="Password"
        placeholderTextColor="grey"
        secureTextEntry
        returnKeyType="done"
        style={{ backgroundColor: "white", width: "100%" }}
        onSubmitEditing={onDone}
      />
      <AuthButton text="Create Account" disabled={true} />
    </AuthLayout>
  );
}
