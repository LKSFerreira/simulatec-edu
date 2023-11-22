import Script from "next/script";

function Home() {
  return (
    <div>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.7.0/p5.min.js"></script>
      <Script src="/rain.js" strategy="beforeInteractive" />
    </div>
  );
}

export default Home;
