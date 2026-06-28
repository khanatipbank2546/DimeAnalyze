// Mock stock database
const stockDatabase = {
    tech: [
        {
            ticker: "NVDA",
            name: "NVIDIA Corporation",
            brief: "ผู้นำตลาดชิปประมวลผล AI (GPU) ที่มีส่วนแบ่งตลาดและอัตราการเติบโตระดับสูงอย่างต่อเนื่อง",
            prices: {
                default: { current: 192.53, change: 1.89, chart: [186.20, 187.80, 185.90, 189.50, 188.10, 190.50, 192.53] },
                surge: { current: 205.10, change: 6.53, chart: [186.20, 187.80, 189.50, 192.53, 196.20, 201.50, 205.10] },
                stable: { current: 193.10, change: 0.30, chart: [192.53, 192.80, 192.10, 193.50, 192.90, 193.40, 193.10] }
            },
            stats: { marketCap: "4.73T USD", pe: "88.5", volume: "51.2M", high52w: "$210.40" },
            analysis: "ความต้องการชิป Blackwell รุ่นใหม่ยังคงล้นตลาด โดยผู้ให้บริการคลาวด์รายใหญ่ (Hyperscalers) ต่างเร่งสั่งซื้อเพื่อฝึกฝนโมเดล AI ขนาดใหญ่ โมเมนตัมทางเทคนิคมีแนวโน้มเป็นขาขึ้นอย่างแข็งแกร่ง มีโอกาสทดสอบจุดสูงสุดเดิมได้ในระยะสั้น",
            news: [
                { title: "NVIDIA ได้รับใบสั่งซื้อ Blackwell เพิ่มเติมจาก Microsoft และ CoreWeave", source: "Bloomberg", time: "2 ชั่วโมงที่แล้ว" },
                { title: "นักวิเคราะห์คาดกำไรไตรมาสหน้าของ NVDA จะโตทะลุ 120% YOY", source: "Reuters", time: "5 ชั่วโมงที่แล้ว" }
            ]
        },
        {
            ticker: "PLTR",
            name: "Palantir Technologies Inc.",
            brief: "ผู้พัฒนาระบบซอฟต์แวร์วิเคราะห์ข้อมูลขนาดใหญ่ด้วยปัญญาประดิษฐ์ (AI) สำหรับภาครัฐและเอกชน",
            prices: {
                default: { current: 112.93, change: 2.15, chart: [105.40, 107.20, 106.80, 109.50, 108.90, 110.80, 112.93] },
                surge: { current: 125.40, change: 11.04, chart: [105.40, 107.20, 109.50, 112.93, 115.80, 120.40, 125.40] },
                stable: { current: 113.20, change: 0.24, chart: [112.93, 112.80, 113.10, 112.95, 113.40, 113.15, 113.20] }
            },
            stats: { marketCap: "256.4B USD", pe: "142.1", volume: "24.5M", high52w: "$120.50" },
            analysis: "แพลตฟอร์ม AIP (Artificial Intelligence Platform) กำลังเป็นที่นิยมอย่างล้นหลามในภาคเอกชน การเปลี่ยนผ่านข้อมูลดิบสู่ระบบการตัดสินใจอัจฉริยะช่วยลดต้นทุนให้องค์กรได้อย่างมีนัยสำคัญ ส่งผลต่อกำไรสะสมอย่างก้าวกระโดด",
            news: [
                { title: "ความตึงเครียดทางภูมิรัฐศาสตร์รอบใหม่กระตุ้นให้รัฐบาลสหรัฐฯ อนุมัติงบสั่งซื้อระบบวิเคราะห์การทำศึกด้วย AI ของ Palantir (PLTR) ล่วงหน้า", source: "Bloomberg", time: "1 ชั่วโมงที่แล้ว" },
                { title: "Palantir ปิดดีลยักษ์ใหญ่ มูลค่า 480 ล้านเหรียญกับกระทรวงกลาโหมสหรัฐ", source: "DefenseNews", time: "4 ชั่วโมงที่แล้ว" },
                { title: "ดีมานด์ในกลุ่มการใช้งานภาคธุรกิจพุ่งสูงขึ้นกว่า 40%", source: "CNBC", time: "1 วันที่แล้ว" }
            ]
        },
        {
            ticker: "MSFT",
            name: "Microsoft Corporation",
            brief: "ยักษ์ใหญ่เทคโนโลยีผู้บูรณาการ AI เข้ากับซอฟต์แวร์สำนักงานและระบบคลาวด์ Azure",
            prices: {
                default: { current: 372.97, change: -0.42, chart: [378.50, 376.20, 375.90, 374.80, 375.20, 373.90, 372.97] },
                surge: { current: 388.50, change: 4.16, chart: [372.97, 374.80, 377.20, 379.50, 382.40, 385.90, 388.50] },
                stable: { current: 373.10, change: 0.03, chart: [372.97, 373.20, 372.85, 373.40, 372.95, 373.20, 373.10] }
            },
            stats: { marketCap: "2.78T USD", pe: "29.8", volume: "19.8M", high52w: "$430.80" },
            analysis: "รายได้จาก Azure Cloud เติบโตต่อเนื่องจากการขยายขอบเขตการใช้งาน Copilot เสริมทัพด้วยสัญญาระยะยาวกับกลุ่มธุรกิจขนาดใหญ่ เป็นตัวเลือกที่ปลอดภัยเนื่องจากกระแสเงินสดแข็งแกร่งและมีรายได้สม่ำเสมอ",
            news: [
                { title: "Microsoft ประกาศขยายดาต้าเซ็นเตอร์ด้าน AI แห่งใหม่ในยุโรป มูลค่า 3.2 พันล้านดอลลาร์", source: "Financial Times", time: "7 ชั่วโมงที่แล้ว" },
                { title: "Copilot มียอดผู้ใช้งานแบบชำระเงินทะลุ 10 ล้านคนแล้ว", source: "TechCrunch", time: "2 วันที่แล้ว" }
            ]
        },
        {
            ticker: "AAPL",
            name: "Apple Inc.",
            brief: "ผู้พัฒนาฮาร์ดแวร์ระดับพรีเมียม เปิดตัว Apple Intelligence เพื่อกระตุ้นยอดขายรอบใหม่",
            prices: {
                default: { current: 283.78, change: 0.65, chart: [280.20, 281.50, 280.90, 282.40, 281.90, 282.80, 283.78] },
                surge: { current: 295.40, change: 4.10, chart: [280.20, 281.50, 282.40, 283.78, 286.50, 290.80, 295.40] },
                stable: { current: 284.10, change: 0.11, chart: [283.78, 283.90, 283.50, 284.20, 283.80, 284.30, 284.10] }
            },
            stats: { marketCap: "4.34T USD", pe: "38.2", volume: "28.4M", high52w: "$310.50" },
            analysis: "การบูรณาการระบบ Apple Intelligence เข้าสู่สมาร์ทโฟน iPhone และผลิตภัณฑ์อื่น คาดว่าจะจุดชนวนยอดขายรอบอัปเกรดครั้งใหญ่ (Supercycle) ในช่วงปลายปี แม้ห่วงโซ่อุปทานในเอเชียยังมีข้อจำกัดบางประการ",
            news: [
                { title: "Apple สั่งผลิตชิป A18 ล่วงหน้าเพิ่มขึ้น 15% รับกระแสความต้องการ AI", source: "Nikkei Asia", time: "10 ชั่วโมงที่แล้ว" },
                { title: "ฟีเจอร์ AI ใหม่ขับเคลื่อนความเชื่อมั่นผู้บริโภคให้ปรับตัวดีขึ้น", source: "MarketWatch", time: "1 วันที่แล้ว" }
            ]
        },
        {
            ticker: "GOOGL",
            name: "Alphabet Inc.",
            brief: "ผู้นำด้านการค้นหาและปัญญาประดิษฐ์ Gemini รวมถึงแพลตฟอร์มคลาวด์และความบันเทิง YouTube",
            prices: {
                default: { current: 337.39, change: 1.24, chart: [331.40, 333.20, 332.80, 335.20, 334.90, 336.20, 337.39] },
                surge: { current: 352.10, change: 4.36, chart: [331.40, 333.20, 335.20, 337.39, 341.20, 347.50, 352.10] },
                stable: { current: 337.80, change: 0.12, chart: [337.39, 337.20, 337.90, 337.50, 338.10, 337.75, 337.80] }
            },
            stats: { marketCap: "4.18T USD", pe: "34.5", volume: "21.5M", high52w: "$360.20" },
            analysis: "ความแข็งแกร่งของเทคโนโลยีโมเดล Gemini และการเติบโตของส่วนแบ่งการตลาด Google Cloud ช่วยให้นักลงทุนมีความมั่นใจเพิ่มขึ้น อัตราค่าโฆษณาฟื้นตัวได้ดี หนุนงบการเงินให้เติบโตเกินคาด",
            news: [
                { title: "Google เผยแผนติดตั้งสายเคเบิลใต้ทะเลความเร็วสูงแห่งใหม่ เชื่อมโยงเอเชีย-สหรัฐ", source: "TechCrunch", time: "12 ชั่วโมงที่แล้ว" },
                { title: "ยอดโฆษณาใน YouTube เติบโตอย่างแข็งแกร่งรับกระแสช้อปปิ้งออนไลน์", source: "Forbes", time: "1 วันที่แล้ว" }
            ]
        }
    ],
    space: [
        {
            ticker: "RKLB",
            name: "Rocket Lab USA, Inc.",
            brief: "ผู้ให้บริการส่งดาวเทียมขนาดเล็กและผลิตชิ้นส่วนยานอวกาศชั้นนำ กำลังพัฒนาจรวด Neutron ขนาดใหญ่",
            prices: {
                default: { current: 84.54, change: 3.20, chart: [80.2, 81.5, 81.1, 82.9, 82.5, 83.8, 84.54] },
                surge: { current: 95.80, change: 13.32, chart: [80.2, 81.5, 82.9, 84.54, 87.2, 91.5, 95.8] },
                stable: { current: 84.80, change: 0.31, chart: [84.54, 84.7, 84.4, 84.9, 84.6, 84.9, 84.8] }
            },
            stats: { marketCap: "41.8B USD", pe: "92.4", volume: "9.2M", high52w: "$99.50" },
            analysis: "บริษัทมีอัตราความสำเร็จในการส่งจรวด Electron เกือบ 100% ล่าสุดคว้าสัญญาส่งดาวเทียมทางทหารมูลค่าสูง และมีลุ้นทดสอบเครื่องยนต์จรวด Neutron ในครึ่งปีหลัง ซึ่งจะเพิ่มความสามารถในการขนส่งได้ 10 เท่า",
            news: [
                { title: "Rocket Lab สำเร็จการปล่อยจรวด Electron ครั้งที่ 50 พร้อมเทคโนโลยีเก็บกู้ด่านแรก", source: "Space.com", time: "1 ชั่วโมงที่แล้ว" },
                { title: "รับสัญญาสร้างดาวเทียมมูลค่า 515 ล้านดอลลาร์จากหน่วยงานความมั่นคงสหรัฐ", source: "SpaceNews", time: "8 ชั่วโมงที่แล้ว" }
            ]
        },
        {
            ticker: "LUNR",
            name: "Intuitive Machines, Inc.",
            brief: "ผู้สร้างและดำเนินการยานสำรวจดวงจันทร์เชิงพาณิชย์ ได้รับสัญญาระยะยาวจาก NASA ในการจัดส่งอุปกรณ์",
            prices: {
                default: { current: 19.79, change: -1.25, chart: [20.5, 20.2, 20.1, 19.8, 19.5, 19.9, 19.79] },
                surge: { current: 25.40, change: 28.35, chart: [19.79, 20.5, 21.2, 22.1, 23.0, 24.2, 25.4] },
                stable: { current: 19.65, change: -0.71, chart: [19.79, 19.85, 19.72, 19.8, 19.68, 19.7, 19.65] }
            },
            stats: { marketCap: "2.48B USD", pe: "N/A", volume: "12.4M", high52w: "$28.50" },
            analysis: "บริษัทเป็นเอกชนรายแรกที่นำยานลงจอดบนดวงจันทร์ได้สำเร็จในโครงการ Artemis CLPS คาดว่าภารกิจสำรวจดวงจันทร์ครั้งที่สอง (IM-2) ที่จะเกิดขึ้นเร็วๆ นี้ จะเป็นตัวเร่งราคาครั้งสำคัญหากผ่านพ้นขั้นตอนวิกฤตได้ดี",
            news: [
                { title: "NASA อนุมัติกำหนดการปล่อยยาน IM-2 ในเดือนธันวาคมนี้ มุ่งหน้าสู่ขั้วใต้ของดวงจันทร์", source: "NASA Press", time: "3 ชั่วโมงที่แล้ว" },
                { title: "Intuitive Machines ขยายความร่วมมือกับเครือข่ายภาคพื้นดินในยุโรปเพื่อสื่อสารอวกาศห้วงลึก", source: "ESA", time: "1 วันที่แล้ว" }
            ]
        },
        {
            ticker: "SPCE",
            name: "Virgin Galactic Holdings",
            brief: "บริษัทการบินอวกาศเชิงพาณิชย์เพื่อการท่องเที่ยวอวกาศระดับสูงสำหรับบุคคลทั่วไป",
            prices: {
                default: { current: 2.95, change: -2.32, chart: [3.10, 3.05, 3.02, 2.98, 2.94, 2.97, 2.95] },
                surge: { current: 3.82, change: 29.49, chart: [2.95, 3.08, 3.20, 3.35, 3.48, 3.65, 3.82] },
                stable: { current: 2.92, change: -1.02, chart: [2.95, 2.93, 2.96, 2.92, 2.95, 2.91, 2.92] }
            },
            stats: { marketCap: "1.15B USD", pe: "N/A", volume: "18.2M", high52w: "$8.40" },
            analysis: "บริษัทระงับเที่ยวบินพาณิชย์ชั่วคราวเพื่อเร่งพัฒนาและสร้างยานรุ่นใหม่ 'Delta Class' ซึ่งประหยัดต้นทุนและรองรับเที่ยวบินที่ถี่ขึ้น คาดว่าจะเริ่มบินทดสอบในปีหน้า ข้อมูลการเงินยังมีความเสี่ยงจากการเผาเงินทุนสูง (Cash Burn)",
            news: [
                { title: "Virgin Galactic เผยความคืบหน้าโรงงานประกอบยาน Delta ในรัฐแอริโซนา คาดเปิดตัวตามกำหนด", source: "AviationWeek", time: "18 ชั่วโมงที่แล้ว" },
                { title: "กระแสเงินสดหมุนเวียนคงเหลือคาดว่าจะประคองบริษัทได้ถึงปลายปีหน้า", source: "Yahoo Finance", time: "2 วันที่แล้ว" }
            ]
        },
        {
            ticker: "LMT",
            name: "Lockheed Martin Corporation",
            brief: "ยักษ์ใหญ่ด้านกลาโหมและอวกาศ ผู้พัฒนาเทคโนโลยีดาวเทียมสื่อสารและระบบนำส่งอวกาศชั้นสูง",
            prices: {
                default: { current: 507.40, change: 0.45, chart: [502, 504, 503.8, 505.5, 506.2, 505.9, 507.40] },
                surge: { current: 528.90, change: 4.24, chart: [507.40, 510.5, 513.8, 517.2, 521.0, 524.8, 528.90] },
                stable: { current: 508.10, change: 0.14, chart: [507.40, 507.2, 507.8, 508.4, 507.9, 508.3, 508.10] }
            },
            stats: { marketCap: "122.8B USD", pe: "18.4", volume: "1.5M", high52w: "$540.20" },
            analysis: "ความตึงเครียดทางภูมิรัฐศาสตร์ทั่วโลกส่งผลให้งบประมาณกลาโหมและการป้องกันอวกาศของมหาอำนาจพุ่งสูงขึ้น ยอดสั่งซื้อค้างส่ง (Backlog) เต็มไปจนถึงอีก 3 ปีข้างหน้า ปันผลมีความมั่นคงและสูงสม่ำเสมอ",
            news: [
                { title: "Lockheed Martin ชนะประมูลสัญญาระบบสกัดกั้นขีปนาวุธรุ่นใหม่ มูลค่า 1.7 หมื่นล้านดอลลาร์", source: "DefenseOne", time: "9 ชั่วโมงที่แล้ว" },
                { title: "บริษัทส่งมอบดาวเทียมแจ้งเตือนภัยขีปนาวุธชุดแรกแก่กองทัพอวกาศสหรัฐสำเร็จ", source: "SpaceNews", time: "1 วันที่แล้ว" }
            ]
        },
        {
            ticker: "ASTS",
            name: "AST SpaceMobile, Inc.",
            brief: "ผู้ให้บริการเครือข่ายบรอดแบนด์ผ่านดาวเทียมวงโคจรต่ำที่เชื่อมต่อโดยตรงกับโทรศัพท์มือถือทั่วไป",
            prices: {
                default: { current: 71.45, change: 8.92, chart: [64.2, 65.8, 67.2, 68.5, 69.1, 70.4, 71.45] },
                surge: { current: 89.50, change: 25.26, chart: [71.45, 73.8, 76.5, 79.2, 82.4, 85.9, 89.50] },
                stable: { current: 71.80, change: 0.49, chart: [71.45, 71.2, 71.9, 71.5, 72.1, 71.7, 71.80] }
            },
            stats: { marketCap: "18.9B USD", pe: "N/A", volume: "22.5M", high52w: "$95.40" },
            analysis: "มีข้อตกลงพันธมิตรกับเครือข่ายมือถือระดับโลก เช่น AT&T, Verizon และ Google การปล่อยดาวเทียมพาณิชย์กลุ่มแรก BlueWalker 5 ดวง คาดว่าจะเริ่มเปิดบริการส่งข้อมูล 4G/5G ครอบคลุมพื้นที่อับสัญญาณได้ ปลดล็อกรายได้มหาศาล",
            news: [
                { title: "ความขัดแย้งในตะวันออกกลางเร่งการจัดตั้งวงโคจรดาวเทียมสื่อสารยุทธวิธีทางการทหารของ AST SpaceMobile ร่วมกับชาติพันธมิตร", source: "Bloomberg", time: "4 ชั่วโมงที่แล้ว" },
                { title: "AST SpaceMobile ยืนยันการส่งมอบดาวเทียม 5 ดวงแรกไปยังท่าอวกาศเคปคานาเวอรัลแล้ว", source: "PR Newswire", time: "4 ชั่วโมงที่แล้ว" },
                { title: "Verizon ทุ่มเงินลงทุน 100 ล้านดอลลาร์ในโครงสร้างดาวเทียมของ ASTS", source: "Wall Street Journal", time: "3 วันที่แล้ว" }
            ]
        }
    ],
    resource: [
        {
            ticker: "MP",
            name: "MP Materials Corp.",
            brief: "ผู้ผลิตโลหะหายาก (Rare Earth) รายใหญ่ที่สุดในฝั่งตะวันตก มีความสำคัญต่อมอเตอร์ไฟฟ้าและกังหันลม",
            prices: {
                default: { current: 53.90, change: 1.12, chart: [52.8, 53.2, 53.0, 53.5, 53.1, 53.6, 53.90] },
                surge: { current: 61.20, change: 13.54, chart: [53.90, 54.8, 55.9, 57.1, 58.4, 59.8, 61.20] },
                stable: { current: 54.10, change: 0.37, chart: [53.90, 53.8, 54.2, 53.9, 54.3, 54.0, 54.10] }
            },
            stats: { marketCap: "9.45B USD", pe: "34.5", volume: "3.5M", high52w: "$65.80" },
            analysis: "เป็นเหมืองที่ได้รับแรงสนับสนุนจากนโยบายความมั่นคงด้านซัพพลายเชนของรัฐบาลสหรัฐ เพื่อลดการพึ่งพาแร่ธาตุหายากจากจีน ปัจจุบันกำลังขยายโรงงานแม่เหล็กถาวร (Neodymium) ในเท็กซัส เพื่อส่งมอบให้ GM โดยตรง",
            news: [
                { title: "สหรัฐฯ เตรียมปรับขึ้นภาษีนำเข้าแร่ Rare Earth จากจีน หนุนยอดขายในประเทศของ MP", source: "Bloomberg", time: "6 ชั่วโมงที่แล้ว" },
                { title: "MP Materials ประกาศเพิ่มปริมาณผลิตเป้าหมายอีก 10% หลังปรับปรุงระบบแยกแร่ใหม่", source: "Mining.com", time: "1 วันที่แล้ว" }
            ]
        },
        {
            ticker: "ALB",
            name: "Albemarle Corporation",
            brief: "ผู้ผลิตลิเธียมสำหรับแบตเตอรี่รถยนต์ไฟฟ้า (EV) รายใหญ่ที่สุดในโลก",
            prices: {
                default: { current: 133.70, change: -1.25, chart: [136.5, 135.2, 134.8, 133.9, 132.8, 133.2, 133.70] },
                surge: { current: 148.50, change: 11.07, chart: [133.70, 135.8, 138.2, 140.5, 142.8, 145.4, 148.50] },
                stable: { current: 133.10, change: -0.45, chart: [133.70, 133.2, 133.8, 133.0, 133.4, 132.9, 133.10] }
            },
            stats: { marketCap: "15.8B USD", pe: "18.2", volume: "4.8M", high52w: "$280.00" },
            analysis: "แม้ราคาลิเธียมโลกจะปรับฐานลงเนื่องจากการชะลอตัวชั่วคราวของยอดขาย EV แต่ราคาหุ้น ALB สะท้อนข่าวร้ายไปมากแล้ว ต้นทุนการผลิตที่เหมือง Greenbushes ต่ำที่สุดในโลก ทำให้บริษัทยังคงมีกำไรขั้นต้นที่เป็นบวก",
            news: [
                { title: "ราคาลิเธียมในจีนส่งสัญญาณฟื้นตัว หลังซัพพลายแร่เหมืองขนาดเล็กทยอยปิดตัว", source: "Reuters", time: "11 ชั่วโมงที่แล้ว" },
                { title: "Albemarle ปรับปรุงงบการลงทุน โดยลด CAPEX ลงเพื่อรักษากระแสเงินสดแกร่ง", source: "MarketWatch", time: "2 วันที่แล้ว" }
            ]
        },
        {
            ticker: "LAC",
            name: "Lithium Americas Corp.",
            brief: "บริษัทผู้พัฒนาแหล่งแร่ลิเธียมขนาดใหญ่ Thacker Pass ในรัฐเนวาดา ได้รับเงินกู้ช่วยเหลือจากรัฐบาลสหรัฐ",
            prices: {
                default: { current: 3.79, change: -0.26, chart: [3.82, 3.80, 3.85, 3.81, 3.78, 3.80, 3.79] },
                surge: { current: 4.85, change: 27.97, chart: [3.79, 3.92, 4.10, 4.25, 4.40, 4.62, 4.85] },
                stable: { current: 3.80, change: 0.26, chart: [3.79, 3.77, 3.81, 3.79, 3.82, 3.78, 3.80] }
            },
            stats: { marketCap: "818M USD", pe: "N/A", volume: "5.8M", high52w: "$9.40" },
            analysis: "ได้รับอนุมัติเงินกู้กว่า 2.26 พันล้านดอลลาร์จากกระทรวงพลังงานสหรัฐสำหรับการสร้างโครงการเฟสแรก ร่วมทุนกับ GM ผู้ผลิตรถยนต์รายใหญ่ การันตีลูกค้าปลายทาง มีโอกาสเติบโตสูงหลังเหมืองเริ่มเดินเครื่องเต็มระบบ",
            news: [
                { title: "Lithium Americas อัปเดตการก่อสร้างโครงสร้างพื้นฐาน Thacker Pass คืบหน้าเร็วกว่าแผน", source: "Mining Journal", time: "14 ชั่วโมงที่แล้ว" },
                { title: "สภาคองเกรสย้ำความสำคัญโครงการแร่ลิเธียมเนวาดาเพื่อความมั่นคงของชาติ", source: "Washington Post", time: "3 วันที่แล้ว" }
            ]
        },
        {
            ticker: "FCX",
            name: "Freeport-McMoRan Inc.",
            brief: "ผู้ผลิตทองแดงรายใหญ่ที่สุดของโลก ซึ่งเป็นแร่ธาตุสำคัญในการส่งผ่านไฟฟ้าและโครงสร้างพื้นฐานระบบ AI",
            prices: {
                default: { current: 62.45, change: 0.89, chart: [61.5, 61.9, 61.7, 62.1, 62.0, 62.3, 62.45] },
                surge: { current: 68.90, change: 10.33, chart: [62.45, 63.2, 64.1, 65.0, 66.2, 67.5, 68.90] },
                stable: { current: 62.60, change: 0.24, chart: [62.45, 62.3, 62.8, 62.5, 62.9, 62.4, 62.60] }
            },
            stats: { marketCap: "89.4B USD", pe: "35.2", volume: "8.5M", high52w: "$72.40" },
            analysis: "ทองแดงกำลังเป็นแร่ธาตุที่ทวีความต้องการอย่างสูงเนื่องจากการเปลี่ยนผ่านพลังงานสะอาด (Electrification) และการสร้างระบบระบายความร้อนรวมถึงจ่ายไฟฟ้าในดาต้าเซ็นเตอร์ AI ซัพพลายที่ตึงตัวทำให้แนวโน้มราคาโลกพุ่งสูงขึ้น",
            news: [
                { title: "สงครามและการคว่ำบาตรพลังงานกระตุ้นให้ชาติยุโรปเร่งสต็อกแร่อย่างแร่ยูเรเนียมและทองแดง เสริมความมั่นคงด้านพลังงานดิบและระบบสำรองไฟฟ้า", source: "Bloomberg", time: "30 นาทีที่แล้ว" },
                { title: "ปริมาณทองแดงคงคลังในตลาดลอนดอน (LME) ลดลงสู่ระดับต่ำสุดในรอบปี", source: "Financial Times", time: "5 ชั่วโมงที่แล้ว" },
                { title: "Freeport คาดการณ์กำไรขั้นต้นโตตามราคาทองแดงดิบที่ขยับขึ้นยืนเหนือ $4.6 ต่อปอนด์", source: "CNBC", time: "1 วันที่แล้ว" }
            ]
        },
        {
            ticker: "BHP",
            name: "BHP Group Limited",
            brief: "ยักษ์เหมืองแร่ระดับโลก ผลิตแร่เหล็ก ทองแดง และนิกเกิลที่สำคัญต่อห่วงโซ่อุปทานอุตสาหกรรมหนัก",
            prices: {
                default: { current: 58.99, change: 0.52, chart: [58.2, 58.5, 58.3, 58.7, 58.6, 58.8, 58.99] },
                surge: { current: 62.80, change: 6.46, chart: [58.99, 59.5, 60.1, 60.8, 61.4, 62.1, 62.80] },
                stable: { current: 59.10, change: 0.19, chart: [58.99, 58.8, 59.2, 59.0, 59.3, 58.9, 59.10] }
            },
            stats: { marketCap: "149.5B USD", pe: "14.2", volume: "2.5M", high52w: "$75.20" },
            analysis: "บริษัทเหมืองแร่ขนาดใหญ่ที่มีการกระจายความเสี่ยงสูง งบการเงินมั่นคงและมีสัดส่วนหนี้สินต่อทุนต่ำ โฟกัสหลักในแร่เหล็กและเร่งขยายพอร์ตทองแดงอย่างต่อเนื่องเพื่อรองรับเมกะเทรนด์สีเขียว",
            news: [
                { title: "BHP ขยายกำลังการผลิตที่เหมืองทองแดง Escondida ในชิลี มุ่งเป้าหมายการส่งออกระยะยาว", source: "MiningNews", time: "12 ชั่วโมงที่แล้ว" },
                { title: "ความต้องการเหล็กโครงสร้างในตลาดเกิดใหม่ช่วยประคองยอดขายแร่เหล็กของ BHP", source: "Reuters", time: "2 วันที่แล้ว" }
            ]
        }
    ],
    infra: [
        {
            ticker: "TSM",
            name: "Taiwan Semiconductor Manufacturing Co.",
            brief: "ผู้ผลิตชิปสัญญารับจ้างรายใหญ่ที่สุดในโลก ซึ่งบริษัทยักษ์ใหญ่ของโลกอย่าง Apple และ NVIDIA ต่างต้องพึ่งพาในการผลิตชิปทั้งหมด",
            prices: {
                default: { current: 432.35, change: 1.62, chart: [418.5, 420.2, 422.0, 425.8, 424.2, 429.5, 432.35] },
                surge: { current: 468.20, change: 9.92, chart: [418.5, 420.2, 425.8, 432.35, 442.8, 455.5, 468.20] },
                stable: { current: 433.10, change: 0.17, chart: [432.35, 432.8, 432.1, 433.5, 432.9, 433.3, 433.10] }
            },
            stats: { marketCap: "1.12T USD", pe: "34.5", volume: "15.4M", high52w: "$460.80" },
            analysis: "TSMC เป็นกระดูกสันหลังของอุตสาหกรรมชิปโลก ด้วยกระบวนการผลิตระดับ 2nm และ 3nm ที่มีคู่แข่งตามไม่ทัน ความต้องการจากกลุ่มผู้ผลิตชิป AI (NVIDIA, AMD) และสมาร์ทโฟนระดับบน ยังคงผลักดันอัตรากำไรให้อยู่ในระดับสูงสุดต่อเนื่อง",
            news: [
                { title: "TSMC เผยปริมาณความต้องการชิป 3nm ในไตรมาสถัดไปจองเต็มล่วงหน้าแล้ว", source: "Nikkei Asia", time: "3 ชั่วโมงที่แล้ว" },
                { title: "ประกาศงบขยายโรงงานในรัฐแอริโซนาเพิ่มเติมเพื่อขยายความสามารถในการส่งมอบชิป", source: "Reuters", time: "1 วันที่แล้ว" }
            ]
        },
        {
            ticker: "ASML",
            name: "ASML Holding N.V.",
            brief: "ผู้ผลิตเครื่องพิมพ์ชิป Lithography แบบ EUV เพียงรายเดียวในโลก ซึ่งเป็นกระดูกสันหลังของการผลิตชิปขั้นสูงทุกประเภท",
            prices: {
                default: { current: 1794.62, change: 0.85, chart: [1750, 1762, 1758, 1775, 1768, 1785, 1794.62] },
                surge: { current: 1928.40, change: 8.24, chart: [1750, 1762, 1775, 1794.62, 1832, 1885, 1928.40] },
                stable: { current: 1798.10, change: 0.19, chart: [1794.62, 1796, 1793.8, 1799.2, 1797.5, 1799, 1798.10] }
            },
            stats: { marketCap: "718.5B USD", pe: "48.2", volume: "1.8M", high52w: "$1880.00" },
            analysis: "ในฐานะผู้ผูกขาดเครื่องพิมพ์ชิป EUV (Extreme Ultraviolet) และเครื่อง High-NA EUV รุ่นล่าสุด ASML จึงเป็นหุ้นฐานรากที่ขาดไม่ได้สำหรับโรงหล่อชิปยุคใหม่ทั้้งหมด รายได้เติบโตสม่ำเสมอตามแผนการขยายกำลังผลิตระดับโลก",
            news: [
                { title: "ASML เริ่มส่งมอบเครื่องพิมพ์ชิป High-NA EUV เครื่องที่สองให้กับลูกค้ารายใหญ่ในเอเชีย", source: "EETimes", time: "5 ชั่วโมงที่แล้ว" },
                { title: "ยอดสั่งซื้อค้างส่ง (Backlog) ของเครื่อง EUV พุ่งแตะระดับสูงสุดในประวัติศาสตร์", source: "Bloomberg", time: "2 วันที่แล้ว" }
            ]
        },
        {
            ticker: "AVGO",
            name: "Broadcom Inc.",
            brief: "ผู้นำด้านชิปเครือข่ายเชื่อมโยงดาต้าเซ็นเตอร์ประสิทธิภาพสูงและการออกแบบชิปเฉพาะทาง (ASIC) สำหรับ AI",
            prices: {
                default: { current: 365.02, change: 1.42, chart: [352.5, 355.8, 354.2, 358.9, 357.5, 362.4, 365.02] },
                surge: { current: 398.50, change: 10.73, chart: [352.5, 355.8, 358.9, 365.02, 375.2, 388.4, 398.50] },
                stable: { current: 365.80, change: 0.21, chart: [365.02, 365.5, 364.8, 366.2, 365.7, 366.1, 365.80] }
            },
            stats: { marketCap: "845.2B USD", pe: "38.6", volume: "4.5M", high52w: "$395.00" },
            analysis: "Broadcom ประสบความสำเร็จอย่างสูงในการผสานโซลูชันเครือข่ายความเร็วสูง เช่น สวิตช์เครือข่าย Tomahawk และการรับจ้างออกแบบชิป ASIC สำหรับยักษ์ใหญ่คลาวด์ (Google TPU, Meta MTIA) ทำให้เป็นรากฐานหลักของโครงสร้างพื้นฐาน AI",
            news: [
                { title: "นักวิเคราะห์คาดยอดขายชิป ASIC ของ Broadcom ในปีนี้จะโตแซงหน้าตลาดรวมกว่า 40%", source: "CNBC", time: "6 ชั่วโมงที่แล้ว" },
                { title: "เปิดตัวโซลูชัน Co-Packaged Optics (CPO) รุ่นใหม่ลดการใช้พลังงานในดาต้าเซ็นเตอร์", source: "Lightwave", time: "1 วันที่แล้ว" }
            ]
        },
        {
            ticker: "VRT",
            name: "Vertiv Holdings Co.",
            brief: "ผู้ให้บริการระบบระบายความร้อนด้วยของเหลว (Liquid Cooling) และระบบจัดการพลังงานสำหรับดาต้าเซ็นเตอร์ AI",
            prices: {
                default: { current: 304.11, change: 4.85, chart: [285.2, 288.9, 287.5, 292.8, 294.5, 299.8, 304.11] },
                surge: { current: 345.80, change: 19.34, chart: [285.2, 288.9, 294.5, 304.11, 315.8, 330.4, 345.80] },
                stable: { current: 305.20, change: 0.36, chart: [304.11, 304.8, 303.9, 305.5, 304.9, 305.4, 305.20] }
            },
            stats: { marketCap: "115.4B USD", pe: "68.2", volume: "6.5M", high52w: "$325.00" },
            analysis: "ชิป AI รุ่นล่าสุดมีความร้อนและการใช้พลังงานสูงขึ้นมาก ระบบของเหลว (Liquid Cooling) ของ Vertiv จึงเป็นเทคโนโลยีพื้นฐานสำคัญที่ดาต้าเซ็นเตอร์ AI ทุกแห่งขาดไม่ได้ ทำให้บริษัทมียอดสั่งซื้อล้นเกินความสามารถในการผลิตปัจจุบัน",
            news: [
                { title: "ภัยคุกคามสงครามไซเบอร์ (Cyber Warfare) พุ่งเป้าทำลายระบบดาต้าเซ็นเตอร์ยุโรป เร่งยอดสั่งซื้อตู้สำรองไฟและความปลอดภัยของเครือข่าย Vertiv", source: "Bloomberg", time: "2 ชั่วโมงที่แล้ว" },
                { title: "Vertiv ประกาศจับมือ NVIDIA ร่วมออกแบบพิมพ์เขียวระบบพลังงานดาต้าเซ็นเตอร์ GB200", source: "BusinessWire", time: "8 ชั่วโมงที่แล้ว" },
                { title: "ยอดสั่งซื้อระบบระบายความร้อนสำหรับดาต้าเซ็นเตอร์ในยุโรปและเอเชียพุ่งสูงขึ้นเป็นประวัติการณ์", source: "Financial Times", time: "2 วันที่แล้ว" }
            ]
        },
        {
            ticker: "ARM",
            name: "Arm Holdings plc",
            brief: "ผู้ออกแบบสถาปัตยกรรมชิปที่ประหยัดพลังงานสูง ใช้ในสมาร์ทโฟนทั่วโลกและหน่วยประมวลผลระบบคลาวด์ยุคใหม่",
            prices: {
                default: { current: 334.27, change: 2.15, chart: [318.5, 320.8, 322.4, 326.5, 325.9, 330.2, 334.27] },
                surge: { current: 378.50, change: 15.65, chart: [318.5, 320.8, 326.5, 334.27, 345.2, 362.8, 378.50] },
                stable: { current: 335.10, change: 0.25, chart: [334.27, 334.5, 333.9, 335.2, 334.8, 335.4, 335.10] }
            },
            stats: { marketCap: "348.5B USD", pe: "98.2", volume: "8.4M", high52w: "$365.00" },
            analysis: "ด้วยสถาปัตยกรรม ARMv9 รุ่นล่าสุดที่เป็นรากฐานชิปสมาร์ทโฟนระดับพรีเมียมทั้งหมด ตลอดจนการถูกเลือกใช้ออกแบบหน่วยประมวลผลเซิร์ฟเวอร์ เช่น AWS Graviton และ Grace ของ NVIDIA ส่งผลให้ Arm มีอัตราการเก็บค่าลิขสิทธิ์ (Royalty) ที่พุ่งสูงขึ้นก้าวกระโดด",
            news: [
                { title: "ผู้ให้บริการคลาวด์รายใหญ่หันมาใช้หน่วยประมวลผลสถาปัตยกรรม ARM เพื่อประหยัดพลังงานขึ้น 30%", source: "DataCenterKnowledge", time: "10 ชั่วโมงที่แล้ว" },
                { title: "Arm ประกาศแผนพัฒนาชิปสถาปัตยกรรมใหม่สำหรับอุปกรณ์พกพาที่รองรับ AI ในตัว", source: "Reuters", time: "1 วันที่แล้ว" }
            ]
        },
        {
            ticker: "MU",
            name: "Micron Technology, Inc.",
            brief: "ผู้ผลิตชิปหน่วยความจำ DRAM และ Flash Memory ซึ่งผลิตชิปหน่วยความจำความเร็วสูง HBM3e ส่งตรงไปยัง Blackwell ของ NVIDIA",
            prices: {
                default: { current: 1132.33, change: -1.45, chart: [1158, 1145, 1152, 1138, 1125, 1135, 1132.33] },
                surge: { current: 1255.00, change: 10.83, chart: [1132.33, 1145, 1162, 1185, 1205, 1230, 1255.00] },
                stable: { current: 1135.50, change: 0.28, chart: [1132.33, 1134, 1133, 1136, 1135, 1137, 1135.50] }
            },
            stats: { marketCap: "1.25T USD", pe: "45.1", volume: "12.8M", high52w: "$1255.00" },
            analysis: "Micron ก้าวขึ้นเป็นหนึ่งในผู้เล่นที่ทรงพลังที่สุดในตลาดชิปหน่วยความจำความเร็วสูง (High Bandwidth Memory - HBM3e) ซึ่งเป็นชิ้นส่วนสำคัญอย่างยิ่งของชิปเร่งความเร็ว AI ตระหนักความพยายามขยายกำลังการผลิตที่ยังไม่เพียงพอต่อปริมาณความต้องการที่จองล่วงหน้าเต็มไปถึงปี 2027",
            news: [
                { title: "Micron ได้รับสัญญาจัดซื้อ HBM3e ระยะยาวล่วงหน้าจาก NVIDIA และพันธมิตรผู้ให้บริการคลาวด์", source: "Bloomberg", time: "6 ชั่วโมงที่แล้ว" },
                { title: "นักวิเคราะห์คาดกำไรสะสม Micron เติบโตแข็งแกร่งทะยานทำสถิติใหม่ขานรับยอดจองล่วงหน้า", source: "MarketWatch", time: "1 วันที่แล้ว" }
            ]
        }
    ]
};

