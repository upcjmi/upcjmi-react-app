import {loadOpenUrl, loadSecureUrl} from './main.api.helper';

const UAllCourses = 'courses/';
const UAllAppliedCourses = 'courses/applied/';
const UALLNOTICES = 'notices/';
const UALLHIGHLIGHTS = 'notices/highlights/';
const UCOORDINATOR = 'coordinator/';
const URanking = 'ranking/';

export const getAllAvailableCourseAPI = () => loadSecureUrl(UAllCourses);

export const courseDetailsAPI = (id: number) => loadSecureUrl(`${UAllCourses}${id}/`);

export const applyToCourseAPI = (data: any, course: number) =>
  loadSecureUrl(`courses/${course}/apply/`, {
    method: 'post',
    data,
  });

export const getAllAppliedCoursesAPI = () => loadSecureUrl(UAllAppliedCourses);

export const getAllNotices = () => loadSecureUrl(UALLNOTICES);
export const getAllHighlights = () => loadOpenUrl(UALLHIGHLIGHTS);
export const getCoordinator = (department: string) => loadOpenUrl(`${UCOORDINATOR}${department}/`);
export const getNotice = (id: number) => loadOpenUrl(`${UALLNOTICES}${id}/`);
export const getBadges = () => loadOpenUrl(`${URanking}`);
