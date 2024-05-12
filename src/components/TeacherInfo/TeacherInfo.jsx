import React from "react";
import sprite from "../../images/sprite.svg";
import {
  ListItem,
  Rating,
  ReviewComment,
  ReviewName,
  ReviewRating,
  ReviewTitle,
  Section,
  Text,
} from "./TeacherInfo.styled";

const TeacherInfo = ({ teacher }) => {
  const { experience, reviews } = teacher;

  return (
    <Section>
      <Text>{experience}</Text>
      <ul>
        {reviews.map((review, index) => (
          <ListItem key={index}>
            <ReviewTitle>
              <svg
                width="44"
                height="44"
                fill="#e0a39a"
                style={{ marginRight: "12px" }}
              >
                <use href={`${sprite}#user`} />
              </svg>
              <div>
                <ReviewName>{review.reviewer_name}</ReviewName>
                <ReviewRating>
                  <svg width="16" height="16">
                    <use href={`${sprite}#star`} />
                  </svg>
                  <Rating>{review.reviewer_rating}.0</Rating>
                </ReviewRating>
              </div>
            </ReviewTitle>
            <ReviewComment>{review.comment}</ReviewComment>
          </ListItem>
        ))}
      </ul>
    </Section>
  );
};

export default TeacherInfo;
