import Image from "next/image";

export default function Projects() {
  const projects = [
    {
      img: "/Petani berdasi.jpg",
      title: "Website Petani Berdasi",
      desc: "Petani Berdasi adalah website yang aku buat sebagai proyek web development dengan tujuan membantu petani modern dalam menjual produk pertanian secara online. 🌿",
      tags: ["website", "petani", "berdasi"],
    },
    {
      img: "/desain fikma.jpg",
      title: "Desain Website GlowsToskin",
      desc: "GlowsToskin adalah desain website yang aku buat menggunakan Figma, dengan konsep platform penjualan produk skincare. 💖",
      tags: ["Desain", "Figma", "GlowToSkin"],
    },
    {
      img: "/CRUD.jpg",
      title: "Aplikasi fitur CRUD Sederhana",
      desc: "Saya membuat sistem CRUD (Create, Read, Update, Delete) untuk mengelola data mahasiswa. Fitur ini memungkinkan pengguna menambah, melihat, mengedit, dan menghapus data dengan mudah. Tabel data dilengkapi pencarian, paginasi, serta export ke Excel dan PDF. Proyek ini dibuat menggunakan HTML, CSS, JavaScript, PHP, dan MySQL dengan tampilan yang responsif dan user-friendly.",
      tags: ["CRUD", "CRUD System", "PHP"],
    },
    {
      img: "/portofolio.jpg",
      title: "Website Portofolio Pribadi",
      desc: "Website ini menampilkan perjalanan dan karya-karyaku di bidang teknologi, desain, dan pengembangan web. ✨",
      tags: ["portofolio", "next.js", "tailwindcss"],
    },
  ];

  return (
    <section id="projects" className="space-y-10">
      <h3 className="text-sm uppercase tracking-wide font-medium text-zinc-500 dark:text-zinc-300">
        projekku
      </h3>

      {projects.map((project, i) => (
        <div key={i} className="flex flex-col md:flex-row gap-6 items-stretch">
          {/* Gambar */}
          <div className="md:w-1/2 w-full aspect-[16/9] flex">
            <Image
              alt={project.title}
              src={project.img}
              className="w-full h-full rounded-3xl object-cover shadow-[0_8px_20px_rgba(0,0,0,0.15)] hover:shadow-[0_12px_30px_rgba(0,0,0,0.25)] transition-all duration-300 transform hover:scale-[1.02]"
              width={800}
              height={450}
              sizes="100vw"
            />
          </div>

          {/* Deskripsi */}
          <div className="md:w-1/2 w-full aspect-[16/9] flex flex-col justify-between bg-white dark:bg-zinc-900 rounded-3xl p-6 shadow-[0_4px_12px_rgba(0,0,0,0.1)] hover:shadow-[0_6px_18px_rgba(0,0,0,0.15)] transition-all duration-300">
            <div>
              <h4 className="font-medium text-zinc-800 dark:text-zinc-100 mb-2">
                {project.title}
              </h4>
              <p className="text-sm text-zinc-500 dark:text-zinc-300 leading-relaxed">
                {project.desc}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2 mt-4">
              {project.tags.map((tag, t) => (
                <span
                  key={t}
                  className="px-2 py-1 bg-zinc-200 dark:bg-zinc-800 rounded-sm text-zinc-500 dark:text-zinc-300 text-xs"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