const newsDatabase = {
    tech: {
        current: [
            {
                title: "ความตึงเครียดทางภูมิรัฐศาสตร์รอบใหม่กระตุ้นให้รัฐบาลสหรัฐฯ อนุมัติงบสั่งซื้อระบบวิเคราะห์การทำศึกด้วย AI ของ Palantir (PLTR) ล่วงหน้า",
                time: "1 ชั่วโมงที่แล้ว",
                impact: "bullish",
                impactText: "เชิงบวกสูง (Strong Bullish)",
                details: "ดีมานด์ซอฟต์แวร์วิเคราะห์ข้อมูลเชิงลึกในสมรภูมิสงครามพุ่งแรง ขยายสัญญาพิเศษระดับพันล้านกับกระทรวงกลาโหมสหรัฐฯ"
            },
            {
                title: "การผลิตชิป Blackwell ของ NVIDIA ดีขึ้นอย่างก้าวกระโดด หลัง TSMC เพิ่มกำลังผลิต CoWoS",
                time: "2 ชั่วโมงที่แล้ว",
                impact: "bullish",
                impactText: "เชิงบวกสูง (Strong Bullish)",
                details: "ช่วยคลายคอขวดซัพพลายเชน ส่งผลให้ยอดส่งมอบ Blackwell เพิ่มขึ้น in ไตรมาสถัดไป ดันรายได้กลุ่มบริษัท AI ของสหรัฐฯ ขึ้นยกแผง"
            },
            {
                title: "กฎระเบียบความปลอดภัย AI ของสหภาพยุโรป (EU AI Act) เริ่มบังคับใช้เต็มรูปแบบ",
                time: "8 ชั่วโมงที่แล้ว",
                impact: "bearish",
                impactText: "เชิงลบเล็กน้อย (Mild Bearish)",
                details: "เพิ่มต้นทุนด้านการตรวจสอบและการปฏิบัติตามกฎหมาย (Compliance Cost) สำหรับบริษัทผู้พัฒนาโมเดล AI ขนาดใหญ่"
            }
        ],
        future: [
            {
                title: "รายงานผลประกอบการของกลุ่ม Big Tech (Q2/2026 Earnings Season)",
                time: "คาดการณ์ช่วงปลายเดือนกรกฎาคม 2026",
                impact: "volatile",
                impactText: "มีความผันผวนสูง (High Volatility)",
                details: "หากงบลงทุน (CAPEX) ด้าน AI ของ Google, MSFT, Meta ยังโตแกร่ง หุ้นเทคจะพุ่งต่อ; แต่หากชะลอตัวจะโดนแรงขายทำกำไรขนาดใหญ่"
            },
            {
                title: "งานสัมมนาใหญ่ NVIDIA GTC Fall Conference และทิศทางสถาปัตยกรรมชิป Rubin รุ่นถัดไป",
                time: "คาดการณ์เดือนกันยายน 2026",
                impact: "bullish",
                impactText: "เชิงบวก (Bullish)",
                details: "การเปิดเผยสถาปัตยกรรมชิปถัดไปจะเพิ่มความเชื่อมั่นระยะยาว ดึงนักลงทุนสถาบันเข้าถือครองหุ้นเทคโนโลยีชิปเพิ่มขึ้น"
            }
        ]
    },
    space: {
        current: [
            {
                title: "ความขัดแย้งในตะวันออกกลางเร่งการจัดตั้งวงโคจรดาวเทียมสื่อสารยุทธวิธีทางการทหารของ AST SpaceMobile ร่วมกับชาติพันธมิตร",
                time: "4 ชั่วโมงที่แล้ว",
                impact: "bullish",
                impactText: "เชิงบวก (Bullish)",
                details: "ความจำเป็นด้านโครงสร้างพื้นฐานความมั่นคงส่งผลให้รัฐบาลอนุมัติใบอนุญาตปล่อยสัญญาณดาวเทียมความปลอดภัยสูงสำหรับทหารในสนามรบด่วน"
            },
            {
                title: "Intuitive Machines (LUNR) ยืนยันการลงจอดสำเร็จของภารกิจ IM-2 บริเวณขั้วใต้ของดวงจันทร์",
                time: "4 ชั่วโมงที่แล้ว",
                impact: "bullish",
                impactText: "เชิงบวกสูง (Strong Bullish)",
                details: "การลงจอดสำเร็จยืนยันความสามารถของบริษัท เพิ่มสัญญารับจ้างจาก NASA ในโครงการ Artemis และความไว้วางใจจากลูกค้าเชิงพาณิชย์"
            },
            {
                title: "ความล่าช้าของตารางการเปิดตัวแท่นปล่อยจรวดใหม่ฉุดกำหนดส่งดาวเทียมวงโคจรต่ำเชิงพาณิชย์ล่าช้าออกไป",
                time: "1 วันที่แล้ว",
                impact: "bearish",
                impactText: "เชิงลบ (Bearish)",
                details: "ส่งผลกระทบต่ออัตราการเติบโตของรายได้จากบริการเครือข่ายดาวเทียมอินเทอร์เน็ตที่เปิดบริการเชิงพาณิชย์ได้ช้ากว่าเป้าหมายเดิม"
            }
        ],
        future: [
            {
                title: "การปล่อยและทดสอบดาวเทียม BlueWalker 5 ดวงถัดไปของ AST SpaceMobile (ASTS)",
                time: "คาดการณ์ไตรมาส 3 ปี 2026",
                impact: "bullish",
                impactText: "เชิงบวกสูง (Strong Bullish)",
                details: "หากวงดาวเทียมทำงานประสานกันสมบูรณ์แบบ จะเริ่มเปิดบริการบรอดแบนด์เข้ามือถือโดยตรงเชิงพาณิชย์ร่วมกับเครือข่ายสหรัฐฯ"
            },
            {
                title: "สัญญาสนับสนุนงบประมาณเพื่อสร้างนิคมวิทยาศาสตร์ดวงจันทร์เชิงพาณิชย์รอบใหม่จาก NASA",
                time: "คาดการณ์เดือนพฤศจิกายน 2026",
                impact: "volatile",
                impactText: "Binary Risk (ความผันผวนเฉพาะตัว)",
                details: "ข่าวยืนยันผู้ชนะสัมปทานจะทำให้หุ้นผู้ชนะพุ่งรุนแรง ส่วนผู้แพ้จะร่วงหนักเนื่องจากเสียโอกาสชิงงบก้อนสำคัญ"
            }
        ]
    },
    resource: {
        current: [
            {
                title: "สงครามและการคว่ำบาตรพลังงานกระตุ้นให้ชาติยุโรปเร่งสต็อกแร่อย่างแร่ยูเรเนียมและทองแดง เสริมความมั่นคงด้านพลังงานดิบและระบบสำรองไฟฟ้า",
                time: "30 นาทีที่แล้ว",
                impact: "bullish",
                impactText: "เชิงบวกสูง (Strong Bullish)",
                details: "ราคายูเรเนียมในตลาดโลกพุ่งสูงสุดในรอบปี หนุนความต้องการโรงไฟฟ้าทดแทนและวัตถุดิบต้นน้ำจากกลุ่มเหมืองแร่พันธมิตร"
            },
            {
                title: "สหรัฐฯ ประกาศเพิ่มเงินกู้พิเศษสนับสนุนห่วงโซ่อุปทานแร่ลิเธียมและโลหะหายากในประเทศ",
                time: "6 ชั่วโมงที่แล้ว",
                impact: "bullish",
                impactText: "เชิงบวก (Bullish)",
                details: "สนับสนุนเหมือง Thacker Pass ของ LAC โดยตรง ลดความเสี่ยงของการกู้ยืมและเร่งการก่อสร้างโรงแยกแร่เชิงพาณิชย์"
            },
            {
                title: "ปริมาณทองแดงคงคลังในตลาดหลักลอนดอน (LME) ร่วงต่ำสุดในรอบปี หนุนราคาสัญญาซื้อขายล่วงหน้าขยับขึ้น",
                time: "12 ชั่วโมงที่แล้ว",
                impact: "bullish",
                impactText: "เชิงบวกสูง (Strong Bullish)",
                details: "ดีมานด์สายทองแดงจากอุตสาหกรรมสายส่งพลังงานดาต้าเซ็นเตอร์หนุนราคาทองแดงดิบ ดันกำไรของยักษ์ใหญ่อย่าง Freeport-McMoRan"
            }
        ],
        future: [
            {
                title: "การเสร็จสิ้นการขยายกำลังผลิตโรงงานแม่เหล็กถาวร Neodymium ในรัฐเท็กซัสของ MP Materials",
                time: "คาดการณ์ช่วงท้ายปี 2026",
                impact: "bullish",
                impactText: "เชิงบวก (Bullish)",
                details: "การเริ่มส่งมอบวัตถุดิบไปยังโรงงานประกอบมอเตอร์ EV ของ GM จะเปลี่ยนบทบาทบริษัทจากผู้ผลิตแร่ดิบสู่ผู้แปรรูปขั้นปลายที่มีมูลค่าสูง"
            },
            {
                title: "แนวโน้มความผันผวนราคาสัญญาแร่ลิเธียมในจีน (GFEX) ท่ามกลางอุปทานลิเธียมล้นตลาดในระยะสั้น",
                time: "คาดการณ์ตลอดครึ่งปีหลัง 2026",
                impact: "bearish",
                impactText: "เชิงลบ / เฝ้าระวัง (Bearish / Watchout)",
                details: "หากราคาลิเธียมคาร์บอเนตดิบยังปรับลดลงต่อเนื่อง จะส่งผลให้อัตรากำไรขั้นต้นและเป้าหมายรายได้ของ Albemarle โดนกดดันต่อ"
            }
        ]
    },
    infra: {
        current: [
            {
                title: "ภัยคุกคามสงครามไซเบอร์ (Cyber Warfare) พุ่งเป้าทำลายระบบดาต้าเซ็นเตอร์ยุโรป เร่งยอดสั่งซื้อตู้สำรองไฟและความปลอดภัยของเครือข่าย Vertiv",
                time: "2 ชั่วโมงที่แล้ว",
                impact: "bullish",
                impactText: "เชิงบวก (Bullish)",
                details: "รัฐบาลและธนาคารเร่งลงทุนระบบโครงสร้างพื้นฐานและไฟฟ้าสำรองฉุกเฉินรับมือการหยุดชะงักของพลังงานจากวิกฤตสงคราม"
            },
            {
                title: "TSMC รายงานรายได้รายเดือนขยายตัวสูงสุดเป็นประวัติการณ์จากดีมานด์ชิปเร่งความเร็ว AI",
                time: "3 ชั่วโมงที่แล้ว",
                impact: "bullish",
                impactText: "เชิงบวกสูง (Strong Bullish)",
                details: "ยืนยันความแข็งแกร่งของความต้องการชิป AI ทั้งหมดทั่วโลก ดึงเม็ดเงินไหลเข้าหุ้นที่เป็นฐานรากหลักของเทคโนโลยี"
            },
            {
                title: "Micron รายงานยอดจองหน่วยความจำความเร็วสูง HBM3e เต็มล่วงหน้ายาวถึงสิ้นปี 2027",
                time: "5 ชั่วโมงที่แล้ว",
                impact: "bullish",
                impactText: "เชิงบวกสูง (Strong Bullish)",
                details: "ตอกย้ำสภาวะความต้องการที่ล้นตลาดของโครงสร้างพื้นฐาน AI หนุนรายได้และกำไรของกลุ่ม DRAM ให้เติบโตอย่างมั่นคงต่อเนื่องระยะยาว"
            },
            {
                title: "ปัญหาขาดแคลนระบบจ่ายไฟฟ้าของรัฐบาลในพื้นที่สร้างดาต้าเซ็นเตอร์หนาแน่นของสหรัฐฯ",
                time: "1 วันที่แล้ว",
                impact: "volatile",
                impactText: "ผลกระทบผสม (Mixed Impact)",
                details: "กดดันให้บริษัทคลาวด์ขยายสาขายากขึ้น แต่กลับกระตุ้นดีมานด์ความต้องการตู้สำรองไฟและระบบของเหลวของ Vertiv เป็นพิเศษ"
            }
        ],
        future: [
            {
                title: "การเปิดตัวและทดสอบเครื่องพิมพ์ชิปรุ่น High-NA EUV ของ ASML ในกระบวนการผลิตระดับ 2nm เชิงพาณิชย์",
                time: "คาดการณ์ปลายปี 2026",
                impact: "bullish",
                impactText: "เชิงบวกสูง (Strong Bullish)",
                details: "การเริ่มต้นใช้งานจริงจะเพิ่มความเชื่อมั่นว่าชิปเจเนอเรชันถัดไปจะผลิตได้ตามปริมาณที่ตลาดต้องการ หนุนสถานะผู้ผูกขาดตลาดเครื่องจักรของ ASML"
            },
            {
                title: "การประกาศอัตราส่วนการเก็บส่วนแบ่งค่าลิขสิทธิ์สถาปัตยกรรม ARMv9 ในชิปโน้ตบุ๊ก AI รอบใหม่",
                time: "คาดการณ์ช่วงต้นปี 2027",
                impact: "bullish",
                impactText: "เชิงบวก (Bullish)",
                details: "หากสามารถชิงส่วนแบ่งจากตลาด CPU สถาปัตยกรรม x86 เดิมของ Intel/AMD สำเร็จ จะส่งผลให้ ARM รับรายได้ต่อเนื่องระยะยาวก้าวกระโดด"
            }
        ]
    }
};

