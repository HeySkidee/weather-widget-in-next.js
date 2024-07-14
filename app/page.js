import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import Weather from "@/components/Weather";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen relative">
      <a
        href="https://github.com/HeySkidee/weather-widget-in-next.js"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute top-4 left-4"
      >
        <FontAwesomeIcon icon={faGithub} size="2x" />
      </a>
      <Weather />
    </div>
  );
}
