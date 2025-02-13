import Color from "./Color";

export default function Colors({ colors }) {
  return (
    <ul className="p-4 text-xl">
      {colors.map((color) => (
        <Color key={color.id} color={color} />
      ))}
    </ul>
  );
}
