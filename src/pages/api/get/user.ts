import { User } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../../prisma/client";
import { assertNonNullable } from "@/libs/assert";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<User>
) {
  const user = await prisma.user.findUnique({
    where: { id: 1 },
  });
  assertNonNullable(user);
  res.status(200).json(user);
}
