import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { createRootRouteWithContext, useRouter, Link, Outlet, HeadContent, Scripts, createFileRoute, lazyRouteComponent, notFound, createRouter } from "@tanstack/react-router";
import { jsxs, jsx } from "react/jsx-runtime";
import { z } from "zod";
const appCss = "/assets/styles-DkcJwqdc.css";
function NotFoundComponent() {
  return /* @__PURE__ */ jsxs("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: [
    " ",
    /* @__PURE__ */ jsxs("div", { className: "max-w-md text-center", children: [
      " ",
      /* @__PURE__ */ jsx("h1", { className: "text-7xl font-bold text-foreground", children: "404" }),
      " ",
      /* @__PURE__ */ jsx("h2", { className: "mt-4 text-xl font-semibold text-foreground", children: "Page not found" }),
      " ",
      /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist or has been moved. " }),
      " ",
      /* @__PURE__ */ jsxs("div", { className: "mt-6", children: [
        " ",
        /* @__PURE__ */ jsx(
          Link,
          {
            to: "/",
            className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
            children: "Go home "
          }
        ),
        " "
      ] }),
      " "
    ] }),
    " "
  ] });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router2 = useRouter();
  return /* @__PURE__ */ jsxs("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: [
    " ",
    /* @__PURE__ */ jsxs("div", { className: "max-w-md text-center", children: [
      " ",
      /* @__PURE__ */ jsx("h1", { className: "text-xl font-semibold tracking-tight text-foreground", children: "This page didn't load " }),
      " ",
      /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Something went wrong on our end. You can try refreshing or head back home. " }),
      " ",
      /* @__PURE__ */ jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => {
              router2.invalidate();
              reset();
            },
            className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
            children: "Try again "
          }
        ),
        " ",
        /* @__PURE__ */ jsx(
          "a",
          {
            href: "/",
            className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
            children: "Go home "
          }
        ),
        " "
      ] }),
      " "
    ] }),
    " "
  ] });
}
const Route$a = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "INOX AN HƯNG — Sản xuất & gia công inox theo yêu cầu" },
      { name: "description", content: "Chuyên sản xuất, gia công inox 304/201 theo yêu cầu: bàn, kệ, tủ, bồn, thiết bị bếp công nghiệp." }
    ],
    links: [
      { rel: "stylesheet", href: appCss }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxs("html", { lang: "vi", children: [
    " ",
    /* @__PURE__ */ jsxs("head", { children: [
      " ",
      /* @__PURE__ */ jsx(HeadContent, {}),
      " "
    ] }),
    " ",
    /* @__PURE__ */ jsxs("body", { children: [
      children,
      " ",
      /* @__PURE__ */ jsx(Scripts, {}),
      " "
    ] }),
    " "
  ] });
}
function RootComponent() {
  const { queryClient } = Route$a.useRouteContext();
  return /* @__PURE__ */ jsxs(QueryClientProvider, { client: queryClient, children: [
    " ",
    /* @__PURE__ */ jsx(Outlet, {}),
    " "
  ] });
}
const $$splitComponentImporter$8 = () => import("./tin-tuc-bWt8Th_q.js");
const Route$9 = createFileRoute("/tin-tuc")({
  head: () => ({
    meta: [{
      title: "Tin tức & kiến thức inox — INOX AN HƯNG"
    }, {
      name: "description",
      content: "Cập nhật kiến thức về inox 304/201, kinh nghiệm lựa chọn, xu hướng ngành cơ khí và gia công inox."
    }, {
      property: "og:title",
      content: "Tin tức inox"
    }, {
      property: "og:url",
      content: "/tin-tuc"
    }],
    links: [{
      rel: "canonical",
      href: "/tin-tuc"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
const tableImg = "/assets/product-table-xJkoNqON.jpg";
const shelfImg = "/assets/product-shelf-DXmE0wmS.jpg";
const cabinetImg = "/assets/product-cabinet-BGGLq9eb.jpg";
const tankImg = "/assets/product-tank-Dp_bFb6M.jpg";
const kitchenImg = "/assets/product-kitchen-BjwjGVb9.jpg";
const laserImg = "/assets/service-laser-DlUbP3Qs.jpg";
const weldingImg = "/assets/service-welding-9N-eztye.jpg";
const bendingImg = "/assets/service-bending-DUFjastK.jpg";
const polishImg = "/assets/service-polish-Dun2jTZE.jpg";
const projKitchen = "/assets/project-kitchen-CDhSDpTc.jpg";
const projRailing = "/assets/project-railing-clFhvWs8.jpg";
const projIndustrial = "/assets/project-industrial-DDpAlYPW.jpg";
const CATEGORIES = [
  { slug: "ban-inox", name: "Bàn inox" },
  { slug: "ke-inox", name: "Kệ inox" },
  { slug: "tu-inox", name: "Tủ inox" },
  { slug: "bon-inox", name: "Bồn inox" },
  { slug: "thiet-bi-bep", name: "Thiết bị bếp công nghiệp" },
  { slug: "gia-cong-ban-ve", name: "Gia công chi tiết theo bản vẽ" },
  { slug: "khac", name: "Sản phẩm inox khác" }
];
const PRODUCTS = [
  {
    slug: "ban-inox-304-2-tang",
    name: "Bàn inox 304 hai tầng",
    category: "ban-inox",
    image: tableImg,
    desc: "Bàn inox 304 hai tầng dùng cho bếp công nghiệp, nhà hàng, khách sạn. Mặt bàn dày 1.2mm, khung chân D38, chịu tải cao, kháng ăn mòn vượt trội.",
    specs: [
      { label: "Chất liệu", value: "Inox SUS 304" },
      { label: "Độ dày mặt", value: "1.0 – 1.5 mm" },
      { label: "Kích thước", value: "Tùy chọn / theo yêu cầu" },
      { label: "Tải trọng", value: "≥ 150 kg" },
      { label: "Bảo hành", value: "24 tháng" }
    ]
  },
  {
    slug: "ke-inox-5-tang",
    name: "Kệ inox 5 tầng đa năng",
    category: "ke-inox",
    image: shelfImg,
    desc: "Kệ inox 5 tầng dùng để chứa dụng cụ, thực phẩm khô, vật tư trong kho bếp. Thiết kế tháo lắp linh hoạt, dễ vệ sinh.",
    specs: [
      { label: "Chất liệu", value: "Inox SUS 304 / 201" },
      { label: "Số tầng", value: "4 – 6 tầng" },
      { label: "Tải mỗi tầng", value: "≥ 60 kg" },
      { label: "Bảo hành", value: "24 tháng" }
    ]
  },
  {
    slug: "tu-inox-2-canh",
    name: "Tủ inox 2 cánh có khoá",
    category: "tu-inox",
    image: cabinetImg,
    desc: "Tủ inox 2 cánh, mặt kính quan sát, bản lề chắc chắn. Sử dụng cho bếp, phòng lab, kho dụng cụ y tế.",
    specs: [
      { label: "Chất liệu", value: "Inox SUS 304" },
      { label: "Kích thước", value: "Theo yêu cầu" },
      { label: "Phụ kiện", value: "Bản lề Inox, khoá an toàn" },
      { label: "Bảo hành", value: "24 tháng" }
    ]
  },
  {
    slug: "bon-chua-inox-1000l",
    name: "Bồn chứa inox 1.000L",
    category: "bon-inox",
    image: tankImg,
    desc: "Bồn chứa nước/chất lỏng dung tích 500 – 5.000L, đường hàn TIG kín tuyệt đối, đạt chuẩn vệ sinh thực phẩm.",
    specs: [
      { label: "Chất liệu", value: "Inox SUS 304" },
      { label: "Dung tích", value: "500 – 5.000 L" },
      { label: "Độ dày", value: "1.5 – 3.0 mm" },
      { label: "Tiêu chuẩn", value: "Vệ sinh thực phẩm" }
    ]
  },
  {
    slug: "bep-au-6-hong",
    name: "Bếp Âu 6 họng có lò nướng",
    category: "thiet-bi-bep",
    image: kitchenImg,
    desc: "Bếp Âu công nghiệp 6 họng, kèm lò nướng dưới, vỏ inox 304, công suất mạnh, phù hợp nhà hàng – khách sạn lớn.",
    specs: [
      { label: "Số họng", value: "6 họng + 1 lò" },
      { label: "Chất liệu vỏ", value: "Inox SUS 304" },
      { label: "Nhiên liệu", value: "Gas LPG / NG" },
      { label: "Bảo hành", value: "12 tháng" }
    ]
  },
  {
    slug: "gia-cong-chi-tiet-laser",
    name: "Gia công chi tiết inox cắt laser",
    category: "gia-cong-ban-ve",
    image: laserImg,
    desc: "Nhận gia công chi tiết inox theo bản vẽ CAD/DXF. Độ chính xác ±0.1mm, cắt được tấm dày tới 12mm.",
    specs: [
      { label: "Công nghệ", value: "Laser Fiber 3kW" },
      { label: "Độ dày", value: "0.5 – 12 mm" },
      { label: "Độ chính xác", value: "±0.1 mm" },
      { label: "Định dạng file", value: "DWG / DXF / PDF" }
    ]
  }
];
const SERVICES = [
  {
    slug: "cat-laser-inox",
    name: "Cắt laser inox",
    image: laserImg,
    short: "Cắt laser fiber CNC cho tấm inox 0.5 – 12mm, đường cắt sắc nét, không biến dạng.",
    process: ["Tiếp nhận bản vẽ", "Lập trình CNC", "Cắt laser fiber", "Kiểm tra kích thước", "Bàn giao"],
    benefits: ["Độ chính xác ±0.1mm", "Không ba via", "Tiết kiệm vật liệu", "Tốc độ nhanh"]
  },
  {
    slug: "chan-gap-inox",
    name: "Chấn gấp inox",
    image: bendingImg,
    short: "Máy chấn CNC 160 tấn, chiều dài chấn tới 3.2m, gấp được các góc khó.",
    process: ["Tính toán khai triển", "Lập trình máy chấn", "Chấn theo góc thiết kế", "Kiểm tra"],
    benefits: ["Lực chấn lớn", "Góc gấp chính xác", "Bề mặt không trầy xước"]
  },
  {
    slug: "han-inox-tig-mig",
    name: "Hàn inox TIG / MIG",
    image: weldingImg,
    short: "Đội ngũ thợ hàn TIG/MIG tay nghề cao, đường hàn đẹp, kín tuyệt đối.",
    process: ["Vệ sinh bề mặt", "Định vị – ghép phôi", "Hàn TIG/MIG", "Đánh bóng mối hàn"],
    benefits: ["Mối hàn đạt chuẩn", "Không rỗ khí", "Thẩm mỹ cao"]
  },
  {
    slug: "danh-bong-inox",
    name: "Đánh bóng inox",
    image: polishImg,
    short: "Đánh bóng gương, xước hairline, satin theo yêu cầu khách hàng.",
    process: ["Xử lý bề mặt", "Đánh thô", "Đánh tinh", "Hoàn thiện gương / xước"],
    benefits: ["Bề mặt sáng gương", "Không lộ vết hàn", "Tăng tuổi thọ"]
  }
];
const PROJECTS = [
  {
    slug: "bep-cong-nghiep-nha-hang-5sao",
    name: "Bếp công nghiệp khách sạn 5 sao",
    client: "Tập đoàn khách sạn Sài Gòn",
    image: projKitchen,
    desc: "Thi công trọn gói hệ thống bếp công nghiệp inox 304 cho khách sạn 5 sao tại Thanh Hóa: bàn sơ chế, hệ hood, bếp Âu/Á, kệ chén dĩa."
  },
  {
    slug: "tay-vin-cau-thang-toa-nha",
    name: "Tay vịn cầu thang & lan can inox",
    client: "Tòa nhà văn phòng Q.1",
    image: projRailing,
    desc: "Thiết kế và lắp đặt hệ tay vịn inox 304 cầu thang trung tâm + lan can kính dày 12mm cho tòa nhà văn phòng cao cấp."
  },
  {
    slug: "he-bon-chua-cong-nghiep",
    name: "Hệ bồn chứa & đường ống inox",
    client: "Nhà máy thực phẩm Đồng Nai",
    image: projIndustrial,
    desc: "Chế tạo và lắp đặt hệ bồn chứa inox 304, đường ống công nghệ đạt chuẩn vệ sinh an toàn thực phẩm cho nhà máy chế biến."
  }
];
const TESTIMONIALS = [
  {
    name: "Anh Nguyễn Văn Hùng",
    role: "Chủ nhà hàng Phố Cổ",
    quote: "AN HƯNG làm bàn bếp inox 304 cho nhà hàng tôi, đường hàn cực đẹp, giao đúng hẹn. Sau 3 năm vẫn sáng bóng như mới."
  },
  {
    name: "Chị Lê Thị Mai",
    role: "Quản lý dự án – Công ty XD ABC",
    quote: "Đặt hàng gia công lan can inox cho 3 dự án liên tiếp. Bản vẽ phức tạp nhưng đội kỹ thuật tư vấn tận tâm, thi công đúng tiến độ."
  },
  {
    name: "Anh Trần Quốc Bảo",
    role: "Giám đốc nhà máy thực phẩm",
    quote: "Hệ bồn chứa inox đạt chuẩn vệ sinh, đường hàn TIG kín tuyệt đối. Rất chuyên nghiệp từ khâu khảo sát đến nghiệm thu."
  }
];
const NEWS = [
  {
    slug: "cach-phan-biet-inox-304-201",
    title: "Cách phân biệt inox 304 và inox 201 chuẩn xác nhất",
    excerpt: "Inox 304 và 201 khác biệt về thành phần Niken, khả năng kháng ăn mòn và giá thành. Cùng tìm hiểu 5 cách phân biệt đơn giản.",
    date: "2025-05-12"
  },
  {
    slug: "kinh-nghiem-chon-ban-inox-bep",
    title: "Kinh nghiệm chọn bàn inox cho bếp nhà hàng",
    excerpt: "Tiêu chí lựa chọn bàn inox cho bếp công nghiệp: chất liệu, độ dày, kết cấu chân, tải trọng và phụ kiện đi kèm.",
    date: "2025-04-28"
  },
  {
    slug: "xu-huong-gia-cong-inox-2025",
    title: "Xu hướng gia công inox CNC 2025",
    excerpt: "Cắt laser fiber, robot hàn và đánh bóng tự động đang định hình lại ngành gia công inox Việt Nam.",
    date: "2025-04-10"
  }
];
const BASE_URL = "";
const Route$8 = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const paths = [
          "/",
          "/gioi-thieu",
          "/san-pham",
          "/dich-vu",
          "/du-an",
          "/tin-tuc",
          "/lien-he",
          ...PRODUCTS.map((p) => `/san-pham/${p.slug}`),
          ...SERVICES.map((s) => `/dich-vu/${s.slug}`)
        ];
        const urls = paths.map((p) => `  <url><loc>${BASE_URL}${p}</loc><changefreq>weekly</changefreq></url>`).join("\n");
        const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;
        return new Response(xml, { headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" } });
      }
    }
  }
});
const $$splitComponentImporter$7 = () => import("./lien-he-De3z4AW7.js");
const Route$7 = createFileRoute("/lien-he")({
  head: () => ({
    meta: [{
      title: "Liên hệ — INOX AN HƯNG"
    }, {
      name: "description",
      content: "Liên hệ INOX AN HƯNG: hotline, Zalo, email, địa chỉ xưởng tại Thanh Hóa. Yêu cầu báo giá nhanh trong 30 phút."
    }, {
      property: "og:title",
      content: "Liên hệ — INOX AN HƯNG"
    }, {
      property: "og:url",
      content: "/lien-he"
    }],
    links: [{
      rel: "canonical",
      href: "/lien-he"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
const $$splitComponentImporter$6 = () => import("./gioi-thieu-DPbgTsAk.js");
const Route$6 = createFileRoute("/gioi-thieu")({
  head: () => ({
    meta: [{
      title: "Giới thiệu — INOX AN HƯNG"
    }, {
      name: "description",
      content: "Hơn 15 năm kinh nghiệm sản xuất và gia công inox 304/201. Năng lực sản xuất quy mô lớn với hệ thống laser fiber, chấn CNC, đội ngũ thợ hàn bậc cao."
    }, {
      property: "og:title",
      content: "Giới thiệu — INOX AN HƯNG"
    }, {
      property: "og:description",
      content: "Lịch sử, năng lực sản xuất và cam kết chất lượng của INOX AN HƯNG."
    }, {
      property: "og:url",
      content: "/gioi-thieu"
    }],
    links: [{
      rel: "canonical",
      href: "/gioi-thieu"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
const $$splitComponentImporter$5 = () => import("./du-an-CD83q4BL.js");
const Route$5 = createFileRoute("/du-an")({
  head: () => ({
    meta: [{
      title: "Dự án đã thực hiện — INOX AN HƯNG"
    }, {
      name: "description",
      content: "Thư viện công trình inox đã thực hiện: bếp công nghiệp khách sạn 5 sao, lan can inox tòa nhà, hệ bồn chứa nhà máy thực phẩm."
    }, {
      property: "og:title",
      content: "Dự án tiêu biểu — INOX AN HƯNG"
    }, {
      property: "og:url",
      content: "/du-an"
    }],
    links: [{
      rel: "canonical",
      href: "/du-an"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const $$splitComponentImporter$4 = () => import("./index-CtqhVsEW.js");
const Route$4 = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "INOX AN HƯNG — Sản xuất & gia công inox theo yêu cầu"
    }, {
      name: "description",
      content: "Gia công inox 304/201 theo yêu cầu: cắt laser, chấn gấp, hàn TIG/MIG, đánh bóng. Sản xuất bàn, kệ, tủ, bồn, thiết bị bếp công nghiệp. Báo giá 30 phút."
    }, {
      property: "og:title",
      content: "INOX AN HƯNG — Sản xuất & gia công inox theo yêu cầu"
    }, {
      property: "og:description",
      content: "Đối tác tin cậy cho nhà hàng, khách sạn, nhà máy. Hơn 15 năm kinh nghiệm gia công inox chính xác."
    }, {
      property: "og:url",
      content: "/"
    }],
    links: [{
      rel: "canonical",
      href: "/"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./san-pham.index-CsWANFJp.js");
const search = z.object({
  cat: z.string().optional(),
  q: z.string().optional()
});
const Route$3 = createFileRoute("/san-pham/")({
  validateSearch: search,
  head: () => ({
    meta: [{
      title: "Sản phẩm inox — INOX AN HƯNG"
    }, {
      name: "description",
      content: "Bàn inox, kệ inox, tủ inox, bồn chứa, thiết bị bếp công nghiệp và gia công chi tiết inox theo bản vẽ. Inox 304/201 chính hãng, bảo hành 24 tháng."
    }, {
      property: "og:title",
      content: "Sản phẩm inox — INOX AN HƯNG"
    }, {
      property: "og:description",
      content: "Đầy đủ danh mục sản phẩm inox cho nhà hàng, bếp công nghiệp và công trình."
    }, {
      property: "og:url",
      content: "/san-pham"
    }],
    links: [{
      rel: "canonical",
      href: "/san-pham"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./dich-vu.index-Db9rkrea.js");
const Route$2 = createFileRoute("/dich-vu/")({
  head: () => ({
    meta: [{
      title: "Dịch vụ gia công inox — INOX AN HƯNG"
    }, {
      name: "description",
      content: "Cắt laser fiber, chấn gấp CNC, hàn TIG/MIG, đánh bóng inox chuyên nghiệp. Gia công inox theo bản vẽ chính xác ±0.1mm."
    }, {
      property: "og:title",
      content: "Dịch vụ gia công inox — INOX AN HƯNG"
    }, {
      property: "og:url",
      content: "/dich-vu"
    }],
    links: [{
      rel: "canonical",
      href: "/dich-vu"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./san-pham._slug-BFeMvOoR.js");
const $$splitNotFoundComponentImporter$1 = () => import("./san-pham._slug-Bgk19mRr.js");
const Route$1 = createFileRoute("/san-pham/$slug")({
  loader: ({
    params
  }) => {
    const p = PRODUCTS.find((x) => x.slug === params.slug);
    if (!p) throw notFound();
    return p;
  },
  head: ({
    loaderData
  }) => ({
    meta: loaderData ? [{
      title: `${loaderData.name} — INOX AN HƯNG`
    }, {
      name: "description",
      content: loaderData.desc.slice(0, 155)
    }, {
      property: "og:title",
      content: loaderData.name
    }, {
      property: "og:description",
      content: loaderData.desc.slice(0, 155)
    }, {
      property: "og:image",
      content: loaderData.image
    }, {
      property: "og:url",
      content: `/san-pham/${loaderData.slug}`
    }, {
      property: "og:type",
      content: "product"
    }] : [],
    links: loaderData ? [{
      rel: "canonical",
      href: `/san-pham/${loaderData.slug}`
    }] : []
  }),
  notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter$1, "notFoundComponent"),
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitNotFoundComponentImporter = () => import("./dich-vu._slug-B_HmUgeQ.js");
const $$splitComponentImporter = () => import("./dich-vu._slug-D7ug4Sus.js");
const Route = createFileRoute("/dich-vu/$slug")({
  loader: ({
    params
  }) => {
    const s = SERVICES.find((x) => x.slug === params.slug);
    if (!s) throw notFound();
    return s;
  },
  component: lazyRouteComponent($$splitComponentImporter, "component"),
  notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter, "notFoundComponent")
});
const TinTucRoute = Route$9.update({
  id: "/tin-tuc",
  path: "/tin-tuc",
  getParentRoute: () => Route$a
});
const SitemapDotxmlRoute = Route$8.update({
  id: "/sitemap.xml",
  path: "/sitemap.xml",
  getParentRoute: () => Route$a
});
const LienHeRoute = Route$7.update({
  id: "/lien-he",
  path: "/lien-he",
  getParentRoute: () => Route$a
});
const GioiThieuRoute = Route$6.update({
  id: "/gioi-thieu",
  path: "/gioi-thieu",
  getParentRoute: () => Route$a
});
const DuAnRoute = Route$5.update({
  id: "/du-an",
  path: "/du-an",
  getParentRoute: () => Route$a
});
const IndexRoute = Route$4.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$a
});
const SanPhamIndexRoute = Route$3.update({
  id: "/san-pham/",
  path: "/san-pham/",
  getParentRoute: () => Route$a
});
const DichVuIndexRoute = Route$2.update({
  id: "/dich-vu/",
  path: "/dich-vu/",
  getParentRoute: () => Route$a
});
const SanPhamSlugRoute = Route$1.update({
  id: "/san-pham/$slug",
  path: "/san-pham/$slug",
  getParentRoute: () => Route$a
});
const DichVuSlugRoute = Route.update({
  id: "/dich-vu/$slug",
  path: "/dich-vu/$slug",
  getParentRoute: () => Route$a
});
const rootRouteChildren = {
  IndexRoute,
  DuAnRoute,
  GioiThieuRoute,
  LienHeRoute,
  SitemapDotxmlRoute,
  TinTucRoute,
  DichVuSlugRoute,
  SanPhamSlugRoute,
  DichVuIndexRoute,
  SanPhamIndexRoute
};
const routeTree = Route$a._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router2 = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  CATEGORIES as C,
  NEWS as N,
  PROJECTS as P,
  Route$3 as R,
  SERVICES as S,
  TESTIMONIALS as T,
  PRODUCTS as a,
  Route$1 as b,
  Route as c,
  router as r
};
