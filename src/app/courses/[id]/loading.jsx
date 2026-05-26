export default function Loading() {
  return (
    <div className="min-h-screen bg-[#080b14] pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="w-40 h-4 rounded skeleton-shimmer mb-8" />
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 space-y-4">
            <div className="aspect-video rounded-2xl skeleton-shimmer" />
            <div className="h-24 rounded-2xl skeleton-shimmer" />
            <div className="grid grid-cols-3 gap-3">
              {[0, 1, 2].map((i) => <div key={i} className="h-20 rounded-xl skeleton-shimmer" />)}
            </div>
          </div>
          <div className="lg:col-span-3 space-y-4">
            <div className="h-8 w-3/4 rounded skeleton-shimmer" />
            <div className="h-6 w-1/2 rounded skeleton-shimmer" />
            <div className="space-y-2">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="h-12 rounded-xl skeleton-shimmer" />
              ))}
            </div>
            <div className="h-14 rounded-xl skeleton-shimmer" />
          </div>
        </div>
      </div>
    </div>
  );
}
