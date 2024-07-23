import Image from "next/image";
import stinCatJpg from "./stin_cat.jpg";

export default function Home() {
  return (
    <main className="space-y-32">
      <a className="text-blue-500 underline" href="/page2">
        page2に移動
      </a>
      <div>
        <p className="text-lg font-bold">next/image, モジュール読み込み</p>
        <Image className="max-w-64" src={stinCatJpg} alt="stin cat" />
      </div>
      <div className="mt-32">
        <p className="text-lg font-bold">
          next/image, 文字列読み込み, 内部画像
        </p>
        <Image
          className="max-w-64"
          src="/stin_cat.jpg"
          alt="stin cat"
          width="300"
          height="300"
        />
      </div>
      <div className="mt-32">
        <p className="text-lg font-bold">
          next/image, 文字列読み込み, 外部画像
        </p>
        <Image
          className="max-w-64"
          src="https://placehold.jp/150x150.png"
          alt="placeholder"
          width="300"
          height="300"
        />
      </div>
      <div className="mt-32">
        <p className="text-lg font-bold">
          next/image, 文字列読み込み, next/og画像
        </p>
        <Image
          className="max-w-64"
          src="/next-og-image?text=STIN_CAT NAMAIKI"
          alt="STIN_CAT NAMAIKI"
          width="1200"
          height="630"
        />
      </div>
      <div className="mt-32">
        <p className="text-lg font-bold">img, 文字列読み込み, 内部画像</p>
        <img
          className="max-w-64"
          src="/stin_cat.jpg"
          alt="stin cat"
          width="300"
          height="300"
        />
      </div>
      <div className="mt-32">
        <p className="text-lg font-bold">img, 文字列読み込み, next/og画像</p>
        <img
          className="max-w-64"
          src="/next-og-image?text=STIN_CAT KAWAII"
          alt="STIN_CAT KAWAII"
          width="300"
          height="300"
        />
      </div>
    </main>
  );
}
