import FeatureProject from "@/components/FeatureProject";
import Hero from "@/components/Hero";
import SiteFooter from "@/components/SiteFooter";
import SiteNavbar from "@/components/SiteNavbar";
import StatList from "@/components/StatList";
import Subscribe from "@/components/Subscribe";
import WorkList from "@/components/WorkList";

export default function Home() {
  return (
    <>
      <SiteNavbar />
      <Hero />
      <WorkList />
      <StatList />
      <FeatureProject />
      <Subscribe />
      <SiteFooter />
    </>
  )
}
