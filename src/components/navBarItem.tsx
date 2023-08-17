interface Props {
  text: string;
}

export default function NavbarItem({ text }: Props) {
  return <div>{text}</div>;
}
