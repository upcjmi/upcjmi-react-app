import {loadOpenUrl} from './loader.api.helper';
import {BASE_URL} from '../../constants/credentials.constant';

const FILE = 'utils/file/';

export const removeFileFromServer = (id: number, uploadId: number) =>
  loadOpenUrl(FILE, {
    method: 'delete',
    data: {
      uid: uploadId,
      id,
    },
  });
export const getFileHandlerURL = () => `${BASE_URL}/${FILE}`;
