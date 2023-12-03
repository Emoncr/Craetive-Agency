import FeatureProject from "@/components/FeatureProject";
import Hero from "@/components/Hero";
import StatList from "@/components/StatList";
import Subscribe from "@/components/Subscribe";
import WorkList from "@/components/WorkList";

export default function Home() {
  return (
    <>
      <Hero />
      <WorkList />
      <StatList />
      <FeatureProject />
      <Subscribe />
    </>
  )
}
