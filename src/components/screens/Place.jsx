import Header from "./includes/Header";
import placeImg from "../../assets/images/place.svg";
import { useEffect, useState,useContext } from "react";
import styled from "styled-components";
import axios from "axios";
import Helmet from "react-helmet";
import { useParams } from "react-router-dom";
import {BASE_URL} from "../../axiosConfig"
import { UserContext } from "../../App";

function Place( ) {

  const {id} = useParams();
  const [place, setPlace] = useState({
    name: "",
    category_name: "",
    location: "",
    image: "",
    gallery: [],
  });

  const { userData } = useContext(UserContext);

  useEffect(() => {
    axios
      .get(`${BASE_URL}places/protected/${id}`,{
        headers:{
          Authorization: `Bearer ${userData?.access}`,
        }
      })
      .then((response) => {
        setPlace(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id, userData]);

  return (
    <>
      <Helmet>
        <title>{place.name} | Travel Guide</title>
      </Helmet>
      <Header />
      <MainContainer>
        <Title>{place.name}</Title>
        <InfoContainer>
          <Categoryname>{place.category_name}</Categoryname>
          <LocationContainer>
            <LocationIcon src={placeImg} alt="Location" />
            <LocationText>{place.location}</LocationText>
          </LocationContainer>
        </InfoContainer>
        <GalleryContainer>
          <GalleryImageItem>
            <GalleryImage src={place.image} alt="Main image" />
          </GalleryImageItem>
          {place.gallery.map((image, index) => (
            <GalleryImageItem key={index}>
              <GalleryImage src={image.image} alt={`Gallery image ${index + 1}`} />
            </GalleryImageItem>
          ))}
        </GalleryContainer>
        <SubHeading>Place details</SubHeading>
        <Description>{place.description}</Description>
      </MainContainer>
    </>
  );
}

const MainContainer = styled.div`
  margin: 0 auto;
  max-width: 90%;
  padding: 3% 1%;
`;

const Title = styled.h1`
  font-size: 3rem;
`;

const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
`;

const Categoryname = styled.span`
  font-weight: 100;
  font-size:1rem;
  padding :5px 10px;
  border:1px solid #000;
  border-radius: 50px;
  `;

const LocationContainer = styled.div`
  margin-left: 1rem;
  display: flex;
  align-items: center;
`;

const LocationIcon = styled.img`
  height: 14px;
  margin-right: 8px;
`;

const LocationText = styled.p`
font-weight: 100;
  font-size:1rem;
  `;

const GalleryContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 5px;
  margin-bottom: 2rem;
  border-radius:15px;
  overflow:hidden;
`;

const GalleryImageItem = styled.li`
&:first-child{
grid-column-end:span 2;
grid-row-end:span 2;
}
`;

const GalleryImage = styled.img`
  width: 100%;
  display:block;
`;

const SubHeading = styled.h2`
  margin-top: 2rem;
  font-size: 2rem;
`;

const Description = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
`;

export default Place;
