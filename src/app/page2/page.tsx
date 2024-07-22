import Image from "next/image";
import stinCatJpg from "../stin_cat.jpg";

export default function Home() {
  return (
    <main className="space-y-32">
      <a className="text-blue-500 underline" href="/">
        TOPに移動
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
          src="https://via.placeholder.com/200x200"
          alt="placeholder"
          width="300"
          height="300"
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
    </main>
  );
}

export const dynamic = "force-dynamic";
