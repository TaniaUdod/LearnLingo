import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setFilter } from "../../store/teachers/teachersSlice";
import { Label, LabelWrap, Section, Select } from "./Filter.styled";

const Filter = ({ setDefaultLevel }) => {
  const dispatch = useDispatch();
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("");
  const [selectedPrice, setSelectedPrice] = useState("");

  const languages = [
    "English",
    "French",
    "Spanish",
    "German",
    "Italian",
    "Mandarin Chinese",
    "Korean",
    "Vietnamese",
  ];

  const levels = [
    "A1 Beginner",
    "A2 Elementary",
    "B1 Intermediate",
    "B2 Upper-Intermediate",
    "C1 Advanced",
    "C2 Proficient",
  ];

  const prices = ["25", "27", "28", "30", "32", "35"];

  const getFilter = () => {
    return {
      language: selectedLanguage,
      level: selectedLevel,
      price: selectedPrice,
    };
  };

  const handleSelectLanguage = (event) => {
    setSelectedLanguage(event.target.value);
    dispatch(setFilter({ ...getFilter(), language: event.target.value }));
  };

  const handleSelectLevel = (event) => {
    setSelectedLevel(event.target.value);
    setDefaultLevel(event.target.value);
    dispatch(setFilter({ ...getFilter(), level: event.target.value }));
  };

  const handleSelectPrice = (event) => {
    setSelectedPrice(event.target.value);
    dispatch(setFilter({ ...getFilter(), price: event.target.value }));
  };

  return (
    <Section>
      <LabelWrap>
        <Label htmlFor="language">Languages</Label>
        <Select
          id="language"
          name="language"
          value={selectedLanguage}
          onChange={handleSelectLanguage}
        >
          {languages.map((language) => (
            <option key={language} value={language}>
              {language}
            </option>
          ))}
        </Select>
      </LabelWrap>

      <LabelWrap>
        <Label htmlFor="level">Level of knowledge</Label>
        <Select
          id="level"
          name="level"
          value={selectedLevel}
          onChange={handleSelectLevel}
        >
          {levels.map((level) => (
            <option key={level} value={level}>
              {level}
            </option>
          ))}
        </Select>
      </LabelWrap>

      <LabelWrap>
        <Label htmlFor="price">Price</Label>
        <Select
          id="price"
          name="price"
          value={selectedPrice}
          onChange={handleSelectPrice}
        >
          {prices.map((price) => (
            <option key={price} value={price}>
              {price} $
            </option>
          ))}
        </Select>
      </LabelWrap>
    </Section>
  );
};

export default Filter;
