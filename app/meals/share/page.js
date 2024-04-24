import Link from "next/link";

export default function share() {
  return (
    <main>
      <h1>Share meal</h1>
      <p>
        <Link href="/meals">meals</Link>
      </p>
    </main>
  );
}
