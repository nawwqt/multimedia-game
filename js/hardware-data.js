const hardwareData = [
  {
    id: "motherboard", name: "Motherboard",
    shortDesc: "Papan sirkuit utama yang menghubungkan semua komponen komputer.",
    icon: "fas fa-microchip", color: "#2563eb",
    fullDesc: "Motherboard adalah papan sirkuit utama (PCB) yang menjadi fondasi dari sebuah komputer. Berfungsi sebagai penghubung utama antara semua komponen hardware, mulai dari processor, RAM, kartu grafis, hingga perangkat penyimpanan.",
    fungsi: ["Menghubungkan semua komponen komputer","Mendistribusikan daya listrik","Menyediakan jalur komunikasi data (bus)","Menyediakan slot ekspansi","Menyimpan firmware BIOS/UEFI"],
    caraKerja: "Motherboard menyediakan jalur konduktif (traces) yang menghubungkan komponen. Chipset mengatur lalu lintas data antara processor, memori, dan perangkat I/O. Saat dinyalakan, BIOS/UEFI melakukan POST (Power-On Self Test) sebelum memuat sistem operasi.",
    videoUrl: "https://www.youtube.com/embed/b2pd3Y6aBag",
    specs: ["Form Factor: ATX, Micro-ATX, Mini-ITX","Socket: LGA 1700, AM5","Chipset: Intel Z790, AMD X670","RAM Slots: 2-4 DIMM","PCIe Slots: x16, x4, x1"]
  },
  {
    id: "processor", name: "Processor (CPU)",
    shortDesc: "Otak komputer yang memproses semua instruksi dan perhitungan.",
    icon: "fas fa-brain", color: "#dc2626",
    fullDesc: "Processor atau CPU (Central Processing Unit) adalah komponen utama yang memproses semua instruksi dan perhitungan. CPU sering disebut sebagai otak komputer karena perannya yang vital dalam menjalankan program dan sistem operasi.",
    fungsi: ["Memproses semua instruksi program","Melakukan operasi aritmatika dan logika","Mengontrol aliran data dalam sistem","Menjalankan miliaran instruksi per detik","Mengelola memori cache"],
    caraKerja: "CPU bekerja melalui siklus fetch-decode-execute. CPU mengambil instruksi dari memori, menerjemahkannya, lalu menjalankannya melalui ALU. Proses ini terjadi miliaran kali per detik sesuai kecepatan clock (GHz).",
    videoUrl: "https://www.youtube.com/embed/vqs_0W-MSB0",
    specs: ["Cores: 4-24 cores","Clock: 3.0-5.8 GHz","Cache: L1, L2, L3","TDP: 65W-125W","Arsitektur: x86-64"]
  },
  {
    id: "ram", name: "RAM",
    shortDesc: "Memori sementara untuk menyimpan data yang sedang diproses.",
    icon: "fas fa-memory", color: "#059669",
    fullDesc: "RAM (Random Access Memory) adalah memori utama komputer yang bersifat volatile (sementara). Digunakan untuk menyimpan data dan instruksi yang sedang aktif digunakan oleh processor.",
    fungsi: ["Menyimpan data sementara untuk CPU","Mempercepat akses data","Menyimpan program yang aktif","Memfasilitasi multitasking","Menyimpan data real-time"],
    caraKerja: "RAM menyimpan data dalam sel memori tersusun baris dan kolom. Setiap sel memiliki alamat unik untuk akses acak yang sangat cepat. Data di RAM hilang saat komputer dimatikan.",
    videoUrl: "https://www.youtube.com/embed/PVad0c2cljo",
    specs: ["Tipe: DDR4, DDR5","Kapasitas: 4GB-128GB","Kecepatan: 2400-6400 MHz","Latency: CL14-CL40","Voltage: 1.1V-1.35V"]
  },
  {
    id: "harddisk", name: "Harddisk / SSD",
    shortDesc: "Media penyimpanan permanen untuk data, file, dan sistem operasi.",
    icon: "fas fa-hdd", color: "#7c3aed",
    fullDesc: "Harddisk (HDD) dan SSD (Solid State Drive) adalah media penyimpanan permanen. HDD menggunakan piringan magnetik berputar, sedangkan SSD menggunakan chip memori flash yang lebih cepat.",
    fungsi: ["Menyimpan OS dan program","Menyimpan file dan dokumen","Menyediakan virtual memory","Menyimpan data backup","Menyimpan game dan aplikasi"],
    caraKerja: "HDD memutar piringan magnetik pada 5400-7200 RPM. Head baca/tulis membaca data dalam pola magnetik. SSD menggunakan chip NAND flash tanpa komponen bergerak, jauh lebih cepat.",
    videoUrl: "https://www.youtube.com/embed/wtdnatmVdIg",
    specs: ["HDD: 500GB-20TB","SSD: 120GB-8TB","HDD Speed: 80-160 MB/s","SSD SATA: 500 MB/s","SSD NVMe: 3500-7000 MB/s"]
  },
  {
    id: "vga", name: "VGA Card (GPU)",
    shortDesc: "Kartu grafis yang memproses dan menampilkan visual ke monitor.",
    icon: "fas fa-desktop", color: "#ea580c",
    fullDesc: "VGA Card atau GPU (Graphics Processing Unit) memproses data grafis dan menampilkan output visual ke monitor. Digunakan untuk gaming, desain grafis, video editing, dan machine learning.",
    fungsi: ["Merender grafis 2D dan 3D","Memproses grafis game","Akselerasi video encoding","Komputasi paralel untuk AI","Akselerasi desain grafis"],
    caraKerja: "GPU memiliki ribuan core kecil yang bekerja paralel. Data grafis diproses melalui pipeline: vertex processing, rasterization, pixel shading, dan output. Hasil dikirim ke monitor via HDMI/DisplayPort.",
    videoUrl: "https://www.youtube.com/embed/SrAMBi_8tIk",
    specs: ["VRAM: 4GB-24GB GDDR6X","CUDA Cores: 2000-16000+","Clock: 1.5-2.5 GHz","TDP: 75W-450W","Output: HDMI, DisplayPort"]
  },
  {
    id: "power-supply", name: "Power Supply (PSU)",
    shortDesc: "Sumber daya yang mengubah arus listrik AC menjadi DC untuk komputer.",
    icon: "fas fa-bolt", color: "#ca8a04",
    fullDesc: "Power Supply Unit (PSU) mengubah arus listrik bolak-balik (AC) menjadi arus searah (DC) yang dibutuhkan komponen komputer.",
    fungsi: ["Mengkonversi AC menjadi DC","Mendistribusikan daya","Melindungi dari lonjakan listrik","Menjaga stabilitas tegangan","Sirkulasi udara via kipas"],
    caraKerja: "PSU menerima AC 220V dan mengkonversinya melalui rectification dan regulation. Menghasilkan tegangan +3.3V, +5V, dan +12V. Teknologi switching memberikan efisiensi tinggi (80+).",
    videoUrl: "https://www.youtube.com/embed/i9ZnaA8DZDs",
    specs: ["Watt: 400W-1600W","Sertifikasi: 80+ Bronze/Gold/Platinum","Tipe: Full/Semi/Non Modular","Tegangan: +3.3V, +5V, +12V","Konektor: ATX 24-pin, EPS 8-pin"]
  },
  {
    id: "keyboard", name: "Keyboard",
    shortDesc: "Perangkat input utama untuk mengetik dan memberikan perintah.",
    icon: "fas fa-keyboard", color: "#0891b2",
    fullDesc: "Keyboard adalah perangkat input utama untuk memasukkan data berupa teks, angka, dan perintah. Tersedia dalam tipe membrane, mechanical, dan optical.",
    fungsi: ["Memasukkan teks dan angka","Memberikan perintah dan shortcut","Mendukung layout multibahasa","Kontrol multimedia","Fitur macro dan RGB"],
    caraKerja: "Switch di bawah keycap menghubungkan sirkuit saat ditekan, mengirimkan sinyal elektrik. Controller mengkonversi posisi tombol menjadi scan code yang dikirim via USB atau wireless.",
    videoUrl: "https://www.youtube.com/embed/h-NM1xSSzHQ",
    specs: ["Tipe: Mechanical, Membrane","Switch: Cherry MX, Gateron","Layout: Full, TKL, 75%, 60%","Koneksi: USB, Bluetooth","Fitur: RGB, Hot-swap, Macro"]
  },
  {
    id: "mouse", name: "Mouse",
    shortDesc: "Perangkat input untuk mengontrol pointer dan interaksi di layar.",
    icon: "fas fa-mouse-pointer", color: "#be185d",
    fullDesc: "Mouse mengontrol pointer pada layar monitor, memungkinkan interaksi dengan GUI melalui gerakan, klik, scroll, dan gesture.",
    fungsi: ["Mengontrol pointer pada layar","Memilih dan membuka objek","Scroll halaman","Drag and drop","Input presisi untuk gaming"],
    caraKerja: "Mouse optik menggunakan LED/laser yang menyinari permukaan. Sensor CMOS menangkap ribuan gambar per detik untuk mendeteksi gerakan. Data dikirim sebagai koordinat X dan Y.",
    videoUrl: "https://www.youtube.com/embed/SAaESb4wTCM",
    specs: ["Sensor: Optical, Laser","DPI: 400-25600","Polling Rate: 125-8000 Hz","Koneksi: USB, Bluetooth","Berat: 50g-120g"]
  },
  {
    id: "monitor", name: "Monitor",
    shortDesc: "Perangkat output yang menampilkan informasi visual dari komputer.",
    icon: "fas fa-tv", color: "#4f46e5",
    fullDesc: "Monitor menampilkan informasi visual berupa teks, gambar, dan video. Menggunakan teknologi IPS, VA, dan OLED dengan resolusi tinggi.",
    fungsi: ["Menampilkan output visual GUI","Menampilkan video multimedia","Menampilkan grafis game","Menampilkan warna akurat","Menampilkan data real-time"],
    caraKerja: "LCD/LED menggunakan kristal cair antara dua polarizer. Backlight LED menyinari panel dari belakang. Sinyal GPU mengontrol orientasi kristal pada setiap pixel. OLED menghasilkan cahaya sendiri tanpa backlight.",
    videoUrl: "https://www.youtube.com/embed/jiejNAUwcQ8",
    specs: ["Ukuran: 21-34 inch","Resolusi: FHD, QHD, 4K","Panel: IPS, VA, OLED","Refresh Rate: 60-360 Hz","Response Time: 1-5ms"]
  }
];
