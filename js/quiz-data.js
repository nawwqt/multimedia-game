const quizQuestions = [
  { question: "Komponen yang disebut sebagai 'otak' komputer adalah?", options: ["RAM","Processor (CPU)","Harddisk","Motherboard"], correct: 1, explanation: "Processor (CPU) disebut otak komputer karena memproses semua instruksi dan perhitungan." },
  { question: "Apa fungsi utama dari RAM?", options: ["Menyimpan data permanen","Menyimpan data sementara yang sedang diproses","Menampilkan gambar ke monitor","Mengkonversi arus listrik"], correct: 1, explanation: "RAM menyimpan data sementara yang sedang aktif diproses oleh CPU." },
  { question: "Jenis penyimpanan yang menggunakan piringan magnetik berputar?", options: ["SSD","RAM","HDD (Harddisk)","Flash Drive"], correct: 2, explanation: "HDD menggunakan piringan magnetik (platter) berputar pada kecepatan tinggi." },
  { question: "Apa kepanjangan dari GPU?", options: ["General Processing Unit","Graphics Processing Unit","Global Power Unit","Graphic Pixel Utility"], correct: 1, explanation: "GPU = Graphics Processing Unit, komponen pemroses data grafis." },
  { question: "Komponen yang mengubah arus AC menjadi DC?", options: ["Motherboard","UPS","Power Supply (PSU)","Stabilizer"], correct: 2, explanation: "PSU mengkonversi arus AC menjadi DC untuk komponen komputer." },
  { question: "Motherboard berfungsi sebagai?", options: ["Penyimpan data","Penghubung semua komponen","Pengolah grafis","Sumber daya listrik"], correct: 1, explanation: "Motherboard menghubungkan dan mengintegrasikan semua komponen komputer." },
  { question: "VRAM pada VGA Card adalah singkatan dari?", options: ["Virtual RAM","Video Random Access Memory","Visual RAM","Volatile RAM"], correct: 1, explanation: "VRAM = Video RAM, memori khusus GPU untuk texture dan framebuffer." },
  { question: "Mana yang lebih cepat membaca data?", options: ["HDD SATA","SSD NVMe","Floppy Disk","CD-ROM"], correct: 1, explanation: "SSD NVMe hingga 7000 MB/s, jauh lebih cepat dari HDD (80-160 MB/s)." },
  { question: "Keyboard dengan switch mekanik individual disebut?", options: ["Membrane Keyboard","Mechanical Keyboard","Virtual Keyboard","Touchscreen Keyboard"], correct: 1, explanation: "Mechanical keyboard menggunakan switch individual untuk feedback taktil lebih baik." },
  { question: "Panel monitor tanpa backlight adalah?", options: ["IPS","VA","TN","OLED"], correct: 3, explanation: "OLED tidak perlu backlight karena setiap pixel menghasilkan cahaya sendiri." },
  { question: "Apa yang dilakukan BIOS saat komputer dinyalakan?", options: ["Menjalankan antivirus","POST (Power-On Self Test)","Membuka browser","Menginstal driver"], correct: 1, explanation: "BIOS melakukan POST untuk memeriksa semua komponen hardware." },
  { question: "Kecepatan putar piringan HDD umumnya?", options: ["1000 RPM","3600 RPM","5400-7200 RPM","15000 RPM"], correct: 2, explanation: "HDD umumnya 5400 RPM (laptop) atau 7200 RPM (desktop)." },
  { question: "Sensor mouse optik bekerja dengan?", options: ["Bola berputar","Menangkap gambar permukaan ribuan kali/detik","Mengukur tekanan","Gelombang suara"], correct: 1, explanation: "Sensor CMOS menangkap ribuan gambar per detik dari permukaan." },
  { question: "DDR5 adalah generasi terbaru dari?", options: ["Processor","VGA Card","RAM","SSD"], correct: 2, explanation: "DDR5 adalah generasi terbaru teknologi RAM." },
  { question: "Fungsi chipset pada motherboard?", options: ["Menghasilkan suara","Mengatur lalu lintas data antar komponen","Menyimpan file","Menampilkan gambar"], correct: 1, explanation: "Chipset mengatur lalu lintas data antara processor, memori, dan I/O." }
];

const testimonials = [
  { name: "Ahmad Fajar", role: "Siswa SMK Teknik Komputer", avatar: "AF", text: "Website ini sangat membantu saya memahami komponen komputer. Animasi dan quiz interaktifnya membuat belajar jadi menyenangkan!", rating: 5 },
  { name: "Siti Nurhaliza", role: "Mahasiswa Teknik Informatika", avatar: "SN", text: "Penjelasan lengkap dan visual menarik. Sangat cocok untuk mahasiswa yang baru belajar arsitektur komputer.", rating: 5 },
  { name: "Budi Santoso", role: "Guru TIK SMA", avatar: "BS", text: "Saya menggunakan website ini sebagai media pembelajaran di kelas. Siswa jadi lebih antusias belajar hardware!", rating: 5 },
  { name: "Dewi Lestari", role: "Pengguna Pemula", avatar: "DL", text: "Akhirnya ada website yang menjelaskan hardware dengan bahasa mudah dipahami. Sebagai pemula, saya sangat terbantu.", rating: 4 },
  { name: "Rizky Pratama", role: "Mahasiswa Sistem Informasi", avatar: "RP", text: "Fitur interaktifnya luar biasa! Bisa klik langsung komponen dan lihat penjelasannya. Recommended!", rating: 5 },
  { name: "Putri Amelia", role: "Siswa SMK RPL", avatar: "PA", text: "Quiz-nya bikin ketagihan! Sudah mengerjakan berulang kali sampai skor sempurna. Media pembelajaran yang efektif.", rating: 5 }
];
