import {
  ArrowRight,
  Code,
  Facebook,
  Github,
  Sparkles,
  User,
} from "lucide-react";
import { useEffect, useState } from "react";

export default function IntroPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const githubProfileUrl = "https://github.com/KahfiSmith";
  const facebookProfileUrl = "https://www.facebook.com/kahfi.smith.2025/";

  useEffect(() => {
    setIsVisible(true);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleGithubClick = () => {
    window.open(githubProfileUrl, "_blank");
  };

  const handleFacebookClick = () => {
    window.open(facebookProfileUrl, "_blank");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>
      <div
        className="absolute w-96 h-96 bg-gradient-radial from-purple-400/20 to-transparent rounded-full blur-3xl pointer-events-none transition-all duration-300 ease-out"
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
        }}
      ></div>
      <div className="relative z-10 flex items-center justify-center min-h-screen p-8">
        <div
          className={`text-center transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="mb-8 relative">
            <div className="w-32 h-32 mx-auto bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full p-1 animate-pulse">
              <div className="w-full h-full bg-slate-900 rounded-full flex items-center justify-center">
                <User className="w-16 h-16 text-white" />
              </div>
            </div>
            <div className="absolute -top-2 -right-2 animate-bounce">
              <Sparkles className="w-8 h-8 text-yellow-400" />
            </div>
          </div>
          <h1 className="text-6xl font-bold bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent mb-4 animate-pulse">
            Kahfi Smith
          </h1>
          <div className="flex items-center justify-center gap-2 mb-8 text-slate-300">
            <Code className="w-5 h-5" />
            <p className="text-xl">Full Stack Developer</p>
          </div>
          <p className="text-slate-400 mb-12 max-w-md mx-auto text-lg leading-relaxed">
            Welcome to my digital space. Explore my projects and connect with me
            on social platforms.
          </p>
          <div className="flex gap-6 justify-center">
            <button
              onClick={handleGithubClick}
              className="group relative overflow-hidden bg-gradient-to-r from-slate-800 to-slate-700 hover:from-slate-700 hover:to-slate-600 text-white px-8 py-4 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 border border-slate-600 hover:border-purple-400"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/0 via-purple-600/10 to-purple-600/0 group-hover:via-purple-600/20 transition-all duration-300"></div>
              <div className="relative flex items-center gap-3">
                <Github className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
                <span className="font-semibold">GitHub</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </button>
            <button
              onClick={handleFacebookClick}
              className="group relative overflow-hidden bg-gradient-to-r from-blue-800 to-blue-700 hover:from-blue-700 hover:to-blue-600 text-white px-8 py-4 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 border border-blue-600 hover:border-blue-400"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/0 via-blue-400/10 to-blue-400/0 group-hover:via-blue-400/20 transition-all duration-300"></div>
              <div className="relative flex items-center gap-3">
                <Facebook className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
                <span className="font-semibold">Facebook</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </button>
          </div>
          <div className="mt-16 text-slate-500 text-sm">
            <p>Click any button to explore my profiles</p>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-2 h-2 bg-white/20 rounded-full animate-pulse`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}
