import React, { useEffect, useState } from "react";
import { styled } from "styled-components/native";
import * as MediaLibrary from "expo-media-library";

const Container = styled.View`
  flex: 1;
  background-color: black;
`;

const Top = styled.View`
  flex: 1;
  background-color: black;
`;

const Bottom = styled.View`
  flex: 1;
  background-color: black;
`;

const SelectPhoto = () => {
  const [ok, setOk] = useState(false);
  const [photos, setPhotos] = useState([]);
  const getPhotos = async () => {
    if (ok) {
      const { assets: photos } = await MediaLibrary.getAssetsAsync();
      setPhotos(photos);
    }
  };
  const getPermissions = async () => {
    const { accessPrivileges, canAskAgain } =
      await MediaLibrary.getPermissionsAsync();
    if (accessPrivileges === "none" && canAskAgain) {
      const permissions = await MediaLibrary.requestPermissionsAsync();
      if (accessPrivileges !== "none") {
        setOk(true);
      }
    } else if (accessPrivileges !== "none") {
      setOk(true);
    }
  };

  useEffect(() => {
    getPermissions();
    getPhotos();
  }, [ok]);

  return (
    <Container>
      <Top />
      <Bottom />
    </Container>
  );
};

export default SelectPhoto;
