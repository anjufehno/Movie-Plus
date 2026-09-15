export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-black text-white">
      <div className="text-center">
        <div
          className="mx-auto mb-4 h-10 w-10 animate-spin rounded-full border-2 border-neutral-700 border-t-white"
          aria-hidden="true"
        />
        <p className="text-sm text-neutral-400">Loading movies…</p>
      </div>
    </div>
  );
}
