type Props = {
  title: string;
  description: string;
};

export default function card({ title, description }: Props) {
  return (
    <div className="border p-4 bg-yellow-400">
      <h1 className="font-bold">{title}</h1>
      <p>{description}</p>
    </div>
  );
}