// Application state variables
let currentFilter = 'all';
let currentQueryType = 'default'; // 'default', 'tech', 'space', 'resource', 'all-surge'
let activeModalStock = null;
let currentNewsTab = 'current'; // 'current', 'future'
let currentSearchQuery = '';

// Initialize on DOM loaded
document.addEventListener('DOMContentLoaded', () => {
    initApp();
});

function initApp() {
    renderStockGrid();
    renderNewsBoard();
    updateInsightText();
    setupEventHandlers();
    simulateTickerChanges();
}

// Render the main stock cards grid
function renderStockGrid() {
    const gridContainer = document.getElementById('stockGrid');
    if (!gridContainer) return;
    gridContainer.innerHTML = '';
    
    // Collect stocks based on filters
    let stocksToRender = [];
    if (currentFilter === 'all') {
        stocksToRender = [
            ...stockDatabase.tech.map(s => ({ ...s, sector: 'tech' })),
            ...stockDatabase.space.map(s => ({ ...s, sector: 'space' })),
            ...stockDatabase.resource.map(s => ({ ...s, sector: 'resource' })),
            ...stockDatabase.infra.map(s => ({ ...s, sector: 'infra' }))
        ];
    } else {
        stocksToRender = stockDatabase[currentFilter].map(s => ({ ...s, sector: currentFilter }));
    }

    // Filter by search query
    if (currentSearchQuery) {
        const lowerSearch = currentSearchQuery.toLowerCase();
        stocksToRender = stocksToRender.filter(stock => 
            stock.ticker.toLowerCase().includes(lowerSearch) ||
            stock.name.toLowerCase().includes(lowerSearch) ||
            stock.brief.toLowerCase().includes(lowerSearch)
        );
    }
    
    stocksToRender.forEach(stock => {
        // Select price state based on query type
        let priceData;
        if (currentQueryType === 'all-surge') {
            priceData = stock.prices.surge;
        } else if (currentQueryType === 'tech' && stock.sector === 'tech') {
            priceData = stock.prices.surge;
        } else if (currentQueryType === 'space' && stock.sector === 'space') {
            priceData = stock.prices.surge;
        } else if (currentQueryType === 'resource' && stock.sector === 'resource') {
            priceData = stock.prices.surge;
        } else if (currentQueryType === 'infra' && stock.sector === 'infra') {
            priceData = stock.prices.surge;
        } else {
            // Check if others are stable or default
            priceData = (currentQueryType === 'default') ? stock.prices.default : stock.prices.stable;
        }
        
        const card = createStockCard(stock, priceData);
        gridContainer.appendChild(card);
        
        // Draw the sparkline on canvas after it is appended to DOM
        const canvas = card.querySelector('.sparkline-canvas');
        drawSparkline(canvas, priceData.chart, priceData.change >= 0);
    });
}

