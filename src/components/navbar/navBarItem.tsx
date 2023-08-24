import { useRouter } from "next/navigation";

interface Props {
  text: string;
  href?: string;
}

export default function NavbarItem({ text, href }: Props) {
  const router = useRouter();
  return (
    <div onClick={() => router.push(href ?? "/")}>
      {text}
    </div>
  );
}
