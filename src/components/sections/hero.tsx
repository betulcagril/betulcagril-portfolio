import SocialIcons from '@/components/data-display/social-icons';
import Typography from '@/components/general/typography';
import Container from '@/components/layout/container';

const HeroSection = () => {
  return (
    <Container id="hero" className="!py-2 md:!py-3">
      <div className="flex max-w-3xl flex-col gap-2 md:gap-3">
        <div className="flex flex-col gap-1">
          <Typography
            variant="h1"
            className="text-xl font-semibold leading-tight md:text-2xl lg:text-3xl"
          >
            Welcome to my portfolio! I&apos;m Betül Çağril ✨
          </Typography>
          <Typography className="text-sm leading-snug md:text-base">
            As a third-year Computer Engineering student, I truly love the
            thrill of solving puzzles and building software from scratch. From
            training smart vision models to designing systems and crafting clean
            web interfaces, I enjoy every step of the problem-solving journey.
            For me, engineering is all about curiosity, continuous learning, and
            turning complex ideas into impactful solutions.
          </Typography>
        </div>
        <div className="flex flex-col gap-1.5 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-4 sm:gap-y-1">
          <Typography className="text-sm">
            📍 Istanbul / Bursa, Turkey
          </Typography>
          <Typography className="text-sm">
            🟢 Available for internships & new opportunities
          </Typography>
        </div>
        <SocialIcons />
      </div>
    </Container>
  );
};

export default HeroSection;
