import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { db } from "../../config/firebase";
import { get, limitToFirst, query, ref } from "firebase/database";
import { addTeachers } from "../../store/teachers/teachersSlice";
import { selectTeachers } from "../../store/teachers/teachersSelectors";
import { getFilteredTeachers } from "../../helpers/getFilteredTeachers";
import TeachersList from "../../components/TeachersList/TeachersList";
import Filter from "../../components/Filter/Filter";
import Loader from "../../components/Loader/Loader";
import { Button, ButtonWrap, Section } from "./Teachers.styled";

const Teachers = () => {
  const [cardsLimit, setCardsLimit] = useState(4);
  const [isLoadMore, setIsLoadMore] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [defaultLevel, setDefaultLevel] = useState("A1 Beginner");

  const dispatch = useDispatch();
  const teachers = useSelector(selectTeachers);
  const filter = useSelector((state) => state.teachers.filter);

  useEffect(() => {
    const fetchAllTeachers = async () => {
      try {
        const teachersRef = ref(db, "/");
        const snapshot = await get(teachersRef);
        if (snapshot.exists()) {
          return snapshot.val();
        }
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchAllTeachers();
  }, []);

  useEffect(() => {
    const fetchTeachers = async () => {
      try {
        const teachersRef = ref(db, "/");
        let dataQuery = query(teachersRef, limitToFirst(cardsLimit));
        setIsLoading(true);
        setIsLoadMore(true);
        const snapshot = await get(dataQuery);

        if (snapshot.exists()) {
          const newTeachers = snapshot.val();
          dispatch(addTeachers(newTeachers));
          setIsLoadMore(Object.keys(newTeachers).length >= cardsLimit);
        } else {
          setIsLoadMore(false);
        }
      } catch (error) {
        console.error(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTeachers();
  }, [dispatch, cardsLimit]);

  const filteredTeachers = getFilteredTeachers(teachers, filter);

  const loadMore = () => setCardsLimit((prev) => prev + 4);

  return (
    <Section>
      <Filter setDefaultLevel={setDefaultLevel} />

      {filter.language === "" && filter.level === "" && filter.price === "" ? (
        <TeachersList teachers={teachers} defaultLevel={defaultLevel} />
      ) : (
        <>
          {filteredTeachers.length === 0 ? (
            <h2>No teachers match the criteria</h2>
          ) : (
            <TeachersList
              teachers={filteredTeachers}
              defaultLevel={defaultLevel}
            />
          )}
        </>
      )}

      {isLoading && <Loader />}

      <ButtonWrap>
        {isLoadMore && (
          <Button type="button" onClick={loadMore}>
            Load more
          </Button>
        )}
      </ButtonWrap>
    </Section>
  );
};

export default Teachers;
