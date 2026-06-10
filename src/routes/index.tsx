import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ShieldCheck, Zap, Award, Wrench, Phone, Quote, Star, MapPin } from "lucide-react";
import heroImg from "@/assets/hero-workshop.jpg";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { FloatingContacts } from "@/components/FloatingContacts";
import { QuoteForm } from "@/components/QuoteForm";
import { SectionTitle } from "@/components/SectionTitle";
import { PRODUCTS, SERVICES, PROJECTS, TESTIMONIALS } from "@/lib/catalog";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "INOX AN HƯNG — Sản xuất & gia công inox theo yêu cầu" },
      { name: "description", content: "Gia công inox 304/201 theo yêu cầu: cắt laser, chấn gấp, hàn TIG/MIG, đánh bóng. Sản xuất bàn, kệ, tủ, bồn, thiết bị bếp công nghiệp. Báo giá 30 phút." },
      { property: "og:title", content: "INOX AN HƯNG — Sản xuất & gia công inox theo yêu cầu" },
      { property: "og:description", content: "Đối tác tin cậy cho nhà hàng, khách sạn, nhà máy. Hơn 15 năm kinh nghiệm gia công inox chính xác." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <Hero />
        <Highlights />
        <About />
        <ProductsSection />
        <ServicesSection />
        <ProjectsSection />
        <Testimonials />
        <QuoteCta />
        <ContactBlock />
      </main>
      <SiteFooter />
      <FloatingContacts />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <img src={heroImg} alt="Xưởng gia công inox INOX AN HƯNG" className="absolute inset-0 h-full w-full object-cover" width={1920} height={1080} />
      <div className="absolute inset-0 bg-hero-gradient opacity-90" />
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at center, transparent 0%, rgb(0 0 0 / 0.4) 100%)" }} />

      <div className="container-page relative py-24 md:py-36 lg:py-44">
        <div className="max-w-3xl animate-fade-up">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-white/90 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" /> 15+ năm kinh nghiệm gia công inox
          </div>
          <h1 className="mt-6 font-display text-4xl font-bold leading-[1.1] text-white text-balance md:text-6xl lg:text-7xl">
            Gia công inox theo yêu cầu — <span className="text-shimmer">Chính xác · Bền bỉ · Sang trọng</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base text-white/85 md:text-lg leading-relaxed">
            INOX AN HƯNG chuyên cắt laser, chấn gấp, hàn TIG/MIG và sản xuất thiết bị inox 304/201
            cho nhà hàng, khách sạn, nhà máy và công trình dân dụng.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/lien-he" className="inline-flex items-center gap-2 rounded-md bg-accent px-6 py-3.5 text-sm font-semibold text-accent-foreground shadow-glow transition-all hover:scale-[1.02]">
              Yêu cầu báo giá <ArrowRight size={16} />
            </Link>
            <a href={SITE.phoneHref} className="inline-flex items-center gap-2 rounded-md border border-white/30 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/15">
              <Phone size={16} /> {SITE.phone}
            </a>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-6 border-t border-white/15 pt-8 max-w-xl">
            {[
              { k: "1.500+", v: "Công trình" },
              { k: "15", v: "Năm kinh nghiệm" },
              { k: "98%", v: "Hài lòng" },
            ].map((s) => (
              <div key={s.v}>
                <div className="font-display text-2xl font-bold text-white md:text-3xl">{s.k}</div>
                <div className="mt-1 text-xs uppercase tracking-wider text-white/60">{s.v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Highlights() {
  const items = [
    { icon: ShieldCheck, title: "Inox 304/201 chính hãng", desc: "Cam kết vật liệu chuẩn, có chứng chỉ xuất xứ rõ ràng." },
    { icon: Zap, title: "Tiến độ nhanh", desc: "Báo giá trong 30 phút, sản xuất từ 3–7 ngày tuỳ quy mô." },
    { icon: Award, title: "Bảo hành 24 tháng", desc: "Bảo hành dài hạn, hỗ trợ kỹ thuật trọn đời sản phẩm." },
    { icon: Wrench, title: "Theo bản vẽ riêng", desc: "Nhận DWG/DXF/PDF, gia công đúng yêu cầu khách hàng." },
  ];
  return (
    <section className="relative -mt-12 z-10">
      <div className="container-page">
        <div className="grid gap-4 rounded-2xl bg-card p-4 shadow-elegant md:grid-cols-4 md:p-6">
          {items.map((it) => (
            <div key={it.title} className="flex gap-3 rounded-xl p-3 transition-colors hover:bg-secondary/60">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                <it.icon size={20} />
              </div>
              <div>
                <div className="font-display text-sm font-semibold text-primary">{it.title}</div>
                <div className="mt-0.5 text-xs text-muted-foreground leading-relaxed">{it.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-page grid gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <SectionTitle
            eyebrow="Về chúng tôi"
            title="15 năm đồng hành cùng ngành cơ khí inox Việt Nam"
            desc="Thành lập từ 2010, INOX AN HƯNG phát triển từ xưởng cơ khí gia đình thành đơn vị sản xuất – gia công inox quy mô lớn, với hệ thống máy laser fiber, chấn CNC và đội ngũ thợ hàn tay nghề cao."
          />
          <ul className="mt-6 space-y-3">
            {[
              "Hệ thống máy laser fiber 3kW, chấn CNC 160 tấn",
              "Đội ngũ kỹ sư cơ khí và thợ hàn TIG/MIG bậc 5–7",
              "Đối tác sản xuất cho nhiều khách sạn 5 sao, nhà máy thực phẩm",
              "Giao hàng & lắp đặt toàn quốc",
            ].map((t) => (
              <li key={t} className="flex gap-3 text-sm text-foreground/85">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" /> {t}
              </li>
            ))}
          </ul>
          <Link to="/gioi-thieu" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-accent hover:gap-3 transition-all">
            Tìm hiểu thêm về chúng tôi <ArrowRight size={16} />
          </Link>
        </div>
        <div className="relative">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="aspect-[4/5] rounded-2xl bg-steel-gradient shadow-card-soft" />
              <div className="rounded-2xl bg-primary p-6 text-primary-foreground">
                <div className="font-display text-4xl font-bold">15+</div>
                <div className="mt-1 text-sm opacity-80">Năm kinh nghiệm trong ngành inox</div>
              </div>
            </div>
            <div className="space-y-4 pt-10">
              <div className="rounded-2xl border-2 border-accent/30 p-6">
                <Award className="text-accent" size={28} />
                <div className="mt-3 font-display text-lg font-semibold text-primary">ISO 9001:2015</div>
                <div className="text-xs text-muted-foreground">Hệ thống quản lý chất lượng</div>
              </div>
              <div className="aspect-square rounded-2xl bg-hero-gradient shadow-elegant" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProductsSection() {
  return (
    <section className="bg-secondary/40 py-20 md:py-28">
      <div className="container-page">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionTitle eyebrow="Sản phẩm" title="Sản phẩm inox nổi bật" desc="Các sản phẩm inox 304/201 tiêu chuẩn và gia công theo yêu cầu cho mọi ngành nghề." />
          <Link to="/san-pham" className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:gap-3 transition-all">
            Xem tất cả <ArrowRight size={16} />
          </Link>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PRODUCTS.slice(0, 6).map((p) => (
            <Link key={p.slug} to="/san-pham/$slug" params={{ slug: p.slug }} className="group overflow-hidden rounded-2xl bg-card shadow-card-soft transition-all hover:-translate-y-1 hover:shadow-elegant">
              <div className="aspect-[4/3] overflow-hidden bg-steel-gradient">
                <img src={p.image} alt={p.name} loading="lazy" width={800} height={600} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-5">
                <div className="text-xs font-semibold uppercase tracking-wider text-accent">Inox 304</div>
                <h3 className="mt-1.5 font-display text-lg font-semibold text-primary group-hover:text-accent transition-colors">{p.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{p.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-page">
        <SectionTitle eyebrow="Dịch vụ" title="Dịch vụ gia công inox chuyên sâu" desc="Từ ý tưởng đến sản phẩm hoàn thiện — chúng tôi đảm nhận trọn gói." center />
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s) => (
            <Link key={s.slug} to="/dich-vu/$slug" params={{ slug: s.slug }} className="group relative overflow-hidden rounded-2xl shadow-card-soft">
              <img src={s.image} alt={s.name} loading="lazy" width={600} height={800} className="aspect-[3/4] w-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5 text-primary-foreground">
                <h3 className="font-display text-lg font-semibold">{s.name}</h3>
                <p className="mt-1 text-xs opacity-85 line-clamp-2">{s.short}</p>
                <div className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-accent">
                  Chi tiết <ArrowRight size={12} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectsSection() {
  return (
    <section className="bg-primary py-20 md:py-28 text-primary-foreground">
      <div className="container-page">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
              Dự án tiêu biểu
            </div>
            <h2 className="mt-3 font-display text-3xl font-bold md:text-4xl">Hàng nghìn công trình đã thực hiện</h2>
          </div>
          <Link to="/du-an" className="text-sm font-semibold text-accent hover:underline">Xem tất cả →</Link>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {PROJECTS.map((p) => (
            <div key={p.slug} className="group overflow-hidden rounded-2xl bg-white/5 ring-1 ring-white/10">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={p.image} alt={p.name} loading="lazy" width={1200} height={900} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-5">
                <div className="text-xs uppercase tracking-wider text-accent">{p.client}</div>
                <h3 className="mt-1 font-display text-lg font-semibold">{p.name}</h3>
                <p className="mt-2 text-sm opacity-80 line-clamp-2">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-page">
        <SectionTitle eyebrow="Khách hàng nói gì" title="Khách hàng tin tưởng chúng tôi" center />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <div key={t.name} className="rounded-2xl border border-border bg-card p-7 shadow-card-soft">
              <Quote className="text-accent" size={28} />
              <div className="mt-2 flex gap-0.5 text-accent">
                {Array.from({ length: 5 }).map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-foreground/85">"{t.quote}"</p>
              <div className="mt-5 border-t border-border pt-4">
                <div className="font-semibold text-primary">{t.name}</div>
                <div className="text-xs text-muted-foreground">{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function QuoteCta() {
  return (
    <section className="bg-secondary/40 py-20 md:py-28">
      <div className="container-page grid gap-10 lg:grid-cols-2 lg:items-center">
        <div>
          <SectionTitle eyebrow="Báo giá nhanh" title="Nhận báo giá trong 30 phút" desc="Mô tả sơ bộ nhu cầu của bạn, đội ngũ kỹ thuật sẽ liên hệ tư vấn và báo giá chi tiết." />
          <ul className="mt-6 space-y-2 text-sm text-foreground/85">
            <li>✓ Tư vấn miễn phí, không ràng buộc</li>
            <li>✓ Khảo sát tận nơi tại Thanh Hóa và các tỉnh lân cận</li>
            <li>✓ Bản vẽ 3D minh hoạ trước khi sản xuất</li>
          </ul>
        </div>
        <div className="rounded-2xl bg-card p-6 shadow-elegant md:p-8">
          <QuoteForm />
        </div>
      </div>
    </section>
  );
}

function ContactBlock() {
  return (
    <section className="py-20 md:py-24">
      <div className="container-page">
        <SectionTitle eyebrow="Liên hệ" title="Ghé thăm xưởng của chúng tôi" center />
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          <div className="rounded-2xl bg-primary p-7 text-primary-foreground">
            <MapPin className="text-accent" />
            <h3 className="mt-3 font-display text-lg font-semibold">Địa chỉ xưởng</h3>
            <p className="mt-1 text-sm opacity-85">{SITE.address}</p>
            <a href={SITE.phoneHref} className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-accent">
              <Phone size={14} /> {SITE.phone}
            </a>
          </div>
          <div className="lg:col-span-2 overflow-hidden rounded-2xl border border-border shadow-card-soft">
            <iframe
              title="Bản đồ INOX AN HƯNG"
              src="https://www.google.com/maps?q=19.8216857,105.7604043&output=embed"
              className="h-72 w-full md:h-full"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
