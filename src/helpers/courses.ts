// @ts-ignore
import jamiaAllCourses from 'jamia-all-courses';

export const getCourse = (hash: string) => {
  for (let i = 0; i < jamiaAllCourses.length; ) {
    const {name: category, courses} = jamiaAllCourses[i];

    for (let ii = 0; ii < courses.length; ) {
      const {name: course, specializations} = courses[ii];

      for (let iii = 0; iii < specializations.length; ) {
        const {name: specialization, code} = specializations[iii];

        if (hash === code) return [category, course, specialization];

        iii += 1;
      }

      ii += 1;
    }

    i += 1;
  }

  return [];
};

export const getCourseName = (hash: string) => {
  const courseN = getCourse(hash);
  const course = courseN[1];
  const specialization = courseN[2];

  return `${course} ${specialization}`;
};
