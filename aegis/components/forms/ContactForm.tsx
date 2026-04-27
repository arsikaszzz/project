"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const ContactSchema = z.object({
  name: z.string().min(2, "Минимум 2 символа"),
  email: z.string().email("Неверный email"),
  goal: z.string().min(10, "Опишите цель — минимум 10 символов"),
  consent: z.literal(true, {
    errorMap: () => ({ message: "Необходимо согласие" }),
  }),
});

type ContactValues = z.infer<typeof ContactSchema>;

export function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactValues>({
    resolver: zodResolver(ContactSchema),
  });
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const onSubmit = async (values: ContactValues) => {
    setStatus("idle");
    setErrorMsg(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error ?? "Не удалось отправить заявку");
      }
      setStatus("success");
      reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Ошибка отправки");
    }
  };

  if (status === "success") {
    return (
      <div className="card p-10 border-accent-soft">
        <div className="mono-label text-accent mb-4">Заявка принята</div>
        <h2 className="font-display text-2xl text-text mb-4">
          Спасибо. Я свяжусь с вами в течение 24 часов.
        </h2>
        <p className="text-text-muted">
          На указанный email придёт подтверждение и анкета для разбора.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
      <div>
        <label className="mono-label text-text-dim text-[10px] mb-2 block">
          Имя
        </label>
        <input
          type="text"
          className="w-full px-4 py-3"
          placeholder="Как к вам обращаться"
          {...register("name")}
        />
        {errors.name && (
          <p className="text-danger text-xs mt-2">{errors.name.message}</p>
        )}
      </div>

      <div>
        <label className="mono-label text-text-dim text-[10px] mb-2 block">
          Email
        </label>
        <input
          type="email"
          className="w-full px-4 py-3"
          placeholder="you@example.com"
          {...register("email")}
        />
        {errors.email && (
          <p className="text-danger text-xs mt-2">{errors.email.message}</p>
        )}
      </div>

      <div>
        <label className="mono-label text-text-dim text-[10px] mb-2 block">
          Цель
        </label>
        <textarea
          rows={5}
          className="w-full px-4 py-3 resize-y"
          placeholder="Что вы хотите изменить и почему именно сейчас"
          {...register("goal")}
        />
        {errors.goal && (
          <p className="text-danger text-xs mt-2">{errors.goal.message}</p>
        )}
      </div>

      <label className="flex items-start gap-3 text-sm text-text-muted cursor-pointer">
        <input
          type="checkbox"
          className="mt-1"
          {...register("consent")}
        />
        <span>
          Согласен на обработку персональных данных и получение ответа на email.
        </span>
      </label>
      {errors.consent && (
        <p className="text-danger text-xs">{errors.consent.message}</p>
      )}

      {status === "error" && errorMsg && (
        <p className="text-danger text-sm">{errorMsg}</p>
      )}

      <button
        type="submit"
        className="btn btn-primary w-full"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Отправляю..." : "Отправить заявку"}
      </button>
    </form>
  );
}
