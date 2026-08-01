const particles = document.getElementById("particles");

for(let i = 0; i < 90; i++){

    const particle = document.createElement("div");

    particle.className = "particle";

    const size = Math.random() * 4 + 2;

    particle.style.width = size + "px";
    particle.style.height = size + "px";

    particle.style.left =
    Math.random() * 100 + "%";

    particle.style.animationDuration =
    (Math.random() * 8 + 6) + "s";

    particle.style.animationDelay =
    Math.random() * 8 + "s";

    particle.style.opacity =
    Math.random() * 0.6 + 0.2;

    particles.appendChild(particle);

}
