import React, {FC, useState} from 'react';
import {Typography, Cascader, Button, Select} from 'antd';
import {allCoursesOption} from 'constants/allOfferedCourses';

interface IProps {
  action: any;
  next: any;
  data: any;
}

interface ISubProps {
  onChange: any;
  remove: any;
  defaultValue?: any;
}

const {Title} = Typography;
const {Option} = Select;

const Course: FC<ISubProps> = ({onChange, remove}: ISubProps) => {
  return (
    <div>
      <Cascader
        options={allCoursesOption}
        onChange={(value: Array<string>) => {
          onChange(value[2]);
        }}
        style={{width: '90%'}}
        placeholder='ex: Undergraduate / B.Tech. / Civil Engineering'
      />
      <Button
        icon='delete'
        onClick={remove}
        style={{width: '10%', textAlign: 'center'}}
        type='link'
      />
    </div>
  );
};

const Year: FC<ISubProps> = ({onChange, remove, defaultValue}: ISubProps) => {
  return (
    <>
      <Select defaultValue={defaultValue} style={{width: 120}} onChange={onChange}>
        <Option value='1'>1st year</Option>
        <Option value='2'>2nd year</Option>
        <Option value='3'>3rd year</Option>
        <Option value='4'>4th year</Option>
        <Option value='5'>5th year</Option>
      </Select>
      <Button icon='delete' onClick={remove} style={{width: 30, textAlign: 'center'}} type='link' />
    </>
  );
};

const EligibilityAddRecruitmentCompany: FC<IProps> = ({action, data, next}: IProps) => {
  const [eligibility, setEligibility] = useState({
    courses: [''],
    year: ['3'],
    grade_gte: 0,
    grading_sys: 'CPI',
    allow_active_backlog: true,
    allow_past_backlog: true,
  });

  console.log(eligibility);

  const courseChange = (index: number, value: string) => {
    const xcourses = eligibility.courses.slice();
    // @ts-ignore
    xcourses[index] = value;

    setEligibility({
      ...eligibility,
      courses: xcourses,
    });
  };

  const removeCourse = (index: number) => {
    let xcourses = eligibility.courses.slice();
    xcourses = xcourses.splice(index, 1);

    setEligibility({
      ...eligibility,
      courses: xcourses,
    });
  };

  const addCourse = () => {
    const xcourses = eligibility.courses.slice();
    // @ts-ignore
    xcourses.push('');

    setEligibility({
      ...eligibility,
      courses: xcourses,
    });
  };

  const changeYear = (index: number, year: string) => {
    const years = eligibility.year.slice();
    years[index] = year;

    setEligibility({
      ...eligibility,
      year: years,
    });
  };

  const removeYear = (index: number) => {
    let years = eligibility.year.slice();
    years = years.splice(index, 1);

    setEligibility({
      ...eligibility,
      year: years,
    });
  };

  const addYear = () => {
    const years = eligibility.year.slice();
    // @ts-ignore
    years.push('3');

    setEligibility({
      ...eligibility,
      year: years,
    });
  };

  return (
    <div>
      <Title level={3}>Eligibility</Title>
      {eligibility.courses.map((course, index) => (
        <Course
          key={index.toString()}
          onChange={(value: string) => courseChange(index, value)}
          remove={() => removeCourse(index)}
        />
      ))}
      <br />
      <Button icon='plus' onClick={addCourse}>
        Add Course
      </Button>
      <br />
      <br />
      Year: &nbsp;&nbsp;&nbsp;
      {eligibility.year.map((year, index) => (
        <Year
          key={index.toString()}
          defaultValue={year}
          onChange={(value: string) => changeYear(index, value)}
          remove={() => removeYear(index)}
        />
      ))}
      <Button icon='plus' onClick={addYear} style={{float: 'right'}}>
        Add Year
      </Button>
    </div>
  );
};

export default EligibilityAddRecruitmentCompany;