// Helper to calculate a consistent, realistic 52-week low for a stock based on its high
function getLow52w(ticker, high52w) {
    const high = parseFloat(high52w.replace('$', ''));
    let hash = 0;
    for (let i = 0; i < ticker.length; i++) {
        hash += ticker.charCodeAt(i);
    }
    const multiplier = 0.55 + (hash % 15) / 100; // multiplier between 0.55 and 0.70
    return '$' + (high * multiplier).toFixed(2);
}

// Create stock card element
function createStockCard(stock, priceData) {
    const card = document.createElement('div');
    card.className = `glass-card stock-card ${stock.sector}`;
    card.setAttribute('data-ticker', stock.ticker);
    card.setAttribute('data-sector', stock.sector);
    
    const isPositive = priceData.change >= 0;
    const changeSign = isPositive ? '+' : '';
    const changeClass = isPositive ? 'positive' : 'negative';
    const caretIcon = isPositive ? 'fa-caret-up' : 'fa-caret-down';
    
    // Calculate low price
    const lowPrice = getLow52w(stock.ticker, stock.stats.high52w);
    
    // Trending status badge logic
    let trendBadge = '<span class="trending-status"><i class="fa-solid fa-arrow-trend-up"></i> ทรงตัว</span>';
    if (priceData.change > 15) {
        trendBadge = '<span class="trending-status surging"><i class="fa-solid fa-bolt"></i> พุ่งทะยาน</span>';
    } else if (priceData.change > 4) {
        trendBadge = '<span class="trending-status hot"><i class="fa-solid fa-fire"></i> มาแรงวันนี้</span>';
    } else if (priceData.change < -3) {
        trendBadge = '<span class="trending-status cooling"><i class="fa-solid fa-circle-chevron-down"></i> ปรับฐาน</span>';
    }
    
    card.innerHTML = `
        <div class="card-header-stock">
            <div class="stock-ticker-group">
                <span class="stock-badge-tag">${stock.sector}</span>
                <span class="stock-ticker">${stock.ticker}</span>
                <span class="stock-name" title="${stock.name}">${stock.name}</span>
            </div>
            <div class="price-container">
                <span class="stock-price">$${priceData.current.toFixed(2)}</span>
                <span class="stock-change ${changeClass}">
                    <i class="fa-solid ${caretIcon}"></i> ${changeSign}${priceData.change.toFixed(2)}%
                </span>
                <span class="stock-range-limits">L: ${lowPrice} | H: ${stock.stats.high52w}</span>
            </div>
        </div>
        <div class="card-mid-stock">
            <p class="stock-brief">${stock.brief}</p>
            <div class="sparkline-container">
                <canvas class="sparkline-canvas" width="240" height="35"></canvas>
            </div>
        </div>
        <div class="card-footer-stock">
            ${trendBadge}
        </div>
    `;
    
    return card;
}

