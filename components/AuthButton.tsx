import Link from "next/link";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";

export default async function AuthButton() {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const signOut = async () => {
    "use server";

    const cookieStore = cookies();
    const supabase = createClient(cookieStore);
    await supabase.auth.signOut();
    redirect("/");
  };

  const buttonClassName =
    "rounded-md border px-3 py-2 font-thin no-underline transition hover:bg-neutral-800";

  return user ? (
    <form action={signOut}>
      <button type="submit" className={buttonClassName}>
        Logout
      </button>
    </form>
  ) : (
    <Link href="/login" className={buttonClassName}>
      Login
    </Link>
  );
}
