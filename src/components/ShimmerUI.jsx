// import React from "react";

// const ShimmerUI = () => {
//   return (
//     <div className="flex flex-wrap gap-4 bg-gray-200 ">
//       {(() => {
//         const cards = [];
//         for (let i = 0; i < 16; i++) {
//           cards.push(<div key={i} className="h-80 w-48 bg-amber-400"></div>);
//         }
//         return cards;
//       })()}
//     </div>
//   );
// };

// export default ShimmerUI;

const ShimmerUI = () => {
  return (
    <div className="mx-auto max-w-7xl px-6 py-8">
      <div className="mb-8 h-8 w-64 animate-pulse rounded-lg bg-gray-200"></div>

      {/* Shimmer Cards */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {Array.from({ length: 16 }).map((_, i) => (
          <div
            key={i}
            className="overflow-hidden rounded-2xl bg-white shadow-sm"
          >
            <div className="h-44 w-full animate-pulse bg-gray-200"></div>

            <div className="flex flex-col gap-3 p-3">
              <div className="h-5 w-3/4 animate-pulse rounded-md bg-gray-200"></div>

              <div className="h-4 w-1/2 animate-pulse rounded-md bg-gray-200"></div>

              <div className="h-4 w-full animate-pulse rounded-md bg-gray-200"></div>

              <div className="h-4 w-2/3 animate-pulse rounded-md bg-gray-200"></div>

              <div className="h-4 w-1/3 animate-pulse rounded-md bg-gray-200"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShimmerUI;
