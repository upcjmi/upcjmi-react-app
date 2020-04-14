import React, {FC, useState, useEffect} from 'react';
import {Typography, Card, Button, Skeleton} from 'antd';
import {connect} from 'react-redux';

import {IReduxState} from 'reducers';
import {companyDetail} from 'helpers/api/company.api.helper';

const {Title, Text} = Typography;

interface IStateProps {
  id: number | undefined;
}

interface IProps extends IStateProps {}

const CompanyDetail: FC<IProps> = ({id}) => {
  const [details, setDetails] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      // @ts-ignore
      const data = await companyDetail(id);

      setDetails(data);
      setLoading(false);
    };

    load();
  }, [id]);

  if (loading)
    return (
      <Card>
        <Skeleton active />
      </Card>
    );

  return (
    <Card>
      <div>
        <Title>{details.name}</Title>
      </div>
      <Text>{details.about}</Text>
      <Button type='link' icon='edit' className='float-right'>
        Edit
      </Button>
    </Card>
  );
};

const mapStateToProps = (state: IReduxState): IStateProps => ({
  // @ts-ignore
  id: state.auth.user.company_id,
});

export default connect(mapStateToProps)(CompanyDetail);
