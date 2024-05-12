import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectFavorites } from "../../store/teachers/teachersSelectors";
import { selectIsLoggedIn } from "../../store/auth/authSelectors";
import {
  addFavorite,
  removeFavorite,
} from "../../store/teachers/teachersSlice";
import sprite from "../../images/sprite.svg";
import toast from "react-hot-toast";
import TeacherInfo from "../TeacherInfo/TeacherInfo";
import Modal from "../Modal/Modal";
import BookForm from "../BookForm/BookForm";
import {
  ButtonBook,
  ButtonFavorite,
  ButtonMore,
  Img,
  ImgWrap,
  LevelItem,
  LevelList,
  Name,
  Section,
  Text,
  TextSpan,
  TitleItem,
  TitleList,
  TitleText,
  TitleWrap,
} from "./TeacherCard.styled";

const TeacherCard = ({ teacher, defaultLevel }) => {
  const {
    avatar_url,
    name,
    surname,
    languages,
    lessons_done,
    levels,
    rating,
    price_per_hour,
    lesson_info,
    conditions,
  } = teacher;

  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const [isFavorite, setIsFavorite] = useState(false);
  const [readMore, setReadMore] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (isLoggedIn) {
      setIsFavorite(
        favorites.some((favorite) => teacher.name === favorite.name)
      );
    }
  }, [favorites, teacher, isLoggedIn]);

  useEffect(() => {
    if (!isLoggedIn) {
      setIsFavorite(false);
    }
  }, [isLoggedIn]);

  const toggleFavorite = () => {
    if (isLoggedIn) {
      isFavorite
        ? dispatch(removeFavorite(teacher))
        : dispatch(addFavorite(teacher));
      toast.success(
        isFavorite ? "Removed from favorites" : "Added to favorites"
      );
    } else {
      toast.error("Please log in to use this functionality.");
    }
  };

  const openModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Section>
      <ImgWrap>
        <Img src={avatar_url} alt="Teacher avatar" />
      </ImgWrap>

      <div style={{ width: "86%" }}>
        <TitleWrap>
          <div>
            <TitleText>Languages</TitleText>
            <Name>
              {name} {surname}
            </Name>
          </div>

          <TitleList>
            <TitleItem>
              <svg
                width="16"
                height="16"
                fill="none"
                stroke="currentColor"
                style={{ marginRight: "8px" }}
              >
                <use href={`${sprite}#book-open`} />
              </svg>
              <p>Lessons online</p>
            </TitleItem>

            <TitleItem>
              <p>Lessons done: {lessons_done}</p>
            </TitleItem>

            <TitleItem>
              <svg width="16" height="16" style={{ marginRight: "8px" }}>
                <use href={`${sprite}#star`} />
              </svg>
              <p>Rating: {rating} </p>
            </TitleItem>

            <TitleItem>
              <p>
                Price / 1 hour:{" "}
                <span style={{ color: "#38CD3E" }}>{price_per_hour}$</span>{" "}
              </p>
            </TitleItem>
          </TitleList>

          <ButtonFavorite type="button" onClick={toggleFavorite}>
            {isFavorite ? (
              <svg width="26" height="26" fill="#e0a39a" stroke="#e0a39a">
                <use href={`${sprite}#heart`} />
              </svg>
            ) : (
              <svg width="26" height="26" fill="none" stroke="currentColor">
                <use href={`${sprite}#heart`} />
              </svg>
            )}
          </ButtonFavorite>
        </TitleWrap>

        <div>
          <Text>
            <TextSpan>Speaks:</TextSpan>{" "}
            <span style={{ textDecorationLine: "underline" }}>
              {languages.join(", ")}
            </span>
          </Text>
          <Text>
            <TextSpan>Lesson Info:</TextSpan> {lesson_info}
          </Text>
          <Text>
            <TextSpan>Conditions:</TextSpan>{" "}
            {conditions.map((condition, index) => (
              <span key={index}>
                {condition} {""}
              </span>
            ))}
          </Text>
        </div>

        {!readMore ? (
          <ButtonMore onClick={() => setReadMore(true)}>Read more</ButtonMore>
        ) : (
          <TeacherInfo teacher={teacher} />
        )}

        <LevelList>
          {levels.map((level, index) => (
            <LevelItem
              key={index}
              style={
                level.toLowerCase() === defaultLevel.toLowerCase()
                  ? {
                      backgroundColor: "#e0a39a",
                      borderColor: "#e0a39a",
                    }
                  : { border: "1px solid rgba(18, 20, 23, 0.20)" }
              }
            >
              #{level}
            </LevelItem>
          ))}
        </LevelList>

        {readMore && (
          <div>
            <ButtonBook type="button" onClick={openModal}>
              Book trial lesson
            </ButtonBook>
          </div>
        )}

        {isModalOpen && (
          <Modal onClose={closeModal} isOpen={openModal}>
            <BookForm
              isOpen={openModal}
              onClose={closeModal}
              teacher={teacher}
            />
          </Modal>
        )}
      </div>
    </Section>
  );
};

export default TeacherCard;
