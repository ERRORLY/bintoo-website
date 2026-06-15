import { useState, useEffect } from "react";
import Link from "@docusaurus/Link";

type OS = "windows" | "linux" | "unknown";

interface DownloadOption {
  name: string;
  url: string;
  size: string;
  ext: string;
  type: string;
  sha?: string;
}

interface DownloadCardProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DownloadCard({ isOpen, onClose }: DownloadCardProps) {
  const [detectedOS, setDetectedOS] = useState<OS>("unknown");
  const [selectedOS, setSelectedOS] = useState<"windows" | "linux">("windows");
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(
      "curl -fsSL https://bintoo.xyz/install/bintoo-linux.sh | bash",
    );
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

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
        name: "Windows Installer (Recommended)",
        url: "https://github.com/ERRORLY/bintoo-website/releases/download/1.0.0/Bintoo_1.0.0_x64_en-US.msi",
        ext: ".msi",
        type: "MSI Installer (Recommended)",
        sha: "2aae6c35c94fcfb415dbe95f408b9ce91ee846ed",
      },
      secondary: {
        name: "NSIS Installer",
        url: "https://github.com/ERRORLY/bintoo-website/releases/download/1.0.0/Bintoo_1.0.0_x64-setup.exe",
        ext: ".nsis",
        type: "Another Setup",
      },
      note: "SmartScreen warning? See our guide on how to bypass the unsigned application warning.",
    },
    linux: {
      primary: {
        name: "Linux AppImage",
        url: "https://github.com/ERRORLY/bintoo-website/releases/download/1.0.0/Bintoo_1.0.0_amd64.AppImage",
        size: "83.6 MB",
        ext: ".AppImage",
        type: "Universal AppImage",
        sha: "sha256:f7c0448fe5b528b8a7adbf5ac787dd1dd6f909f4921285b916f13edc7f61f69c",
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
      className="w-4 h-4 fill-current"
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
      className="w-4 h-4"
    />
  );

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop overlay */}
      <div className="fixed inset-0 bg-black/75 transition-opacity duration-200 cursor-default"></div>

      {/* Modal Container */}
      <div className="relative w-full max-w-lg overflow-hidden rounded-2xl border border-slate-800/80 bg-[#070b09] shadow-2xl transition-all duration-200 transform scale-100 flex flex-col z-10 max-h-[90vh]">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 flex items-center justify-center h-9 w-9 rounded-lg border border-slate-800 bg-background-dark hover:bg-slate-900 text-slate-400 hover:text-white transition-all cursor-pointer z-20"
        >
          <span className="material-symbols-outlined text-[20px]">close</span>
        </button>

        {/* Scrollable Content Wrapper */}
        <div className="overflow-y-auto p-6 md:p-10 w-full flex flex-col">
          {/* Header */}
          <div className="text-center mb-8 mt-2">
            <h2 className="text-3xl font-black text-white">
              Get <span className="text-primary">Bintoo</span>
            </h2>
          </div>

          {/* Tab Selection */}
          <div className="grid grid-cols-2 gap-1.5 p-1 rounded-xl bg-background-dark border border-slate-800 mb-6 max-w-xs mx-auto w-full">
            <button
              onClick={() => setSelectedOS("windows")}
              className={`flex items-center justify-center gap-2 py-2 px-2.5 rounded-lg text-xs font-bold transition-all duration-150 cursor-pointer ${
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
              className={`flex items-center justify-center gap-2 py-2 px-2.5 rounded-lg text-xs font-bold transition-all duration-150 cursor-pointer ${
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
          {selectedOS === "windows" ? (
            <div className="flex flex-col items-center text-center w-full">
              <h3 className="text-xl font-extrabold text-white mb-2 flex items-center gap-2 justify-center">
                {windowsIcon}
                Windows Installation
              </h3>
              <p className="text-slate-400 text-xs mb-6">
                {downloads.windows.primary.type}
              </p>

              {/* Primary Action Button */}
              <a
                href={downloads.windows.primary.url}
                className="group w-full flex items-center justify-center gap-2.5 rounded-xl bg-primary hover:bg-[#1dff68] text-black px-6 py-4.5 text-sm font-bold transition-all duration-150 cursor-pointer shadow-sm"
              >
                <span className="material-symbols-outlined text-[18px]">
                  download
                </span>
                <span>Download Bintoo for Windows</span>
              </a>

              {/* Size & Info Metadata */}
              <div className="text-[11px] text-slate-500 w-full mb-2">
                <div className="flex flex-wrap justify-center items-center gap-x-3 gap-y-1 mt-4 text-[11px] text-slate-500">
                  <span>Format: {downloads.windows.primary.ext}</span>
                  <span className="h-1 w-1 rounded-full bg-slate-700"></span>
                  <span>Release: v1.0.0</span>
                </div>
              </div>

              {/* Other Downloads (Secondary Option if available) */}
              {downloads.windows.secondary && (
                <div className="w-full mt-4 pt-5 border-t border-slate-800/80 text-left">
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                    Other Downloads
                  </h4>
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center justify-between gap-4 py-2">
                      <div className="min-w-0">
                        <h5 className="text-xs font-semibold text-slate-300 truncate">
                          {downloads.windows.secondary.name}
                        </h5>
                        <p className="text-[10px] text-slate-500 truncate">
                          {downloads.windows.secondary.type}
                        </p>
                      </div>
                      <a
                        href={downloads.windows.secondary.url}
                        className="flex items-center gap-1 text-xs font-bold text-primary hover:text-[#1dff68] transition-colors shrink-0"
                      >
                        Download
                        <span className="material-symbols-outlined text-[14px]">
                          download
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              )}

              {/* Smart Screen Warning note */}
              {downloads.windows.note && (
                <p className="mt-6 text-[11px] text-slate-500 leading-relaxed text-center">
                  Windows showing a warning? Read our{" "}
                  <Link
                    to="/docs/faqs/smart-screen-warning"
                    className="text-primary hover:underline font-semibold"
                  >
                    Smart Screen Guide
                  </Link>{" "}
                  to run safely.
                </p>
              )}
            </div>
          ) : (
            <div className="flex flex-col items-center text-center w-full">
              <h3 className="text-xl font-extrabold text-white mb-2 flex items-center gap-2 justify-center">
                {renderLinuxIcon("ffffff")}
                Linux Installation
              </h3>
              <p className="text-slate-400 text-xs mb-6">
                Run this one-liner installer command in your terminal
              </p>

              {/* Terminal Copy Block */}
              <div className="w-full bg-black/60 border border-slate-800/80 rounded-xl p-4 flex items-center justify-between gap-3 font-mono text-sm text-left select-all">
                <div className="flex items-center gap-2 overflow-x-auto whitespace-nowrap text-slate-300 thin-scrollbar">
                  <span className="text-primary font-bold select-none">$</span>
                  <span>
                    curl -fsSL https://bintoo.xyz/install/bintoo-linux.sh | bash
                  </span>
                </div>
                <button
                  onClick={handleCopy}
                  className="flex items-center justify-center p-2 rounded-lg bg-[#070b09] border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-all cursor-pointer shrink-0"
                  title="Copy to clipboard"
                >
                  <span className="material-symbols-outlined text-[14px]">
                    {copied ? "check" : "content_copy"}
                  </span>
                </button>
              </div>

              {/* Copy success status text */}
              <div className="h-5 mt-2">
                <span
                  className={`text-[11px] text-primary transition-opacity duration-200 ${copied ? "opacity-100" : "opacity-0"}`}
                >
                  Copied command to clipboard!
                </span>
              </div>

              {/* Alternative Manual Downloads section */}
              <div className="w-full mt-4 pt-5 border-t border-slate-800/80 text-left">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                  Manual Downloads
                </h4>
                <div className="flex flex-col gap-3">
                  {/* AppImage Option */}
                  <div className="flex items-center justify-between gap-4 py-2 border-b border-slate-800/40">
                    <div className="min-w-0">
                      <h5 className="text-xs font-semibold text-slate-300 truncate">
                        {downloads.linux.primary.name}
                      </h5>
                      <p className="text-[10px] text-slate-500 truncate">
                        {downloads.linux.primary.type} •{" "}
                        {downloads.linux.primary.size}
                      </p>
                    </div>
                    <a
                      href={downloads.linux.primary.url}
                      className="flex items-center gap-1 text-xs font-bold text-primary hover:text-[#1dff68] transition-colors shrink-0"
                    >
                      Download
                      <span className="material-symbols-outlined text-[14px]">
                        download
                      </span>
                    </a>
                  </div>

                  {/* Tarball Option */}
                  {downloads.linux.secondary && (
                    <div className="flex items-center justify-between gap-4 py-2">
                      <div className="min-w-0">
                        <h5 className="text-xs font-semibold text-slate-300 truncate">
                          {downloads.linux.secondary.name}
                        </h5>
                        <p className="text-[10px] text-slate-500 truncate">
                          {downloads.linux.secondary.type} •{" "}
                          {downloads.linux.secondary.size}
                        </p>
                      </div>
                      <a
                        href={downloads.linux.secondary.url}
                        className="flex items-center gap-1 text-xs font-bold text-primary hover:text-[#1dff68] transition-colors shrink-0"
                      >
                        Download
                        <span className="material-symbols-outlined text-[14px]">
                          download
                        </span>
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
