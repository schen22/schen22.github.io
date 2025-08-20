// Cloud Physics Engine
// Interactive background cloud system with merging physics

class SmoothCloud {
  constructor(x = null, y = null, radius = null) {
    this.id = window.cloudIdCounter++;
    this.x = x || Math.random() * window.cloudCanvas.width;
    this.y = y || Math.random() * window.cloudCanvas.height;
    this.targetX = this.x;
    this.targetY = this.y;
    this.baseRadius = radius || Math.random() * 40 + 30;
    this.radius = this.baseRadius;
    this.targetRadius = this.radius;
    this.opacity = Math.random() * 0.15 + 0.05;

    // Smooth movement
    this.vx = (Math.random() - 0.5) * 0.3;
    this.vy = (Math.random() - 0.5) * 0.2;

    // Physics
    this.mass = this.baseRadius;
    this.bumpRadius = this.radius + 40;

    // Visual effects
    this.squish = 1;
    this.rotation = Math.random() * Math.PI * 2;
    this.rotationSpeed = (Math.random() - 0.5) * 0.005;

    // Merging state
    this.merging = false;
    this.mergeTarget = null;
    this.mergeSpeed = 0;
    this.alive = true;

    // Create fluffy puffs
    this.puffs = [];
    const puffCount = 4 + Math.floor(Math.random() * 3);
    for (let i = 0; i < puffCount; i++) {
      this.puffs.push({
        x: (Math.random() - 0.5) * this.radius * 1.8,
        y: (Math.random() - 0.5) * this.radius * 1.5,
        r: this.radius * (0.4 + Math.random() * 0.4),
        alpha: 0.6 + Math.random() * 0.4,
      });
    }
  }

  update() {
    if (!this.alive) return;

    const mouseVx = window.mouseX - window.lastMouseX;
    const mouseVy = window.mouseY - window.lastMouseY;

    // Handle merging
    if (this.merging && this.mergeTarget && this.mergeTarget.alive) {
      // Smooth merge towards target
      const dx = this.mergeTarget.x - this.x;
      const dy = this.mergeTarget.y - this.y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      this.mergeSpeed = Math.min(this.mergeSpeed + 0.02, 0.15);

      if (dist > 5) {
        this.x += (dx / dist) * this.mergeSpeed * 60;
        this.y += (dy / dist) * this.mergeSpeed * 60;

        // Shrink smoothly
        this.targetRadius = Math.max(
          5,
          this.baseRadius * (1 - this.mergeSpeed * 8)
        );
        this.radius += (this.targetRadius - this.radius) * 0.1;
      } else {
        // Complete merge
        this.mergeTarget.absorb(this);
        this.alive = false;
      }
      return;
    }

    // Mouse interaction
    const dx = window.mouseX - this.x;
    const dy = window.mouseY - this.y;
    const dist = Math.sqrt(dx * dx + dy * dy);

    if (dist < this.bumpRadius && dist > 0) {
      const force = (this.bumpRadius - dist) / this.bumpRadius;
      const pushStrength = 0.4 / Math.sqrt(this.mass / 30);

      this.vx -=
        (dx / dist) * force * pushStrength * (1 + Math.abs(mouseVx) * 0.05);
      this.vy -=
        (dy / dist) * force * pushStrength * (1 + Math.abs(mouseVy) * 0.05);

      this.squish = Math.max(0.7, this.squish - force * 0.2);
    }

    // Smooth movement
    this.vx *= 0.98;
    this.vy *= 0.98;

    this.x += this.vx;
    this.y += this.vy;

    // Recover squish
    this.squish += (1 - this.squish) * 0.1;
    this.rotation += this.rotationSpeed;

    // Simple, reliable edge wrapping
    const margin = this.radius + 10;

    if (this.x < -margin) this.x = window.cloudCanvas.width + margin;
    if (this.x > window.cloudCanvas.width + margin) this.x = -margin;
    if (this.y < -margin) this.y = window.cloudCanvas.height + margin;
    if (this.y > window.cloudCanvas.height + margin) this.y = -margin;

    // Update collision radius
    this.bumpRadius = this.radius + 40;
  }

  checkCollision(other) {
    if (
      !this.alive ||
      !other.alive ||
      this === other ||
      this.merging ||
      other.merging
    )
      return false;

    const dx = this.x - other.x;
    const dy = this.y - other.y;
    const dist = Math.sqrt(dx * dx + dy * dy);
    return dist < (this.radius + other.radius) * 0.9;
  }

