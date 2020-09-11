import {API_BASE_URL} from 'constants/credentials.constant';
import {loadOpenUrl} from './main.api.helper';

const FILE = 'utils/file/';

export const removeFileFromServer = (identifier: number, uploadId: number) =>
  loadOpenUrl(FILE, {
    method: 'delete',
    data: {
      upload_id: uploadId,
      identifier,
    },
  });
export const getFileHandlerURL = () => `${API_BASE_URL}/${FILE}`;
export const studentDocumentUploadURL = () => `${API_BASE_URL}/student/upload/documents/`;
export const resumeUploadURL = () => `${API_BASE_URL}/student/resume/upload/`;
