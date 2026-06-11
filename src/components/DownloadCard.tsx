import { useState, useEffect } from "react";
import Link from "@docusaurus/Link";

type OS = "windows" | "linux" | "unknown";

interface DownloadOption {
  name: string;
  url: string;
  size: string;
  ext: string;
  type: string;
}

interface DownloadCardProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DownloadCard({ isOpen, onClose }: DownloadCardProps) {
  const [detectedOS, setDetectedOS] = useState<OS>("unknown");
  const [selectedOS, setSelectedOS] = useState<"windows" | "linux">("windows");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const ua = window.navigator.userAgent.toLowerCase();
      if (ua.indexOf("win") !== -1) {
        setDetectedOS("windows");
        setSelectedOS("windows");
      } else if (ua.indexOf("linux") !== -1) {
        setDetectedOS("linux");
        setSelectedOS("linux");
      } else {
        setDetectedOS("unknown");
        setSelectedOS("windows"); // Fallback
      }
    }
  }, [isOpen]);

  // Handle ESC key press to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  // Download details
  const downloads: Record<
    "windows" | "linux",
    {
      primary: DownloadOption;
      secondary?: DownloadOption;
      note?: string;
    }
  > = {
    windows: {
      primary: {
        name: "Windows Installer",
        url: "https://github.com/errorly-project/bintoo/releases/download/v1.0.0/bintoo-setup-1.0.0.exe",
        size: "45.2 MB",
        ext: ".exe",
        type: "Setup Installer (Recommended)",
      },
      // secondary: {
      //   name: "Windows Portable",
      //   url: "https://github.com/errorly-project/bintoo/releases/download/v1.0.0/bintoo-portable-1.0.0.zip",
      //   size: "48.1 MB",
      //   ext: ".zip",
      //   type: "Portable Zip (No Install)",
      // },
      note: "SmartScreen warning? See our guide on how to bypass the unsigned application warning.",
    },
    linux: {
      primary: {
        name: "Linux AppImage",
        url: "https://github.com/errorly-project/bintoo/releases/download/v1.0.0/bintoo-1.0.0.AppImage",
        size: "46.8 MB",
        ext: ".AppImage",
        type: "Universal AppImage (Recommended)",
      },
      // secondary: {
      //   name: "Linux Tarball",
      //   url: "https://github.com/errorly-project/bintoo/releases/download/v1.0.0/bintoo-1.0.0.tar.gz",
      //   size: "44.9 MB",
      //   ext: ".tar.gz",
      //   type: "Compressed Binary Archive",
      // },
    },
  };

  const currentDownload = downloads[selectedOS];

  // SVG Icons
  const windowsIcon = (
    <svg
      className="w-5 h-5 fill-current"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 3.449L9.75 2.1v9.45H0V3.449zM0 12.45h9.75v9.45L0 20.551v-8.1zM10.95 1.95L24 0v11.55H10.95V1.95zM10.95 12.45H24v11.55l-13.05-1.95v-9.6z" />
    </svg>
  );

  const renderLinuxIcon = (hex: string) => (
    <img
      src={`https://cdn.simpleicons.org/linux/${hex}`}
      alt="Linux"
      className="w-5 h-5"
    />
  );

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop overlay */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/75 transition-opacity duration-200 cursor-default"
      ></div>

      {/* Modal Container */}
      <div className="relative w-full max-w-lg overflow-hidden rounded-2xl border border-slate-800 bg-surface-dark p-6 md:p-10 shadow-2xl transition-all duration-200 transform scale-100 flex flex-col z-10">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 flex items-center justify-center h-9 w-9 rounded-lg border border-slate-800 bg-background-dark hover:bg-slate-900 text-slate-400 hover:text-white transition-all cursor-pointer"
        >
          <span className="material-symbols-outlined text-[20px]">close</span>
        </button>

        {/* Header */}
        <div className="text-center mb-8 mt-2">
          <h2 className="text-3xl font-black text-white">
            Get <span className="text-primary">Bintoo</span>
          </h2>
        </div>

        {/* Tab Selection */}
        <div className="grid grid-cols-2 gap-2 p-1.5 rounded-xl bg-background-dark border border-slate-800 mb-8">
          <button
            onClick={() => setSelectedOS("windows")}
            className={`flex items-center justify-center gap-2 py-3 px-3 rounded-lg text-sm font-bold transition-all duration-150 cursor-pointer ${
              selectedOS === "windows"
                ? "bg-primary text-black"
                : "text-slate-400 hover:text-white hover:bg-slate-900"
            }`}
          >
            {windowsIcon}
            <span>Windows</span>
          </button>

          <button
            onClick={() => setSelectedOS("linux")}
            className={`flex items-center justify-center gap-2 py-3 px-3 rounded-lg text-sm font-bold transition-all duration-150 cursor-pointer ${
              selectedOS === "linux"
                ? "bg-primary text-black"
                : "text-slate-400 hover:text-white hover:bg-slate-900"
            }`}
          >
            {renderLinuxIcon(selectedOS === "linux" ? "000000" : "94a3b8")}
            <span>Linux</span>
          </button>
        </div>

        {/* Selected Download Display */}
        <div className="flex flex-col items-center text-center">
          <h3 className="text-xl font-extrabold text-white mb-2 flex items-center gap-2 justify-center">
            {selectedOS === "windows" && windowsIcon}
            {selectedOS === "linux" && renderLinuxIcon("ffffff")}
            {currentDownload.primary.name}
          </h3>
          <p className="text-slate-400 text-xs mb-6">
            {currentDownload.primary.type}
          </p>

          {/* Primary Action Button */}
          <a
            href={currentDownload.primary.url}
            onClick={onClose}
            className="group w-full flex items-center justify-center gap-2.5 rounded-xl bg-primary hover:bg-[#1dff68] text-black px-6 py-4.5 text-sm font-bold transition-all duration-150 cursor-pointer shadow-sm"
          >
            <span className="material-symbols-outlined text-[18px]">
              download
            </span>
            <span>
              Download Bintoo for{" "}
              {selectedOS.charAt(0).toUpperCase() + selectedOS.slice(1)}
            </span>
          </a>

          {/* Size & Info Metadata */}
          <div className="flex flex-wrap justify-center items-center gap-x-3 gap-y-1 mt-4 text-[11px] text-slate-500">
            <span>Size: {currentDownload.primary.size}</span>
            <span className="h-1 w-1 rounded-full bg-slate-700"></span>
            <span>Format: {currentDownload.primary.ext}</span>
            <span className="h-1 w-1 rounded-full bg-slate-700"></span>
            <span>Release: v1.0.0</span>
          </div>

          {/* Secondary Download option if available */}
          {/*{currentDownload.secondary && (
            <div className="mt-6 w-full pt-4.5 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-left">
              <div>
                <h4 className="text-xs font-semibold text-slate-300">
                  {currentDownload.secondary.name}
                </h4>
                <p className="text-[10px] text-slate-500">
                  {currentDownload.secondary.type}
                </p>
              </div>
              <a
                href={currentDownload.secondary.url}
                onClick={onClose}
                className="flex items-center gap-0.5 text-xs font-bold text-primary hover:text-[#1dff68] transition-colors"
              >
                Download Portable ({currentDownload.secondary.ext})
                <span className="material-symbols-outlined text-[12px]">
                  chevron_right
                </span>
              </a>
            </div>
          )}*/}

          {/* Smart Screen Warning note / custom help */}
          {currentDownload.note && (
            <p className="mt-6 text-[11px] text-slate-500 leading-relaxed">
              {selectedOS === "windows" ? (
                <>
                  Windows showing a warning? Read our{" "}
                  <Link
                    to="/docs/faqs/smart-screen-warning"
                    onClick={onClose}
                    className="text-primary hover:underline font-semibold"
                  >
                    Smart Screen Guide
                  </Link>{" "}
                  to run safely.
                </>
              ) : (
                currentDownload.note
              )}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
