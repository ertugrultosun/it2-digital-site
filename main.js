// it2digital — the building's wiring.
(() => {
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];
  const calm = matchMedia('(prefers-reduced-motion: reduce)').matches;

  // ------------------------------------------------------------ language

  const TR = {
    skip: 'İçeriğe geç',
    'nav.what': 'Ne yapıyoruz',
    'nav.work': 'İşler',
    'nav.studio': 'Stüdyo',
    'nav.contact': 'Merhaba de',
    'hero.eyebrow': 'Bağımsız bir dijital stüdyo',
    'hero.t1': 'İnsanların',
    'hero.t2': 'geri döndüğü',
    'hero.t3': 'küçük dünyalar kuruyoruz.',
    'hero.lede': 'Oyunlar, uygulamalar, TV ve web — her biri ışığı yanan bir oda. Buyur gir, etrafa bak, birkaç kapı çal.',
    'hero.cta1': 'Kimler oturuyor?',
    'hero.cta2': 'Daire kirala',
    'hero.hint': 'Psst — pencerelere dokun.',
    'floors.eyebrow': 'Ne yapıyoruz',
    'floors.title': 'Beş kat.<br><em>Tek bina.</em>',
    'f1.t': 'Mobil oyunlar',
    'f1.p': 'Karakteri olan bulmacalar. Sıkı kurallar, sıcak çizimler, kimse oynamadan önce çözülebildiği kanıtlanmış bölümler — ve yatma saatini kaçırtacak kadar da yaramazlık.',
    'f2.t': 'Uygulamalar',
    'f2.p': 'Doğal hissettiren, hızlı kalan ve mağazaya hazır Android ve iOS uygulamaları: satın alma, reklam, bildirim, gerekirse yedi dil.',
    'f3.t': 'TV ve yayın',
    'f3.p': 'Google TV ve Android TV için büyük ekran arayüzleri ve arkalarındaki sunucular. Bir elde kumanda, öbüründe patlamış mısır.',
    'f4.t': 'Web',
    'f4.p': 'Göz açıp kapayıncaya kadar açılan ama yine de nabzı atan siteler ve web uygulamaları — tıpkı şu an kaydırdığın gibi.',
    'f5.t': 'Ürün, temelden çatıya',
    'f5.p': 'İlk eskizden mağaza sayfasına: tasarım sistemleri, prototipler, test, yayın. Bütün işi tutan küçük bir ekip.',
    'chip.levels': 'Bölüm tasarımı',
    'chip.motion': 'Hareket ve ses',
    'chip.servers': 'Medya sunucuları',
    'chip.sites': 'Web siteleri',
    'chip.webapps': 'Web uygulamaları',
    'chip.backend': 'Sunucu tarafı',
    'chip.design': 'Tasarım',
    'chip.proto': 'Prototip',
    'chip.launch': 'Yayın',
    'work.eyebrow': 'Binada şu an oturanlar',
    'work.title': 'Kiracılarla <em>tanış.</em>',
    'nn.status': 'Yakında Google Play’de',
    'nn.tag': 'Apartman hayatı üzerine sıcacık bir bulmaca.',
    'nn.p': 'Kiracıları daireler arasında sürükle, ta ki her komşu mutlu olana kadar. Dex davul çalıyor, Rex havlıyor, Marco’nun yemeğinin kokusu koridoru sarıyor — Park’lar ise sadece bebekleri uyusun istiyor. Kimi zemin kat ister, kimi en üst kat, kimi köşe. Ev sahibi sensin. Kolay gelsin.',
    'nn.f1': 'bölüm',
    'nn.f2': 'kiracı',
    'nn.f3': 'dil',
    'toy.title': 'Dene: minicik bir bölüm',
    'toy.bad': '2 komşudan 1’i mutlu',
    'toy.good': 'Herkes mutlu! Daha 199 bölüm var.',
    'toy.btn': 'Dex’i taşı',
    'toy.again': 'Dex’i geri getir',
    'toy.rent': 'KİRALIK',
    'kv.status': 'Geliştiriliyor',
    'kv.tag': 'Filmlerin, kendi kovuğunda.',
    'kv.p': 'Kovuk, kendi disklerindeki filmleri ve dizileri sinema tadında bir kütüphaneye dönüştürür. Bilgisayarında ya da NAS’ında çalışır; Google TV’de, tarayıcıda ve telefonunda oynatır. Dosyaların senin kalır.',
    'kv.server': 'Sunucu',
    'kv.browser': 'Her tarayıcı',
    'kv.phone': 'Telefon',
    'kv.hint': 'Kanalı değiştirmek için TV’ye tıkla.',
    'empty.status': 'Hemen taşınılabilir',
    'empty.sign': 'KİRALIK',
    'empty.title': 'Bu daire<br><em>senin fikrini bekliyor.</em>',
    'empty.cta': 'Ev sahibiyle konuş →',
    'studio.eyebrow': 'Apartman kuralları',
    'studio.title': 'Küçük stüdyo.<br><em>Ayrıntıda inatçı.</em>',
    'r1.t': 'Ekran değil, dünya.',
    'r1.p': 'Her ürüne bir yer, bir ışık, birkaç karakter ve geri dönmek için bir sebep veriyoruz. Ekranlar sadece pencere.',
    'r2.t': 'Gerçekten test ederiz.',
    'r2.p': 'Noisy Neighbors 2.150’den fazla otomatik testle geliyor ve her bölümünün çözülebildiği iki ayrı çözücüyle kanıtlanıyor.',
    'r3.t': 'Binanın tamamı.',
    'r3.p': 'Tasarım, kod, ses, mağaza sayfaları, yayın. Ürünü temelden çatıya biz taşıyoruz; merdivende hiçbir şey kaybolmuyor.',
    'contact.eyebrow': 'Çatı katında',
    'contact.title': 'Aklında bir dünya mı var?<br><em>Hadi kuralım.</em>',
    'contact.small': 'Anlat bize. Her şeyi okuruz.',
    'foot.privacy': 'Gizlilik',
    'foot.terms': 'Şartlar',
    'foot.note': '2026’dan beri ışıklar yanık.',
  };
  const EN = {};
  $$('[data-i18n]').forEach((el) => (EN[el.dataset.i18n] = el.textContent));
  $$('[data-i18n-html]').forEach((el) => (EN[el.dataset.i18nHtml] = el.innerHTML));
  EN['toy.good'] = 'Everyone’s happy! 199 more levels to go.';
  EN['toy.again'] = 'Bring Dex back';

  let lang = 'en';
  const t = (k) => (lang === 'tr' ? TR[k] : EN[k]) ?? EN[k] ?? k;
  function setLang(l) {
    lang = l;
    document.documentElement.lang = l;
    $$('[data-i18n]').forEach((el) => (el.textContent = t(el.dataset.i18n)));
    $$('[data-i18n-html]').forEach((el) => (el.innerHTML = t(el.dataset.i18nHtml)));
    toyText();
    try { localStorage.setItem('it2-lang', l); } catch (_) {}
  }
  $('.lang').addEventListener('click', () => setLang(lang === 'en' ? 'tr' : 'en'));

  // ------------------------------------------------------------ the facade

  // 5 x 7 letters, one window per pixel: i, t, 2.
  const GLYPHS = {
    I: ['#####', '..#..', '..#..', '..#..', '..#..', '..#..', '#####'],
    T: ['#####', '..#..', '..#..', '..#..', '..#..', '..#..', '..#..'],
    2: ['.###.', '#...#', '....#', '...#.', '..#..', '.#...', '#####'],
  };
  const COLS = 19, ROWS = 9;
  const letterAt = new Set();
  ['I', 'T', '2'].forEach((ch, i) => {
    GLYPHS[ch].forEach((row, r) => [...row].forEach((c, x) => {
      if (c === '#') letterAt.add(`${r + 1},${1 + i * 6 + x}`);
    }));
  });
  const WARM = [['#ffe3a1', '#f5b04a'], ['#ffd6c2', '#f08a6a'], ['#d9f0ff', '#8fc5ee'], ['#fff1b8', '#ffc24b'], ['#e6d6ff', '#a98be8']];
  const CURTAINS = ['rgba(180,60,90,.55)', 'rgba(60,120,90,.5)', 'rgba(70,90,170,.5)', 'rgba(150,90,40,.5)', 'rgba(120,60,150,.5)'];

  const facade = $('#facade');
  const windows = [];
  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      const w = document.createElement('span');
      w.className = 'w';
      const letter = letterAt.has(`${r},${c}`);
      if (letter) w.classList.add('letter');
      const [c1, c2] = WARM[(r * 7 + c * 3) % WARM.length];
      w.style.setProperty('--c', c1);
      w.style.setProperty('--c2', c2);
      w.style.setProperty('--curtain', CURTAINS[(r + c) % CURTAINS.length]);
      facade.appendChild(w);
      windows.push(w);
    }
  }
  const letters = windows.filter((w) => w.classList.contains('letter'));
  const others = windows.filter((w) => !w.classList.contains('letter'));

  // Night falls, then the letters switch on one by one.
  const light = (w, on = true) => {
    w.classList.toggle('on', on);
    if (on && !calm) { w.classList.remove('pop'); void w.offsetWidth; w.classList.add('pop'); }
  };
  if (calm) {
    letters.forEach((w) => light(w));
  } else {
    [...letters].sort(() => Math.random() - 0.5).forEach((w, i) => setTimeout(() => light(w), 500 + i * 45));
  }
  // A few neighbours are still awake.
  others.filter(() => Math.random() < 0.08).forEach((w) => light(w));

  // Tap a window: its light goes on or off. The letters come back by themselves.
  facade.addEventListener('click', (e) => {
    const w = e.target.closest('.w');
    if (!w) return;
    light(w, !w.classList.contains('on'));
    if (w.classList.contains('letter') && !w.classList.contains('on')) setTimeout(() => light(w), 1800);
  });
  // Someone somewhere is always flicking a switch.
  if (!calm) {
    setInterval(() => {
      if (document.hidden) return;
      const w = others[Math.floor(Math.random() * others.length)];
      light(w, !w.classList.contains('on'));
    }, 1400);
  }

  // Stars
  const stars = $('.stars');
  for (let i = 0; i < 70; i++) {
    const s = document.createElement('i');
    s.style.left = `${Math.random() * 100}%`;
    s.style.top = `${Math.random() * 60}%`;
    s.style.animationDelay = `${Math.random() * 4}s`;
    if (Math.random() < 0.2) { s.style.width = s.style.height = '3px'; }
    stars.appendChild(s);
  }

  // ------------------------------------------------------------ nav

  const nav = $('.nav');
  const onScroll = () => nav.classList.toggle('scrolled', scrollY > 20);
  addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // ------------------------------------------------------------ the elevator

  const floors = $$('.floor');
  const num = $('#floorNum');
  const display = $('.elevator-display');
  const buttons = $$('.elevator-buttons li');
  let current = 1;
  function goFloor(f) {
    if (f === current) return;
    display.classList.toggle('down', f < current);
    current = f;
    num.textContent = String(f).padStart(2, '0');
    floors.forEach((el) => el.classList.toggle('current', +el.dataset.floor === f));
    buttons.forEach((b) => b.classList.toggle('lit', +b.dataset.f === f));
  }
  floors[0].classList.add('current');
  buttons[0].classList.add('lit');
  const floorObserver = new IntersectionObserver((entries) => {
    entries.forEach((e) => { if (e.isIntersecting) goFloor(+e.target.dataset.floor); });
  }, { rootMargin: '-45% 0px -45% 0px' });
  floors.forEach((f) => floorObserver.observe(f));
  buttons.forEach((b) => b.addEventListener('click', () => {
    $(`.floor[data-floor="${b.dataset.f}"]`).scrollIntoView({ behavior: calm ? 'auto' : 'smooth', block: 'center' });
  }));

  // ------------------------------------------------------------ the toy

  const toy = $('.toy');
  const toyBtn = $('#toyBtn');
  const toyStatus = $('#toyStatus');
  function toyText() {
    const solved = toy.classList.contains('solved');
    toyStatus.textContent = t(solved ? 'toy.good' : 'toy.bad');
    toyBtn.textContent = t(solved ? 'toy.again' : 'toy.btn');
  }
  toyBtn.addEventListener('click', () => {
    toy.classList.toggle('solved');
    toyText();
    if (toy.classList.contains('solved') && !calm) confetti($('#toy'));
  });
  function confetti(board) {
    const colors = ['#ffc24b', '#ff6a4d', '#5fb36a', '#8fc5ee', '#a98be8'];
    for (let i = 0; i < 26; i++) {
      const c = document.createElement('i');
      c.className = 'confetti';
      c.style.background = colors[i % colors.length];
      c.style.setProperty('--dx', `${(Math.random() - 0.5) * 260}px`);
      c.style.setProperty('--dy', `${-60 - Math.random() * 160}px`);
      c.style.setProperty('--r', `${Math.random() * 720 - 360}deg`);
      board.appendChild(c);
      setTimeout(() => c.remove(), 1200);
    }
  }

  // ------------------------------------------------------------ the TV

  const tv = $('#tv');
  tv.addEventListener('click', () => {
    tv.classList.add('static');
    setTimeout(() => { tv.classList.toggle('flipped'); }, 120);
    setTimeout(() => tv.classList.remove('static'), 260);
  });
  tv.setAttribute('role', 'button');
  tv.setAttribute('tabindex', '0');
  tv.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); tv.click(); } });

  // ------------------------------------------------------------ the rooftop lights

  const lights = $('.lights');
  const path = $('.string path');
  const BULBS = ['#ffc24b', '#ff6a4d', '#8fc5ee', '#5fb36a', '#e6a0ff'];
  function hangBulbs() {
    lights.innerHTML = '';
    const svg = path.ownerSVGElement;
    const box = svg.getBoundingClientRect();
    const sx = box.width / 1200, sy = box.height / 120;
    const len = path.getTotalLength();
    const n = Math.max(10, Math.round(box.width / 70));
    for (let i = 1; i < n; i++) {
      const p = path.getPointAtLength((len * i) / n);
      const b = document.createElement('i');
      b.style.left = `${p.x * sx}px`;
      b.style.top = `${p.y * sy + 6}px`;
      b.style.setProperty('--b', BULBS[i % BULBS.length]);
      b.style.setProperty('--d', `${(i % 5) * 0.6}s`);
      lights.appendChild(b);
    }
  }
  hangBulbs();
  let resizeTimer;
  addEventListener('resize', () => { clearTimeout(resizeTimer); resizeTimer = setTimeout(hangBulbs, 150); });

  // ------------------------------------------------------------ reveals

  const reveal = $$('.section-head, .floor, .product, .rules li, .rooftop-inner, .toy');
  reveal.forEach((el) => el.classList.add('reveal'));
  const revealer = new IntersectionObserver((entries) => {
    entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); revealer.unobserve(e.target); } });
  }, { rootMargin: '0px 0px -10% 0px' });
  reveal.forEach((el) => revealer.observe(el));

  $('#year').textContent = new Date().getFullYear();

  // The visitor's language: saved, else the browser's.
  let saved = null;
  try { saved = localStorage.getItem('it2-lang'); } catch (_) {}
  setLang(saved || ((navigator.language || '').toLowerCase().startsWith('tr') ? 'tr' : 'en'));
})();
