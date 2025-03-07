import { useEffect, useRef } from "react";
import gsap from "gsap";

// You can adjust the following code as needed.
const BloodCellAnimation = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const c = canvasRef.current;
    const ctx = c.getContext("2d");
    let cw = (c.width = window.innerWidth);
    let ch = (c.height = window.innerHeight);
    const n = 105;
    const speed = 0.15;

    const bg = new Image();
    const img = new Image(100, 100);
    const img2 = new Image(100, 100);
    const img3 = new Image(100, 100);
    const mouseProps = { x: cw / 2, y: cw / 2 };
    const particles = [];

    // Particle constructor
    function Particle(index) {
      this.index = index;
      this.img = [img, img2, img3][index % 3];
      this.x = this.y = this.progress = this.opacity = this.scale = 1;
      this.size = 25 + 400 * ((index + 1) / n);
      if (index > n * 0.96) this.size *= 4;
      this.dur = (2 - 1 * ((index + 1) / n)) / speed;
      var rot = -rand(3, 5);
      if (index % 3 === 0) rot = -rot;
      
      this.draw = function() {
        const offsetX = -(mouseProps.x - cw / 2) * (this.size / 1000);
        const offsetY = -(mouseProps.y - ch / 2) * (this.size / 1000);
        const size = this.size * this.scale;
        ctx.translate(this.x + offsetX, this.y + offsetY);
        ctx.rotate(rot * this.progress);
        ctx.globalAlpha = this.opacity;
        ctx.drawImage(this.img, -size / 2, -size / 2, size, size);
        ctx.rotate(-rot * this.progress);
        ctx.translate(-this.x - offsetX, -this.y - offsetY);
      };
    }

    // Helper: Random number generator
    function rand(min = 0, max = 1) {
      return min + (max - min) * Math.random();
    }

    // Tween each particle using GSAP
    const setParticle = (p, replay) => {
      const tl = gsap.timeline({
        onComplete: () => setParticle(p, true)
      });
      tl.fromTo(
        p,
        {
          x: rand(-p.size / 2, cw + p.size),
          y: rand(-p.size / 2, ch + p.size),
          progress: 0,
          scale: p.index % 2 === 0 ? 0.8 : rand(2.5, 5)
        },
        {
          duration: p.dur,
          x: `+=${rand(-100, 100)}`,
          y: `+=${rand(-50, 50)}`,
          scale: p.index % 2 === 0 ? rand(2.5, 5) : 0.8,
          progress: 1,
          ease: "none"
        },
        0
      ).fromTo(
        p,
        { opacity: 0 },
        { duration: p.dur / 4, opacity: 1, yoyo: true, repeat: 3, ease: "power4.in" },
        0
      );
      if (!replay) tl.seek(p.dur * rand());
    };

    // Set image sources
    bg.src = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/721952/redLightBg.jpg";
    img.src = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/721952/blurLight1.png";
    img2.src = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/721952/blurLight2.png";
    img3.src = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/721952/blurLight3.png";

    // Initialize particles
    for (let i = 0; i < n; i++) {
      const p = new Particle(i);
      particles.push(p);
      setParticle(p);
    }

    // Render loop using requestAnimationFrame
    function render() {
      ctx.globalAlpha = 1;
      ctx.globalCompositeOperation = "source-over";
      ctx.drawImage(bg, 0, 0, cw, ch);
      ctx.globalCompositeOperation = "lighter";
      particles.forEach((p) => p.draw());
      requestAnimationFrame(render);
    }
    render();

    // Resize listener
    const resizeHandler = () => {
      cw = c.width = window.innerWidth;
      ch = c.height = window.innerHeight;
    };
    window.addEventListener("resize", resizeHandler);

    // Mouse move listener
    window.addEventListener("mousemove", (e) => {
      gsap.to(mouseProps, { duration: 4, x: e.clientX, y: e.clientY, overwrite: true });
    });

    // Cleanup
    return () => {
      window.removeEventListener("resize", resizeHandler);
      // Optionally: kill GSAP animations here if needed.
    };
  }, []);

  return <canvas ref={canvasRef} id="c" style={{ position: "absolute", top: 0, left: 0 }} />;
};

export default BloodCellAnimation;
