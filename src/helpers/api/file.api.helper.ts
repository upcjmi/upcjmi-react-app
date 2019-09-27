import {loadOpenUrl} from './loader.api.helper';
import {BASE_URL} from '../../constants/credentials.constant';

const FILE = 'utils/file/';

export const removeFileFromServer = (identifier: number, uploadId: number) =>
  loadOpenUrl(FILE, {
    method: 'delete',
    data: {
      upload_id: uploadId,
      identifier,
    },
  });
export const getFileHandlerURL = () => `${BASE_URL}/${FILE}`;
export const studentDocumentUploadURL = () => `${BASE_URL}/student/upload/documents/`;
