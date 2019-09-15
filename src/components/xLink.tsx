import React, {FC} from 'react';

interface IProps {
  href: string,
  children: any,
  newLine?: boolean;
}

const XLink: FC<IProps> = ({href, children, newLine=true}: IProps) => (
  <span>
    <a href={href} target='_blank' rel='noopener noreferrer'>
      {children}
    </a>
    {newLine? <br /> : null}
  </span>
);

export default XLink;
