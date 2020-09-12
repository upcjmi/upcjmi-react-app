export interface IStudentProfileLinks {
  type: 'G' | 'W' | 'S' | 'B' | 'M' | 'L';
  link: string;
}

export interface IStudentExtraDetails {
  profiles: Array<IStudentProfileLinks>;
  tag_line: string;
  about: string;
  resume: string;
  skills: Array<string>;
  dob: string | number;
  gender: 'M' | 'F';
  student: {
    roll: string;
    student_id: string;
    course: string;
    year: number;
  };
  grade: string;
  grading_sys: string;
  active_back_log: boolean;
  previous_back_log: boolean;
}
export interface IReusmeData {
  data: any;
}
