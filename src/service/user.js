import request from '@/util/request';

/**
 * 查询用户列表.
 */
export async function queryUsers() {
  return request('/api/users');
}

/**
 * 创建用户
 */
export async function saveUser(data) {
  return request(`/api/users/save`, {
    method: 'post',
    requestType: 'form',
    data,
  });
}

/**
 * 查询指定用户
 * @param {*} params
 */
export async function queryUser(params) {
  return request(`/api/user`, { params });
}

/**
 * 处理错误
 */
export async function userError() {
  return request(`/api/user/error`);
}

/**
 * 处理业务错误
 */
export async function userBizError() {
  return request(`/api/user/bizError`);
}
