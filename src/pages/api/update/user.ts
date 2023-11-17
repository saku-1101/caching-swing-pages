import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../../prisma/client";
import { User } from "@prisma/client";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<User>
) {
  const newName: string = JSON.parse(req.body).name;

  const updatedUser = await prisma.user.update({
    where: { id: 1 },
    data: { name: newName },
  });
  res.status(200).json(updatedUser);
}
