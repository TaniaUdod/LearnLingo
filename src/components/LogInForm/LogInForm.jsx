import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/firebase";
import sprite from "../../images/sprite.svg";
import toast from "react-hot-toast";
import {
  Button,
  Error,
  Input,
  InputWrap,
  PasswordWrap,
  Text,
  Title,
  TitleWrap,
} from "./LogInForm.styled";

const LogInForm = ({ onClose }) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handleTogglePassword = () => {
    setIsPasswordVisible((prevState) => !prevState);
  };

  const schema = yup.object().shape({
    email: yup
      .string()
      .email("Please, enter a valid email")
      .required("Email is required"),
    password: yup
      .string()
      .min(6, "Password is too short, should be at least 6 characters long")
      .required("Password is required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    const { email, password } = data;
    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast.success("You have successfully logged");
      onClose();
    } catch (error) {
      toast.error("Email or password is wrong!");
    }
  };

  return (
    <>
      <TitleWrap>
        <Title>Log In</Title>
        <Text>
          Welcome back! Please enter your credentials to access your account and
          continue your search for an teacher.
        </Text>
      </TitleWrap>

      <form onSubmit={handleSubmit(onSubmit)}>
        <InputWrap>
          <div>
            <Input type="email" placeholder="Email" {...register("email")} />
            {errors.email && <Error>{errors.email.message}</Error>}
          </div>
          <PasswordWrap>
            <Input
              type={isPasswordVisible ? "text" : "password"}
              placeholder="Password"
              {...register("password")}
            />
            {isPasswordVisible ? (
              <svg width="20" height="20" onClick={handleTogglePassword}>
                <use href={`${sprite}#eye`} />
              </svg>
            ) : (
              <svg
                width="20"
                height="20"
                fill="none"
                stroke="currentColor"
                onClick={handleTogglePassword}
              >
                <use href={`${sprite}#eye-off`} />
              </svg>
            )}
            {errors.password && <Error>{errors.password.message}</Error>}
          </PasswordWrap>
        </InputWrap>
        <Button type="submit">Log In</Button>
      </form>
    </>
  );
};

export default LogInForm;
