import type { NextApiRequest, NextApiResponse } from "next";

export type Data = {
  randomNumber: number;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  // generate number between 0 and 100
  const randomNumber = Math.random() * 100;
  res.status(200).json({ randomNumber: randomNumber });
}
