import { ref, get } from "firebase/database";
import { db } from "../config/firebase";

const fetchTeachers = async () => {
  const teachersRef = ref(db, "/");

  try {
    const snapshot = await get(teachersRef);
    if (snapshot.exists()) {
      return snapshot.val();
    } else {
      console.log("No data available");
      return null;
    }
  } catch (error) {
    console.error(error);
    return null;
  }
};

export default fetchTeachers;
