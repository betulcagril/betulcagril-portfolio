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
          Third year Computer Engineering student at Yeditepe University. 
          Rather than limiting myself to one software domain,I develop various solutions 
          including database optimization,modern web architectures,adaptable AI integrations.
          </Typography>
          <Typography>
          Through my corporate internships,I have gained practical experience building 
          backend systems with Go and PostgreSQL and creating fast user interfaces using 
          Next.js and TypeScript.I also work with deep learning models like YOLOv8 and 
          PaddleOCR for object detection.Additionally as part of a software team working 
          on autonomous systems in ROS and Gazebo,I enjoy collaborating with others to 
          solve complex engineering problems
          </Typography>
          <Typography>
          My passion is turning complex business needs into clean,organized
          and easy to maintain code while building systems that solve real world problems. 
          With a strong engineering mindset I believe that any system can be improved and 
          optimized.I am always committed to continuous learning and building impactful projects.
          </Typography>
          <Typography>Snapshots:</Typography>
          <div className="flex flex-col gap-2 md:flex-row md:gap-6">
            <ul className="list-disc space-y-2 pl-5">
              <Typography component="li">
                B.E. in Computer Engineering — Yeditepe University
              </Typography>
              <Typography component="li">
                Backend:Go,PostgreSQL
              </Typography>
            </ul>
            <ul className="list-disc space-y-2 pl-5">
              <Typography component="li">
                Frontend:Next.js,TypeScript
              </Typography>
              <Typography component="li">
                AI & Robotics:YOLOv8,PaddleOCR,ROS,Gazebo
              </Typography>
            </ul>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default AboutMeSection;
