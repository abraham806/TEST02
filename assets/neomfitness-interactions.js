/* ================================================================
   NEOMFITNESS — Interactions Premium
   Header scroll, cursor, lazy reveals, smooth UX
   ================================================================ */
(function () {
  'use strict';

  /* ─── 1. Header — comportement au scroll ─────────────────────── */
  (function initHeader() {
    const wrapper = document.querySelector('.header-wrapper');
    if (!wrapper) return;

    let lastY = 0;
    let ticking = false;

    function onScroll() {
      if (!ticking) {
        requestAnimationFrame(() => {
          const y = window.scrollY;
          const isScrolled = y > 80;

          wrapper.classList.toggle('nf-scrolled', isScrolled);

          /* Masquer au scroll bas, révéler au scroll haut */
          if (y > lastY + 4 && y > 200) {
            wrapper.classList.add('nf-hidden');
          } else if (y < lastY - 4 || y < 80) {
            wrapper.classList.remove('nf-hidden');
          }

          lastY = y;
          ticking = false;
        });
        ticking = true;
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
  })();

  /* ─── 2. Cartes produit — chargement progressif des images ───── */
  (function initLazyImages() {
    if (!('IntersectionObserver' in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('nf-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '0px 0px -60px 0px', threshold: 0.1 }
    );

    document.querySelectorAll('.card-wrapper').forEach((el) => {
      el.classList.add('nf-reveal');
      observer.observe(el);
    });
  })();

  /* ─── 3. Smooth reveal des sections ─────────────────────────── */
  (function initSectionReveal() {
    if (!('IntersectionObserver' in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('nf-section-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '0px 0px -80px 0px', threshold: 0.05 }
    );

    document.querySelectorAll('.shopify-section').forEach((el) => {
      el.classList.add('nf-section-reveal');
      observer.observe(el);
    });
  })();

  /* ─── 4. Boutons — ripple effect au clic ─────────────────────── */
  (function initRipple() {
    document.addEventListener('click', (e) => {
      const btn = e.target.closest('.button');
      if (!btn || btn.disabled) return;

      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const ripple = document.createElement('span');
      ripple.className = 'nf-ripple';
      ripple.style.cssText = `left:${x}px;top:${y}px`;

      btn.appendChild(ripple);
      ripple.addEventListener('animationend', () => ripple.remove());
    });
  })();

  /* ─── 5. Compteur panier — animation au changement ──────────── */
  (function initCartCount() {
    const bubble = document.querySelector('.cart-count-bubble');
    if (!bubble) return;

    const observer = new MutationObserver(() => {
      bubble.classList.remove('nf-count-pop');
      void bubble.offsetWidth; /* force reflow */
      bubble.classList.add('nf-count-pop');
    });

    observer.observe(bubble, { childList: true, subtree: true, characterData: true });
  })();

  /* ─── 6. Image zoom produit — parallax léger au scroll ────────── */
  (function initParallaxHero() {
    const heroes = document.querySelectorAll('.banner__media, .hero-slide__background');
    if (!heroes.length || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    function update() {
      const y = window.scrollY;
      heroes.forEach((el) => {
        const rect = el.closest('.banner, .hero')?.getBoundingClientRect();
        if (!rect || rect.bottom < 0 || rect.top > window.innerHeight) return;
        const offset = (rect.top / window.innerHeight) * 30;
        el.style.transform = `translateY(${offset}px)`;
      });
    }

    window.addEventListener('scroll', update, { passive: true });
  })();

  /* ─── 7. Pré-fetch des pages au survol des liens nav ─────────── */
  (function initPrefetch() {
    if (!('requestIdleCallback' in window)) return;

    const prefetched = new Set();

    document.querySelectorAll('.header__menu-item a[href]').forEach((link) => {
      link.addEventListener('mouseenter', () => {
        const href = link.href;
        if (!href || prefetched.has(href) || href.includes('#')) return;

        requestIdleCallback(() => {
          const el = document.createElement('link');
          el.rel = 'prefetch';
          el.href = href;
          document.head.appendChild(el);
          prefetched.add(href);
        });
      }, { passive: true });
    });
  })();

})();
