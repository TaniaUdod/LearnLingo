import { useEffect, useState } from "react";
import fetchTeachers from "../../services/fetchTeachers";
import Filter from "../../components/Filter/Filter";
import TeachersList from "../../components/TeachersList/TeachersList";

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
    <>
      <Filter />
      <TeachersList />
      <div>
        {teachers.map((teacher, index) => (
          <div key={index}>{teacher.name}</div>
        ))}
      </div>
    </>
  );
};

export default Teachers;
