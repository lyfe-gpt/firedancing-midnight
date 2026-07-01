/* Midnight - Cart Drawer (vanilla port of Cart Drawer.dc.html) */
(function () {
  var mounted = false, isOpen = false, root;

  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) { return ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]; }); }

  function render() {
    var C = window.MidnightCart;
    var list = C ? C.all() : [];
    var count = C ? C.count() : 0;
    var subtotal = '$' + (C ? C.subtotal() : 0);

    if (!isOpen) { root.innerHTML = ''; return; }

    var itemsHtml = list.map(function (it, idx) {
      return '' +
        '<div style="display:flex;gap:14px;padding:18px 0;border-bottom:1px solid rgba(255,255,255,.08)">' +
          '<img src="' + esc(it.img) + '" style="width:66px;height:82px;object-fit:cover;border-radius:8px;flex:0 0 auto;background:#000" alt="item" />' +
          '<div style="flex:1;min-width:0">' +
            '<div style="display:flex;justify-content:space-between;gap:10px">' +
              '<div style="font-size:14px;font-weight:700;color:#fff;line-height:1.25">' + esc(it.title) + '</div>' +
              '<div style="font-size:14px;font-weight:800;color:#fff;white-space:nowrap">$' + (it.price * it.qty) + '</div>' +
            '</div>' +
            '<div style="font-size:12px;color:#a7a7a7;font-weight:500;margin:3px 0 12px;line-height:1.4">' + esc(it.variant) + '</div>' +
            '<div style="display:flex;align-items:center;justify-content:space-between">' +
              '<div style="display:flex;align-items:center;border:1px solid rgba(255,255,255,.22);border-radius:500px;overflow:hidden">' +
                '<button data-act="dec" data-id="' + esc(it.id) + '" style="width:30px;height:30px;background:none;border:none;color:#fff;font-size:16px;cursor:pointer">−</button>' +
                '<span style="min-width:26px;text-align:center;font-size:13px;font-weight:700;color:#fff">' + it.qty + '</span>' +
                '<button data-act="inc" data-id="' + esc(it.id) + '" style="width:30px;height:30px;background:none;border:none;color:#fff;font-size:16px;cursor:pointer">+</button>' +
              '</div>' +
              '<button data-act="remove" data-id="' + esc(it.id) + '" style="background:none;border:none;color:#8f8f8f;font-size:12px;font-weight:600;cursor:pointer;text-decoration:underline;text-underline-offset:2px">Remove</button>' +
            '</div>' +
          '</div>' +
        '</div>';
    }).join('');

    var body = list.length === 0 ?
      ('<div style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;padding:40px 24px;text-align:center">' +
        '<div style="width:56px;height:56px;border-radius:50%;background:#232323;display:grid;place-items:center"><svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#8f8f8f" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2 3.5 5.5V20a1.5 1.5 0 0 0 1.5 1.5h14a1.5 1.5 0 0 0 1.5-1.5V5.5L18 2z"/><path d="M3.5 6.5h17"/><path d="M15.5 10a3.5 3.5 0 0 1-7 0"/></svg></div>' +
        '<div style="color:#fff;font-weight:700;font-size:16px">Your bag is empty</div>' +
        '<div style="color:#8f8f8f;font-size:13px;max-width:220px;line-height:1.5">Add a piece and it\'ll show up here.</div>' +
        '<a href="index.html" data-act="close" style="margin-top:6px;color:#ff3b3b;font-weight:700;font-size:14px">Continue shopping →</a>' +
      '</div>') :
      ('<div style="flex:1;overflow-y:auto;padding:8px 20px">' + itemsHtml + '</div>' +
       '<div style="border-top:1px solid rgba(255,255,255,.1);padding:18px 20px calc(18px + env(safe-area-inset-bottom));background:#161616">' +
         '<div style="display:flex;justify-content:space-between;align-items:baseline;margin-bottom:4px">' +
           '<span style="font-size:14px;font-weight:700;color:#fff">Subtotal</span>' +
           '<span style="font-size:18px;font-weight:800;color:#fff">' + subtotal + '</span>' +
         '</div>' +
         '<div style="font-size:12px;color:#8f8f8f;margin-bottom:16px">Shipping &amp; taxes calculated at checkout.</div>' +
         '<a href="cart.html" style="display:block;text-align:center;width:100%;height:50px;line-height:50px;border-radius:500px;background:#ff3b3b;color:#fff;font-size:15px;font-weight:800;letter-spacing:.02em;margin-bottom:10px">Checkout</a>' +
         '<a href="cart.html" data-act="close" style="display:block;text-align:center;color:#d6d6d6;font-size:13px;font-weight:700;text-decoration:underline;text-underline-offset:3px">View full bag</a>' +
       '</div>');

    root.innerHTML = '' +
      '<div style="position:fixed;inset:0;z-index:9000;font-family:Figtree,system-ui,sans-serif">' +
        '<div data-act="close" style="position:absolute;inset:0;background:rgba(0,0,0,.62);animation:mcFade .2s ease"></div>' +
        '<div style="position:absolute;top:0;right:0;height:100%;width:min(420px,90vw);background:#161616;border-left:1px solid rgba(255,255,255,.1);display:flex;flex-direction:column;animation:mcSlide .28s cubic-bezier(.2,.8,.2,1);box-shadow:-24px 0 60px rgba(0,0,0,.5)">' +
          '<div style="display:flex;align-items:center;justify-content:space-between;padding:20px 20px 16px;border-bottom:1px solid rgba(255,255,255,.1)">' +
            '<span style="font-size:16px;font-weight:800;letter-spacing:.01em;color:#fff">Your Bag <span style="color:#8f8f8f;font-weight:600">(' + count + ')</span></span>' +
            '<button data-act="close" style="background:none;border:none;color:#fff;font-size:24px;cursor:pointer;line-height:1;padding:0 2px">×</button>' +
          '</div>' + body +
        '</div>' +
      '</div>';
  }

  function onClick(e) {
    var t = e.target.closest('[data-act]');
    if (!t) return;
    var act = t.getAttribute('data-act'), id = t.getAttribute('data-id'), C = window.MidnightCart;
    if (act === 'close') { isOpen = false; render(); return; } // links w/ href still navigate
    if (!C) return;
    var it = C.all().find(function (x) { return x.id === id; });
    if (act === 'inc' && it) { e.preventDefault(); C.setQty(id, it.qty + 1); }
    else if (act === 'dec' && it) { e.preventDefault(); C.setQty(id, it.qty - 1); }
    else if (act === 'remove') { e.preventDefault(); C.remove(id); }
  }

  function mount() {
    if (mounted) return; mounted = true;
    root = document.createElement('div'); root.id = 'mc-drawer-root';
    document.body.appendChild(root);
    root.addEventListener('click', onClick);
    window.addEventListener('midnight:opencart', function () { isOpen = true; render(); });
    window.addEventListener('midnight:closecart', function () { isOpen = false; render(); });
    window.addEventListener('midnight:cartchange', function () { if (isOpen) render(); });
    window.addEventListener('storage', function () { if (isOpen) render(); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && isOpen) { isOpen = false; render(); } });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', mount);
  else mount();
})();
