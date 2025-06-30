export default function About() {
  return (
    <section
      className="min-h-screen flex items-center justify-center relative bg-white overflow-hidden"
    >
      {/* Background image, slightly offset to the left and blurred for readability */}
      <img
        src="/images/about/2.jpg"
        alt="Shoshi Haizler art background"
        className="absolute left-[-10vw] top-1/2 -translate-y-1/2 w-[120vw] max-w-none h-auto opacity-40 blur-sm select-none pointer-events-none z-0"
        aria-hidden="true"
      />
      <div className="relative z-10 max-w-2xl mx-auto px-6 py-16 bg-white/80 rounded-xl shadow-lg text-center flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">About Shoshi Haizler</h1>
        <div className="text-lg text-gray-700 leading-relaxed">
          Shoshi Haizler is a passionate artist who loves painting, drawing, and sculpting. Her work is inspired by the beauty of everyday life and the vibrant colors of nature. With years of experience and a unique artistic vision, Shoshi brings her creations to life in her studio.<br /><br />
          Shoshi's journey as an artist began at a young age, experimenting with different mediums and techniques. Over the years, she has developed a distinctive style that blends realism with expressive color and form. Her paintings often capture serene landscapes, lively portraits, and imaginative scenes that invite viewers to explore their own interpretations.<br /><br />
          In addition to painting, Shoshi is an accomplished sculptor. Her sculptures reflect a deep appreciation for the human form and the natural world, often characterized by fluid lines and dynamic movement. Each piece is crafted with meticulous attention to detail and a sense of wonder.<br /><br />
          Through her art, Shoshi aims to evoke emotion, spark curiosity, and celebrate the beauty that surrounds us. Whether working on canvas or in clay, she is dedicated to sharing her creative vision and inspiring others to find joy in artistic expression.
        </div>
      </div>
    </section>
  );
} 