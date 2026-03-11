"use client";

import { FormEvent, useState } from "react";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "ok">("idle");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!email.trim()) {
      return;
    }

    setStatus("ok");
    setEmail("");
  }

  return (
    <form id="newsletter" onSubmit={onSubmit} className="space-y-3 rounded-[28px] border border-white/10 bg-white/5 p-5">
      <p className="text-xs uppercase tracking-[0.3em] text-white/45">Newsletter</p>
      <p className="text-sm text-white/65">Get launch notes, formulation updates, and product drops.</p>
      <input
        type="email"
        value={email}
        onChange={(event) => {
          setEmail(event.target.value);
          if (status !== "idle") {
            setStatus("idle");
          }
        }}
        placeholder="Enter your email"
        autoComplete="email"
        className="w-full rounded-full border border-white/10 bg-black/20 px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/35 focus:border-white/30"
      />
      <button
        type="submit"
        className="inline-flex rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:border-white/35 hover:bg-white/5"
      >
        Join the list
      </button>
      {status === "ok" ? <p className="text-xs text-white/60">Thanks. We will share updates soon.</p> : null}
    </form>
  );
}