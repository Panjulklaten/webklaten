import { defaultWaMessage, waLink } from "@/lib/site-config";

export default function WhatsAppFloatingButton() {
  return (
    <a
      href={waLink(defaultWaMessage)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat via WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-(--color-cta) px-4 py-3 font-display text-sm font-semibold text-white shadow-[0_10px_30px_-10px_rgba(217,83,30,0.6)] transition-transform hover:scale-105 active:scale-95"
    >
      <svg
        viewBox="0 0 24 24"
        className="h-5 w-5 shrink-0"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.39 1.26 4.82L2 22l5.4-1.35a9.9 9.9 0 0 0 4.64 1.15h.01c5.46 0 9.9-4.45 9.9-9.9C21.95 6.45 17.5 2 12.04 2Zm0 18.06a8.15 8.15 0 0 1-4.15-1.14l-.3-.18-3.08.77.82-3-.19-.31a8.14 8.14 0 0 1-1.25-4.29c0-4.5 3.66-8.16 8.16-8.16 4.5 0 8.15 3.66 8.15 8.16 0 4.5-3.65 8.15-8.16 8.15Zm4.47-6.11c-.24-.12-1.44-.71-1.66-.79-.22-.08-.39-.12-.55.12-.16.24-.63.79-.78.95-.14.16-.29.18-.53.06-.24-.12-1.02-.38-1.94-1.2-.72-.64-1.2-1.43-1.34-1.67-.14-.24-.02-.37.11-.49.11-.11.24-.29.36-.43.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.55-1.32-.75-1.81-.2-.48-.4-.41-.55-.42-.14-.01-.3-.01-.46-.01-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.7 2.6 4.13 3.64.58.25 1.03.4 1.38.51.58.18 1.11.16 1.53.1.47-.07 1.44-.59 1.64-1.16.2-.57.2-1.06.14-1.16-.06-.1-.22-.16-.46-.28Z" />
      </svg>
      <span className="hidden sm:inline">Chat WhatsApp</span>
    </a>
  );
}
