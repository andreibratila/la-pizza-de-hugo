"use client";
import { useState } from "react";

import Link from "next/link";
import Image from "next/image";

import Swal from "sweetalert2";
import * as yup from "yup";

import { Loading } from "@/data/svg";
import { sendMessage, generateInputClass } from "@/helpers";
import { sendContactForm } from "@/lib/api";
import { formContact } from "@/data/formContact";

interface IFormState {
  name: string;
  email: string;
  subject: string;
  phone: number | null;
  message: string;
  termsConfirmed: boolean;
}

export const ReactForm = () => {
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState<number | null>(null);
  const [message, setMessage] = useState("");
  const [termsConfirmed, setTermsConfirmed] = useState(false);
  const [errors, setErrors] = useState<IFormState>({
    name: "",
    email: "",
    subject: "",
    phone: null,
    message: "",
    termsConfirmed: false,
  });
  const [loading, setLoading] = useState(false);

  console.log();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const values = { name, email, subject, message, termsConfirmed, phone };
    setLoading(true);

    try {
      await sendMessage.validate(values, { abortEarly: false });

      setErrors({
        name: "",
        email: "",
        subject: "",
        phone: null,
        message: "",
        termsConfirmed: false,
      });

      await sendContactForm(values);

      setName("");
      setSubject("");
      setEmail("");
      setPhone(null);
      setMessage("");
      setTermsConfirmed(false);

      Swal.fire({
        icon: "success",
        title: "Email enviado",
        text: "Nos pondremos en contacto contigo en breve.",
      });
    } catch (error) {
      if (error instanceof yup.ValidationError) {
        const validationErrors = error.inner.reduce(
          (errors: IFormState, err: yup.ValidationError) => {
            if (err.path && err.path in errors) {
              return { ...errors, [err.path]: err.message };
            } else {
              return errors;
            }
          },
          {
            name: "",
            email: "",
            subject: "",
            phone: null,
            message: "",
            termsConfirmed: false,
          }
        );
        setErrors(validationErrors);
      } else {
        Swal.fire({
          icon: "error",
          title: "Algo ha ido mal !",
          text: "Contacta la administration",
        });
      }
    }
    setLoading(false);
  };

  return (
    <form
      className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      onSubmit={handleSubmit}
    >
      {formContact.map(
        ({ labelText, labelError, inputType, inputPlaceholder }, index) => {
          let inputValue: string;
          let change: (e: React.ChangeEvent<HTMLInputElement>) => void;
          let error: string;

          switch (labelError) {
            case "name":
              inputValue = name;
              change = (e) => setName(e.target.value);
              error = errors.name;
              break;
            case "subject":
              inputValue = subject;
              change = (e) => setSubject(e.target.value);
              error = errors.subject;
              break;
            case "phone":
              inputValue = phone ? phone.toString() : "";
              change = (e) =>
                setPhone(e.target.value ? parseInt(e.target.value, 10) : null);
              error = errors.phone ? errors.phone.toString() : "";
              break;
            case "email":
              inputValue = email;
              change = (e) => setEmail(e.target.value);
              error = errors.email;
              break;
            default:
              throw new Error("Invalid field type");
          }

          return (
            <div className="mb-4" key={index}>
              <label
                className={`block text-gray-700 text-sm font-bold mb-2 ${
                  error && "text-red-700"
                }`}
              >
                {labelText}: {error && <span>{error}</span>}
              </label>
              <input
                className={generateInputClass(error)}
                type={inputType}
                placeholder={inputPlaceholder}
                value={inputValue}
                onChange={change}
              />
            </div>
          );
        }
      )}
      <div className="mb-4">
        <label
          className={`block text-gray-700 text-sm font-bold mb-2 ${
            errors.message && "text-red-700"
          }`}
        >
          Mensaje: {errors.message && <span>{errors.message}</span>}
        </label>
        <textarea
          className={generateInputClass(errors.message)}
          rows={4}
          placeholder="Mensaje"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
      </div>

      <div className="mb-4 pl-1">
        <div className="flex items-start">
          <div className="flex items-center h-5">
            <input
              id="terms"
              name="termsConfirmed"
              type="checkbox"
              className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
              onChange={() => setTermsConfirmed(!termsConfirmed)}
              checked={termsConfirmed}
            />
          </div>
          <div className="ml-2 block text-sm">
            <label
              htmlFor="terms"
              className={`text-gray-900 ${
                errors.termsConfirmed && "text-red-700"
              }`}
            >
              Acepto la{" "}
              <Link href="/politica-de-privacidad" className="font-bold">
                política de privacidad
              </Link>{" "}
              {errors.termsConfirmed && <span>{errors.termsConfirmed}</span>}
            </label>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
          disabled={loading}
        >
          {!loading ? (
            "Enviar"
          ) : (
            <Image src={Loading} className="w-6 h-auto" alt="Cargando" />
          )}
        </button>
      </div>
    </form>
  );
};
