export default function Contact() {
  return (
    <section
      id="contact"
      className="space-y-6 bg-white dark:bg-zinc-900 rounded-2xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-all duration-300"
    >
      <h3 className="text-sm uppercase tracking-wider font-medium text-zinc-500 dark:text-zinc-300">
        Contact
      </h3>

      <p className="text-zinc-800 dark:text-zinc-200">
        Punya ide seru atau mau kerja bareng? Aku selalu senang kalau bisa
        ngobrol soal web development, desain, atau hal-hal kreatif lainnya! 🌈
        Kamu bisa hubungi aku lewat:
      </p>

      <div className="flex gap-x-6 mt-6 flex-col md:flex-row gap-y-2">
        <a
          href="mailto:marcahayamanalu@gmail.com"
          className="text-zinc-500 dark:text-zinc-300 flex items-center gap-x-2.5 bg-zinc-100 dark:bg-zinc-800 rounded-xl px-4 py-2 shadow-[0_2px_6px_rgba(0,0,0,0.08)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.15)] hover:text-blue-500 transition-all duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="3" y="5" width="18" height="14" rx="2" ry="2"></rect>
            <polyline points="3,7 12,13 21,7"></polyline>
          </svg>
          marcahayamanalu@gmail.com
        </a>
      </div>

      <a
        href="https://www.instagram.com/cay.manalu"
        target="_blank"
        rel="noopener noreferrer"
        className="text-zinc-500 dark:text-zinc-300 flex items-center gap-x-2.5 bg-zinc-100 dark:bg-zinc-800 rounded-xl px-4 py-2 shadow-[0_2px_6px_rgba(0,0,0,0.08)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.15)] hover:text-pink-500 transition-all duration-300"
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
        </svg>
        Instagram
      </a>
    </section>
  );
}
