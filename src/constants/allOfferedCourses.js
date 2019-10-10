import allJamiaCourses from 'jamia-all-courses';

export const allCoursesOption = allJamiaCourses.map(({name: category, courses}) => {
  return {
    label: category.replace(' Programmes', ''),
    value: category,
    children: courses.map(({name: course, specializations}) => {
      return {
        label: course,
        value: course,
        children: specializations.map(({name: specialization, code}) => {
          return {
            label: specialization,
            value: code,
          };
        }),
      };
    }),
  };
});
