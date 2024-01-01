/* eslint-disable no-underscore-dangle */
// pages/api/admin/product/create.js
import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';
import { Readable } from 'stream';

export const config = {
  api: {
    bodyParser: false,
  },
};

const settingsApiHandler = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  try {
    const chunks: any = [];

    req.on('data', (chunk: any) => {
      chunks.push(chunk);
    });

    req.on('end', async () => {
      try {
        const rawData = Buffer.concat(chunks);
        const formData = new Readable();
        formData._read = () => {}; // Define a dummy _read function to satisfy the Readable stream
        formData.push(rawData);
        formData.push(null); // Signal the end of the stream

        // Make a request to your Node.js server
        const response = await axios.post(
          'http://localhost:8000/settings',
          formData,
          {
            headers: {
              ...req.headers,
              'Content-Type': req.headers['content-type'], // Include the original content type
            },
          }
        );

        // Check the response status and handle it accordingly
        if (response.status === 200) {
          const responseData = response.data;
          res.status(200).json(responseData);
        } else {
          res.status(500).json({
            message: 'Internal server error',
            success: false,
            data: {},
          });
        }
      } catch (error) {
        res
          .status(500)
          .json({ message: 'Internal server error', success: false, data: {} });
      }
    });
  } catch (error) {
    res.status(500).json({
      message: 'Internal server error',
      success: false,
      data: {},
    });
  }
};

export default settingsApiHandler;
