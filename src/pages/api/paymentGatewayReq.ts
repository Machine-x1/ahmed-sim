/* eslint-disable no-console */
/* eslint-disable unused-imports/no-unused-vars */

// paymentGateway.js
import axios from 'axios';

export async function getAccessToken() {
  const clientId = '65559092';
  const clientSecret = 'GkD-afdYqDTeZ22_SLLDyjcVxmqXLusETRsqdcq85w81';
  const encrpKey =
    'Jr8klyX-sS0YNVWpsEWBRZHVwNQE1OazFxxLMxEOBUpkekRClh2B1MqP1VOPPJj6UpalKAWGUtCVoiIXLXp0TzSdBSbariC6MPG5W8fNIIE1';
  const url =
    'https://pgtest.cbk.com/ePay/api/cbk/online/pg/merchant/Authenticate';

  const postField = {
    ClientId: clientId,
    ClientSecret: clientSecret,
    ENCRP_KEY: encrpKey,
  };

  try {
    const response = await axios.post(url, postField, {
      headers: {
        Authorization: `Basic ${Buffer.from(
          `${clientId}:${clientSecret}`
        ).toString('base64')}`,
        'Content-Type': 'application/json',
        'cache-control': 'no-cache',
      },
    });
    if (response.status !== 200) {
      console.log('Request failed with status', response.status);
      console.log('Request failed with data', response.data);
      return false;
    }
    const authenticateData = response.data;

    if (
      !authenticateData ||
      !authenticateData.AccessToken ||
      !authenticateData.Status
    ) {
      console.log('Invalid response data', authenticateData);
      return '';
    }
    if (authenticateData.Status !== '1') {
      console.log('Invalid status', authenticateData.Status);
      return '';
    }
    console.log(authenticateData.AccessToken, 'authenticateData');
    return authenticateData.AccessToken;
  } catch (error: any) {
    console.log('Request failed with error', error.message);
    return '';
  }
}

export function request(
  amount: any,
  trackid: any,
  reference: any,
  udf1 = '',
  udf2 = '',
  udf3 = '',
  udf4 = '',
  udf5 = '',
  paymentType = 1,
  lang = 'en',
  returl = 'https://localhost:3000'
) {
  const encrpKey =
    'Jr8klyX-sS0YNVWpsEWBRZHVwNQE1OazFxxLMxEOBUpkekRClh2B1MqP1VOPPJj6UpalKAWGUtCVoiIXLXp0TzSdBSbariC6MPG5W8fNIIE1';
  const url =
    'https://pgtest.cbk.com/ePay/api/cbk/online/pg/merchant/Authenticate';

  // Get access token
  return getAccessToken()
    .then((accessToken) => {
      if (!accessToken) {
        return 'Authentication Failed no token';
      }

      // Generate pg page
      const formData = {
        tij_MerchantEncryptCode: encrpKey,
        tij_MerchAuthKeyApi: accessToken,
        tij_MerchantPaymentLang: lang,
        tij_MerchantPaymentAmount: amount,
        tij_MerchantPaymentTrack: trackid,
        tij_MerchantPaymentRef: reference,
        tij_MerchantUdf1: udf1,
        tij_MerchantUdf2: udf2,
        tij_MerchantUdf3: udf3,
        tij_MerchantUdf4: udf4,
        tij_MerchantUdf5: udf5,
        tij_MerchPayType: paymentType,
        tij_MerchReturnUrl: returl,
      };

      const form = Object.entries(formData)
        .map(
          ([key, value]) =>
            `<input type='hidden' name='${key}' value='${value}'>`
        )
        .join('');

      const formHtml = `<form id='pgForm' method='post' action='${url}?_v=${accessToken}' enctype='application/x-www-form-urlencoded'>
        ${form}
      </form>
      <div style='position: fixed;top: 50%;left: 50%;transform: translate(-50%, -50%;text-align:center'>Redirecting to PG ... <br> <b> DO NOT REFRESH</b></div>
      <script type='text/javascript'>
        document.getElementById('pgForm').submit();
      </script>`;
      console.log('Generated formData:', formData);
      console.log('Generated formHtml:', formHtml);
      return formHtml;
    })

    .catch((error) => {
      console.error('Error in request:', error.message);
      return 'Authentication Failed';
    });
}

// module.exports = request;
