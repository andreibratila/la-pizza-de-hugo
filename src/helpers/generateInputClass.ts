export const generateInputClass = (error: string) => {
  const errorStyle = error && "border-red-500 text-red-500";
  const focusStyle =
    !error &&
    "focus:outline-none focus:shadow-outline focus:ring-blue-500 focus:border-blue-500";

  return `shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight ${errorStyle} ${focusStyle}`;
};
