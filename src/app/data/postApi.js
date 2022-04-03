import {axiosClinetMobile} from './axiosClient';

export default function getPostApi(value) {
  const url = `fu/post/get-posts?type=${value.type}&limit=${value.limit}&page=${value.page}&campus_id=${value.campus_id}`;
  return axiosClinetMobile.get(url, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + value.token,
    },
  });
}