// Draw a elegant smooth glowing line sparkline on canvas
function drawSparkline(canvas, dataPoints, isPositive) {
    if (!canvas || !canvas.getContext) return;
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;
    
    // Clear canvas
    ctx.clearRect(0, 0, width, height);
    
    // Find min and max for scaling
    const min = Math.min(...dataPoints);
    const max = Math.max(...dataPoints);
    const range = max - min === 0 ? 1 : max - min;
    
    // Colors
    const lineColor = isPositive ? 'rgba(16, 185, 129, 1)' : 'rgba(239, 68, 68, 1)';
    const glowColor = isPositive ? 'rgba(16, 185, 129, 0.15)' : 'rgba(239, 68, 68, 0.15)';
    const gradient = ctx.createLinearGradient(0, 0, 0, height);
    gradient.addColorStop(0, glowColor);
    gradient.addColorStop(1, 'rgba(0,0,0,0)');
    
    // Map points to canvas dimensions
    const points = dataPoints.map((val, idx) => {
        const x = (idx / (dataPoints.length - 1)) * (width - 10) + 5;
        const y = height - ((val - min) / range) * (height - 10) - 5;
        return { x, y };
    });
    
    // Draw fill area
    ctx.beginPath();
    ctx.moveTo(points[0].x, height);
    points.forEach(p => ctx.lineTo(p.x, p.y));
    ctx.lineTo(points[points.length - 1].x, height);
    ctx.closePath();
    ctx.fillStyle = gradient;
    ctx.fill();
    
    // Draw smooth line using cubic bezier curve
    ctx.beginPath();
    ctx.moveTo(points[0].x, points[0].y);
    
    for (let i = 0; i < points.length - 1; i++) {
        const xc = (points[i].x + points[i + 1].x) / 2;
        const yc = (points[i].y + points[i + 1].y) / 2;
        ctx.quadraticCurveTo(points[i].x, points[i].y, xc, yc);
    }
    
    ctx.lineTo(points[points.length - 1].x, points[points.length - 1].y);
    
    ctx.strokeStyle = lineColor;
    ctx.lineWidth = 2;
    ctx.shadowColor = lineColor;
    ctx.shadowBlur = 4;
    ctx.stroke();
    
    // Reset shadow
    ctx.shadowBlur = 0;
}

