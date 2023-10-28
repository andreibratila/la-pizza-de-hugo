export const ProductDiv = ({ children }: { children: React.ReactNode }) => {
  return (
    // <div className="flex content-center">
    <div className="container pt-12 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 content-center">
      {children}
    </div>
    // </div>
  );
};
