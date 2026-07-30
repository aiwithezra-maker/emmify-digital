export default function CtaButton({ children, className }) {
  return (
    <button className={`bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold ${className || ''}`}>
      {children}
    </button>
  );
}