import Link from "next/link";
export default function meals() {
  return (
    <main>
      <p>
        <Link href="/">Go back to main page</Link>
      </p>
      <p>
        <Link href="/meals/share">share</Link>
      </p>
      <p>
        <Link href="/meals/meal-1">Meal 1</Link>
      </p>
      <p>
        <Link href="/meals/meal-2">meal 2</Link>
      </p>
    </main>
  );
}
