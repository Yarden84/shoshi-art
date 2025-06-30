export default function Contact() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-[#fefcf6] px-4 relative overflow-hidden">
      {/* Background image, blurred and faded */}
      <img
        src="/images/contact/1.jpg"
        alt="Contact background"
        className="absolute left-1/2 top-1/2 w-[120vw] max-w-none h-auto -translate-x-1/2 -translate-y-1/2 opacity-40 blur-sm select-none pointer-events-none z-0"
        aria-hidden="true"
      />
      <form className="w-full max-w-lg bg-white/90 rounded-xl shadow-lg p-8 flex flex-col gap-6 relative z-10">
        <h1 className="text-4xl font-bold text-gray-800 mb-2 text-center">Contact</h1>
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-gray-700 font-medium">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 bg-white"
            autoComplete="name"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-gray-700 font-medium">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 bg-white"
            autoComplete="email"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="subject" className="text-gray-700 font-medium">Subject</label>
          <input
            id="subject"
            name="subject"
            type="text"
            required
            className="px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 bg-white"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="message" className="text-gray-700 font-medium">Your message</label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            className="px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 bg-white resize-none"
          />
        </div>
        <button
          type="submit"
          className="mt-2 px-8 py-3 bg-gray-900 text-white rounded shadow hover:bg-gray-700 transition-colors text-lg font-semibold"
        >
          Send Message
        </button>
      </form>
    </section>
  );
} 