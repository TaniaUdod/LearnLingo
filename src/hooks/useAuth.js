import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../config/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../store/auth/authSlice";

const useAuth = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(addUser({ email: user.email, accessToken: user.accessToken }));
        console.log(user);
      }
    });

    return () => {
      unsubscribe();
    };
  }, [dispatch]);
};

export default useAuth;
