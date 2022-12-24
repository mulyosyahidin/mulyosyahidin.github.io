const config = {
  fullName: "Martin Mulyo Syahidin",
  shortName: "Martin",
  roleName: "Back-End Developer",
  year: "2023",
  socialLinks: [
    {
      name: "Github",
      url: "https://github.com/mulyosyahidin",
      icon: "github",
      title: "Github @mulyosyahidin",
    },
    {
      name: "Facebook",
      url: "https://www.facebook.com/mt.maytin",
      icon: "facebook",
      title: "Facebook @mt.maytin",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/mul.yoo",
      icon: "instagram",
      title: "Instagram @mul.yoo",
    },
    {
      name: "Linked In",
      url: "https://www.linkedin.com/in/martin-mulyo-syahidin-548222216/",
      icon: "linked-in",
      title: "Linked In @martin-mulyo-syahidin-548222216",
    },
    {
      name: "Personal Blog",
      url: "https://jurnalmms.web.id",
      icon: "wordpress",
      title: "Jurnal MMS Blog",
    },
    {
      name: "Email",
      url: "mailto:mulyosyahidin95@gmail.com",
      icon: "email",
      title: "Email me",
    },
  ],
  tools: [
    {
      name: "Laravel",
      icon: "Laravel",
    },
    {
      name: "CodeIgniter",
      icon: "codeigniter",
    },
    {
      name: "Node JS",
      icon: "js",
    },
    {
      name: "MySQL",
      icon: "database",
    },
    {
      name: "React JS",
      icon: "react",
    },
    {
      name: "Flutter",
      icon: "android",
    },
    {
      name: "Ubuntu Server",
      icon: "ubuntu",
    },
    {
      name: "WordPress",
      icon: "wordpress",
    },
  ],
  projects: [
    {
      id: "1",
      title: "Vocasia.id - Learning Management System & Education Marketplace",
      description:
        "Vocasia.id merupakan layanan learning management system dan education marketplace berbasis komunitas yang sudah eksis sejak 2015 yang menyediakan pelatihan untuk peningkatan keterampilan individu. Project ini mengembangkan back-end layanan menggunakan framework CodeIgniter 4 dan menyediakan API yang akan dikonsumsi oleh front-end web (React.js based) dan mobile (Flutter based).",
      featuredImage: "https://via.placeholder.com/150x100",
      url: ["https://vocasia.id"],
      startDate: "2022-02-14",
      endDate: "2022-07-14",
      tags: [
        "Education Marketplace",
        "Learning Management System",
        "Web Service",
      ],
      client: "Vocasia.id",
      roles: ["Backend Developer"],
      responsibilities: [
        "Menerjemahkan proses bisnis yang diberikan manajemen menjadi rancangan sistem",
        "Mengembangkan REST API untuk kebutuhan front-end web dan mobile",
        "Membuat dan mengimplementasikan unit test untuk memastikan program yang dibuat sesuai dengan rancangan yang telah dibuat.",
        "Membuat dan mengimplementasikan dokumentasi API yang akan dikonsumsi oleh front-end web dan mobile.",
      ],
      technologies: ["PHP", "MySQL", "CodeIgniter 4", "REST API"],
    },
    {
      id: "2",
      title: "HerAI - Bank Sampah Online berbasis AI",
      description:
        "HerAI merupakan aplikasi mobile berbasis Android dan iOS yang berfokus pada isu lingkungan dan pengelolaan sampah di kota Malang, Jawa Timur. Project ini mengembangkan back-end layanan menggunakan framework Laravel 8 dan menyediakan API yang akan dikonsumsi oleh front-end mobile (Flutter based), kemudian membangun landing page untuk promosi aplikasi dan deployment ke server berbasis Google Cloud.",
      featuredImage: "https://via.placeholder.com/150x100",
      url: [
        "https://appherai.com",
        "https://play.google.com/store/apps/details?id=com.herai.app",
      ],
      startDate: "2022-08-16",
      endDate: "2022-11-16",
      tags: [
        "Landing Page",
        "Mobile Application",
        "Server Administration",
        "Web Service",
      ],
      client: "HerAI Team",
      roles: ["Backend Developer", "Cloud Engineer"],
      responsibilities: [
        "Menerjemahkan proses bisnis menjadi rancangan sistem",
        "Membuat dan mengimplementasikan unit test untuk memastikan program yang dibuat sesuai dengan rancangan yang telah dibuat.",
        "Membuat dan mengimplementasikan dokumentasi API yang akan dikonsumsi oleh front-end mobile.",
        "Membangun landing page untuk promosi aplikasi menggunakan framework Laravel 8 dan database MySQL.",
        "Deployment aplikasi dan landing page ke server berbasis Google Cloud.",
      ],
      technologies: [
        "PHP",
        "MySQL",
        "Laravel 8",
        "REST API",
        "Google Cloud",
        "Ubuntu Server",
      ],
    },
    {
      id: "3",
      title: "Unib Store - Store Resmi Merchandise UNIB",
      description:
        "Unib Store merupakan store merchandise resmi Universitas Bengkulu yang menjual produk-produk karya mahasiswa Universitas Bengkulu",
      featuredImage: "https://via.placeholder.com/150x100",
      url: ["https://store.unib.ac.id", "https://linktr.ee/unib.store"],
      startDate: "2021-08-09",
      endDate: "2021-19-16",
      tags: ["Online Store", "Web Service", "Marketplace Syncronization"],
      client: "Universitas Bengkulu",
      roles: ["Backend Developer"],
      responsibilities: [
        "Membuat toko online berbasis katalog menggunakan WooCommerce",
        "Mengembangkan REST API untuk kebutuhan front-end web menggunakan WordPress REST API",
        "Sinkronisasi data produk dari marketplace (Tokopedia, Shopee, Bukalapak) ke WooCommerce",
      ],
      technologies: [
        "PHP",
        "MySQL",
        "WordPress",
        "WooCommerce",
        "CodeIgniter 3",
        "REST API",
      ],
    },
    {
      id: "4",
      title: "Web Profil HMTS Fakultas Teknik Universitas Bengkulu",
      description:
        "Web Profil HMTS Fakultas Teknik Universitas Bengkulu merupakan website yang berisi informasi mengenai Himpunan Mahasiswa Teknik Sipil Universitas Bengkulu dan learning management system bagi anggota HMTS FT UNIB",
      featuredImage: "https://via.placeholder.com/150x100",
      url: ["https://hmtsftunib.org"],
      startDate: "2021-12-16",
      endDate: "2022-01-16",
      tags: ["Landing Page", "Learning Management System", "Web Profile"],
      client: "HMTS FT UNIB",
      roles: ["Developer"],
      responsibilities: [
        "Membuat landing page untuk profil organisasi",
        "Membuat learning management system untuk kebutuhan organisasi menggunakan plugin dari WordPress",
      ],
      technologies: ["WordPress"],
    },
    {
      id: "5",
      title:
        "Web Profil Program Studi S2 Biologi Fakultas Matematika dan Ilmu Pengetahuan Alam Universitas Bengkulu",
      description:
        "Web Profil Program Studi S2 Biologi Fakultas Matematika dan Ilmu Pengetahuan Alam Universitas Bengkulu merupakan website yang berisi informasi mengenai Program Studi S2 Biologi Fakultas Matematika dan Ilmu Pengetahuan Alam Universitas Bengkulu",
      featuredImage: "https://via.placeholder.com/150x100",
      url: ["https://s2biologi.fmipa.unib.ac.id"],
      startDate: "2021-09-16",
      endDate: "2021-10-16",
      tags: ["Landing Page", "Web Profile"],
      client: "Program Studi S2 Biologi FMIPA UNIB",
      roles: ["Developer"],
      responsibilities: ["Membuat landing page untuk profil organisasi"],
      technologies: ["WordPress"],
    },
    {
      id: "6",
      title: "Website Profil Prof. Nanik Setyowati",
      description:
        "Prof. Nanik Setyowati merupakan guru besar di Fakultas Matematika dan Ilmu Pengetahuan Alam Universitas Bengkulu. Website ini dibuat untuk mendokumentasikan penelitian dan pengabdian masyarakat yang telah dilakukan oleh Prof. Nanik Setyowati",
      featuredImage: "https://via.placeholder.com/150x100",
      url: ["https://naniksetyowati.com"],
      startDate: "2021-08-05",
      endDate: "2021-10-16",
      tags: ["Landing Page", "Web Profile"],
      client: "Prof. Nanik Setyowati",
      roles: ["Developer"],
      responsibilities: ["Membuat web profil"],
    },
    {
      id: "7",
      title:
        "HIMATIF UNIB - Website Resmi Himpunan Mahasiswa Teknik Informatika Universitas Bengkulu",
      description:
        "HIMATIF UNIB merupakan website yang berisi informasi mengenai Himpunan Mahasiswa Teknik Informatika Universitas Bengkulu",
      featuredImage: "https://via.placeholder.com/150x100",
      url: ["https://himatifunib.org"],
      startDate: "2020-08-05",
      endDate: "2022-10-16",
      tags: [
        "Landing Page",
        "Web Profile",
        "Sistem Informasi Organisasi",
        "Formulir Online",
      ],
      client: "HIMATIF UNIB",
      roles: ["Back End Developer"],
      responsibilities: [
        "Merancang alur sistem",
        "Membuat sistem informasi organisasi",
        "Membuat sistem formulir online",
        "Membuat API untuk showcase karya mahasiswa Informatika",
      ],
    },
  ],
  technologies: [
    {
      group: "Language",
      path: "languages",
      items: [
        {
          name: "PHP",
          icon: "php",
        },
        {
          name: "JavaScript",
          icon: "js",
        },
        {
          name: "Python",
          icon: "python",
        },
        {
          name: "Dart",
          icon: "android",
        },
      ],
    },
    {
      group: "Framework",
      path: "frameworks",
      items: [
        {
          name: "Laravel",
          icon: "laravel",
        },
        {
          name: "CodeIgniter",
          icon: "codeigniter",
        },
        {
          name: "Node JS",
          icon: "nodejs",
        },
        {
          name: "Bootstrap",
          icon: "bootstrap",
        },
        {
          name: "React JS",
          icon: "react",
        },
        {
          name: "Data Science",
          icon: "database",
        },
      ],
    },
    {
      group: "Server",
      path: "servers",
      items: [
        {
          name: "Ubuntu Server",
          icon: "ubuntu",
        },
        {
          name: "Nginx",
          icon: "nginx",
        },
        {
          name: "Docker",
          icon: "docker",
        },
        {
          name: "Jenkins",
          icon: "jenkins",
        },
      ],
    },
    {
      group: "Tools",
      path: "tools",
      items: [
        {
          name: "Adobe Family",
          icon: "adobe",
        },
        {
          name: "Git",
          icon: "git",
        },
        {
          name: "Figma",
          icon: "figma",
        },
      ],
    },
  ],
  contactAccounts: [
    {
      name: "Facebook",
      url: "https://www.facebook.com/mt.maytin",
      icon: "facebook",
      title: "Facebook @mt.maytin",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/mul.yoo",
      icon: "instagram",
      title: "Instagram @mul.yoo",
    },
    {
      name: "Email",
      url: "mailto:mulyosyahidin95@gmail.com",
      icon: "email",
      title: "Email me",
    },
    {
      name: "WhatsApp",
      url: "https://wa.me/6282281666584",
      icon: "whatsapp",
      title: "WhatsApp Me",
    },
    {
      name: "Telegram",
      url: "https://t.me/martinms23",
      icon: "telegram",
      title: "Send Message on Telegram",
    },
  ],
};

export default config;
