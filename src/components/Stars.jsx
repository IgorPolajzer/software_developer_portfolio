import { useEffect } from "react";

const Starfield = () => {
  useEffect(() => {
    const canvas = document.getElementById("starfield");
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    let stars = [];
    const layerCount = 3;
    const speeds = [0.05, 0.1, 0.2];
    const baseStarCount = 50;
    let shootingStar = null;

    // Get Tailwind theme colors dynamically
    const getCSSVar = (name) =>
      getComputedStyle(document.documentElement).getPropertyValue(name).trim();

  const getThemeColors = () => ({
    primary: getCSSVar("--stars-primary") || "#0a1428",
    secondary: getCSSVar("--stars-secondary") || "#000000",
    textBase: getCSSVar("--stars-text-base") || "#ffffff",
    bgPrimary: getCSSVar("--stars-bg-primary") || "#0a1428",
  });

    // Resize canvas
    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      createStars();
    }

    // Create stars
    function createStars() {
      stars = [];
      const scalingFactor = Math.max(canvas.width, canvas.height) / 1000;
      for (let i = 0; i < layerCount; i++) {
        const starCount = Math.floor(baseStarCount * scalingFactor * (i + 1));
        for (let j = 0; j < starCount; j++) {
          stars.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * (i + 1) + 0.5,
            speed: speeds[i],
            opacity: Math.random(),
            baseOpacity: Math.random() * 0.5 + 0.5,
            layer: i,
          });
        }
      }
    }

    // Update stars
    function updateStars() {
      stars.forEach((star) => {
        star.y -= star.speed;
        star.opacity =
          star.baseOpacity + Math.sin(Date.now() * 0.001 * star.speed) * 0.3;
        if (star.y < 0) {
          star.y = canvas.height;
          star.x = Math.random() * canvas.width;
        }
      });
    }

    // Draw stars and background
    function drawStars() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const colors = getThemeColors();

      const gradient = ctx.createRadialGradient(
        canvas.width / 2,
        canvas.height / 2,
        canvas.width / 8,
        canvas.width / 2,
        canvas.height / 2,
        canvas.width
      );
      gradient.addColorStop(0, colors.primary);
      gradient.addColorStop(1, colors.bgPrimary);
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = colors.textBase;
      stars.forEach((star) => {
        ctx.globalAlpha = star.opacity;
        ctx.fillRect(star.x, star.y, star.size, star.size);
      });
      ctx.globalAlpha = 1;
    }

    // Shooting star
    function createShootingStar() {
      const startX = Math.random() * canvas.width;
      const startY = Math.random() * canvas.height;
      const angle = Math.random() * Math.PI * 2;
      const length = Math.random() * 300 + 100;
      const speed = Math.random() * 4 + 2;

      shootingStar = {
        x: startX,
        y: startY,
        length,
        speed,
        opacity: 1,
        dx: Math.cos(angle) * speed,
        dy: Math.sin(angle) * speed,
      };

      const nextAppearance = Math.random() * 20000 + 20000;
      setTimeout(createShootingStar, nextAppearance);
    }

    function updateShootingStar() {
      if (!shootingStar) return;
      shootingStar.x += shootingStar.dx;
      shootingStar.y += shootingStar.dy;
      shootingStar.opacity -= 0.01;

      if (
        shootingStar.opacity <= 0 ||
        shootingStar.x < 0 ||
        shootingStar.x > canvas.width ||
        shootingStar.y < 0 ||
        shootingStar.y > canvas.height
      ) {
        shootingStar = null;
      }
    }

    function drawShootingStar() {
      if (!shootingStar) return;
      const colors = getThemeColors();

      // Use textBase color for shooting star with opacity
      const gradient = ctx.createLinearGradient(
        shootingStar.x,
        shootingStar.y,
        shootingStar.x - shootingStar.dx * shootingStar.length,
        shootingStar.y - shootingStar.dy * shootingStar.length
      );
      gradient.addColorStop(
        0,
        `rgba(${hexToRgb(colors.textBase)}, ${shootingStar.opacity})`
      );
      gradient.addColorStop(1, `rgba(${hexToRgb(colors.textBase)}, 0)`);

      ctx.beginPath();
      ctx.strokeStyle = gradient;
      ctx.lineWidth = 2;
      ctx.moveTo(shootingStar.x, shootingStar.y);
      ctx.lineTo(
        shootingStar.x - shootingStar.dx * shootingStar.length,
        shootingStar.y - shootingStar.dy * shootingStar.length
      );
      ctx.stroke();
      ctx.closePath();
    }

    // Convert hex color to "r,g,b" string for rgba
    function hexToRgb(hex) {
      let c = hex.replace("#", "");
      if (c.length === 3)
        c = c[0] + c[0] + c[1] + c[1] + c[2] + c[2];
      const num = parseInt(c, 16);
      return `${(num >> 16) & 255}, ${(num >> 8) & 255}, ${num & 255}`;
    }

    // Animate
    let lastFrameTime = performance.now();
    function animate() {
      const now = performance.now();
      if (now - lastFrameTime > 16) {
        lastFrameTime = now;
        updateStars();
        updateShootingStar();
        drawStars();
        drawShootingStar();
      }
      requestAnimationFrame(animate);
    }

    let resizeTimeout;
    window.addEventListener("resize", () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(resizeCanvas, 200);
    });

    resizeCanvas();
    createStars();
    setTimeout(createShootingStar, Math.random() * 20000 + 20000);
    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <canvas
      id="starfield"
      className="fixed inset-0 w-full h-full -z-10 bg-bgPrimary transition-colors duration-500"
    />
  );
};

export default Starfield;
