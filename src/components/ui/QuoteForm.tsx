import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";

export function QuoteForm({ compact = false }: { compact?: boolean }) {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    // TODO: hook this to a server function/email service once Lovable Cloud is enabled.
    setTimeout(() => { setLoading(false); setSent(true); }, 700);
  }

  if (sent) {
    return (
      <div className="rounded-xl border border-accent/30 bg-accent/5 p-6 text-center">
        <CheckCircle2 className="mx-auto text-accent" size={36} />
        <h3 className="mt-3 font-display text-lg font-semibold">Đã gửi yêu cầu!</h3>
        <p className="mt-1 text-sm text-muted-foreground">Bộ phận kinh doanh sẽ liên hệ bạn trong vòng 30 phút.</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className={`grid gap-3 ${compact ? "" : "md:grid-cols-2"}`}>
      <input required name="name" placeholder="Họ và tên *" className="rounded-md border border-input bg-background px-4 py-3 text-sm outline-none focus:border-accent focus:ring-2 focus:ring-accent/20" />
      <input required name="phone" type="tel" placeholder="Số điện thoại *" className="rounded-md border border-input bg-background px-4 py-3 text-sm outline-none focus:border-accent focus:ring-2 focus:ring-accent/20" />
      <input name="email" type="email" placeholder="Email" className={`rounded-md border border-input bg-background px-4 py-3 text-sm outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 ${compact ? "" : "md:col-span-2"}`} />
      <textarea required name="message" rows={4} placeholder="Mô tả yêu cầu gia công (kích thước, số lượng, vật liệu…) *" className={`rounded-md border border-input bg-background px-4 py-3 text-sm outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 ${compact ? "" : "md:col-span-2"}`} />
      <button type="submit" disabled={loading} className={`inline-flex items-center justify-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary-glow disabled:opacity-60 ${compact ? "" : "md:col-span-2"}`}>
        <Send size={16} /> {loading ? "Đang gửi…" : "Gửi yêu cầu báo giá"}
      </button>
    </form>
  );
}
