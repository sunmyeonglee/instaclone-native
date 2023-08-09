import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { TextInput, View } from "react-native";
import { styled } from "styled-components/native";
import DismissKeyboard from "../components/DismissKeyboard";

const Input = styled.TextInput``;

const Search = ({ navigation }) => {
  const { setValue, register } = useForm();
  const SearchBox = () => (
    <TextInput
      style={{ backgroundColor: "black", color: "white", fontWeight: "500" }}
      placeholderTextColor="white"
      placeholder="Search photos"
      autoCapitalize="none"
      returnKeyLabel="Search"
      returnKeyType="search"
      autoCorrect={false}
      onChangeText={(text) => setValue("keyword", text)}
    />
  );
  useEffect(() => {
    navigation.setOptions({
      headerTitle: SearchBox,
    });
    register("keyword");
  }, []);

  return (
    <DismissKeyboard>
      <View
        style={{
          backgroundColor: "black",
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      ></View>
    </DismissKeyboard>
  );
};

export default Search;
