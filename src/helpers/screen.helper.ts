export const deviceType = (width: number): string => {
  if (width < 576) return 'xs';
  if (width < 768) return 'sm';
  if (width < 992) return 'md';
  if (width < 1200) return 'xl';

  return 'xxl';
};

export const selectScreen = (
  xs: any = undefined,
  sm: any = undefined,
  md: any = undefined,
  lg: any = undefined,
  xl: any = undefined,
  xxl: any = undefined,
): any => {
  const device = deviceType(window.innerWidth);

  // eslint-disable-next-line no-param-reassign
  if (sm === undefined) sm = xs;
  // eslint-disable-next-line no-param-reassign
  if (md === undefined) md = sm;
  // eslint-disable-next-line no-param-reassign
  if (lg === undefined) lg = md;
  // eslint-disable-next-line no-param-reassign
  if (xl === undefined) xl = lg;
  // eslint-disable-next-line no-param-reassign
  if (xxl === undefined) xxl = xl;

  switch (device) {
    case 'xs':
      return xs;
    case 'sm':
      return sm;
    case 'md':
      return md;
    case 'lg':
      return lg;
    case 'xl':
      return xl;
    case 'xxl':
      return xxl;
    default:
      // logically there should be an error but will generate error if index is not mounted
      return 0;
  }
};
