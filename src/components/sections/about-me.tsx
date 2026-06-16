import Image from 'next/image';

import BetulAbout from '/public/images/betul-about.png';
import Tag from '@/components/data-display/tag';
import Container from '@/components/layout/container';
import Typography from '@/components/general/typography';

const AboutMeSection = () => {
  return (
    <Container className="bg-gray-50 !py-6 md:!py-8" id="about">
      <div className="self-center">
        <Tag label="About" />
      </div>

      <div className="flex w-full flex-col justify-between gap-12 md:flex-row">
        {/* Image */}
        <div className="flex justify-center md:order-first md:justify-end">
          <div className="relative h-[380px] w-[320px] md:h-[460px] md:w-[380px] lg:h-[520px] lg:w-[440px]">
            <Image
              src={BetulAbout}
              alt="Betül Çağril"
              className="absolute z-10 h-[360px] w-[280px] border-8 border-gray-50 max-md:left-5 md:right-0 md:top-0 md:h-[420px] md:w-[340px] lg:h-[480px] lg:w-[400px]"
              style={{ objectFit: 'cover' }}
            ></Image>
            <div className="absolute h-[360px] w-[320px] border-8 border-transparent bg-gray-200 max-md:top-5 md:bottom-0 md:left-0 md:h-[420px] md:w-[340px] lg:h-[480px] lg:w-[400px]"></div>
          </div>
        </div>

        {/* Content */}
        <div className="flex max-w-xl flex-col gap-6">
          <Typography variant="h3">I&apos;m</Typography>
          <Typography>
            A third-year Computer Engineering student at Yeditepe University.
            Rather than limiting myself to a single domain in software
            engineering, I focus on building end-to-end solutions ranging from
            database optimization and modern web architectures to scalable AI
            integrations and low-level computer vision pipelines.
          </Typography>
          <Typography>
            Through my corporate internship experiences, I have gained hands-on
            expertise in developing robust backend systems with Go and
            PostgreSQL, crafting highly performant user interfaces using Next.js
            14 and TypeScript, and implementing deep learning-based object
            detection models with YOLOv8 / PaddleOCR. Additionally, as a member
            of a software team working with autonomous systems in ROS and Gazebo
            environments, I actively leverage the power of collaboration to
            tackle complex, high-stakes engineering challenges.
          </Typography>
          <Typography>
            Transforming intricate business logic into clean, modular, and
            maintainable code—while architecting systems that solve real-world
            problems—is what drives my passion. Guided by engineering rationale,
            I believe there is no problem that cannot be optimized, and I am
            committed to continuous learning and technical excellence.
          </Typography>
          <Typography>Finally, some quick bits about me.</Typography>
          <div className="flex flex-col gap-2 md:flex-row md:gap-6">
            <ul className="flex list-inside list-disc flex-col gap-2">
              <Typography component="li">
                B.E. in Computer Engineering — Yeditepe University
              </Typography>
              <Typography component="li">
                Backend: Go, PostgreSQL
              </Typography>
            </ul>
            <ul className="flex list-inside list-disc flex-col gap-2">
              <Typography component="li">
                Frontend: Next.js 14, TypeScript
              </Typography>
              <Typography component="li">
                AI & Robotics: YOLOv8, PaddleOCR, ROS, Gazebo
              </Typography>
            </ul>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default AboutMeSection;
