export const getFilteredTeachers = (allTeachers, filter) => {
  return allTeachers.filter((teacher) => {
    const { language, level, price } = filter;

    if (!language && !level && !price) {
      return true;
    }

    const languageFilter = !language || teacher.languages.includes(language);

    const levelFilter = !level || teacher.levels.includes(level);

    const priceFilter = !price || teacher.price_per_hour <= price;

    return languageFilter && levelFilter && priceFilter;
  });
};
