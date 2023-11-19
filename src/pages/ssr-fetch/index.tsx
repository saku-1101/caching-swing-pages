import { User } from "@prisma/client";
import BackButton from "../_component/back-button";
import LinkButton from "../_component/link-button";
import Content from "./children/content";
import Header from "./children/header";
import { Person } from "./children/user";
import { log } from "console";
import { Data } from "../api/get/unstable/data";
import { prisma } from "../../../prisma/client";
import { assertNonNullable } from "@/libs/assert";

const fetcher = (url: string) =>
  fetch(url, {
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
    },
  }).then((res) => res.json());

export const getRandomNumber = async () => {
  const randomNumber = Math.random() * 100;
  return { randomNumber: randomNumber };
};

export const getUser = async () => {
  const user = await prisma.user.findUnique({
    where: { id: 1 },
  });
  assertNonNullable(user);
  return user;
};

export default function SSRFetchPage({
  data,
  randomNumber,
  user,
}: {
  data: any;
  randomNumber: Data;
  user: User;
}) {
  return (
    <div>
      <Header
        data={{ ...data }}
        randomNumber={randomNumber.randomNumber}
        user={user}
      />
      <Content data={{ ...data }} randomNumber={randomNumber.randomNumber} />
      <Person user={user} />
      <BackButton />
      <LinkButton link="/prc-tanstack" label="tanstack" />
      <LinkButton link="/prc-swr" label="swr" />
    </div>
  );
}
export async function getServerSideProps() {
  console.time("ssr");

  const props = Promise.all([
    fetcher("https://api.github.com/repos/vercel/next.js"),
    getRandomNumber(),
    getUser(),
  ])
    .then(([data, randomNumber, user]) => {
      console.timeEnd("ssr");
      return { props: { data, randomNumber, user } };
    })
    .catch((err) => {
      log(err);
    });
  return props;
}
