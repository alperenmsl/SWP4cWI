
export default function Button({ input }: { input: string }) {
  return (
    <button
      className="bg-emerald-500 text-amber-50 px-4 py-2 m-4 hover:bg-teal-600 transition-all cursor-pointer"
      onClick={() => alert("Button angeklickt")}
    >
      {input}
    </button>
  );
}
