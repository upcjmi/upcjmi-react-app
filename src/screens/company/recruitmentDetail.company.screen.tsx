import React, {FC, useEffect} from 'react';

interface IProps {
  match: any;
  history: any;
}

const RecruitmentDetailCompanyScreen: FC<IProps> = ({match}: IProps) => {
  useEffect(() => {
    const load = async () => {
      try {
        const {id} = match.params;
      } catch (e) {
        // ddd
      }
    };

    load();
  }, [match]);

  return (
    <div>
      {match.params.id}
      HH
    </div>
  );
};

export default RecruitmentDetailCompanyScreen;
