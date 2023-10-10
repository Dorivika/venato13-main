import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

export const GenreChips = ({ genres, className, chipsClassName }) => {
  if (genres) {
    return (
      <div
        className={cn(
          "flex max-h-[140px] flex-wrap gap-2 overflow-auto",
          className
        )}
      >
        {genres?.map((genre, index) => {
          return (
            <p
              className={cn(
                "rounded-full bg-slate-200 p-1 px-3 text-sm text-slate-800",
                chipsClassName
              )}
              key={index}
            >
              {genre?.name}
            </p>
          );
        })}
      </div>
    );
  }
  return null;
};
export const SearchBar = () => {
  return <Input type="text" placeholder="Search" className="w-72" />;
};

export const UserAvatar = ({ text }) => (
  <Avatar>
    <AvatarFallback>{text}</AvatarFallback>
  </Avatar>
);

export const MetacriticSquare = ({ score, className }) => {
  // const [bgColor, setBgColor] = useState('#66CC33')
  if (!score) {
    return null;
  }

  let bgColor;
  if (score >= 75) {
    bgColor = "#66CC33";
  } else if (score < 75 && score >= 50) {
    bgColor = "#FFCC33";
  } else if (score < 50) {
    bgColor = "#FF0000";
  }

  return (
    <div
      className={cn(
        "square flex items-center justify-center rounded-bl-md p-4 text-xl shadow-md shadow-slate-500",
        className
      )}
      style={{
        backgroundColor: bgColor,
      }}
    >
      {score}
    </div>
  );
};
