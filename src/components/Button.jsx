export default function Button({children, ...props}) {
  return <button
    className="bg-neutral-800 text-neutral-500 font-semibold rounded-md px-3 py-2 hover:bg-neutral-700 hover:text-neutral-400"
    {...props}
  >
    {children}
  </button>
}
