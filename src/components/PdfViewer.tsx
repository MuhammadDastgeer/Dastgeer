import React, { useEffect, useRef, useState } from "react";
import * as pdfjsLib from "pdfjs-dist";
import pdfWorkerUrl from "pdfjs-dist/build/pdf.worker.min.mjs?url";
import { Loader2, ZoomIn, ZoomOut, FileText, ExternalLink } from "lucide-react";

pdfjsLib.GlobalWorkerOptions.workerSrc = pdfWorkerUrl;

interface PdfViewerProps {
  url: string;
  title: string;
}

export const PdfViewer: React.FC<PdfViewerProps> = ({ url, title }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [numPages, setNumPages] = useState<number>(0);
  const [scale, setScale] = useState<number>(1.35);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    let pdfDoc: pdfjsLib.PDFDocumentProxy | null = null;

    const renderPdf = async () => {
      setLoading(true);
      setError(null);

      if (!url) {
        setError("No PDF URL provided.");
        setLoading(false);
        return;
      }

      try {
        const resolvedUrl = new URL(url, window.location.href).href;
        const loadingTask = pdfjsLib.getDocument({ url: resolvedUrl });
        pdfDoc = await loadingTask.promise;
        if (cancelled) return;

        setNumPages(pdfDoc.numPages);

        const container = containerRef.current;
        if (!container) return;
        container.innerHTML = "";

        const dpr = Math.min(window.devicePixelRatio || 1, 2);

        for (let pageNum = 1; pageNum <= pdfDoc.numPages; pageNum++) {
          if (cancelled) return;
          const page = await pdfDoc.getPage(pageNum);
          if (cancelled) return;

          const viewport = page.getViewport({ scale });
          const canvas = document.createElement("canvas");
          const context = canvas.getContext("2d");

          if (!context) continue;

          canvas.width = Math.floor(viewport.width * dpr);
          canvas.height = Math.floor(viewport.height * dpr);
          canvas.style.width = `${Math.floor(viewport.width)}px`;
          canvas.style.maxWidth = "100%";
          canvas.style.height = "auto";
          canvas.className =
            "rounded-xl shadow-2xl border border-white/10 bg-white mx-auto block";

          context.setTransform(dpr, 0, 0, dpr, 0, 0);

          const renderContext = {
            canvasContext: context,
            viewport,
            canvas,
          };

          await page.render(renderContext).promise;
          if (!cancelled && containerRef.current) {
            containerRef.current.appendChild(canvas);
          }
        }

        if (!cancelled) {
          setLoading(false);
        }
      } catch (err) {
        if (!cancelled) {
          console.error("PDF render error:", err);
          setError("Could not render PDF inline in this browser.");
          setLoading(false);
        }
      }
    };

    renderPdf();

    return () => {
      cancelled = true;
      if (pdfDoc) {
        pdfDoc.destroy().catch(() => {});
      }
    };
  }, [url, scale]);

  return (
    <div className="w-full flex flex-col items-center">
      {/* Controls bar */}
      <div className="w-full flex flex-wrap items-center justify-between gap-2 mb-3 px-3 py-2 rounded-xl bg-white/[0.04] border border-white/10 text-xs text-[#94A3B8]">
        <div className="flex items-center gap-2">
          <FileText size={14} className="text-[#00F2FE]" />
          <span className="font-medium text-white">PDF Document</span>
          {numPages > 0 && (
            <span className="font-mono text-[11px] bg-white/10 px-2 py-0.5 rounded-full text-white/80">
              {numPages} {numPages === 1 ? "Page" : "Pages"}
            </span>
          )}
        </div>

        <div className="flex items-center gap-1.5">
          <button
            type="button"
            onClick={() => setScale((s) => Math.max(0.75, Number((s - 0.2).toFixed(2))))}
            className="p-1.5 rounded-lg bg-white/[0.05] hover:bg-white/10 text-white transition-colors cursor-pointer"
            title="Zoom Out"
          >
            <ZoomOut size={13} />
          </button>
          <span className="font-mono text-[11px] min-w-[46px] text-center text-white/80">
            {Math.round((scale / 1.35) * 100)}%
          </span>
          <button
            type="button"
            onClick={() => setScale((s) => Math.min(2.4, Number((s + 0.2).toFixed(2))))}
            className="p-1.5 rounded-lg bg-white/[0.05] hover:bg-white/10 text-white transition-colors cursor-pointer"
            title="Zoom In"
          >
            <ZoomIn size={13} />
          </button>
        </div>
      </div>

      {/* Loading state */}
      {loading && (
        <div className="flex flex-col items-center justify-center py-16 text-[#94A3B8] gap-3">
          <Loader2 size={28} className="animate-spin text-[#00F2FE]" />
          <span className="text-xs font-medium">Rendering PDF certificate...</span>
        </div>
      )}

      {/* Error fallback */}
      {error && (
        <div className="w-full flex flex-col items-center justify-center py-10 gap-4">
          <p className="text-xs text-rose-300">{error}</p>
          <div className="w-full h-[55vh] rounded-xl overflow-hidden border border-white/10 bg-[#1e293b]">
            <iframe
              src={url}
              title={title}
              className="w-full h-full border-0"
            />
          </div>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gradient text-xs py-2 px-4 rounded-lg inline-flex items-center gap-1.5"
          >
            <ExternalLink size={13} />
            <span>Open PDF in New Tab</span>
          </a>
        </div>
      )}

      {/* Rendered PDF pages */}
      <div
        ref={containerRef}
        className={`w-full space-y-4 overflow-x-auto ${loading || error ? "hidden" : "block"}`}
        aria-label={title}
      />
    </div>
  );
};

export default PdfViewer;
