import React, {FC, useState} from 'react';
import {Typography, Cascader, Button, Select} from 'antd';
import {allCoursesOption} from 'constants/allOfferedCourses';
// @ts-ignore
import {getCourse} from 'jamia-all-courses';

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

const Course: FC<ISubProps> = ({onChange, remove, defaultValue}: ISubProps) => {
  const [, updateState] = React.useState();
  const forceUpdate = React.useCallback(() => updateState({}), []);
  const paddedDefaultValue = () => {
    if (defaultValue) {
      const course = getCourse(defaultValue);
      course[2] = defaultValue;
      return course;
    }

    return null;
  };

  return (
    <div>
      <Cascader
        changeOnSelect
        allowClear
        options={allCoursesOption}
        onChange={(value: Array<string>) => {
          if (value[2]) {
            onChange(value[2]);
            // forceUpdate();
          }
        }}
        defaultValue={paddedDefaultValue()}
        style={{width: '90%'}}
        placeholder='ex: Undergraduate / B.Tech. / Civil Engineering'
      />
      <Button
        icon='delete'
        onClick={() => {
          remove();
          forceUpdate();
        }}
        style={{width: '10%', textAlign: 'center'}}
        type='link'
      />
    </div>
  );
};

const EligibilityAddRecruitmentCompany: FC<IProps> = ({action, data, next}: IProps) => {
  const [courses, setCourses] = useState([]);
  const [years, setYear] = useState(['3']);

  const [, updateState] = React.useState();
  const forceUpdate = React.useCallback(() => updateState({}), []);

  const courseChange = (index: number, value: string) => {
    const xcourses = courses.slice();
    // @ts-ignore
    xcourses[index] = value;

    setCourses(xcourses);
  };

  const removeCourse = (index: number) => {
    // let xcourses = courses.slice();
    // xcourses = xcourses.splice(index, 1);

    setCourses(courses.filter((value, i) => i !== index));
    forceUpdate();
  };

  const addCourse = () => {
    const xcourses = courses.slice();
    // @ts-ignore
    xcourses.push(null);

    setCourses(xcourses);
  };

  return (
    <div>
      <Title level={3}>Eligibility</Title>
      {courses.map((course, index) => (
        <Course
          key={course}
          defaultValue={course}
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
      <Select
        defaultValue={years}
        style={{width: '100%'}}
        onChange={(value: Array<String>) => {
          // @ts-ignore
          setYear(value);
        }}
        mode='multiple'>
        <Option value='1' key='1'>
          1st year
        </Option>
        <Option value='2' key='2'>
          2nd year
        </Option>
        <Option value='3' key='3'>
          3rd year
        </Option>
        <Option value='4' key='4'>
          4th year
        </Option>
        <Option value='5' key='5'>
          5th year
        </Option>
      </Select>
      <br />
      <br />
      <div>
        <Button style={{width: '100%'}} size='large' type='primary'>
          Save
        </Button>
      </div>
    </div>
  );
};

export default EligibilityAddRecruitmentCompany;
