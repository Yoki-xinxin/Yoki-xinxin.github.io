(() => {
  const copy = window.SITE_TEXT || {};

  const escapeHtml = (value) =>
    String(value ?? "").replace(/[&<>"']/g, (character) => {
      const replacements = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#039;"
      };
      return replacements[character];
    });

  const page = document.body.dataset.page || "home";
  const pageTitle = copy.pageTitles?.[page] || copy.pageTitles?.home;
  if (pageTitle) {
    document.title = pageTitle;
  }

  document.querySelectorAll("[data-text]").forEach((element) => {
    const key = element.dataset.text;
    if (copy[key] !== undefined) {
      element.textContent = copy[key];
    }
  });

  const portrait = document.querySelector(".portrait-wrap");
  const portraitImage = document.getElementById("portrait-image");
  const aboutPortraitImage = document.getElementById("about-portrait-image");

  if (portraitImage && copy.portraitSrc) {
    portraitImage.src = copy.portraitSrc;
  }

  if (aboutPortraitImage && copy.aboutPagePortraitSrc) {
    aboutPortraitImage.src = copy.aboutPagePortraitSrc;
  }

  const keywordList = document.getElementById("keyword-list");
  if (keywordList && Array.isArray(copy.keywords)) {
    keywordList.innerHTML = copy.keywords.map((keyword) => `<li>${escapeHtml(keyword)}</li>`).join("");
  }

  const marqueeTrack = document.getElementById("marquee-track");
  if (marqueeTrack && Array.isArray(copy.marquee) && copy.marquee.length) {
    const base = copy.marquee.map((item) => `<span>${escapeHtml(item)}</span>`).join("");
    const repeated = Array.from({ length: 4 }, () => base).join("");
    const half = `<div class="marquee-half">${repeated}</div>`;
    marqueeTrack.innerHTML = half + half;
  }

  const aboutCopy = document.getElementById("about-copy");
  if (aboutCopy && Array.isArray(copy.aboutParagraphs)) {
    aboutCopy.innerHTML = copy.aboutParagraphs.map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`).join("");
  }

  const workList = document.getElementById("work-list");
  if (workList && Array.isArray(copy.projects)) {
    workList.innerHTML = copy.projects
      .map(
        (project) => `<li>
          <span>${escapeHtml(project.number || "")}</span>
          <strong><a href="work.html#${encodeURIComponent(project.id || "")}">${escapeHtml(project.title || "")}</a></strong>
          <em>${escapeHtml(project.subtitle || "")}</em>
        </li>`
      )
      .join("");
  }

  const aboutStats = document.getElementById("about-stats");
  if (aboutStats && Array.isArray(copy.aboutPageStats)) {
    aboutStats.innerHTML = copy.aboutPageStats
      .map(
        (item) => `<div class="stat-card">
          <strong>${escapeHtml(item.value || "")}</strong>
          <span>${escapeHtml(item.label || "")}</span>
        </div>`
      )
      .join("");
  }

  const aboutStory = document.getElementById("about-story");
  if (aboutStory && Array.isArray(copy.aboutStoryParagraphs)) {
    aboutStory.innerHTML = copy.aboutStoryParagraphs.map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`).join("");
  }

  const aboutValues = document.getElementById("about-values");
  if (aboutValues && Array.isArray(copy.aboutValues)) {
    aboutValues.innerHTML = copy.aboutValues
      .map(
        (item) => `<article class="value-card">
          <h3>${escapeHtml(item.title || "")}</h3>
          <p>${escapeHtml(item.text || "")}</p>
        </article>`
      )
      .join("");
  }

  const aboutToolkit = document.getElementById("about-toolkit");
  if (aboutToolkit && Array.isArray(copy.aboutToolkit)) {
    aboutToolkit.innerHTML = copy.aboutToolkit.map((item) => `<li>${escapeHtml(item)}</li>`).join("");
  }

  // Work page: project navigation and full case studies
  const projectNav = document.getElementById("project-nav");
  if (projectNav && Array.isArray(copy.projects)) {
    projectNav.innerHTML = `<ul>${copy.projects
      .map(
        (project) => `<li><a href="#${encodeURIComponent(project.id || "")}"><span>${escapeHtml(
          project.number || ""
        )}</span>${escapeHtml(project.title || "")}</a></li>`
      )
      .join("")}</ul>`;
  }

  const projectList = document.getElementById("project-list");
  if (projectList && Array.isArray(copy.projects)) {
    projectList.innerHTML = copy.projects
      .map((project) => {
        const metrics = Array.isArray(project.metrics)
          ? `<div class="case-metrics">${project.metrics
              .map(
                (metric) => `<div class="case-metric">
                  <strong>${escapeHtml(metric.value || "")}</strong>
                  <span>${escapeHtml(metric.label || "")}</span>
                </div>`
              )
              .join("")}</div>`
          : "";

        const sections = Array.isArray(project.sections)
          ? `<div class="case-sections">${project.sections
              .map(
                (section) => `<section>
                  <h3>${escapeHtml(section.title || "")}</h3>
                  <p>${escapeHtml(section.text || "")}</p>
                </section>`
              )
              .join("")}</div>`
          : "";

        const approach = Array.isArray(project.approach)
          ? `<ol class="case-approach">${project.approach
              .map((item) => `<li>${escapeHtml(item)}</li>`)
              .join("")}</ol>`
          : "";

        return `<article class="case-study" id="${encodeURIComponent(project.id || "")}">
          <header class="case-header">
            <p class="case-number">${escapeHtml(project.number || "")} / 04</p>
            <h2>${escapeHtml(project.title || "")}</h2>
            <p class="case-subtitle">${escapeHtml(project.subtitle || "")}</p>
            <div class="case-meta">
              <span>${escapeHtml(project.year || "")}</span>
              <span>${escapeHtml(project.role || "")}</span>
            </div>
          </header>

          <div class="case-intro">
            <p>${escapeHtml(project.context || "")}</p>
          </div>

          ${metrics}
          ${sections}

          <div class="case-body">
            <section class="case-column case-column--approach">
              <h3>Approach</h3>
              ${approach}
            </section>
            <section class="case-column case-column--outcome">
              <h3>Outcome</h3>
              <p>${escapeHtml(project.outcome || "")}</p>
              <p class="case-reflection">${escapeHtml(project.reflection || "")}</p>
            </section>
          </div>

          <div class="case-visual case-visual--${escapeHtml(project.visual || "default")}" aria-hidden="true">
            <span>${escapeHtml(project.number || "")}</span>
            <strong>${escapeHtml(project.title || "")}</strong>
          </div>
        </article>`;
      })
      .join("");
  }

  // Homepage CV card feed
  const feedSectionsElement = document.getElementById("feed-sections");
  const cardIndex = new Map();

  const renderCover = (card, extraClass = "") => {
    if (card.image) {
      return `<img src="${escapeHtml(card.image)}" alt="${escapeHtml(card.imageAlt || card.title || "")}" style="object-position: ${escapeHtml(card.imagePosition || "center")}; object-fit: ${escapeHtml(card.imageFit || "cover")}; background: ${card.imageFit === "contain" ? "var(--white)" : "transparent"}" loading="lazy">`;
    }

    return `<div class="card-cover ${extraClass}">
      <span class="card-cover__number">${escapeHtml(card.coverLabel || "")}</span>
      <span class="card-cover__meta">${escapeHtml(card.coverMeta || "")}</span>
    </div>`;
  };

  if (feedSectionsElement && Array.isArray(copy.feedSections)) {
    feedSectionsElement.innerHTML = copy.feedSections
      .map((section) => {
        const heading = `<div class="feed-section-heading">
          <p class="feed-section-label"><span>${escapeHtml(section.number || "")}</span>${escapeHtml(
            section.label || ""
          )}</p>
          <div>
            <h2 class="${section.compactHeading ? "feed-section-title--compact" : ""}">${escapeHtml(section.title || "")}</h2>
          </div>
        </div>`;

        if (section.display === "list") {
          const listItems = section.cards
            .map(
              (card) => `<li>
                <div class="feed-list__intro">
                  <h3>${escapeHtml(card.title || "")}</h3>
                </div>
                <p class="feed-list__summary">${escapeHtml(card.summary || "")}</p>
              </li>`
            )
            .join("");

          return `<section class="feed-section feed-section--list" id="section-${escapeHtml(section.id || "")}">
            ${heading}
            <ul class="feed-list">${listItems}</ul>
          </section>`;
        }

        const cards = section.cards
          .map((card) => {
            const key = `${section.id}--${card.id}`;
            cardIndex.set(key, card);

            return `<button class="feed-card" type="button" data-card-id="${escapeHtml(key)}" aria-label="Open ${escapeHtml(
              card.title || ""
            )}">
              <span class="feed-card__media">${renderCover(card, "card-cover--feed")}</span>
              <span class="feed-card__body">
                <span class="feed-card__eyebrow">${escapeHtml(card.eyebrow || "")}</span>
                <span class="feed-card__title${card.titleNoWrap ? " feed-card__title--nowrap" : ""}">${escapeHtml(card.title || "")}</span>
                <span class="feed-card__subtitle">${escapeHtml(card.subtitle || "")}</span>
                ${card.summary ? `<span class="feed-card__summary">${escapeHtml(card.summary)}</span>` : ""}
                <span class="feed-card__tags">${(card.tags || [])
                  .map((tag) => `<span class="tag">${escapeHtml(tag)}</span>`)
                  .join("")}</span>
                <span class="feed-card__open">Open card <span aria-hidden="true">→</span></span>
              </span>
            </button>`;
          })
          .join("");

        return `<section class="feed-section" id="section-${escapeHtml(section.id || "")}">
          ${heading}
          <div class="feed-grid">${cards}</div>
        </section>`;
      })
      .join("");
  }

  // Keep anchor links working after the JS card sections are rendered.
  const scrollToHash = () => {
    if (!window.location.hash) return;
    const target = document.querySelector(window.location.hash);
    if (!target) return;
    window.requestAnimationFrame(() => {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  };

  scrollToHash();
  window.addEventListener("load", scrollToHash);

  // Card modal
  const modal = document.getElementById("case-modal");
  const modalMedia = document.getElementById("case-modal-media");
  const modalEyebrow = document.getElementById("case-modal-eyebrow");
  const modalTitle = document.getElementById("case-modal-title");
  const modalSubtitle = document.getElementById("case-modal-subtitle");
  const modalSummary = document.getElementById("case-modal-summary");
  const modalDetails = document.getElementById("case-modal-details");
  const modalLinks = document.getElementById("case-modal-links");
  const modalDialog = modal?.querySelector(".case-modal__dialog");
  let lastFocusedElement = null;

  const renderModalMedia = (card) => {
    const gallery = Array.isArray(card.gallery) ? card.gallery.filter(Boolean) : [];

    // Always keep the card cover as the first gallery image.
    if (card.image) {
      const coverIndex = gallery.indexOf(card.image);
      if (coverIndex > 0) {
        gallery.splice(coverIndex, 1);
      }
      if (coverIndex !== 0) {
        gallery.unshift(card.image);
      }
    }

    if (gallery.length > 1) {
      const slides = gallery
        .map(
          (src, index) => `<img src="${escapeHtml(src)}" alt="${escapeHtml(
            index === 0 ? card.imageAlt || card.title || "" : ""
          )}" style="object-position: ${escapeHtml(card.imagePosition || "center")}; object-fit: ${escapeHtml(card.imageFit || "cover")}; background: ${card.imageFit === "contain" ? "var(--white)" : "transparent"}">`
        )
        .join("");

      const thumbnails = gallery
        .map(
          (src, index) => `<button class="modal-thumb${index === 0 ? " is-active" : ""}" type="button" data-gallery-index="${index}" aria-label="View image ${index + 1}"><img src="${escapeHtml(src)}" alt=""></button>`
        )
        .join("");

      return `<div class="modal-gallery">
        <div class="modal-gallery__track" id="modal-gallery-track" tabindex="0">${slides}</div>
        <div class="modal-gallery__thumbs">${thumbnails}</div>
      </div>`;
    }

    return renderCover(card, "card-cover--modal");
  };

  const openModal = (card, trigger) => {
    if (!modal || !card) return;

    lastFocusedElement = trigger;
    modalMedia.innerHTML = renderModalMedia(card);

    const galleryTrack = modalMedia.querySelector("#modal-gallery-track");
    const galleryThumbs = modalMedia.querySelectorAll(".modal-thumb");

    galleryThumbs.forEach((button, index) => {
      button.addEventListener("click", () => {
        if (!galleryTrack) return;
        galleryTrack.scrollTo({
          left: index * galleryTrack.clientWidth,
          behavior: "smooth"
        });
        galleryThumbs.forEach((thumb, thumbIndex) => thumb.classList.toggle("is-active", thumbIndex === index));
      });
    });

    galleryTrack?.addEventListener("scroll", () => {
      const index = Math.round(galleryTrack.scrollLeft / galleryTrack.clientWidth);
      galleryThumbs.forEach((thumb, thumbIndex) => thumb.classList.toggle("is-active", thumbIndex === index));
    });
    modalEyebrow.textContent = card.eyebrow || "";
    modalTitle.textContent = card.title || "";
    modalSubtitle.textContent = card.subtitle || "";
    modalSummary.textContent = card.summary || "";
    modalSummary.hidden = !card.summary;

    modalDetails.innerHTML = (card.details || []).map((item) => `<li>${escapeHtml(item)}</li>`).join("");

    const documents = (card.documents || []).map(
      (document) =>
        `<a class="modal-link modal-link--download" href="${escapeHtml(document.href || "#")}" download><span>↧</span>${escapeHtml(
          document.label || "Download"
        )}</a>`
    );

    const links = (card.links || []).map(
      (link) =>
        `<a class="modal-link" href="${escapeHtml(link.href || "#")}" target="_blank" rel="noreferrer"><span>↗</span>${escapeHtml(
          link.label || "Open link"
        )}</a>`
    );

    modalLinks.innerHTML = [...documents, ...links].join("");
    modal.hidden = false;
    document.body.classList.add("modal-open");
    modalDialog?.focus();
  };

  const closeModal = () => {
    if (!modal || modal.hidden) return;
    modal.hidden = true;
    modalMedia.innerHTML = "";
    document.body.classList.remove("modal-open");
    lastFocusedElement?.focus({ preventScroll: true });
  };

  if (feedSectionsElement && modal) {
    feedSectionsElement.addEventListener("click", (event) => {
      const cardButton = event.target.closest(".feed-card");
      if (!cardButton) return;
      const card = cardIndex.get(cardButton.dataset.cardId);
      openModal(card, cardButton);
    });
  }

  modal?.querySelectorAll("[data-modal-close]").forEach((element) => {
    element.addEventListener("click", closeModal);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeModal();
    }
  });

  const emailLink = document.getElementById("email-link");
  if (emailLink && copy.emailHref) {
    emailLink.href = copy.emailHref;
  }

  const linkedinLink = document.getElementById("linkedin-link");
  if (linkedinLink && copy.linkedinHref) {
    linkedinLink.href = copy.linkedinHref;
  }

  const cvLink = document.getElementById("cv-link");
  if (cvLink && copy.cvHref) {
    cvLink.href = copy.cvHref;
  }

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const finePointer = window.matchMedia("(pointer: fine)").matches;

  if (portrait && finePointer && !reduceMotion) {
    let frame = 0;

    window.addEventListener("pointermove", (event) => {
      cancelAnimationFrame(frame);

      frame = window.requestAnimationFrame(() => {
        const x = (event.clientX / window.innerWidth - 0.5) * 2;
        const y = (event.clientY / window.innerHeight - 0.5) * 2;

        portrait.style.setProperty("--px", `${(x * 7).toFixed(2)}px`);
        portrait.style.setProperty("--py", `${(y * 7).toFixed(2)}px`);
      });
    });
  }

  const languageToggle = document.querySelector(".language-toggle");
  const toast = document.querySelector(".toast");
  let toastTimer = 0;

  if (languageToggle && toast) {
    languageToggle.addEventListener("click", () => {
      window.clearTimeout(toastTimer);
      toast.classList.add("is-visible");
      languageToggle.setAttribute("aria-pressed", "true");

      toastTimer = window.setTimeout(() => {
        toast.classList.remove("is-visible");
        languageToggle.removeAttribute("aria-pressed");
      }, 2400);
    });
  }
})();
