import { Phone, MessageCircle } from "lucide-react";
import { SITE } from "@/lib/site";

export function FloatingContacts() {
  const items = [
    { href: SITE.phoneHref, label: "Gọi điện", icon: <Phone size={20} />, color: "bg-accent" },
    { href: SITE.zalo, label: "Chat Zalo", icon: <span className="font-bold text-sm">Z</span>, color: "bg-[#0068ff]" },
    { href: SITE.messenger, label: "Messenger", icon: <MessageCircle size={20} />, color: "bg-[#0084ff]" },
    { href: SITE.whatsapp, label: "WhatsApp", icon: <span className="font-bold text-sm">W</span>, color: "bg-[#25d366]" },
  ];
  return (
    <div className="fixed bottom-5 right-4 z-40 flex flex-col gap-2.5">
      {items.map((it) => (
        <a
          key={it.label}
          href={it.href}
          target={it.href.startsWith("http") ? "_blank" : undefined}
          rel="noopener noreferrer"
          aria-label={it.label}
          className={`${it.color} text-white flex h-12 w-12 items-center justify-center rounded-full shadow-elegant transition-transform hover:scale-110`}
        >
          {it.icon}
        </a>
      ))}
    </div>
  );
}
