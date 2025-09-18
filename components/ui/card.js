export function Card({ children, className }) {
  return (
    <div className={`rounded-2xl shadow-md p-4 bg-white/10 dark:bg-gray-800/30 ${className}`}>
      {children}
    </div>
  );
}

export function CardContent({ children, className }) {
  return <div className={`p-2 ${className}`}>{children}</div>;
}
