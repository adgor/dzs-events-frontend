import { useRouter } from "next/router";

export default function PoplavaPAge() {
  const router = useRouter();
  console.log(router);
  return <div>from flood</div>;
}
