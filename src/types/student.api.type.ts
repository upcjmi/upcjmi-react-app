export interface IStudentProfileLinks {
  type: string;
  link: string
}

export interface IStudentExtraDetails {
  profiles: Array<IStudentProfileLinks>;
  tag_line: string;
  about: string;
  skills: Array<string>;
  dob: '',
  gender: 'M' | 'F';
  student: {
    roll: string;
    student_id: string,
    course: string,
    year: number
  }
}
