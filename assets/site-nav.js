/* Firedancing - shared header, footer, mobile menu, mega menu, search.
   Injects into #site-header and #site-footer. Owns the cart-count badge. */
(function () {
  var RED = '#ff3b3b';

  var ICON = {
    menu: '<svg aria-hidden="true" focusable="false" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M3 6h18M3 12h18M3 18h18"/></svg>',
    search: '<svg aria-hidden="true" focusable="false" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.2-3.2"/></svg>',
    bag: '<svg aria-hidden="true" focusable="false" width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2 3.5 5.5V20a1.5 1.5 0 0 0 1.5 1.5h14a1.5 1.5 0 0 0 1.5-1.5V5.5L18 2z"/><path d="M3.5 6.5h17"/><path d="M15.5 10a3.5 3.5 0 0 1-7 0"/></svg>',
    close: '<svg aria-hidden="true" focusable="false" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg>',
    flame: '<svg aria-hidden="true" focusable="false" width="15" height="15" viewBox="0 0 24 24" fill="#fff"><path d="M12 2c1.2 3.2-.6 5-2.2 6.6C8 10.4 6.5 12 6.5 14.7A5.5 5.5 0 0 0 12 20a5.5 5.5 0 0 0 5.5-5.3c0-2-1-3.6-2-5-.4 .9-1 1.5-1.8 1.8 .9-2.6 .2-6.2-1.7-9.5z"/></svg>',
    chevron: '<svg aria-hidden="true" focusable="false" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>'
  };

  function logo(size) {
    var d = size || 26, f = Math.round(d * 0.62);
    return '<a href="index.html" style="display:flex;align-items:center;gap:8px">' +
      '<span style="width:' + d + 'px;height:' + d + 'px;border-radius:50%;background:' + RED + ';display:grid;place-items:center">' + ICON.flame + '</span>' +
      '<span style="font-weight:800;font-size:16px;letter-spacing:.16em">FIREDANCING</span></a>';
  }

  // ---- Mega menu data ----
  var MEGA = [
    { title: 'Ready to Ship', note: 'Ships in 1-2 days', links: [['product.html', 'Shop the drop'], ['product.html', 'Catsuits'], ['product.html', 'Bodysuits']] },
    { title: 'Made to Order', note: 'Built for you · 2-4 wks', links: [['made-to-order.html', 'Build your fit'], ['made-to-order.html', 'Chain belt & add-ons']] },
    { title: 'Explore', note: '', links: [['blog.html', 'Journal'], ['index.html#maker', 'The maker'], ['index.html#watch', 'Watch me make it']] }
  ];

  function megaPanelHtml() {
    var cols = MEGA.map(function (c) {
      var links = c.links.map(function (l) {
        return '<a href="' + l[0] + '" data-nav-link style="display:block;font-size:14px;color:#cfcfcf;font-weight:600;padding:7px 0">' + l[1] + '</a>';
      }).join('');
      return '<div style="min-width:0"><div style="font-size:11px;font-weight:800;letter-spacing:.12em;color:' + RED + ';text-transform:uppercase;margin-bottom:8px">' + c.title + '</div>' +
        (c.note ? '<div style="font-size:11px;color:#8f8f8f;font-weight:600;margin-bottom:6px">' + c.note + '</div>' : '') + links + '</div>';
    }).join('');
    return '<div id="megaPanel" style="display:none;position:absolute;left:0;right:0;top:100%;background:#0f0f0f;border-bottom:1px solid rgba(255,255,255,.1);box-shadow:0 24px 50px rgba(0,0,0,.5);z-index:59">' +
      '<div style="max-width:440px;margin:0 auto;padding:20px 20px 22px;display:grid;grid-template-columns:1fr 1fr;gap:20px 16px">' + cols +
      '<a href="product.html" data-nav-link style="grid-column:1 / -1;position:relative;height:120px;border-radius:14px;overflow:hidden;display:block;margin-top:2px">' +
        '<img src="assets/product/duo-lifestyle.jpg" loading="lazy" decoding="async" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:center 30%" alt="Featured duo drop" />' +
        '<span style="position:absolute;inset:0;background:linear-gradient(90deg,rgba(0,0,0,.8),rgba(0,0,0,.15))"></span>' +
        '<span style="position:absolute;left:16px;top:50%;transform:translateY(-50%)"><span style="display:block;font-size:11px;font-weight:800;letter-spacing:.12em;color:' + RED + '">NEW</span><span style="display:block;font-size:16px;font-weight:800">The duo drop →</span></span>' +
      '</a></div></div>';
  }

  // ---- Mobile menu ----
  function mobileMenuHtml() {
    var sections = MEGA.map(function (c) {
      var links = c.links.map(function (l) {
        return '<a href="' + l[0] + '" data-nav-link style="display:block;font-size:16px;color:#e6e6e6;font-weight:600;padding:11px 0;border-bottom:1px solid rgba(255,255,255,.06)">' + l[1] + '</a>';
      }).join('');
      return '<div style="margin-bottom:18px"><div style="font-size:11px;font-weight:800;letter-spacing:.12em;color:' + RED + ';text-transform:uppercase;margin-bottom:4px">' + c.title + '</div>' + links + '</div>';
    }).join('');
    return '<div id="mobileMenu" style="display:none;position:fixed;inset:0;z-index:9500;font-family:Figtree,system-ui,sans-serif">' +
      '<div data-nav-close style="position:absolute;inset:0;background:rgba(0,0,0,.6);animation:mcFade .2s ease"></div>' +
      '<div style="position:absolute;top:0;left:0;height:100%;width:min(340px,86vw);background:#101010;border-right:1px solid rgba(255,255,255,.1);display:flex;flex-direction:column;animation:navSlideL .28s cubic-bezier(.2,.8,.2,1);box-shadow:24px 0 60px rgba(0,0,0,.5)">' +
        '<div style="display:flex;align-items:center;justify-content:space-between;padding:16px 18px;border-bottom:1px solid rgba(255,255,255,.1)">' + logo(24) +
          '<button data-nav-close aria-label="Close menu" style="background:none;border:none;color:#fff;cursor:pointer;padding:2px">' + ICON.close + '</button></div>' +
        '<div style="flex:1;overflow-y:auto;padding:20px 20px 30px">' + sections +
          '<a href="cart.html" data-nav-link style="display:inline-flex;align-items:center;gap:8px;margin-top:6px;color:#fff;font-weight:700;font-size:15px">' + ICON.bag + ' Your bag</a>' +
        '</div></div></div>';
  }

  // ---- Search overlay ----
  function searchHtml() {
    return '<div id="searchOverlay" style="display:none;position:fixed;inset:0;z-index:9600;font-family:Figtree,system-ui,sans-serif">' +
      '<div data-nav-close style="position:absolute;inset:0;background:rgba(0,0,0,.72);animation:mcFade .2s ease"></div>' +
      '<div style="position:absolute;top:0;left:0;right:0;background:#0f0f0f;border-bottom:1px solid rgba(255,255,255,.1);animation:navDrop .22s ease">' +
        '<div style="max-width:440px;margin:0 auto;padding:16px 16px 20px">' +
          '<div style="display:flex;align-items:center;gap:10px;background:#1a1a1a;border:1px solid rgba(255,255,255,.14);border-radius:12px;padding:12px 14px">' +
            '<span style="color:#8f8f8f;flex:0 0 auto">' + ICON.search + '</span>' +
            '<input id="searchInput" type="search" enterkeyhint="search" aria-label="Search" placeholder="Search catsuits, bodysuits, colours…" style="flex:1;background:none;border:none;outline:none;color:#fff;font-family:Figtree,sans-serif;font-size:16px" />' +
            '<button data-nav-close style="background:none;border:none;color:#8f8f8f;cursor:pointer;flex:0 0 auto">' + ICON.close + '</button>' +
          '</div>' +
          '<div style="margin-top:14px;font-size:11px;font-weight:800;letter-spacing:.1em;color:#8f8f8f">POPULAR</div>' +
          '<div style="display:flex;flex-wrap:wrap;gap:8px;margin-top:10px">' +
            ['Groove catsuit', 'Bodysuit', 'Tie-dye', 'Made to order', 'Chain belt'].map(function (t) {
              return '<a href="product.html" data-nav-link style="font-size:13px;font-weight:600;color:#e6e6e6;background:#1a1a1a;border:1px solid rgba(255,255,255,.14);border-radius:500px;padding:7px 13px">' + t + '</a>';
            }).join('') +
          '</div></div></div></div>';
  }

  function headerHtml() {
    return '<header style="position:sticky;top:0;z-index:60;background:rgba(0,0,0,.8);backdrop-filter:blur(16px);-webkit-backdrop-filter:blur(16px);border-bottom:1px solid rgba(255,255,255,.08)">' +
      '<div style="max-width:440px;margin:0 auto;height:54px;display:flex;align-items:center;padding:0 14px;gap:6px">' +
        '<button id="navMenuBtn" aria-label="Open menu" style="background:none;border:none;color:#fff;cursor:pointer;padding:6px;display:grid;place-items:center">' + ICON.menu + '</button>' +
        '<button id="navShopBtn" style="background:none;border:none;color:#e6e6e6;cursor:pointer;font-family:Figtree,sans-serif;font-size:13px;font-weight:700;display:flex;align-items:center;gap:3px;padding:6px 4px">Shop<span id="navShopChev" style="display:inline-flex;transition:transform .2s">' + ICON.chevron + '</span></button>' +
        '<div style="margin:0 auto">' + logo(26) + '</div>' +
        '<button id="navSearchBtn" aria-label="Search" style="background:none;border:none;color:#d6d6d6;cursor:pointer;padding:6px;display:grid;place-items:center">' + ICON.search + '</button>' +
        '<a href="cart.html" id="navCartBtn" aria-label="Bag" style="position:relative;color:#fff;padding:6px;display:grid;place-items:center">' + ICON.bag +
          '<span id="navCartBadge" style="display:none;position:absolute;top:-1px;right:-1px;background:' + RED + ';color:#fff;font-size:9px;font-weight:800;min-width:15px;height:15px;border-radius:500px;place-items:center;padding:0 3px">0</span></a>' +
      '</div>' + megaPanelHtml() + '</header>';
  }

  function footerHtml() {
    return '<footer style="border-top:1px solid rgba(255,255,255,.08);background:#0a0a0a">' +
      '<div style="max-width:440px;margin:0 auto;padding:32px 20px 30px">' +
        '<div style="margin-bottom:12px">' + logo(26) + '</div>' +
        '<p style="margin:0 0 22px;font-size:13px;color:#8f8f8f;line-height:1.55">Hand-cut slitweave stagewear, made by one pair of hands for artists who live after dark.</p>' +
        '<div style="display:grid;grid-template-columns:1fr 1fr;gap:22px 16px">' +
          col('SHOP', [['product.html', 'Ready to Ship'], ['made-to-order.html', 'Made to Order'], ['product.html', 'Catsuits'], ['product.html', 'Bodysuits']]) +
          col('EXPLORE', [['blog.html', 'Journal'], ['index.html#maker', 'The maker'], ['index.html#watch', 'Watch me make it']]) +
          col('HELP', [['#', 'Size guide'], ['#', 'Shipping'], ['#', 'Returns'], ['#', 'Contact']]) +
        '</div>' +
        '<div style="margin-top:26px;padding-top:16px;border-top:1px solid rgba(255,255,255,.08);font-size:11px;color:#6f6f6f;font-weight:500">© 2026 Firedancing · Privacy · Terms</div>' +
      '</div></footer>';
  }
  function col(head, links) {
    return '<div><div style="font-size:11px;font-weight:800;letter-spacing:.08em;color:#fff;margin-bottom:12px">' + head + '</div>' +
      '<div style="display:flex;flex-direction:column;gap:9px;font-size:13px;color:#a7a7a7">' +
      links.map(function (l) { return '<a href="' + l[0] + '">' + l[1] + '</a>'; }).join('') + '</div></div>';
  }

  function syncBadge() {
    var el = document.getElementById('navCartBadge'); if (!el) return;
    var c = window.MidnightCart ? window.MidnightCart.count() : 0;
    el.textContent = c; el.style.display = c > 0 ? 'grid' : 'none';
  }

  function closeAll() {
    ['mobileMenu', 'searchOverlay'].forEach(function (id) { var e = document.getElementById(id); if (e) e.style.display = 'none'; });
    var mp = document.getElementById('megaPanel'); if (mp) mp.style.display = 'none';
    var chev = document.getElementById('navShopChev'); if (chev) chev.style.transform = '';
  }

  function injectStyles() {
    if (document.getElementById('nav-kf')) return;
    var s = document.createElement('style'); s.id = 'nav-kf';
    s.textContent = [
      '@keyframes mcFade{from{opacity:0}to{opacity:1}}',
      '@keyframes navSlideL{from{transform:translateX(-100%)}to{transform:translateX(0)}}',
      '@keyframes navDrop{from{transform:translateY(-100%);opacity:.4}to{transform:translateY(0);opacity:1}}',
      '#site-header a{text-decoration:none}',
      /* Mega menu is desktop only. On mobile the hamburger is the nav. */
      '@media (max-width:699px){#navShopBtn{display:none !important}#megaPanel{display:none !important}}',
      /* Keyboard focus visibility */
      'a:focus-visible,button:focus-visible,input:focus-visible,textarea:focus-visible{outline:2px solid #ff5c5c;outline-offset:2px;border-radius:4px}',
      /* Comfortable tap targets in the header */
      '#site-header button,#site-header > header a{min-height:40px}',
      /* Respect reduced motion */
      '@media (prefers-reduced-motion:reduce){*,*::before,*::after{animation-duration:.001ms !important;animation-iteration-count:1 !important;transition-duration:.001ms !important;scroll-behavior:auto !important}}'
    ].join('');
    document.head.appendChild(s);
  }

  function mount() {
    injectStyles();
    var h = document.getElementById('site-header'), f = document.getElementById('site-footer');
    if (h) h.innerHTML = headerHtml() + mobileMenuHtml() + searchHtml();
    if (f) f.innerHTML = footerHtml();

    var menuBtn = document.getElementById('navMenuBtn');
    var shopBtn = document.getElementById('navShopBtn');
    var searchBtn = document.getElementById('navSearchBtn');
    if (menuBtn) menuBtn.addEventListener('click', function () { closeAll(); document.getElementById('mobileMenu').style.display = 'block'; });
    if (searchBtn) searchBtn.addEventListener('click', function () { closeAll(); document.getElementById('searchOverlay').style.display = 'block'; var i = document.getElementById('searchInput'); if (i) { setTimeout(function () { i.focus(); }, 60); i.onkeydown = function (e) { if (e.key === 'Enter') location.href = 'product.html'; }; } });
    if (shopBtn) shopBtn.addEventListener('click', function () {
      var mp = document.getElementById('megaPanel'), chev = document.getElementById('navShopChev');
      var open = mp.style.display === 'block';
      closeAll();
      if (!open) { mp.style.display = 'block'; chev.style.transform = 'rotate(180deg)'; }
    });

    // delegated close + link handling
    document.addEventListener('click', function (e) {
      if (e.target.closest('[data-nav-close]')) { closeAll(); return; }
      if (e.target.closest('[data-nav-link]')) { closeAll(); return; } // let link navigate
      // click outside mega panel closes it
      var mp = document.getElementById('megaPanel');
      if (mp && mp.style.display === 'block' && !e.target.closest('#megaPanel') && !e.target.closest('#navShopBtn')) { mp.style.display = 'none'; var c = document.getElementById('navShopChev'); if (c) c.style.transform = ''; }
    });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeAll(); });

    window.addEventListener('midnight:cartchange', syncBadge);
    window.addEventListener('storage', syncBadge);
    syncBadge();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', mount);
  else mount();
})();
