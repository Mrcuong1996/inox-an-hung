import tableImg from "@/assets/product-table.jpg";
import shelfImg from "@/assets/product-shelf.jpg";
import cabinetImg from "@/assets/product-cabinet.jpg";
import tankImg from "@/assets/product-tank.jpg";
import kitchenImg from "@/assets/product-kitchen.jpg";
import laserImg from "@/assets/service-laser.jpg";
import weldingImg from "@/assets/service-welding.jpg";
import bendingImg from "@/assets/service-bending.jpg";
import polishImg from "@/assets/service-polish.jpg";
import projKitchen from "@/assets/project-kitchen.jpg";
import projRailing from "@/assets/project-railing.jpg";
import projIndustrial from "@/assets/project-industrial.jpg";

export const CATEGORIES = [
  { slug: "ban-inox", name: "Bàn inox" },
  { slug: "ke-inox", name: "Kệ inox" },
  { slug: "tu-inox", name: "Tủ inox" },
  { slug: "bon-inox", name: "Bồn inox" },
  { slug: "thiet-bi-bep", name: "Thiết bị bếp công nghiệp" },
  { slug: "gia-cong-ban-ve", name: "Gia công chi tiết theo bản vẽ" },
  { slug: "khac", name: "Sản phẩm inox khác" },
] as const;

export type Product = {
  slug: string;
  name: string;
  category: string;
  image: string;
  desc: string;
  specs: { label: string; value: string }[];
};

export const PRODUCTS: Product[] = [
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
      { label: "Bảo hành", value: "24 tháng" },
    ],
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
      { label: "Bảo hành", value: "24 tháng" },
    ],
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
      { label: "Bảo hành", value: "24 tháng" },
    ],
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
      { label: "Tiêu chuẩn", value: "Vệ sinh thực phẩm" },
    ],
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
      { label: "Bảo hành", value: "12 tháng" },
    ],
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
      { label: "Định dạng file", value: "DWG / DXF / PDF" },
    ],
  },
];

export type Service = {
  slug: string;
  name: string;
  image: string;
  short: string;
  process: string[];
  benefits: string[];
};

export const SERVICES: readonly Service[] = [
  {
    slug: "cat-laser-inox",
    name: "Cắt laser inox",
    image: laserImg,
    short: "Cắt laser fiber CNC cho tấm inox 0.5 – 12mm, đường cắt sắc nét, không biến dạng.",
    process: ["Tiếp nhận bản vẽ", "Lập trình CNC", "Cắt laser fiber", "Kiểm tra kích thước", "Bàn giao"],
    benefits: ["Độ chính xác ±0.1mm", "Không ba via", "Tiết kiệm vật liệu", "Tốc độ nhanh"],
  },
  {
    slug: "chan-gap-inox",
    name: "Chấn gấp inox",
    image: bendingImg,
    short: "Máy chấn CNC 160 tấn, chiều dài chấn tới 3.2m, gấp được các góc khó.",
    process: ["Tính toán khai triển", "Lập trình máy chấn", "Chấn theo góc thiết kế", "Kiểm tra"],
    benefits: ["Lực chấn lớn", "Góc gấp chính xác", "Bề mặt không trầy xước"],
  },
  {
    slug: "han-inox-tig-mig",
    name: "Hàn inox TIG / MIG",
    image: weldingImg,
    short: "Đội ngũ thợ hàn TIG/MIG tay nghề cao, đường hàn đẹp, kín tuyệt đối.",
    process: ["Vệ sinh bề mặt", "Định vị – ghép phôi", "Hàn TIG/MIG", "Đánh bóng mối hàn"],
    benefits: ["Mối hàn đạt chuẩn", "Không rỗ khí", "Thẩm mỹ cao"],
  },
  {
    slug: "danh-bong-inox",
    name: "Đánh bóng inox",
    image: polishImg,
    short: "Đánh bóng gương, xước hairline, satin theo yêu cầu khách hàng.",
    process: ["Xử lý bề mặt", "Đánh thô", "Đánh tinh", "Hoàn thiện gương / xước"],
    benefits: ["Bề mặt sáng gương", "Không lộ vết hàn", "Tăng tuổi thọ"],
  },
];

