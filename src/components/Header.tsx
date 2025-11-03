import Image from "next/image";

export default function Header() {
  return (
    <header className="flex gap-x-8 flex-col md:flex-row bg-white dark:bg-zinc-900 rounded-2xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-all duration-300">
      <Image
        className="size-[100px] rounded-full shadow-[0_4px_10px_rgba(0,0,0,0.15)] hover:shadow-[0_6px_15px_rgba(0,0,0,0.2)] transform hover:scale-[1.05] transition-all duration-300"
        src="/cahaya.jpg"
        alt="picture of author"
        width={100}
        height={100}
      />
      <div>
        <h1 className="text-3xl font-medium text-zinc-900 dark:text-zinc-50 mb-1.5">
          Marcahaya Manalu
        </h1>
        <h2 className="text-lg font-light text-zinc-500 dark:text-zinc-300">
          Mahasiswi Teknik Informatika
        </h2>
        <div className="flex gap-x-6 mt-6 flex-col md:flex-row gap-y-2">
          <span className="text-zinc-500 dark:text-zinc-300">
            Sekolah Tinggi Teknologi Bontang
          </span>
        </div>
      </div>
    </header>
  );
}
