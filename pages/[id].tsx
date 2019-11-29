import { useRouter } from "next/router";

const Details = () => {
  const router = useRouter();
  const { id } = router.query;

  return <p>Beer: {id}</p>;
};

export default Details;
