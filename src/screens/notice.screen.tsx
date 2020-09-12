import React, {useEffect, useState, FC} from 'react';
import {Typography, Row, Col, Button, Icon, Skeleton} from 'antd';
import {withRouter} from 'react-router-dom';
import {NoticeBoard} from 'components/home/noticeBoard';
import {INotice} from 'types/common.type';
import {getAllNotices, getNotice} from '../helpers/api/core.api.helper';
import {dateFormatter} from '../helpers/dateFomatter';

const {Title, Paragraph} = Typography;

interface IProps {
  match: any;
}
interface ILoadedNotice {
  title: string;
  details: string;
  modified: string;
  created: string;
  documents: string;
  link: string;
}
export const NoticeScreen: FC<IProps> = ({match, location, title}: any) => {
  const [allNotices, setAllNotices] = useState<Array<INotice>>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [loadedNotice, setLoadedNotice] = useState<ILoadedNotice | undefined>(undefined);
  useEffect(() => {
    const getData = async () => {
      const {id} = match.params;
      const notice = await getNotice(id);
      setLoadedNotice(notice);
      const data = await getAllNotices();
      setAllNotices(data);
      setLoading(!(notice && data));
    };
    getData();
  }, []);
  return (
    <div className='container white lighten-3'>
      <Row gutter={32}>
        {loadedNotice ? (
          <Col sm={24} md={15}>
            <Title level={2}>{loadedNotice.title}</Title>
            <Paragraph>{loadedNotice.details}</Paragraph>
            <div className='row space-between'>
              <a href={loadedNotice.documents} download target='_blank'>
                <Button type='primary' icon='download'>
                  Attachment
                </Button>
              </a>
              <p>{dateFormatter(loadedNotice.created)}</p>
            </div>
            <Button type='link' size='large' style={{padding: 0}}>
              {/* eslint-disable-next-line react/jsx-no-target-blank */}
              <a target='_blank' href={loadedNotice.link}>
                {loadedNotice.link}
              </a>
            </Button>
          </Col>
        ) : (
          <Col sm={24} md={15}>
            <Skeleton loading title={{width: '100%'}} />
          </Col>
        )}
        <Col sm={24} md={8}>
          <NoticeBoard noticesData={allNotices} />
        </Col>
      </Row>
    </div>
  );
};

export default withRouter(NoticeScreen);
