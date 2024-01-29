/* eslint-disable unused-imports/no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable import/no-import-module-exports */
import { getAccessToken } from '@/pages/api/paymentGatewayReq';

// paymentResponse.js
const axios = require('axios');

export async function getPaymentResponse(encrp: any) {
  const clientId = '65559092';
  const clientSecret = 'GkD-afdYqDTeZ22_SLLDyjcVxmqXLusETRsqdcq85w81';
  const encrpKey =
    'Jr8klyX-sS0YNVWpsEWBRZHVwNQE1OazFxxLMxEOBUpkekRClh2B1MqP1VOPPJj6UpalKAWGUtCVoiIXLXp0TzSdBSbariC6MPG5W8fNIIE1';
  const url = `https://pgtest.cbk.com/ePay/api/cbk/online/pg/GetTransactions/${encrp}`;

  // Assuming you have a function to obtain the access token
  const accessToken = await getAccessToken();

  if (!accessToken) {
    return 'Authentication Failed';
  }

  try {
    const response = await axios.get(url, {
      headers: {
        Authorization: `Basic ${Buffer.from(
          `${clientId}:${clientSecret}`
        ).toString('base64')}`,
        'Content-Type': 'application/json',
        'cache-control': 'no-cache',
      },
      params: {
        AccessToken: accessToken,
      },
    });

    const paymentDetails = response.data;

    if (paymentDetails.Status !== '0' && paymentDetails.Status !== '-1') {
      return paymentDetails;
    }
    return false;
  } catch (error: any) {
    console.error('Error in response:', error.message);
    return false;
  }
}
// module.exports = response;
