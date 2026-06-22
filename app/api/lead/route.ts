import { NextResponse } from "next/server";

const MAX_API_URL = "https://platform-api.max.ru/messages";

function isValidPhone(value: string) {
  const digits = value.replace(/\D/g, "");
  return digits.length >= 7 && digits.length <= 15;
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as {
      name?: unknown;
      phone?: unknown;
      website?: unknown;
    };

    const name = typeof body.name === "string" ? body.name.trim() : "";
    const phone = typeof body.phone === "string" ? body.phone.trim() : "";
    const website = typeof body.website === "string" ? body.website.trim() : "";

    if (website) {
      return NextResponse.json({ ok: true });
    }

    if (name.length < 2 || name.length > 80 || !isValidPhone(phone)) {
      return NextResponse.json(
        { message: "Проверьте имя и номер телефона." },
        { status: 400 },
      );
    }

    const token = process.env.MAX_BOT_TOKEN?.trim();
    const chatId = process.env.MAX_CHAT_ID?.trim();

    if (!token || !chatId) {
      console.error("MAX_BOT_TOKEN or MAX_CHAT_ID is not configured");
      return NextResponse.json(
        { message: "Форма пока не настроена. Позвоните нам напрямую." },
        { status: 503 },
      );
    }

    const message = [
      "Новая заявка с сайта «Миссия-радость»",
      "",
      `Имя: ${name}`,
      `Телефон: ${phone}`,
    ].join("\n");

    const response = await fetch(
      `${MAX_API_URL}?chat_id=${encodeURIComponent(chatId)}`,
      {
        method: "POST",
        headers: {
          Authorization: token,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          text: message,
          notify: true,
        }),
        signal: AbortSignal.timeout(10_000),
      },
    );

    if (!response.ok) {
      const responseText = await response.text();
      console.error("MAX API error", response.status, responseText);
      return NextResponse.json(
        { message: "Не удалось отправить заявку. Позвоните нам напрямую." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Lead form error", error);
    return NextResponse.json(
      { message: "Не удалось отправить заявку. Попробуйте ещё раз." },
      { status: 500 },
    );
  }
}
