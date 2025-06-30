interface ButtonProps {
  children?: React.ReactNode;
  onClick?: () => void;
}

export default function Button ( {children, onClick} : ButtonProps ) {
  return (
    <button 
    onClick={onClick}
    className="rounded-2xl border-2 border-dashed border-violet-500 bg-white px-6 py-3 font-semibold uppercase text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_white] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none">
      {children}
    </button>
  );
};