// import React from "react";
import Helmet from "react-helmet";
import styled from "styled-components";
import Header from "./includes/Header";
import placeImg from "../../assets/images/place.svg";
// import travelData from '../screens/api';
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function Places() {
  const [places, setPlace] = useState([]);
  useEffect(() => {
    axios
      .get("https://traveller.talrop.works/api/v1/places/")
      .then((response) => {
        setPlace(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const renderPlace = () => {
    return places.map((place) => (
      <PlaceCard key={place.id}>
        <PlaceCardLink to={`/place/${place.id}`}>
          <PlaceImage src={place.image} alt="Image" />
          <PlaceBottom>
            <PlaceName>{place.name}</PlaceName>
            <Location>
              <LocationIcon src={placeImg} alt="Image" />
              <LocationName>{place.location}</LocationName>
            </Location>
          </PlaceBottom>
        </PlaceCardLink>
      </PlaceCard>
    ));
  };

  return (
    <>
      <Helmet>
        <link rel="icon" type="image/png" href="public\travel.png" />
        <title>Places | Travel Guide</title>
      </Helmet>
      <Header />
      <TopContainer>
        <Heading>Welcome John</Heading>
        <Para>Explore the world with fun</Para>
      </TopContainer>
      <PlaceContainer>{renderPlace()}</PlaceContainer>
    </>
  );
}

const TopContainer = styled.div`
  text-align: center;
  padding: 20px;
`;

const Heading = styled.h1`
  text-shadow: 1px 1px 3px #000000;
`;

const Para = styled.p`
  padding-top: 10px;
`;

const PlaceContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  margin-bottom: 30px;
`;

const PlaceCard = styled.div`
  width: 300px;
  height: 240px;
  border-radius: 10px;
  overflow: hidden;
  &:hover {
    box-shadow: 10px 10px 5px 7px gray;
  }
`;

const PlaceCardLink = styled(Link)`
  text-decoration: none;
`;

const PlaceImage = styled.img`
  display: block;
  width: 100%;
  height: 150px;
`;

const PlaceBottom = styled.div`
  padding-top: 10px;
`;

const PlaceName = styled.h2`
  margin: 0;
  font-size: 1.5rem;
`;

const Location = styled.div`
  display: flex;
  align-items: center;
  margin-top: 5px;
`;

const LocationIcon = styled.img`
  width: 16px;
  height: 16px;
  margin-right: 8px;
`;

const LocationName = styled.p`
  margin: 0;
`;

export default Places;
