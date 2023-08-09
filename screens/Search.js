import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { TextInput, View } from "react-native";
import { styled } from "styled-components/native";
import DismissKeyboard from "../components/DismissKeyboard";
import { gql, useLazyQuery } from "@apollo/client";

const SEARCH_PHOTOS = gql`
  query searchPhotos($keyword: String!) {
    searchPhotos(keyword: $keyword) {
      id
      file
    }
  }
`;

const MessageContainer = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const MessageText = styled.Text`
  margin-top: 10px;
  color: white;
  font-weight: 600;
`;

const Input = styled.TextInput``;

const Search = ({ navigation }) => {
  const { setValue, register, watch, handleSubmit } = useForm();
  const [startQueryFn, { loading, data, called }] = useLazyQuery(SEARCH_PHOTOS);
  const onValid = ({ keyword }) => {
    startQueryFn({
      variables: {
        keyword,
      },
    });
  };
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
      onSubmitEditing={handleSubmit(onValid)}
    />
  );
  useEffect(() => {
    navigation.setOptions({
      headerTitle: SearchBox,
    });
    register("keyword", { required: true, minLength: 3 });
  }, []);
  console.log(data);
  return (
    <DismissKeyboard>
      <View style={{ flex: 1, backgroundColor: "black" }}>
        {loading ? (
          <MessageContainer size="large">
            <MessageText>Searching...</MessageText>
          </MessageContainer>
        ) : null}
        {!called ? (
          <MessageContainer>
            <MessageText>Search by keyword</MessageText>
          </MessageContainer>
        ) : null}
        {data?.searchPhotos !== undefined && data?.searchPhotos.length === 0 ? (
          <MessageContainer>
            <MessageText>Could not find anything</MessageText>
          </MessageContainer>
        ) : null}
      </View>
    </DismissKeyboard>
  );
};

export default Search;
