type Props = {
  title: string;
  onPress: () => void;
};

export default function Button({ title, onPress }: Props) {
  return (
    <div
      className="bg-amber-300 px-4 py-4 w-25 text-amber-50 rounded hover:bg-amber-500 hover:cursor-pointer"
      onClick={onPress}
    >
      {title}
    </div>
  );
}
