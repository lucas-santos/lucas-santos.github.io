import dynamic from "next/dynamic";

import PageTitle from "@/components/page-title";
import { MyWritings } from "@/components/about/my-writings";
import { FadeLeft } from "@/components/animations/animations";
import { getCleanMdxContentFromPath } from "@/lib/api/mdx";
import { ABOUT_PATH } from "@/lib/constants";

const AboutSection = dynamic(() => import("@/components/section/about"));
const Mdx = dynamic(() => import("@/components/mdx"));

function About() {
  return (
    <article>
      <PageTitle title="About Me" />

      <FadeLeft delay={0.3 * 1}>
        <Mdx source={getCleanMdxContentFromPath(ABOUT_PATH)} />
      </FadeLeft>

      <AboutSection id="tech-stack" title="Tech Stack">
        <MyWritings count={0} posts={[]} />
      </AboutSection>
    </article>
  );
}

export default About;
