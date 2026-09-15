"use client";

type ErrorPageProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function ErrorPage({ error, reset }: ErrorPageProps) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-black px-4 text-white">
      <div className="max-w-md text-center">
        <h1 className="mb-3 text-2xl font-semibold">Something went wrong</h1>
        <p className="mb-6 text-sm text-neutral-400">
          We could not load the requested movie data. Please try again.
        </p>

        <button
          type="button"
          onClick={reset}
          className="rounded-md border px-4 py-2 text-sm transition hover:bg-neutral-800"
        >
          Try again
        </button>

        {process.env.NODE_ENV === "development" && (
          <p className="mt-6 break-words text-left text-xs text-red-300">
            {error.message}
          </p>
        )}
      </div>
    </div>
  );
}
