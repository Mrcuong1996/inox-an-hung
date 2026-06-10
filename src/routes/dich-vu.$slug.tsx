import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, CheckCircle2 } from "lucide-react";

// ❗ đổi @/... -> relative path nếu bạn chưa config alias
import { SiteHeader } from "../components/ui/SiteHeader";
import { SiteFooter } from "../components/ui/SiteFooter";
import { FloatingContacts } from "../components/ui/FloatingContacts";
import { QuoteForm } from "../components/ui/QuoteForm";
import { SERVICES } from "../lib/api/catalog";

export const Route = createFileRoute("/dich-vu/$slug")({
  loader: ({ params }) => {
    const s = SERVICES.find((x) => x.slug === params.slug);
    if (!s) throw notFound();
    return s;
  },

  component: ServiceDetail,

  notFoundComponent: () => (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <div className="container-page py-32 text-center">
        <h1 className="font-display text-3xl">
          Không tìm thấy dịch vụ
        </h1>
        <Link to="/dich-vu" className="mt-6 inline-block text-accent">
          ← Quay lại
        </Link>
      </div>
    </div>
  ),
});

function ServiceDetail() {
  const s = Route.useLoaderData();

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <main>
        {/* Banner */}
        <div className="relative h-[40vh] min-h-[280px] overflow-hidden">
          <img
            src={s.image}
            alt={s.name}
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-black/60" />

          <div className="container-page relative flex h-full flex-col justify-end pb-10">
            <Link
              to="/dich-vu"
              className="inline-flex w-fit items-center gap-1.5 text-sm text-white/80 hover:text-accent"
            >
              <ArrowLeft size={14} /> Tất cả dịch vụ
            </Link>

            <h1 className="mt-3 text-4xl font-bold text-white md:text-5xl">
              {s.name}
            </h1>

            <p className="mt-2 max-w-2xl text-white/85">
              {s.short}
            </p>
          </div>
        </div>

        {/* Content */}
        <section className="py-16">
          <div className="container-page grid gap-10 lg:grid-cols-3">
            {/* LEFT */}
            <div className="lg:col-span-2 space-y-10">
              {/* Process */}
              <div>
                <h2 className="text-2xl font-bold text-primary">
                  Quy trình thực hiện
                </h2>

                <ol className="mt-5 space-y-3">
                  {s.process?.map((step: string, i: number) => (
                    <li
                      key={i}
                      className="flex gap-4 rounded-xl border p-4"
                    >
                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-accent text-white font-bold text-sm">
                        {i + 1}
                      </div>

                      <div className="text-sm font-medium">
                        {step}
                      </div>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Benefits */}
              <div>
                <h2 className="text-2xl font-bold text-primary">
                  Ưu điểm vượt trội
                </h2>

                <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                  {s.benefits?.map((b: string, i: number) => (
                    <li
                      key={i}
                      className="flex gap-2 rounded-xl bg-gray-100 p-4 text-sm"
                    >
                      <CheckCircle2 size={18} /> {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* RIGHT */}
            <aside className="rounded-2xl bg-white p-6 shadow">
              <h3 className="text-lg font-semibold">
                Gửi yêu cầu dịch vụ
              </h3>

              <p className="mt-1 text-sm text-gray-500">
                Phản hồi trong 30 phút
              </p>

              <div className="mt-5">
                <QuoteForm compact />
              </div>
            </aside>
          </div>
        </section>
      </main>

      <SiteFooter />
      <FloatingContacts />
    </div>
  );
}