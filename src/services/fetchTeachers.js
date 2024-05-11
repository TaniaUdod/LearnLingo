import { ref, get } from "firebase/database";
import { db } from "../config/firebase";

const fetchTeachers = async () => {
  try {
    const teachersRef = ref(db, "/");
    const snapshot = await get(teachersRef);

    if (snapshot.exists()) {
      return snapshot.val();
    } else {
      console.log("No data available");
      return null;
    }
  } catch (error) {
    console.error(error.message);
    return null;
  }
};

export default fetchTeachers;
