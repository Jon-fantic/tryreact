import request from '../utils/request';
import {isExistApi} from '../api/index';
export function query(phone) {
  return request(isExistApi+phone);
}