  startMerge(target) {
    if (this.merging || target.merging) return;

    if (this.radius >= target.radius) {
      target.merging = true;
      target.mergeTarget = this;
      target.mergeSpeed = 0;
    } else {
      this.merging = true;
      this.mergeTarget = target;
      this.mergeSpeed = 0;
    }
  }

  absorb(other) {
    // Smooth size increase
    const area1 = Math.PI * this.radius * this.radius;
    const area2 = Math.PI * other.radius * other.radius;
    this.targetRadius = Math.sqrt((area1 + area2) / Math.PI);

    // Smooth growth animation
    const growthAnimation = () => {
      this.radius += (this.targetRadius - this.radius) * 0.15;
      if (Math.abs(this.targetRadius - this.radius) > 1) {
        requestAnimationFrame(growthAnimation);
      } else {
        this.radius = this.targetRadius;
        this.baseRadius = this.targetRadius;
      }
    };
    growthAnimation();

    // Update physics
    this.mass = this.targetRadius;

    // Combine velocities
    const totalMass = this.mass + other.mass;
    this.vx = (this.vx * this.mass + other.vx * other.mass) / totalMass;
    this.vy = (this.vy * this.mass + other.vy * other.mass) / totalMass;

    // Slow down big clouds
    const speedFactor = Math.max(0.4, 50 / this.targetRadius);
    this.vx *= speedFactor;
    this.vy *= speedFactor;

    // Combine puffs
    this.puffs = [
      ...this.puffs,
      ...other.puffs.map((puff) => ({
        ...puff,
        x: puff.x * 0.8,
        y: puff.y * 0.8,
      })),
    ];

    // Limit puffs
    if (this.puffs.length > 12) {
      this.puffs = this.puffs.slice(0, 12);
    }

    // Bounce effect
    this.squish = 1.3;
  }

  draw() {
    if (!this.alive) return;

    const ctx = window.cloudCtx;
    const isDark = document.body.classList.contains("dark");
    let alpha = this.opacity;

    // Enhance visibility for larger clouds
    alpha = Math.min(0.6, alpha + Math.max(0, (this.radius - 50) * 0.002));

    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.scale(1, this.squish);
    ctx.rotate(this.rotation);

    const blurAmount = 1 + Math.min(2, this.radius * 0.015);
    ctx.filter = `blur(${blurAmount}px)`;

    // Draw puffs
    this.puffs.forEach((puff) => {
      const puffAlpha = alpha * puff.alpha;
      const color = isDark
        ? `rgba(255,255,255,${puffAlpha})`
        : `rgba(255,255,255,${puffAlpha * 1.2})`;

      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.arc(puff.x, puff.y, puff.r, 0, Math.PI * 2);
      ctx.fill();
    });

    // Main body
    const mainAlpha = alpha * 1.1;
    const mainColor = isDark
      ? `rgba(255,255,255,${mainAlpha})`
      : `rgba(255,255,255,${mainAlpha * 1.3})`;

    ctx.fillStyle = mainColor;
    ctx.beginPath();
    ctx.arc(0, 0, this.radius, 0, Math.PI * 2);
    ctx.fill();

    // Highlight
    const highlightAlpha = alpha * 0.4;
    const highlightColor = isDark
      ? `rgba(255,255,255,${highlightAlpha})`
      : `rgba(255,255,255,${highlightAlpha * 1.2})`;

    ctx.fillStyle = highlightColor;
    ctx.beginPath();
    ctx.arc(0, -this.radius * 0.3, this.radius * 0.6, 0, Math.PI * 2);
    ctx.fill();

    ctx.restore();
  }
}

