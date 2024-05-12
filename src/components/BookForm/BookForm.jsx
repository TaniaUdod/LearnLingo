import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import sprite from "../../images/sprite.svg";
import {
  Button,
  Error,
  Img,
  Input,
  InputWrap,
  RadioItem,
  RadioList,
  TeacherWrap,
  Text,
  TextForm,
  Title,
  TitleName,
  TitleText,
} from "./BookForm.styled";

const BookForm = ({ teacher, onClose }) => {
  const { avatar_url, name, surname } = teacher;

  const [selectedReason, setSelectedReason] = useState("careerAndBusiness");

  const reason = [
    { label: "Career and business", value: "careerAndBusiness" },
    { label: "Lesson for kids", value: "lessonForKids" },
    { label: "Living abroad", value: "livingAbroad" },
    { label: "Exams and coursework", value: "examsAndCoursework" },
    { label: "Culture, travel or hobby", value: "cultureTravelOrHobby" },
  ];

  const schema = yup.object().shape({
    fullName: yup
      .string()
      .min(3, "Username must be at least 3 characters long")
      .required("Full name is required"),
    email: yup
      .string()
      .email("Please, enter a valid email")
      .required("Email is required"),
    phoneNumber: yup
      .string()
      .matches(/^[0-9+()-\s]*$/, "Phone number is not valid")
      .required("Phone number is required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
    onClose();
  };

  return (
    <div>
      <Title>Book trial lesson</Title>
      <Text>
        Our experienced tutor will assess your current language level, discuss
        your learning goals, and tailor the lesson to your specific needs.
      </Text>
      <TeacherWrap>
        <Img src={avatar_url} alt="Teacher avatar" />
        <div>
          <TitleText>Your teacher</TitleText>
          <TitleName>
            {name} {surname}
          </TitleName>
        </div>
      </TeacherWrap>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <TextForm>What is your main reason for learning English?</TextForm>
          <RadioList>
            {reason.map(({ label, value }) => (
              <RadioItem key={value}>
                <label>
                  <input
                    type="radio"
                    name="reason"
                    value={value}
                    {...register("reason")}
                    checked={selectedReason === value}
                    onChange={() => setSelectedReason(value)}
                  />
                  {selectedReason === value ? (
                    <svg width="20" height="20" fill="#e0a39a">
                      <use href={`${sprite}#radio-button-checked`} />
                    </svg>
                  ) : (
                    <svg width="20" height="20" fill="rgba(18, 20, 23, 0.20)">
                      <use href={`${sprite}#radio-button-unchecked`} />
                    </svg>
                  )}
                  {label}
                </label>
              </RadioItem>
            ))}
          </RadioList>
        </div>

        <InputWrap>
          <div>
            <Input
              type="text"
              placeholder="Full Name"
              {...register("fullName")}
            />
            {errors.fullName && <Error>{errors.fullName.message}</Error>}
          </div>

          <div>
            <Input type="email" placeholder="Email" {...register("email")} />
            {errors.email && <Error>{errors.email.message}</Error>}
          </div>

          <div>
            <Input
              type="tel"
              placeholder="Phone Number"
              {...register("phoneNumber")}
            />
            {errors.phoneNumber && <Error>{errors.phoneNumber.message}</Error>}
          </div>
        </InputWrap>

        <Button type="submit">Book</Button>
      </form>
    </div>
  );
};

export default BookForm;
