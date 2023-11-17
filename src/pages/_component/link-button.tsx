import { useRouter } from "next/router";

export default function LinkButton({
  link,
  label,
}: {
  link: string;
  label: string;
}) {
  const router = useRouter();
  function handleClick(link: string) {
    router.push(link);
  }

  return (
    <button
      style={{
        padding: "1%",
        margin: "1%",
        backgroundColor: "gray",
        borderRadius: "5px",
        border: "1px solid black",
        cursor: "pointer",
      }}
      onClick={() => handleClick(link)}
    >
      {label}
    </button>
  );
}
