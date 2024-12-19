import { IconType } from "react-icons";

interface Props {
  icon?: IconType;
  text: string;
  isPrimary: boolean;
  onClick?: () => void
}

export const ActionButton = ({ icon: Icon, text, isPrimary, onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      className={`flex flex-row w-full justify-center items-center space-x-2 px-4 py-2 rounded-lg font-semibold font-sans 
        ${isPrimary ? "bg-blue-600 text-white" : "bg-transparent border-2 border-blue-600 text-blue-600"}`}
    >
      {Icon && 
      <Icon className="w-6 h-6" />
      }
      <span>{text}</span>
    </button>
  );
};