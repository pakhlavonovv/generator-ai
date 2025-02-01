import { useState } from "react";
import Header from "../../components/header";
import Images from "../../components/images";

const Index = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    const token = import.meta.env.VITE_BOT_TOKEN;
    const chatId = import.meta.env.VITE_CHAT_ID;

    const messageText = `📩 *New message from Contact!*\n👤 *Name:* ${name}\n✉️ *Email:* ${email}\n📝 *Message:*\n${message}`;

    try {
      const response = await fetch(
        `https://api.telegram.org/bot${token}/sendMessage`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            chat_id: chatId,
            text: messageText,
            parse_mode: "Markdown",
          }),
        }
      );

      const data = await response.json();

      if (data.ok) {
        setSuccess("✔ Your message has been sent successfully");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setError("❌ There was an error sending the message! Please try again.");
      }
    } catch (error) {
      setError("❗ Network error! Please check your internet connection.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Header />
      <div className="mt-[50px] flex flex-col items-center justify-center gap-4 px-4 md:px-0">


        <form
          onSubmit={handleSubmit}
          className="p-5 sm:p-6 md:p-7 lg:p-8 xl:p-10 rounded-md bg-gradient-to-r from-black via-purple-800 to-red-700 space-y-3 w-full max-w-[500px]"
        >
          <div className="flex flex-col items-center justify-center text-center">
          <h1 className="font-bold text-white text-[18px] sm:text-[22px] md:text-[24px] lg:text-[28px]">
            Contact Information
          </h1>
          <p className="text-center text-white text-[12px] sm:text-[14px] w-full sm:w-[80%] md:w-[100%]">
            Your inquiries are important to us. Let us know how we can help.
          </p>
        </div>
          <div>
            
            <input
            placeholder="Enter your name"
              type="text"
              id="name"
              className="w-full outline-none p-2 border text-[14px] sm:text-[16px] border-gray-300 bg-transparent rounded-md"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div>
           
            <input
            placeholder="Enter your email"
              type="email"
              id="email"
              className="w-full outline-none p-2 border text-[14px] sm:text-[16px] border-gray-300 bg-transparent rounded-md"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
           
            <textarea
            placeholder="Enter your message"
              id="message"
              className="w-full p-2 resize-none outline-none text-[14px] sm:text-[16px] border border-gray-300 bg-transparent rounded-md"
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </div>

          {loading ? (
            <button
              className="w-full bg-[#EAC435] text-black text-[12px] sm:text-[14px] p-2 rounded-md"
              disabled
            >
              Sending...
            </button>
          ) : (
            <button
              type="submit"
              className="w-full bg-[#EAC435] text-black text-[12px] sm:text-[14px] p-2 rounded-md"
            >
              Send Message
            </button>
          )}
        </form>

        {error && (
          <p className="text-red-500 mt-1 text-center text-[12px] sm:text-[14px]">
            {error}
          </p>
        )}
        {success && (
          <p className="text-green-500 mt-1 text-center text-[12px] sm:text-[14px]">
            {success}
          </p>
        )}
      </div>
      <Images />
    </div>
  );
};

export default Index;
