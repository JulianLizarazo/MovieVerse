import { MobilePresentation } from "../../components/MobilePresentation/MobilePresentation";
import { Presentation } from "../../components/Presentation/Presentation";
import { useWindowSize } from "../../hooks/useWindowSize";
import "./About.scss";

const About = () => {
  const { width } = useWindowSize();

  return (
    <section className="about">
      {width > 1023 ? <Presentation /> : <MobilePresentation />}
    </section>
  );
};

export { About };
