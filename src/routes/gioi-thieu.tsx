import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/ui/SiteHeader";
import { SiteFooter } from "@/components/ui/SiteFooter";
import { FloatingContacts } from "@/components/ui/FloatingContacts";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Factory, Users, Wrench, Award, Target, History } from "lucide-react";

export const Route = createFileRoute("/gioi-thieu")({
  head: () => ({
    meta: [
      { title: "Giới thiệu — INOX AN HƯNG" },
      { name: "description", content: "Hơn 15 năm kinh nghiệm sản xuất và gia công inox 304/201. Năng lực sản xuất quy mô lớn với hệ thống laser fiber, chấn CNC, đội ngũ thợ hàn bậc cao." },
      { property: "og:title", content: "Giới thiệu — INOX AN HƯNG" },
      { property: "og:description", content: "Lịch sử, năng lực sản xuất và cam kết chất lượng của INOX AN HƯNG." },
      { property: "og:url", content: "/gioi-thieu" },
    ],
    links: [{ rel: "canonical", href: "/gioi-thieu" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <section className="bg-hero-gradient py-20 text-primary-foreground md:py-28">
          <div className="container-page">
            <div className="text-xs uppercase tracking-[0.2em] text-accent">Giới thiệu công ty</div>
            <h1 className="mt-3 font-display text-4xl font-bold md:text-5xl">INOX AN HƯNG — 15 năm dẫn đầu</h1>
            <p className="mt-4 max-w-2xl text-white/85">Từ một xưởng cơ khí nhỏ thành đơn vị sản xuất – gia công inox hàng đầu khu vực phía Nam.</p>
          </div>
        </section>

        <section className="py-20">
          <div className="container-page grid gap-12 lg:grid-cols-2">
            <div>
              <SectionTitle eyebrow="Lịch sử" title="Hành trình hình thành & phát triển" />
              <div className="mt-8 space-y-6">
                {[
                  { year: "2010", title: "Khởi nghiệp", desc: "Thành lập xưởng cơ khí inox đầu tiên tại đông thọ, thành phố Thanh Hóa với 5 thợ lành nghề." },
                  { year: "2015", title: "Mở rộng quy mô", desc: "Đầu tư máy chấn CNC, mở rộng nhà xưởng lên 1.500 m², phục vụ khách hàng nhà hàng – khách sạn." },
                  { year: "2019", title: "Công nghệ laser", desc: "Nhập khẩu máy laser fiber 3kW, nâng năng lực gia công chi tiết theo bản vẽ." },
                  { year: "2024", title: "Vươn ra toàn quốc", desc: "Hoàn tất hơn 1.500 công trình, mở rộng cung ứng cho nhà máy thực phẩm và công trình dân dụng cao cấp." },
                ].map((t) => (
                  <div key={t.year} className="flex gap-5">
                    <div className="shrink-0 w-20 font-display text-2xl font-bold text-accent">{t.year}</div>
                    <div className="border-l-2 border-accent pl-5">
                      <div className="font-display font-semibold text-primary">{t.title}</div>
                      <div className="mt-1 text-sm text-muted-foreground">{t.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-5">
              {[
                { icon: Factory, title: "Năng lực sản xuất", desc: "Nhà xưởng 1.500 m², công suất 80–120 sản phẩm/tuần." },
                { icon: Wrench, title: "Hệ thống máy móc", desc: "Laser fiber 3kW, chấn CNC 160 tấn, máy cắt plasma, máy đánh bóng tự động." },
                { icon: Users, title: "Đội ngũ", desc: "30+ kỹ sư & thợ hàn bậc 5–7, đào tạo liên tục về kỹ thuật mới." },
                { icon: Award, title: "Chứng nhận", desc: "ISO 9001:2015 — Hệ thống quản lý chất lượng đạt chuẩn quốc tế." },
                { icon: Target, title: "Cam kết", desc: "Đúng vật liệu, đúng tiến độ, bảo hành 24 tháng, hỗ trợ kỹ thuật trọn đời." },
                { icon: History, title: "Khách hàng", desc: "Hơn 600 doanh nghiệp tin chọn: nhà hàng, khách sạn, nhà máy, công trình." },
              ].map((c) => (
                <div key={c.title} className="flex gap-4 rounded-xl border border-border bg-card p-5 shadow-card-soft">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                    <c.icon size={22} />
                  </div>
                  <div>
                    <div className="font-display font-semibold text-primary">{c.title}</div>
                    <div className="mt-1 text-sm text-muted-foreground">{c.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
      <FloatingContacts />
    </div>
  );
}
