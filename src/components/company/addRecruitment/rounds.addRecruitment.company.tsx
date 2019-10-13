import React, {FC, useState} from 'react';
import {Typography, Collapse, Button, Icon} from 'antd';
import FormCreator from 'components/formCreator';
import {roundAddRecruitmentTForm} from 'forms/addRecruitment/round.addRecruitment.tForm';
import {openNotificationWithIcon} from 'helpers/notification.helper';

interface IProps {
  action: any;
  next: any;
  data: any;
}

const {Title} = Typography;
const {Panel} = Collapse;

interface IRound {
  title: string;
  details: string;
}

const RoundAddRecruitment: FC<IProps> = ({action, data, next}: IProps) => {
  const [rounds, setRounds]: [Array<IRound>, any] = useState(data.rounds);

  const addRound = () => {
    setRounds([...rounds, {}]);
  };

  const removeRound = (index: number) => {
    const crounds = rounds.slice();
    crounds.splice(index, 1);

    setRounds(crounds);
  };

  const updateRound = (index: number, round: IRound) => {
    const crounds = rounds.slice();
    crounds[index] = round;
    setRounds(crounds);
  };

  const onSave = () => {
    if (rounds.length === 0) {
      openNotificationWithIcon('error', 'There should be at least one round', 'Add one round');
      return;
    }

    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < rounds.length; i++) {
      if (!rounds[i].title) {
        openNotificationWithIcon(
          'error',
          'Save or delete unsaved rounds before going to next section',
        );
        return;
      }
    }

    action({
      ...data,
      rounds,
    });

    next();
  };

  return (
    <div>
      <Title level={3}>Rounds</Title>
      <Collapse accordion bordered={false} expandIconPosition='right' destroyInactivePanel>
        {rounds.map((round, index) => {
          const form = (
            // @ts-ignore
            <FormCreator
              formTemplate={roundAddRecruitmentTForm}
              submitButtonText='Save'
              cancelButtonText={<Icon type='delete' />}
              onCancel={() => removeRound(index)}
              onSubmit={(objForm: any) => updateRound(index, objForm.getFieldsValue())}
              initialValue={async () => rounds[index]}
            />
          );
          return (
            <Panel header={`${index + 1}. ${round.title}`} key={index.toString()}>
              {form}
            </Panel>
          );
        })}
      </Collapse>
      <br />
      <br />
      <Button size='large' className='full-width' icon='plus' onClick={addRound}>
        Add Round
      </Button>
      <br />
      <br />
      <Button type='primary' className='full-width' onClick={onSave}>
        Save and Next
      </Button>
    </div>
  );
};

export default RoundAddRecruitment;
