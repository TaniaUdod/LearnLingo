import { useEffect, useState } from "react";
import fetchTeachers from "../../services/fetchTeachers";

const Teachers = () => {
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchTeachers();
        console.log(data);
        if (data) {
          setTeachers(data);
        } else {
          console.log("No data available");
        }
      } catch (error) {
        console.error("Error fetching teachers:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {teachers.map((teacher) => (
        <div key={teacher.id}>{teacher.name}</div>
      ))}
    </div>
  );
};

export default Teachers;
