import type { AxiosRequestConfig } from 'axios';
import axios from 'axios';

import { endpoints } from './endPoints';

async function requestHandler(
  endpoint: keyof typeof endpoints,
  method: 'GET' | 'POST' | 'PUT' | 'DELETE',
  data?: any,
  headers?: Record<string, any>,
  params?: Record<string, string> | any
): Promise<any> {
  const queryString = params
    ? `?${new URLSearchParams(params).toString()}`
    : '';
  const requestUrl = `${process.env.API_EXTRANL}/${endpoints[endpoint]}${queryString}`;
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

export default requestHandler;
