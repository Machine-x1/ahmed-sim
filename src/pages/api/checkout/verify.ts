/* eslint-disable unused-imports/no-unused-vars */
import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { payId } = req.body;
  const responseFromApi = await axios.post(
    // 'https://api.simrckw.com/payment/request',
    "https://3448-41-232-59-125.ngrok-free.app/payment/verify",
    { payid: payId }
  );

  console.log(responseFromApi.data);
  if (responseFromApi.data.Status === "1") {
    res.status(200).send({ verfied: "Done" });
  } else {
    res.status(422).send({ verfied: "No" });
  }
}
