export const get = (obj: any, key: any, defaultValue: any = null) => {
  try {
    return obj[key];
  } catch (e) {
    return defaultValue;
  }
};

export const generalFilter = (input: string, option: any) =>
  option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0;
