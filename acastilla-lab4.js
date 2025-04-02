// Abel Castilla
// ITMD 441-01 Undergraduate Student

(function () {
  // 1. Change the main hero headline
  const heroHeading = document.querySelector("#hero h1");
  if (heroHeading) {
    heroHeading.textContent = "Uplift Your Brand with Stellar Marketing";
  }

  const heroSubheading = document.querySelector("#hero p");
  if (heroSubheading) {
  heroSubheading.innerHTML = `Utilize cutting-edge strategies from Stellar Marketing to help your business <strong><em>thrive</em></strong> and <strong><em>excel</em></strong>.`;
}

  // 3. Change the hero background image
  const heroSection = document.querySelector("#hero");
  if (heroSection) {
    heroSection.style.backgroundImage = 'url("https://picsum.photos/id/683/1280/720")';
    heroSection.style.backgroundSize = "cover";
    heroSection.style.backgroundPosition = "center";
  }

  // 4. Change navbar background color to match the footer
  const nav = document.querySelector("header");
  const footer = document.querySelector("footer");
  if (nav && footer) {
    const footerBg = getComputedStyle(footer).backgroundColor;
    nav.style.backgroundColor = footerBg;
  }

  // 5. Remove "Get Started" CTA button from the hero
  const ctaBtn = document.querySelector("#hero a");
  if (ctaBtn) {
    ctaBtn.remove();
  }

  // 6. Center align section headings for Services, Solutions, Contact
  const headingsToCenter = ["Our Services", "Specialized Marketing Solutions For", "Contact Us"];
  document.querySelectorAll("section h2").forEach((h2) => {
    if (headingsToCenter.includes(h2.textContent.trim())) {
      h2.classList.add("text-center");
    }
  });

  // 7. Change the icons color in the services section to #47C714
  const serviceIcons = document.querySelectorAll("#services .material-symbols-outlined");
  serviceIcons.forEach(icon => {
    icon.style.color = "#47C714";
  });

  // 8. Change digital marketing icon to 'ads_click'
  const digitalIcon = document.querySelector('[data-icon="digital"]');
  if (digitalIcon) {
    digitalIcon.textContent = "ads_click";
  }

  // 9. Make solutions section display 4 tiles at >=1024px
  const style = document.createElement("style");
  style.textContent = `
    @media (min-width: 1024px) {
      [data-section="product_cards"] {
        grid-template-columns: repeat(4, 1fr) !important;
      }
    }
  `;
  document.head.appendChild(style);

  // 10. Change Musicians image
  const musiciansImg = Array.from(document.querySelectorAll('#solutions img')).find(img =>
    img.alt.toLowerCase().includes("musician")
  );
  if (musiciansImg) {
    musiciansImg.src = "https://picsum.photos/id/453/400/300";
  }
})();