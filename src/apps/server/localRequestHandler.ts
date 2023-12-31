/* eslint-disable import/no-extraneous-dependencies */
import type { AxiosRequestConfig } from 'axios';
import axios from 'axios';

import { endpoints } from '../helpers/endPoints';

async function localRequestHandler(
  endpoint: keyof typeof endpoints,
  method: 'GET' | 'POST' | 'PUT' | 'DELETE',
  data?: any,
  headers?: Record<string, any>,
  params?: Record<string, string>
): Promise<any> {
  const queryString = params
    ? `?${new URLSearchParams(params).toString()}`
    : '';
  const requestUrl = `http://localhost:3000/${endpoints[endpoint]}${queryString}`;

  const axiosConfig: AxiosRequestConfig = {
    method,
    headers: headers || {},
    url: requestUrl,
  };

  if (method === 'POST' && data) {
    axiosConfig.data = data;
  }

  try {
    const response = await axios(axiosConfig);

    return response.data;
  } catch (error: any) {
    const responseData = error.response?.data || {};
    return responseData;
    // throw new Error(responseData.message || 'An error occurred');
  }
}

export default localRequestHandler;