export type Project = {
  slug: string;
  name: string;
  client: string;
  image: string;
  desc: string;
};

export const PROJECTS: Project[] = [
  {
    slug: "bep-cong-nghiep-nha-hang-5sao",
    name: "Bếp công nghiệp khách sạn 5 sao",
    client: "Tập đoàn khách sạn Sài Gòn",
    image: projKitchen,
    desc: "Thi công trọn gói hệ thống bếp công nghiệp inox 304 cho khách sạn 5 sao tại Thanh Hóa: bàn sơ chế, hệ hood, bếp Âu/Á, kệ chén dĩa.",
  },
  {
    slug: "tay-vin-cau-thang-toa-nha",
    name: "Tay vịn cầu thang & lan can inox",
    client: "Tòa nhà văn phòng Q.1",
    image: projRailing,
    desc: "Thiết kế và lắp đặt hệ tay vịn inox 304 cầu thang trung tâm + lan can kính dày 12mm cho tòa nhà văn phòng cao cấp.",
  },
  {
    slug: "he-bon-chua-cong-nghiep",
    name: "Hệ bồn chứa & đường ống inox",
    client: "Nhà máy thực phẩm Đồng Nai",
    image: projIndustrial,
    desc: "Chế tạo và lắp đặt hệ bồn chứa inox 304, đường ống công nghệ đạt chuẩn vệ sinh an toàn thực phẩm cho nhà máy chế biến.",
  },
];

export const TESTIMONIALS = [
  {
    name: "Anh Nguyễn Văn Hùng",
    role: "Chủ nhà hàng Phố Cổ",
    quote:
      "AN HƯNG làm bàn bếp inox 304 cho nhà hàng tôi, đường hàn cực đẹp, giao đúng hẹn. Sau 3 năm vẫn sáng bóng như mới.",
  },
  {
    name: "Chị Lê Thị Mai",
    role: "Quản lý dự án – Công ty XD ABC",
    quote:
      "Đặt hàng gia công lan can inox cho 3 dự án liên tiếp. Bản vẽ phức tạp nhưng đội kỹ thuật tư vấn tận tâm, thi công đúng tiến độ.",
  },
  {
    name: "Anh Trần Quốc Bảo",
    role: "Giám đốc nhà máy thực phẩm",
    quote:
      "Hệ bồn chứa inox đạt chuẩn vệ sinh, đường hàn TIG kín tuyệt đối. Rất chuyên nghiệp từ khâu khảo sát đến nghiệm thu.",
  },
];

export const NEWS = [
  {
    slug: "cach-phan-biet-inox-304-201",
    title: "Cách phân biệt inox 304 và inox 201 chuẩn xác nhất",
    excerpt:
      "Inox 304 và 201 khác biệt về thành phần Niken, khả năng kháng ăn mòn và giá thành. Cùng tìm hiểu 5 cách phân biệt đơn giản.",
    date: "2025-05-12",
  },
  {
    slug: "kinh-nghiem-chon-ban-inox-bep",
    title: "Kinh nghiệm chọn bàn inox cho bếp nhà hàng",
    excerpt:
      "Tiêu chí lựa chọn bàn inox cho bếp công nghiệp: chất liệu, độ dày, kết cấu chân, tải trọng và phụ kiện đi kèm.",
    date: "2025-04-28",
  },
  {
    slug: "xu-huong-gia-cong-inox-2025",
    title: "Xu hướng gia công inox CNC 2025",
    excerpt:
      "Cắt laser fiber, robot hàn và đánh bóng tự động đang định hình lại ngành gia công inox Việt Nam.",
    date: "2025-04-10",
  },
];
