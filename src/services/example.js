import request from '../utils/request';
import {isExistApi} from '../api/index';
export async function query(phone) {
  return request(isExistApi+phone);
}
