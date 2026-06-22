"use client";

import { ArrowRight, CheckCircle2, LoaderCircle } from "lucide-react";
import { FormEvent, useState } from "react";

type FormStatus = "idle" | "sending" | "success" | "error";

export default function LeadForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          phone: formData.get("phone"),
          website: formData.get("website"),
        }),
      });

      const result = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(result.message || "Не удалось отправить заявку");
      }

      form.reset();
      setStatus("success");
      setMessage("Готово! Заявка отправлена. Скоро мы вам позвоним.");
    } catch (error) {
      setStatus("error");
      setMessage(
        error instanceof Error
          ? error.message
          : "Не удалось отправить заявку. Позвоните нам напрямую.",
      );
    }
  }

  return (
    <form className="lead-form" id="lead-form" onSubmit={handleSubmit}>
      <div className="lead-form-heading">
        <strong>Оставить заявку</strong>
        <span>Ответим в течение 5 минут</span>
      </div>

      <label>
        <span>Ваше имя</span>
        <input
          type="text"
          name="name"
          autoComplete="name"
          placeholder="Например, Анна"
          minLength={2}
          maxLength={80}
          required
        />
      </label>

      <label>
        <span>Телефон</span>
        <input
          type="tel"
          name="phone"
          autoComplete="tel"
          inputMode="tel"
          placeholder="+7 (___) ___-__-__"
          pattern="[+0-9() -]{7,25}"
          required
        />
      </label>

      <label className="lead-honeypot" aria-hidden="true">
        Сайт
        <input name="website" type="text" tabIndex={-1} autoComplete="off" />
      </label>

      <button
        className="lead-submit"
        type="submit"
        disabled={status === "sending"}
      >
        {status === "sending" ? (
          <>
            <LoaderCircle className="spinner" size={20} />
            Отправляем заявку
          </>
        ) : (
          <>
            Заказать поздравление
            <ArrowRight size={20} />
          </>
        )}
      </button>

      <p className="lead-consent">
        Нажимая кнопку, вы соглашаетесь на обработку контактных данных.
      </p>

      {message && (
        <div className={`form-message ${status}`} role="status">
          {status === "success" && <CheckCircle2 size={18} />}
          {message}
        </div>
      )}
    </form>
  );
}
