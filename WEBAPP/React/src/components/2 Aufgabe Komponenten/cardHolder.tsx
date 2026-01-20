import logo from "./img/polizeiAuto.png";

type Props = {
  name: string;
  description: string;
};

export default function CardHolder({ name, description }: Props) {
  return (
    <div className="p-6 bg-white shadow-md overflow-hidden w-64">
      <img className="w-full h-40" src={logo} alt="Logo" />
      <h1 className="text-lg font-bold mb-1">{name}</h1>
      <p>{description}</p>
    </div>
  );
}
