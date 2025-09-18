export function Button({ children, className, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-xl font-semibold bg-gradient-to-r from-purple-500 to-indigo-500 text-white hover:opacity-90 transition-all ${className}`}
    >
      {children}
    </button>
  );
}
