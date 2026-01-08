"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion, AnimatePresence } from "framer-motion";

export default function ContactForm() {
  const form = useRef(null);
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [msg, setMsg] = useState("");

  const send = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setMsg("");

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );

      setStatus("success");
      setMsg("Message sent successfully. We’ll get back to you soon!");
      form.current.reset();
    } catch (error) {
      console.error("EmailJS error:", error);
      setStatus("error");
      setMsg("Something went wrong. Please try again.");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="max-w-3xl mx-auto"
    >
      <form
        ref={form}
        onSubmit={send}
        className="bg-white shadow-xl rounded-2xl p-8 space-y-6"
      >
        {/* Name */}
        <input
          name="user_name"
          placeholder="Full Name"
          required
          className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F59E0B]"
        />

        {/* Email */}
        <input
          name="user_email"
          type="email"
          placeholder="Email Address"
          required
          className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F59E0B]"
        />

        {/* Phone */}
        <input
          name="user_phone"
          placeholder="Phone Number"
          className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F59E0B]"
        />

        {/* Message */}
        <textarea
          name="message"
          placeholder="Your Message"
          required
          rows={5}
          className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F59E0B]"
        />

        {/* Submit Button */}
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          disabled={status === "loading"}
          className="w-full bg-[#0F172A] text-white py-4 rounded-lg font-semibold tracking-wide disabled:opacity-60"
        >
          {status === "loading" ? "Sending..." : "Send Message"}
        </motion.button>

        {/* Message Feedback */}
        <AnimatePresence>
          {msg && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className={`text-center font-medium ${
                status === "success" ? "text-green-600" : "text-red-600"
              }`}
            >
              {msg}
            </motion.p>
          )}
        </AnimatePresence>
      </form>
    </motion.div>
  );
}
