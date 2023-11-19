export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "2rem",
      }}
    >
      <h1 className="text-3xl font-extrabold">
        This is <strong className="text-red-500">SSR</strong> but{" "}
        <strong className="text-red-500">NOT</strong> App Router!
      </h1>
      {children}
    </main>
  );
}
