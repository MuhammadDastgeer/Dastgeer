import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/context/ThemeContext";
import ScrollToTop from "@/components/ScrollToTop";
import SmoothScroll from "@/components/SmoothScroll";
import { ScrollProgressBar } from "@/components/ScrollProgressBar";
import { CustomCursor } from "@/components/CustomCursor";
import { AuroraBackground } from "@/components/AuroraBackground";

import Index from "./pages/Index.tsx";
import AboutPage from "./pages/AboutPage.tsx";
import SkillsPage from "./pages/SkillsPage.tsx";
import ProjectsPage from "./pages/ProjectsPage.tsx";
import ContactPage from "./pages/ContactPage.tsx";
import WebCV from "./pages/WebCV.tsx";
import Blog from "./pages/Blog.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner position="top-right" richColors />
        <SmoothScroll>
          <div className="relative min-h-screen bg-background text-foreground transition-colors duration-300">
            {/* Subtle film-grain/noise overlay */}
            <div className="noise-overlay" aria-hidden="true" />

            {/* Scroll progress bar at the very top */}
            <ScrollProgressBar />

            {/* Custom interactive cursor for desktop */}
            <CustomCursor />

            {/* Aurora gradient background blobs */}
            <AuroraBackground />

            <BrowserRouter>
              <ScrollToTop />
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/home" element={<Index />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/skills" element={<SkillsPage />} />
                <Route path="/projects" element={<ProjectsPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/web-cv" element={<WebCV />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>
          </div>
        </SmoothScroll>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
