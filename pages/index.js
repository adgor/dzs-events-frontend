import CardPageVisits from "@/components/Cards/CardPageVisits";
import CardPageVisitItem from "@/components/Cards/CardPageVisitItem";
import Showcase from "@/components/Showcase";

import { API_URL } from "@/config/index";

export default function Home({ events }) {
  return (
    <>
      <Showcase />
      <div className="relative px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <CardPageVisits>
          <CardPageVisitItem data={events} />
        </CardPageVisits>
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const res = await fetch(`${API_URL}/api/events`);
  const resData = await res.json();
  const events = resData.data;
  const eventsMeta = resData.meta.pagination;

  // console.log("ku dell", events);

  return {
    props: {
      events,
      eventsMeta,
    },
  };
}
