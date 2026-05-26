export default function Loading() {
  return (
    <div className="min-h-screen bg-[#080b14] pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 space-y-3">
          <div className="w-20 h-3 rounded skeleton-shimmer" />
          <div className="w-52 h-9 rounded-lg skeleton-shimmer" />
          <div className="w-36 h-4 rounded skeleton-shimmer" />
        </div>
        <div className="w-full max-w-xl h-12 rounded-xl skeleton-shimmer mb-8" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="rounded-2xl overflow-hidden bg-[#0f1628] border border-[#1e2a45]">
              <div className="h-48 skeleton-shimmer" />
              <div className="p-5 space-y-3">
                <div className="h-4 rounded skeleton-shimmer" />
                <div className="h-4 w-2/3 rounded skeleton-shimmer" />
                <div className="h-3 w-1/2 rounded skeleton-shimmer" />
                <div className="h-10 rounded-xl skeleton-shimmer mt-4" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