// Initialize cloud physics system
function initCloudPhysics() {
  const canvas = document.getElementById("cloudCanvas");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");

  // Global variables
  window.cloudCanvas = canvas;
  window.cloudCtx = ctx;
  window.mouseX = 0;
  window.mouseY = 0;
  window.lastMouseX = 0;
  window.lastMouseY = 0;
  window.cloudIdCounter = 0;

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resizeCanvas();
  window.addEventListener("resize", resizeCanvas);

  // Initialize clouds
  const clouds = [];
  for (let i = 0; i < 6; i++) {
    clouds.push(new SmoothCloud());
  }

  // Mouse tracking
  document.addEventListener("mousemove", (e) => {
    window.lastMouseX = window.mouseX;
    window.lastMouseY = window.mouseY;
    window.mouseX = e.clientX;
    window.mouseY = e.clientY;
  });

  // Click to split large clouds
  canvas.addEventListener("click", (e) => {
    const clickX = e.clientX;
    const clickY = e.clientY;

    // Find clicked cloud
    for (let cloud of clouds) {
      const dx = clickX - cloud.x;
      const dy = clickY - cloud.y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      // Only split if cloud is large enough and clicked
      if (dist < cloud.radius && cloud.radius > 60) {
        splitCloud(cloud, clouds);
        break;
      }
    }
  });

  function splitCloud(originalCloud, cloudArray) {
    // Remove original cloud
    const index = cloudArray.indexOf(originalCloud);
    if (index > -1) {
      cloudArray.splice(index, 1);
    }

    // Create 3-4 smaller clouds
    const numSplits = 3 + Math.floor(Math.random() * 2);
    const newRadius = originalCloud.radius / Math.sqrt(numSplits);

    for (let i = 0; i < numSplits; i++) {
      const angle = (Math.PI * 2 * i) / numSplits + Math.random() * 0.5;
      const distance = originalCloud.radius * 0.3;

      const newCloud = new SmoothCloud(
        originalCloud.x + Math.cos(angle) * distance,
        originalCloud.y + Math.sin(angle) * distance,
        newRadius + Math.random() * 10 - 5
      );

      // Give them some velocity away from center
      newCloud.vx = Math.cos(angle) * 2 + (Math.random() - 0.5);
      newCloud.vy = Math.sin(angle) * 2 + (Math.random() - 0.5);

      cloudArray.push(newCloud);
    }
  }

  // Animation loop
  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Check collisions
    for (let i = 0; i < clouds.length; i++) {
      for (let j = i + 1; j < clouds.length; j++) {
        if (clouds[i].checkCollision(clouds[j])) {
          clouds[i].startMerge(clouds[j]);
        }
      }
    }

    // Update and draw
    clouds.forEach((cloud) => {
      cloud.update();
      cloud.draw();
    });

    // Clean up dead clouds
    for (let i = clouds.length - 1; i >= 0; i--) {
      if (!clouds[i].alive) {
        clouds.splice(i, 1);
      }
    }

    requestAnimationFrame(animate);
  }
  animate();
}

// Eye tracking system
function initEyeTracking() {
  const leftEye = document.querySelector(".eye-left .pupil");
  const rightEye = document.querySelector(".eye-right .pupil");
  const leftEyeContainer = document.querySelector(".eye-left");
  const rightEyeContainer = document.querySelector(".eye-right");

  if (!leftEye || !rightEye) return;

  function updateEyePosition(pupil, container) {
    const rect = container.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const angle = Math.atan2(window.mouseY - centerY, window.mouseX - centerX);
    const distance = Math.min(
      12,
      Math.hypot(window.mouseX - centerX, window.mouseY - centerY) / 20
    );

    const pupilX = Math.cos(angle) * distance;
    const pupilY = Math.sin(angle) * distance;

    pupil.style.transform = `translate(calc(-50% + ${pupilX}px), calc(-50% + ${pupilY}px))`;
  }

  document.addEventListener("mousemove", () => {
    updateEyePosition(leftEye, leftEyeContainer);
    updateEyePosition(rightEye, rightEyeContainer);
  });
}

// Sparkle effects
function initSparkles() {
  function createSparkle() {
    const sparkle = document.createElement("div");
    sparkle.style.cssText = `
      position: absolute;
      width: 6px;
      height: 6px;
      background: radial-gradient(circle, white 0%, transparent 70%);
      border-radius: 50%;
      pointer-events: none;
      z-index: 6;
      animation: sparkle 2s ease-in-out forwards;
      box-shadow: 0 0 10px rgba(255,255,255,0.5);
    `;

    const cloudBody = document.querySelector(".cloud-body");
    if (!cloudBody) return;

    const cloudRect = cloudBody.getBoundingClientRect();
    sparkle.style.left =
      cloudRect.left + Math.random() * cloudRect.width + "px";
    sparkle.style.top = cloudRect.top + Math.random() * cloudRect.height + "px";
    document.body.appendChild(sparkle);

    setTimeout(() => sparkle.remove(), 2000);
  }

  setInterval(createSparkle, 5000);
}

// Dark mode toggle
function toggleMode() {
  document.body.classList.toggle("dark");
  const modeText = document.getElementById("mode-text");
  if (modeText) {
    modeText.textContent = document.body.classList.contains("dark")
      ? "☀️"
      : "🌙 ";
  }
}

// Initialize everything when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  initCloudPhysics();
  initEyeTracking();
  initSparkles();
});

// Make toggle function globally available
window.toggleMode = toggleMode;
