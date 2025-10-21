interface TagButtonProps {
  children: React.ReactNode;
  className?: string;
}

const TagButton = ({ children, className = "" }: TagButtonProps) => {
  return (
    <button className={`rounded-[28px] bg-[#EBF8FF] text-[10px] border-[#33B7FF] text-[#1C658C] border-[1px] py-[4px] px-[14px] text-[Lato] ${className}`}>
      {children}
    </button>
  );
};

export default TagButton;