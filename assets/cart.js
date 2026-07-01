(function () {
  var KEY = 'midnight_cart_v1';
  function read() { try { return JSON.parse(localStorage.getItem(KEY)) || []; } catch (e) { return []; } }
  function write(a) { localStorage.setItem(KEY, JSON.stringify(a)); window.dispatchEvent(new CustomEvent('midnight:cartchange')); }
  window.MidnightCart = {
    all: read,
    count: function () { return read().reduce(function (n, i) { return n + i.qty; }, 0); },
    subtotal: function () { return read().reduce(function (s, i) { return s + i.price * i.qty; }, 0); },
    add: function (item) {
      var a = read();
      var ex = a.find(function (x) { return x.id === item.id; });
      if (ex) ex.qty += item.qty || 1; else a.push(Object.assign({ qty: 1 }, item));
      write(a);
    },
    setQty: function (id, q) {
      var a = read();
      if (q <= 0) { a = a.filter(function (x) { return x.id !== id; }); }
      else { var e = a.find(function (x) { return x.id === id; }); if (e) e.qty = q; }
      write(a);
    },
    remove: function (id) { write(read().filter(function (x) { return x.id !== id; })); },
    clear: function () { write([]); },
    open: function () { window.dispatchEvent(new CustomEvent('midnight:opencart')); }
  };
})();