// Draw a larger detailed chart in the modal
function drawModalChart(canvas, dataPoints, isPositive, valuation) {
    if (!canvas || !canvas.getContext || !dataPoints || dataPoints.length === 0) return;
    
    // Force proper drawing dimensions based on container parent
    const rect = canvas.parentNode.getBoundingClientRect();
    canvas.width = rect.width;
    canvas.height = rect.height;
    
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;
    
    ctx.clearRect(0, 0, width, height);
    
    // Scale everything relative to both dataPoints and valuation levels
    let minVal = Math.min(...dataPoints);
    let maxVal = Math.max(...dataPoints);
    
    if (valuation) {
        minVal = Math.min(minVal, valuation.supportLow, valuation.fairValue, valuation.resistance);
        maxVal = Math.max(maxVal, valuation.supportLow, valuation.fairValue, valuation.resistance);
    }
    
    // Add 8% padding top and bottom so lines don't clip the canvas edges
    const padding = (maxVal - minVal) * 0.08 || 5;
    minVal -= padding;
    maxVal += padding;
    const rangeVal = maxVal - minVal === 0 ? 1 : maxVal - minVal;
    
    const lineColor = isPositive ? '#10b981' : '#ef4444';
    const glowColor = isPositive ? 'rgba(16, 185, 129, 0.25)' : 'rgba(239, 68, 68, 0.25)';
    
    const fillGradient = ctx.createLinearGradient(0, 0, 0, height);
    fillGradient.addColorStop(0, glowColor);
    fillGradient.addColorStop(0.7, 'rgba(15, 22, 42, 0.1)');
    fillGradient.addColorStop(1, 'rgba(0,0,0,0)');
    
    // X margins: 35px left, 95px right (leaves space for price labels)
    const points = dataPoints.map((val, idx) => {
        const x = (idx / (dataPoints.length - 1)) * (width - 130) + 35;
        const y = height - ((val - minVal) / rangeVal) * (height - 40) - 20;
        return { x, y };
    });
    
    // Draw Grid lines
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.03)';
    ctx.lineWidth = 1;
    for (let i = 1; i <= 3; i++) {
        const yLine = (height / 4) * i;
        ctx.beginPath();
        ctx.moveTo(20, yLine);
        ctx.lineTo(width - 20, yLine);
        ctx.stroke();
    }
    
    if (valuation) {
        // y coordinates calculation
        const getCanvasY = (val) => height - ((val - minVal) / rangeVal) * (height - 40) - 20;
        
        const yRes = getCanvasY(valuation.resistance);
        const yFair = getCanvasY(valuation.fairValue);
        const ySupLow = getCanvasY(valuation.supportLow);
        const ySupHigh = getCanvasY(valuation.supportHigh);
        
        // 1. Draw Support Zone (transparent green rectangle)
        ctx.fillStyle = 'rgba(16, 185, 129, 0.12)';
        ctx.fillRect(35, Math.min(ySupLow, ySupHigh), width - 130, Math.abs(ySupLow - ySupHigh));
        
        // Draw Support dashed borders
        ctx.strokeStyle = 'rgba(16, 185, 129, 0.6)';
        ctx.lineWidth = 1.5;
        ctx.setLineDash([5, 4]);
        
        ctx.beginPath();
        ctx.moveTo(35, ySupLow);
        ctx.lineTo(width - 95, ySupLow);
        ctx.moveTo(35, ySupHigh);
        ctx.lineTo(width - 95, ySupHigh);
        ctx.stroke();
        
        // 2. Draw Fair Value dashed line (cyan)
        ctx.strokeStyle = 'rgba(0, 242, 254, 0.6)';
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(35, yFair);
        ctx.lineTo(width - 95, yFair);
        ctx.stroke();
        
        // 3. Draw Resistance dashed line (red)
        ctx.strokeStyle = 'rgba(239, 68, 68, 0.6)';
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(35, yRes);
        ctx.lineTo(width - 95, yRes);
        ctx.stroke();
        
        // Reset line dash and width
        ctx.setLineDash([]);
        ctx.lineWidth = 1;
        
        // Write Labels on the right side of the canvas (Right-aligned to prevent clipping)
        ctx.font = 'bold 12px Sarabun, sans-serif';
        ctx.textAlign = 'right';
        
        // Resistance label
        ctx.fillStyle = '#ef4444';
        ctx.fillText(`แนวต้าน 50W: $${valuation.resistance.toFixed(2)}`, width - 15, yRes + 4);
        
        // Fair Value label
        ctx.fillStyle = '#00f2fe';
        ctx.fillText(`ราคายุติธรรม: $${valuation.fairValue.toFixed(2)}`, width - 15, yFair + 4);
        
        // Support Zone label
        ctx.fillStyle = '#10b981';
        ctx.fillText(`แนวรับแนะนำ: $${valuation.supportLow.toFixed(2)}-$${valuation.supportHigh.toFixed(2)}`, width - 15, (ySupLow + ySupHigh) / 2 + 4);
    }
    
    // Draw fill area
    ctx.beginPath();
    ctx.moveTo(points[0].x, height);
    points.forEach(p => ctx.lineTo(p.x, p.y));
    ctx.lineTo(points[points.length - 1].x, height);
    ctx.closePath();
    ctx.fillStyle = fillGradient;
    ctx.fill();
    
    // Draw smooth line
    ctx.beginPath();
    ctx.moveTo(points[0].x, points[0].y);
    
    for (let i = 0; i < points.length - 1; i++) {
        const xc = (points[i].x + points[i + 1].x) / 2;
        const yc = (points[i].y + points[i + 1].y) / 2;
        ctx.quadraticCurveTo(points[i].x, points[i].y, xc, yc);
    }
    ctx.lineTo(points[points.length - 1].x, points[points.length - 1].y);
    
    ctx.strokeStyle = lineColor;
    ctx.lineWidth = 3;
    ctx.shadowColor = lineColor;
    ctx.shadowBlur = 8;
    ctx.stroke();
    ctx.shadowBlur = 0;
    
    // Draw interactive points with values
    points.forEach((p, idx) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, 4, 0, Math.PI * 2);
        ctx.fillStyle = '#ffffff';
        ctx.strokeStyle = lineColor;
        ctx.lineWidth = 2;
        ctx.fill();
        ctx.stroke();
        
        // Draw label text for price above each point
        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 10px Fira Code, monospace';
        ctx.textAlign = 'center';
        
        ctx.shadowColor = 'rgba(0, 0, 0, 0.9)';
        ctx.shadowBlur = 4;
        ctx.fillText(`$${dataPoints[idx].toFixed(2)}`, p.x, p.y - 12);
        ctx.shadowBlur = 0;
    });
}

