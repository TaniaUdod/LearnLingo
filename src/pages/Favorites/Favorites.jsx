import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectFavorites } from "../../store/teachers/teachersSelectors";
import TeacherCard from "../../components/TeacherCard/TeacherCard";
import { Message, Section, TeacherItem } from "./Favorites.styled";

const Favorites = () => {
  const favorites = useSelector(selectFavorites);

  return (
    <Section>
      {favorites.length > 0 ? (
        <ul>
          {favorites.map((teacher, index) => (
            <TeacherItem key={index}>
              <TeacherCard teacher={teacher} />
            </TeacherItem>
          ))}
        </ul>
      ) : (
        <Message>
          It appears that you haven't added any teachers to your favorites yet.
          To get started, you can{" "}
          <Link to="/teachers" style={{ color: "#e0a39a", fontWeight: "bold" }}>
            add teacher{" "}
          </Link>{" "}
          that you like to your favorites for easier access in the future.
        </Message>
      )}
    </Section>
  );
};

export default Favorites;
