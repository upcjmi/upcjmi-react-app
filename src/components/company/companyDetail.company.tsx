import React, {FC, useState, useEffect} from 'react';
import {Typography, Card, Button, Skeleton,Row,Col} from 'antd';
import {connect} from 'react-redux';
import SideDrawerForm from 'components/sideDrawerForm';
import {IReduxState} from 'reducers';
import {companyDetail} from 'helpers/api/company.api.helper';
import ExtraDetailsChange from './extraDetailsChange.company';

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
      <SideDrawerForm
        render={() => (
          // @ts-ignore
          <ExtraDetailsChange
            name={details.name}
            about={details.about}
            action='add'
            id={id}
            onSave={(e: any) => {
              setDetails(e);
            }}
          />
        )}>
        {
          // {setDetails({name:e.name,about:e.about})}
        }
        <Row justify='end'>
          <Col span={2} push={22}>
            <Button type='link' size='large'>
              edit
            </Button>
          </Col>
        </Row>
      </SideDrawerForm>
    </Card>
  );
};

const mapStateToProps = (state: IReduxState): IStateProps => ({
  // @ts-ignore
  id: state.auth.user.company_id,
});

export default connect(mapStateToProps)(CompanyDetail);