// Event handler bindings
function setupEventHandlers() {
    // Real-time Instant Search
    const queryInput = document.getElementById('queryInput');
    if (queryInput) {
        queryInput.addEventListener('input', (e) => {
            currentSearchQuery = e.target.value;
            renderStockGrid();
            renderNewsBoard();
        });
    }

    // Market State Toggle Button
    const btnMarketToggle = document.getElementById('btnMarketToggle');
    if (btnMarketToggle) {
        btnMarketToggle.addEventListener('click', () => {
            const currentState = btnMarketToggle.getAttribute('data-state');
            const newState = currentState === 'default' ? 'surge' : 'default';
            btnMarketToggle.setAttribute('data-state', newState);
            
            if (newState === 'surge') {
                currentQueryType = 'all-surge';
                btnMarketToggle.innerHTML = `<i class="fa-solid fa-bolt"></i> สภาวะตลาด: ขึ้นรุนแรง (Surge)`;
                btnMarketToggle.classList.add('surge-active');
            } else {
                currentQueryType = 'default';
                btnMarketToggle.innerHTML = `<i class="fa-solid fa-chart-line"></i> สภาวะตลาด: ปกติ (Default)`;
                btnMarketToggle.classList.remove('surge-active');
            }
            
            // Update sector visual states and render
            updateSectorVisualsBasedOnState(newState);
            updateInsightText();
            renderStockGrid();
            renderNewsBoard();
        });
    }
    
    // Category Tabs click
    const tabs = document.querySelectorAll('.tab-btn');
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            currentFilter = tab.getAttribute('data-filter');
            updateInsightText();
            renderStockGrid();
            renderNewsBoard();
        });
    });
    
    // Handle click on stock cards inside stock grid
    const stockGrid = document.getElementById('stockGrid');
    if (stockGrid) {
        stockGrid.addEventListener('click', (e) => {
            const card = e.target.closest('.stock-card');
            if (card) {
                const ticker = card.getAttribute('data-ticker');
                const sector = card.getAttribute('data-sector');
                openStockModal(ticker, sector);
            }
        });
    }
    
    // Close Modal event handlers
    const modalClose = document.getElementById('modalClose');
    if (modalClose) {
        modalClose.addEventListener('click', closeModal);
    }
    const detailModal = document.getElementById('detailModal');
    if (detailModal) {
        detailModal.addEventListener('click', (e) => {
            if (e.target.id === 'detailModal') closeModal();
        });
    }
    
    // Handle Esc key to close modal
    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            const detailModalEl = document.getElementById('detailModal');
            if (detailModalEl && detailModalEl.classList.contains('active')) {
                closeModal();
            }
        }
    });

    // News Board Tabs click
    const newsTabs = document.querySelectorAll('.news-tab-btn');
    newsTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            newsTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            currentNewsTab = tab.getAttribute('data-news-tab');
            
            // Toggle active panel visibility
            const currentPanel = document.getElementById('currentNewsPanel');
            const futurePanel = document.getElementById('futureNewsPanel');
            if (currentNewsTab === 'current') {
                currentPanel.classList.add('active');
                futurePanel.classList.remove('active');
            } else {
                futurePanel.classList.add('active');
                currentPanel.classList.remove('active');
            }
            renderNewsBoard();
        });
    });
}

// Update sector visual indicators based on market state (default or surge)
function updateSectorVisualsBasedOnState(state) {
    if (state === 'surge') {
        updateSectorVisuals('tech', '+8.22%', 96, 'โมเมนตัม: พุ่งทะยานแรง');
        updateSectorVisuals('space', '+14.85%', 98, 'โมเมนตัม: พุ่งแรงขีดสุด');
        updateSectorVisuals('resource', '+4.24%', 78, 'โมเมนตัม: ฟื้นตัวก้าวกระโดด');
        updateSectorVisuals('infra', '+12.45%', 95, 'โมเมนตัม: ขยายตัวรุนแรง');
    } else {
        updateSectorVisuals('tech', '+2.45%', 85, 'โมเมนตัม: แข็งแกร่งมาก');
        updateSectorVisuals('space', '+4.89%', 92, 'โมเมนตัม: ขาขึ้นแรง');
        updateSectorVisuals('resource', '-0.12%', 48, 'โมเมนตัม: ทรงตัว / ค่อยๆ ฟื้น');
        updateSectorVisuals('infra', '+1.85%', 78, 'โมเมนตัม: ขยายตัวต่อเนื่อง');
    }
}

// Update the AI Market analysis notes dynamically based on active filter and price state
function updateInsightText() {
    const insightEl = document.getElementById('aiInsightText');
    if (!insightEl) return;
    
    const isSurge = currentQueryType === 'all-surge';
    
    let text = '';
    if (currentFilter === 'all') {
        text = isSurge 
            ? 'วิเคราะห์ผลกระทบสงครามในตะวันออกกลาง: กระตุ้นการไหลเข้าของเงินทุนสู่หุ้นกลาโหม (PLTR, ASTS) และความมั่นคงด้านพลังงานสำรอง ดันราคาแร่น้ำมันดิบ/ทองแดงพุ่งสูง ท่ามกลางหุ้นชิปเทคโนโลยีใหญ่ที่ผันผวนจากเงินเฟ้อน้ำมัน' 
            : 'ภาพรวมตลาด NASDAQ ปิดตัวทรงตัวในแดนบวก มีการหมุนเวียนกลุ่มเงินทุนจากอวกาศกลับเข้าหุ้นกลุ่มโครงสร้างพื้นฐานที่มีปัจจัยพื้นฐานรองรับ นักลงทุนเฝ้ารอการแถลงงบประมาณ Big Tech';
    } else if (currentFilter === 'tech') {
        text = isSurge
            ? 'สงครามไซเบอร์และความมั่นคงทางทหารกระตุ้นให้รัฐบาลอนุมัติสัญญาซื้อซอฟต์แวร์ AI สมรภูมิรบล่วงหน้าของ Palantir (PLTR) พุ่งประวัติศาสตร์ ท่ามกลางชิปเทคโนโลยีอื่นๆ ที่เผชิญความเสี่ยงทางภูมิรัฐศาสตร์'
            : 'หุ้นเทคโนโลยีทรงตัวในระดับสูง นำโดย NVIDIA และ Palantir นักลงทุนรอดูผลตอบรับเชิงพาณิชย์ของโมเดล AI ใหม่ในอุตสาหกรรมซอฟต์แวร์';
    } else if (currentFilter === 'space') {
        text = isSurge
            ? 'การสู้รบและตัดสัญญาณสื่อสารในสมรภูมิเร่งรัดให้ดาวเทียมวิทยุเชิงยุทธวิธีทางทหารและการระบุพิกัดภาคพื้นดินของ AST SpaceMobile และระบบป้องกันขีปนาวุธ Lockheed Martin ถูกใช้งานเต็มพิกัด'
            : 'กลุ่มอวกาศเคลื่อนไหวในกรอบขาขึ้นอย่างค่อยเป็นค่อยไป สัญญาระยะยาวกับกระทรวงกลาโหมสหรัฐฯ และพันธมิตรเครือข่ายโทรศัพท์เคลื่อนที่ให้การสนับสนุนที่มั่นคง';
    } else if (currentFilter === 'resource') {
        text = isSurge
            ? 'การคว่ำบาตรทางพลังงานและปิดช่องแคบฮอร์มุซดันราคาน้ำมันขึ้นแตะ $98 ส่งผลให้ชาติตะวันตกเร่งเพิ่มคลังทองแดงดิบและแร่ยูเรเนียม (FCX) เพื่อประกันความมั่นคงโครงข่ายไฟฟ้าและความร้อนนิวเคลียร์อย่างเร่งด่วน'
            : 'ราคาทรัพยากรทรงตัวในระดับปานกลาง ตลาดสะท้อนความตึงเครียดของปริมาณแร่ลิเธียมทั่วโลก โดยมีกำลังซื้อรอฟื้นตัวจากผู้ผลิตแบตเตอรี่ในฝั่งตะวันตก';
    } else if (currentFilter === 'infra') {
        text = isSurge
            ? 'ความกังวลการโจมตีระบบไฟฟ้าดาต้าเซ็นเตอร์ AI ในยุโรป หนุนดีความต้องการระบบจ่ายไฟสำรองฉุกเฉินและระบบระบายความร้อนของ Vertiv (VRT) ทะยานขึ้นสูงสุดเป็นประวัติการณ์ รับมือความผันผวนด้านการจ่ายไฟสงคราม'
            : 'หุ้นฐานรากบริษัทใหญ่ TSM และ ASML เคลื่อนไหวทรงตัวแข็งแกร่ง มีฐานรายได้มั่นคงจากการเป็นผู้ผูกขาดอุปกรณ์เครื่องฉายแสง EUV และกำลังการผลิตชิปประสิทธิภาพสูง';
    }
    
    insightEl.textContent = text;
}

function updateSectorVisuals(sectorId, perfText, barWidth, metaText) {
    const perfEl = document.getElementById(`${sectorId}Perf`);
    const barEl = document.getElementById(`${sectorId}Bar`);
    const metaEl = document.getElementById(`${sectorId}Meta`);
    
    if (perfEl) {
        perfEl.textContent = perfText;
        if (perfText.startsWith('+')) {
            perfEl.className = 'sector-perf positive';
        } else {
            perfEl.className = 'sector-perf negative';
        }
    }
    if (barEl) barEl.style.width = `${barWidth}%`;
    if (metaEl) metaEl.textContent = `${metaEl.textContent.split('|')[0]}| ${metaText}`;
}

