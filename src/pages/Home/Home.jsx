import React from "react";
import { Link } from "react-router-dom";
import hero from "../../images/hero.png";
import hero2x from "../../images/hero@2x.png";
import {
  Button,
  HeroWrap,
  Text,
  Title,
  TitleAccent,
  TitleWrap,
  DetailsList,
  DetailsItem,
  DetailsNumber,
  DetailsText,
} from "./Home.styled";

const Home = () => {
  return (
    <>
      <HeroWrap>
        <TitleWrap>
          <Title>
            Unlock your potential with the best{" "}
            <TitleAccent>language</TitleAccent> tutors
          </Title>
          <Text>
            Embark on an Exciting Language Journey with Expert Language Tutors:
            Elevate your language proficiency to new heights by connecting with
            highly qualified and experienced tutors.
          </Text>
          <Link to="/teachers">
            <Button type="button">Get started</Button>
          </Link>
        </TitleWrap>

        <picture>
          <source srcSet={hero2x} media="(min-resolution: 192dpi)" />
          <img
            src={hero}
            alt="Girl with laptop"
            width="568px"
            height="530px"
          ></img>
        </picture>
      </HeroWrap>

      <DetailsList>
        <DetailsItem>
          <DetailsNumber>32,000 +</DetailsNumber>
          <DetailsText>Experienced tutors</DetailsText>
        </DetailsItem>
        <DetailsItem>
          <DetailsNumber>300,000 +</DetailsNumber>
          <DetailsText>5-star tutor reviews</DetailsText>
        </DetailsItem>
        <DetailsItem>
          <DetailsNumber>120 +</DetailsNumber>
          <DetailsText>Subjects taught</DetailsText>
        </DetailsItem>
        <DetailsItem>
          <DetailsNumber>200 +</DetailsNumber>
          <DetailsText>Tutor nationalities</DetailsText>
        </DetailsItem>
      </DetailsList>
    </>
  );
};

export default Home;
