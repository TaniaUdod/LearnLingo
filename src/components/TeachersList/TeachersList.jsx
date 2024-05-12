import React from "react";
import TeacherCard from "../TeacherCard/TeacherCard";
import { Item, List } from "./TeachersList.styled";

const TeachersList = ({ teachers, defaultLevel }) => {
  return (
    <List>
      {teachers.map((teacher, index) => (
        <Item key={index}>
          <TeacherCard teacher={teacher} defaultLevel={defaultLevel} />
        </Item>
      ))}
    </List>
  );
};

export default TeachersList;
