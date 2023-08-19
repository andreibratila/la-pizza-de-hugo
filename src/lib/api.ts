interface IFormState {
  name: string;
  email: string;
  subject: string;
  phone: number | null;
  message: string;
  termsConfirmed: boolean;
}
export const sendContactForm = async (data:IFormState) =>
  fetch("/api/contact", {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json", Accept: "application/json" },
  }).then((res) => {
    if (!res.ok) throw new Error("Failed to send message");
    return res.json();
});
