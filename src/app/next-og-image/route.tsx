import { ImageResponse } from "next/og";

export const dynamic = "force-dynamic";

export const GET = (request: Request) => {
  const { searchParams } = new URL(request.url);
  const text = searchParams.get("text") || "HELLO WORLD";

  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
        }}
        tw="flex items-center justify-center bg-green-200"
      >
        <span tw="font-bold text-8xl text-green-700">{text}</span>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
};