// Calculate Fair Value, Support, and 50W Resistance dynamically
function getStockValuation(stock, currentPrice) {
    const high52wNum = parseFloat(stock.stats.high52w.replace('$', '')) || currentPrice * 1.1;
    
    let resistance = high52wNum;
    if (currentPrice * 1.02 >= resistance) {
        resistance = currentPrice * 1.08;
    }
    
    let fairValue = currentPrice * 0.95;
    if (currentQueryType === 'all-surge') {
        fairValue = currentPrice * 0.92;
    }
    
    const supportLow = currentPrice * 0.86;
    const supportHigh = currentPrice * 0.90;
    
    return {
        fairValue: Math.round(fairValue * 100) / 100,
        supportLow: Math.round(supportLow * 100) / 100,
        supportHigh: Math.round(supportHigh * 100) / 100,
        resistance: Math.round(resistance * 100) / 100
    };
}

// Open detail modal for selected stock
function openStockModal(ticker, sector) {
    const stock = stockDatabase[sector].find(s => s.ticker === ticker);
    if (!stock) return;
    
    activeModalStock = stock;
    
    const modal = document.getElementById('detailModal');
    const modalBadge = document.getElementById('modalBadge');
    const modalTicker = document.getElementById('modalTicker');
    const modalName = document.getElementById('modalName');
    const modalPrice = document.getElementById('modalPrice');
    const modalChange = document.getElementById('modalChange');
    
    // Choose appropriate price state
    let priceData;
    if (currentQueryType === 'all-surge') {
        priceData = stock.prices.surge;
    } else if (currentQueryType === sector) {
        priceData = stock.prices.surge;
    } else {
        priceData = (currentQueryType === 'default') ? stock.prices.default : stock.prices.stable;
    }
    
    // Color code and theme modal based on category
    modalBadge.textContent = sector;
    modalBadge.className = 'modal-badge';
    if (sector === 'tech') modalBadge.style.background = 'rgba(0, 242, 254, 0.15)', modalBadge.style.color = 'var(--color-tech)';
    if (sector === 'space') modalBadge.style.background = 'rgba(168, 85, 247, 0.15)', modalBadge.style.color = 'var(--color-space)';
    if (sector === 'resource') modalBadge.style.background = 'rgba(16, 185, 129, 0.15)', modalBadge.style.color = 'var(--color-resource)';
    if (sector === 'infra') modalBadge.style.background = 'rgba(249, 115, 22, 0.15)', modalBadge.style.color = 'var(--color-infra)';
    
    modalTicker.textContent = stock.ticker;
    modalName.textContent = stock.name;
    modalPrice.textContent = `$${priceData.current.toFixed(2)}`;
    
    const isPositive = priceData.change >= 0;
    const changeSign = isPositive ? '+' : '';
    modalChange.textContent = `${changeSign}${priceData.change.toFixed(2)}%`;
    modalChange.className = `modal-change ${isPositive ? 'positive' : 'negative'}`;
    
    // Update stats
    const lowPrice = getLow52w(stock.ticker, stock.stats.high52w);
    const lowVal = parseFloat(lowPrice.replace('$', ''));
    const highVal = parseFloat(stock.stats.high52w.replace('$', ''));
    const midVal = (lowVal + highVal) / 2;
    
    document.getElementById('statMarketCap').textContent = stock.stats.marketCap;
    document.getElementById('statPE').textContent = stock.stats.pe;
    document.getElementById('statVolume').textContent = stock.stats.volume;
    document.getElementById('statLow').textContent = lowPrice;
    document.getElementById('statMid').textContent = `$${midVal.toFixed(2)}`;
    document.getElementById('statHigh').textContent = stock.stats.high52w;
    
    // Update valuation fields
    const valuation = getStockValuation(stock, priceData.current);
    document.getElementById('valFairValue').textContent = `$${valuation.fairValue.toFixed(2)}`;
    document.getElementById('valSupportZone').textContent = `$${valuation.supportLow.toFixed(2)} - $${valuation.supportHigh.toFixed(2)}`;
    document.getElementById('valResistance').textContent = `$${valuation.resistance.toFixed(2)}`;
    
    // Update range bar
    const low = lowVal;
    const high = highVal;
    const current = priceData.current;
    
    document.getElementById('rangeLow').textContent = lowPrice;
    document.getElementById('rangeCurrent').textContent = `$${current.toFixed(2)}`;
    document.getElementById('rangeHigh').textContent = stock.stats.high52w;
    
    let percent = ((current - low) / (high - low)) * 100;
    percent = Math.min(Math.max(percent, 0), 100); // clamp 0-100
    document.getElementById('rangeMarker').style.left = `${percent}%`;
    
    // Update analysis
    document.getElementById('modalAnalysisText').textContent = stock.analysis;
    
    // Populate news list
    const newsList = document.getElementById('modalNewsList');
    newsList.innerHTML = '';
    stock.news.forEach(n => {
        const li = document.createElement('li');
        li.className = 'modal-news-item';
        const linkUrl = n.url || `https://www.google.com/search?q=${encodeURIComponent(n.title + ' ' + n.source)}`;
        li.innerHTML = `
            <div class="news-meta">
                <span class="news-source">${n.source}</span>
                <span class="news-time">${n.time}</span>
            </div>
            <a href="${linkUrl}" target="_blank" rel="noopener noreferrer" class="news-title">
                ${n.title} <i class="fa-solid fa-arrow-up-right-from-square" style="font-size: 10px; margin-left: 4px; opacity: 0.6; color: var(--color-tech);"></i>
            </a>
        `;
        newsList.appendChild(li);
    });
    
    // Open modal
    modal.classList.add('active');
    
    // Draw chart (need a slight timeout so canvas layout is updated and clientWidth is calculated properly)
    setTimeout(() => {
        const canvas = document.getElementById('modalChartCanvas');
        drawModalChart(canvas, priceData.chart, isPositive, valuation);
    }, 80);
}

function closeModal() {
    const modal = document.getElementById('detailModal');
    if (modal) modal.classList.remove('active');
    activeModalStock = null;
}

// Simulate small fluctuations in the top Nasdaq live ticker
function simulateTickerChanges() {
    setInterval(() => {
        const tickerTrack = document.getElementById('tickerTrack');
        if (!tickerTrack) return;
        
        // Randomly modify index values slightly
        const tickerItems = tickerTrack.querySelectorAll('.ticker-item');
        tickerItems.forEach(item => {
            const valEl = item.querySelector('.ticker-val');
            if (!valEl) return;
            
            const isPositive = valEl.classList.contains('positive');
            let changeVal = parseFloat(valEl.textContent.replace(/[^0-9.-]/g, ''));
            
            // Random fluctuation (-0.05% to +0.05%)
            const fluctuation = (Math.random() * 0.1 - 0.05);
            
            if (valEl.textContent.includes('%')) {
                // If it is percentage, update percentage
                const match = valEl.textContent.match(/([+-]?[0-9.]+)\%/);
                if (match) {
                    let currentPerc = parseFloat(match[1]);
                    currentPerc += fluctuation;
                    const cleanPercSign = currentPerc >= 0 ? '+' : '';
                    
                    // Simple replacement
                    if (valEl.textContent.includes('IXIC') || valEl.textContent.includes('NDX')) {
                        // Numeric index representation
                        let base = valEl.textContent.split(' ')[0];
                        let num = parseFloat(base.replace(/,/g, ''));
                        num += num * (fluctuation / 100);
                        const numStr = num.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
                        valEl.innerHTML = `${numStr} ${cleanPercSign}${currentPerc.toFixed(2)}% <i class="fa-solid ${currentPerc >= 0 ? 'fa-caret-up' : 'fa-caret-down'}"></i>`;
                        valEl.className = `ticker-val ${currentPerc >= 0 ? 'positive' : 'negative'}`;
                    } else {
                        valEl.innerHTML = `${cleanPercSign}${currentPerc.toFixed(2)}% <i class="fa-solid ${currentPerc >= 0 ? 'fa-caret-up' : 'fa-caret-down'}"></i>`;
                        valEl.className = `ticker-val ${currentPerc >= 0 ? 'positive' : 'negative'}`;
                    }
                }
            }
        });
    }, 4000);
}

// Render News and Future Catalysts in the main dashboard
function renderNewsBoard() {
    const activePanelId = currentNewsTab === 'current' ? 'currentNewsPanel' : 'futureNewsPanel';
    const panel = document.getElementById(activePanelId);
    if (!panel) return;
    
    // Clear other panel just in case
    const inactivePanelId = currentNewsTab === 'current' ? 'futureNewsPanel' : 'currentNewsPanel';
    const inactivePanel = document.getElementById(inactivePanelId);
    if (inactivePanel) inactivePanel.innerHTML = '';
    
    panel.innerHTML = '';
    
    const newsItems = getNewsForCategory(currentFilter, currentNewsTab);
    
    let filteredNews = [...newsItems];
    if (currentSearchQuery) {
        const lowerSearch = currentSearchQuery.toLowerCase();
        filteredNews = filteredNews.filter(item => 
            item.title.toLowerCase().includes(lowerSearch) || 
            item.details.toLowerCase().includes(lowerSearch)
        );
    }
    
    if (filteredNews.length === 0) {
        panel.innerHTML = '<div class="no-news-placeholder">ไม่มีข้อมูลข่าวสารในกลุ่มนี้</div>';
        return;
    }
    
    filteredNews.forEach(item => {
        const itemEl = document.createElement('div');
        itemEl.className = 'news-item';
        
        const sectorName = item.sector || currentFilter;
        
        let impactClass = 'volatile';
        let impactIcon = 'fa-circle-dot';
        if (item.impact === 'bullish') {
            impactClass = 'bullish';
            impactIcon = 'fa-caret-up';
        } else if (item.impact === 'bearish') {
            impactClass = 'bearish';
            impactIcon = 'fa-caret-down';
        }
        
        const linkUrl = item.url || `https://www.google.com/search?q=${encodeURIComponent(item.title + ' ' + (item.source || ''))}`;
        itemEl.innerHTML = `
            <div class="news-meta-row">
                <div class="news-meta-left">
                    <span class="news-badge ${sectorName}">${sectorName}</span>
                    <span class="news-time"><i class="fa-regular fa-clock"></i> ${item.time}</span>
                </div>
                <span class="impact-badge ${impactClass}">
                    <i class="fa-solid ${impactIcon}"></i> ${item.impactText}
                </span>
            </div>
            <h4 class="news-headline">
                <a href="${linkUrl}" target="_blank" rel="noopener noreferrer" class="news-headline-link">
                    ${item.title} <i class="fa-solid fa-arrow-up-right-from-square" style="font-size: 10px; margin-left: 4px; opacity: 0.6; color: var(--color-tech);"></i>
                </a>
            </h4>
            <div class="news-impact-details ${impactClass}">
                <strong><i class="fa-solid fa-circle-info"></i> ปัจจัยผลกระทบราคาหุ้น:</strong> ${item.details}
            </div>
        `;
        panel.appendChild(itemEl);
    });
}

function getNewsForCategory(category, tab) {
    if (category !== 'all') {
        return newsDatabase[category] ? newsDatabase[category][tab] : [];
    }
    
    // Merge all
    let merged = [];
    Object.keys(newsDatabase).forEach(cat => {
        const list = newsDatabase[cat][tab] || [];
        list.forEach(item => {
            merged.push({ ...item, sector: cat });
        });
    });
    return merged;
}
