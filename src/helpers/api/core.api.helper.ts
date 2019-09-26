import {loadSecureUrl} from './loader.api.helper';


const UAllCourses = 'courses/';
const UAllAppliedCourses = 'courses/applied/';


export const getAllAvailableCourseAPI = () =>
  loadSecureUrl(UAllCourses);

export const courseDetailsAPI = (id: number) =>
  loadSecureUrl(`${UAllCourses}${id}/`);

export const applyToCourseAPI = (data: any, course: number) =>
  loadSecureUrl( `courses/${course}/apply/`, {
    method: 'post',
    data
  });

export const getAllAppliedCoursesAPI = () => loadSecureUrl(UAllAppliedCourses);
