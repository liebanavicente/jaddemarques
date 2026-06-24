'use strict';

/* ============================================================
   TRANSLATIONS
============================================================ */
const TRANSLATIONS = {
  es: {
    age_title: 'Contenido para adultos',
    age_text: 'Este sitio contiene contenido exclusivo destinado únicamente a personas mayores de 18 años. Al continuar, confirmas que cumples este requisito y que el acceso a este tipo de contenido es legal en tu lugar de residencia.',
    age_btn_enter: 'Soy mayor de 18',
    age_btn_exit: 'Salir',
    age_legal_html: 'Al continuar aceptas el <a href="#" data-modal="legal">aviso legal</a> y la <a href="#" data-modal="privacy">política de privacidad</a>.',
    offer_tag: '⚡ Oferta limitada',
    offer_text_html: 'Este mes <strong>−20%</strong> en tu suscripción',
    offer_cta: 'Suscribirse →',
    cd_dias: 'días', cd_horas: 'horas', cd_min: 'min', cd_seg: 'seg',
    hero_tag: '🇧🇷 Brasileña en Barcelona · Actriz · Contenido +18',
    hero_subtitle: 'Hola, soy Jadde Marqués, actriz brasileña afincada en Barcelona. Aquí encontrarás mis enlaces verificados y acceso a mi contenido privado exclusivo.',
    proof_label1: 'Brasileña', proof_label2: 'Original', proof_label3: 'Valoración',
    peek_eyebrow: 'Vista previa',
    peek_title: '¿Qué encontrarás?',
    peek_desc: 'Solo los suscriptores tienen acceso al contenido completo',
    peek_label1: 'Contenido privado', peek_label2: 'Exclusivo', peek_label3: 'VIP',
    peek_cta: 'Desbloquear todo el contenido →',
    about_eyebrow: 'Sobre mí',
    about_title_html: 'Hola, soy <em>Jadde</em>',
    about_text1: 'Soy Jadde Marqués, actriz brasileña viviendo en Barcelona. Creadora de contenido +18 independiente. Este es mi espacio oficial donde encontrarás mis enlaces reales y plataformas verificadas.',
    about_text2: 'Todo mi material es producido de forma independiente y completamente profesional. Aquí solo encontrarás mis canales auténticos.',
    about_btn: 'Ver mi contenido →',
    feat_eyebrow: 'Plataformas', feat_title: 'Contenido exclusivo',
    feat1_text: 'Accede a mi colección de fotografías y vídeos exclusivos, disponible únicamente para suscriptores verificados en OnlyFans.',
    feat1_link: 'Suscribirme',
    feat2_text: 'Mi plataforma de contenido exclusivo para Brasil. Únete y disfruta de contenido privado y novedades directas desde Barcelona.',
    feat2_link: 'Acceder',
    feat3_text: 'Sígueme en Instagram para ver mis publicaciones del día a día, stories y el lado más personal de mi vida en Barcelona.',
    feat3_link: 'Seguir',
    links_eyebrow: 'Acceso directo', links_title: 'Mis redes oficiales',
    links_desc: 'Todos mis perfiles verificados en un solo lugar',
    of_desc: '@jadde.marques · Suscripción mensual',
    pv_desc: '@Jaddemarques · Plataforma exclusiva',
    ig_desc: '@Jadde_marques · Fotos y stories',
    tt_desc: '@jaddemarques · Vídeos y tendencias',
    tw_desc: '@Jadde_marques · Actualizaciones',
    sc_desc: '@JaddeMarques · Snaps exclusivos',
    fb_desc: '@JaddeMarques · Página oficial',
    sec_title: 'Tu seguridad, primero',
    sec_text: 'Para tu seguridad, utiliza únicamente los enlaces oficiales de esta página. Existen perfiles falsos que suplantan mi identidad — no me hago responsable de ellos.',
    sec_item1: 'Todos los enlaces son verificados y actualizados regularmente',
    sec_item2: 'Nunca solicito datos personales fuera de mis plataformas oficiales',
    sec_item3: 'Desconfía de cualquier perfil que no figure en esta página',
    footer_location: '🇧🇷 Brasileña · 📍 Barcelona',
    footer_tag1: 'Solo para mayores de 18 años',
    footer_tag2: 'No se aloja contenido explícito en esta web',
    footer_tag3: 'Todos los enlaces redirigen a plataformas externas',
    footer_legal: 'Aviso legal', footer_privacy: 'Política de privacidad',
    footer_copy: '© 2025 Jadde Marqués — Todos los derechos reservados.',
    modal_legal_title: 'Aviso Legal',
    modal_legal_html: `<p><strong>Titularidad.</strong> Este sitio web es propiedad y está operado por Jadde Marqués, creadora de contenido independiente.</p><p><strong>Objeto.</strong> Esta página actúa exclusivamente como directorio de enlaces oficiales y presentación de marca personal. No aloja, almacena ni distribuye contenido explícito.</p><p><strong>Restricción de edad.</strong> El acceso está restringido a personas mayores de 18 años. Al confirmar tu edad, declaras bajo tu responsabilidad que cumples este requisito.</p><p><strong>Contenido externo.</strong> Los enlaces redirigen a plataformas de terceros. No somos responsables del contenido, políticas ni condiciones de dichas plataformas.</p><p><strong>Propiedad intelectual.</strong> Todo el contenido de esta página está protegido por derechos de autor. Queda prohibida su reproducción sin autorización expresa.</p><p><strong>Naturaleza del servicio.</strong> Este sitio no ofrece ni publicita servicios presenciales de ningún tipo. Se trata exclusivamente de una web de creadora de contenido digital.</p>`,
    modal_privacy_title: 'Política de Privacidad',
    modal_privacy_html: `<p><strong>Datos recopilados.</strong> Este sitio no recopila datos personales. Únicamente se utiliza localStorage del navegador para guardar tu confirmación de edad.</p><p><strong>Cookies.</strong> No utilizamos cookies de seguimiento ni publicidad. Solo almacenamiento técnico estrictamente necesario para el funcionamiento del sitio.</p><p><strong>Enlaces a terceros.</strong> Al hacer clic en nuestros enlaces externos serás redirigido a plataformas con sus propias políticas de privacidad. Te recomendamos revisarlas.</p><p><strong>Menores de edad.</strong> Este sitio está estrictamente restringido a mayores de 18 años. Si eres menor de edad, abandona este sitio de inmediato.</p><p><strong>Contacto.</strong> Para cualquier consulta relacionada con privacidad, puedes hacerlo a través de los canales oficiales disponibles en esta página.</p>`,
  },
  pt: {
    age_title: 'Conteúdo adulto',
    age_text: 'Este site contém conteúdo exclusivo destinado apenas a pessoas maiores de 18 anos. Ao continuar, você confirma que atende a esse requisito e que o acesso a esse tipo de conteúdo é legal em seu local de residência.',
    age_btn_enter: 'Tenho mais de 18',
    age_btn_exit: 'Sair',
    age_legal_html: 'Ao continuar você aceita o <a href="#" data-modal="legal">aviso legal</a> e a <a href="#" data-modal="privacy">política de privacidade</a>.',
    offer_tag: '⚡ Oferta limitada',
    offer_text_html: 'Este mês <strong>−20%</strong> na sua assinatura',
    offer_cta: 'Assinar →',
    cd_dias: 'dias', cd_horas: 'horas', cd_min: 'min', cd_seg: 'seg',
    hero_tag: '🇧🇷 Brasileira em Barcelona · Atriz · Conteúdo +18',
    hero_subtitle: 'Olá, sou Jadde Marqués, atriz brasileira radicada em Barcelona. Aqui você encontra meus links verificados e acesso ao meu conteúdo privado exclusivo.',
    proof_label1: 'Brasileira', proof_label2: 'Original', proof_label3: 'Avaliação',
    peek_eyebrow: 'Prévia',
    peek_title: 'O que você vai encontrar?',
    peek_desc: 'Apenas assinantes têm acesso ao conteúdo completo',
    peek_label1: 'Conteúdo privado', peek_label2: 'Exclusivo', peek_label3: 'VIP',
    peek_cta: 'Desbloquear todo o conteúdo →',
    about_eyebrow: 'Sobre mim',
    about_title_html: 'Olá, sou <em>Jadde</em>',
    about_text1: 'Sou Jadde Marqués, atriz brasileira morando em Barcelona. Criadora de conteúdo +18 independente. Este é meu espaço oficial onde você encontra meus links reais e plataformas verificadas.',
    about_text2: 'Todo o meu material é produzido de forma independente e completamente profissional. Aqui você encontra apenas meus canais autênticos.',
    about_btn: 'Ver meu conteúdo →',
    feat_eyebrow: 'Plataformas', feat_title: 'Conteúdo exclusivo',
    feat1_text: 'Acesse minha coleção de fotos e vídeos exclusivos, disponível apenas para assinantes verificados no OnlyFans.',
    feat1_link: 'Assinar',
    feat2_text: 'Minha plataforma de conteúdo exclusivo para o Brasil. Entre e aproveite conteúdo privado e novidades diretamente de Barcelona.',
    feat2_link: 'Acessar',
    feat3_text: 'Me siga no Instagram para ver minhas publicações do dia a dia, stories e o lado mais pessoal da minha vida em Barcelona.',
    feat3_link: 'Seguir',
    links_eyebrow: 'Acesso direto', links_title: 'Minhas redes oficiais',
    links_desc: 'Todos os meus perfis verificados em um só lugar',
    of_desc: '@jadde.marques · Assinatura mensal',
    pv_desc: '@Jaddemarques · Plataforma exclusiva',
    ig_desc: '@Jadde_marques · Fotos e stories',
    tt_desc: '@jaddemarques · Vídeos e tendências',
    tw_desc: '@Jadde_marques · Atualizações',
    sc_desc: '@JaddeMarques · Snaps exclusivos',
    fb_desc: '@JaddeMarques · Página oficial',
    sec_title: 'Sua segurança, primeiro',
    sec_text: 'Para sua segurança, use apenas os links oficiais desta página. Existem perfis falsos que se passam pela minha identidade — não me responsabilizo por eles.',
    sec_item1: 'Todos os links são verificados e atualizados regularmente',
    sec_item2: 'Nunca peço dados pessoais fora das minhas plataformas oficiais',
    sec_item3: 'Desconfie de qualquer perfil que não esteja nesta página',
    footer_location: '🇧🇷 Brasileira · 📍 Barcelona',
    footer_tag1: 'Apenas para maiores de 18 anos',
    footer_tag2: 'Nenhum conteúdo explícito hospedado neste site',
    footer_tag3: 'Todos os links redirecionam para plataformas externas',
    footer_legal: 'Aviso legal', footer_privacy: 'Política de privacidade',
    footer_copy: '© 2025 Jadde Marqués — Todos os direitos reservados.',
    modal_legal_title: 'Aviso Legal',
    modal_legal_html: `<p><strong>Titularidade.</strong> Este site é de propriedade e operado por Jadde Marqués, criadora de conteúdo independente.</p><p><strong>Objeto.</strong> Esta página atua exclusivamente como diretório de links oficiais e apresentação de marca pessoal. Não hospeda, armazena nem distribui conteúdo explícito.</p><p><strong>Restrição de idade.</strong> O acesso é restrito a pessoas maiores de 18 anos. Ao confirmar sua idade, você declara sob sua responsabilidade que atende a esse requisito.</p><p><strong>Conteúdo externo.</strong> Os links redirecionam para plataformas de terceiros. Não somos responsáveis pelo conteúdo, políticas ou condições dessas plataformas.</p><p><strong>Propriedade intelectual.</strong> Todo o conteúdo desta página está protegido por direitos autorais. É proibida sua reprodução sem autorização expressa.</p><p><strong>Natureza do serviço.</strong> Este site não oferece nem divulga serviços presenciais de qualquer tipo. Trata-se exclusivamente de um site de criadora de conteúdo digital.</p>`,
    modal_privacy_title: 'Política de Privacidade',
    modal_privacy_html: `<p><strong>Dados coletados.</strong> Este site não coleta dados pessoais. Apenas o localStorage do navegador é usado para salvar sua confirmação de idade.</p><p><strong>Cookies.</strong> Não utilizamos cookies de rastreamento ou publicidade. Apenas armazenamento técnico estritamente necessário para o funcionamento do site.</p><p><strong>Links de terceiros.</strong> Ao clicar em nossos links externos, você será redirecionado para plataformas com suas próprias políticas de privacidade. Recomendamos que as leia.</p><p><strong>Menores de idade.</strong> Este site é estritamente restrito a maiores de 18 anos. Se você for menor de idade, saia imediatamente.</p><p><strong>Contato.</strong> Para qualquer dúvida relacionada à privacidade, entre em contato pelos canais oficiais disponíveis nesta página.</p>`,
  },
  en: {
    age_title: 'Adult content',
    age_text: 'This site contains exclusive content intended only for people aged 18 and over. By continuing, you confirm that you meet this requirement and that accessing this type of content is legal in your place of residence.',
    age_btn_enter: "I'm 18 or older",
    age_btn_exit: 'Exit',
    age_legal_html: 'By continuing you accept the <a href="#" data-modal="legal">legal notice</a> and the <a href="#" data-modal="privacy">privacy policy</a>.',
    offer_tag: '⚡ Limited offer',
    offer_text_html: 'This month <strong>−20%</strong> on your subscription',
    offer_cta: 'Subscribe →',
    cd_dias: 'days', cd_horas: 'hours', cd_min: 'min', cd_seg: 'sec',
    hero_tag: '🇧🇷 Brazilian in Barcelona · Actress · +18 Content',
    hero_subtitle: "Hi, I'm Jadde Marqués, Brazilian actress based in Barcelona. Here you'll find my verified links and access to my exclusive private content.",
    proof_label1: 'Brazilian', proof_label2: 'Original', proof_label3: 'Rating',
    peek_eyebrow: 'Preview',
    peek_title: 'What will you find?',
    peek_desc: 'Only subscribers have access to the full content',
    peek_label1: 'Private content', peek_label2: 'Exclusive', peek_label3: 'VIP',
    peek_cta: 'Unlock all content →',
    about_eyebrow: 'About me',
    about_title_html: "Hi, I'm <em>Jadde</em>",
    about_text1: "I'm Jadde Marqués, Brazilian actress living in Barcelona. Independent +18 content creator. This is my official space where you'll find my real links and verified platforms.",
    about_text2: 'All my content is produced independently and completely professionally. Here you will only find my authentic channels.',
    about_btn: 'See my content →',
    feat_eyebrow: 'Platforms', feat_title: 'Exclusive content',
    feat1_text: 'Access my collection of exclusive photos and videos, available only to verified subscribers on OnlyFans.',
    feat1_link: 'Subscribe',
    feat2_text: 'My exclusive content platform for Brazil. Join and enjoy private content and updates direct from Barcelona.',
    feat2_link: 'Access',
    feat3_text: 'Follow me on Instagram to see my day-to-day posts, stories and the most personal side of my life in Barcelona.',
    feat3_link: 'Follow',
    links_eyebrow: 'Quick access', links_title: 'My official networks',
    links_desc: 'All my verified profiles in one place',
    of_desc: '@jadde.marques · Monthly subscription',
    pv_desc: '@Jaddemarques · Exclusive platform',
    ig_desc: '@Jadde_marques · Photos and stories',
    tt_desc: '@jaddemarques · Videos and trends',
    tw_desc: '@Jadde_marques · Updates',
    sc_desc: '@JaddeMarques · Exclusive snaps',
    fb_desc: '@JaddeMarques · Official page',
    sec_title: 'Your safety, first',
    sec_text: 'For your safety, use only the official links on this page. There are fake profiles impersonating my identity — I am not responsible for them.',
    sec_item1: 'All links are verified and updated regularly',
    sec_item2: 'I never request personal data outside my official platforms',
    sec_item3: 'Be wary of any profile not listed on this page',
    footer_location: '🇧🇷 Brazilian · 📍 Barcelona',
    footer_tag1: 'For adults 18+ only',
    footer_tag2: 'No explicit content hosted on this site',
    footer_tag3: 'All links redirect to external platforms',
    footer_legal: 'Legal notice', footer_privacy: 'Privacy policy',
    footer_copy: '© 2025 Jadde Marqués — All rights reserved.',
    modal_legal_title: 'Legal Notice',
    modal_legal_html: `<p><strong>Ownership.</strong> This website is owned and operated by Jadde Marqués, independent content creator.</p><p><strong>Purpose.</strong> This page acts exclusively as a directory of official links and personal brand presentation. It does not host, store or distribute explicit content.</p><p><strong>Age restriction.</strong> Access is restricted to people over 18 years of age. By confirming your age, you declare under your responsibility that you meet this requirement.</p><p><strong>External content.</strong> Links redirect to third-party platforms. We are not responsible for the content, policies or conditions of those platforms.</p><p><strong>Intellectual property.</strong> All content on this page is protected by copyright. Reproduction without express authorisation is prohibited.</p><p><strong>Nature of service.</strong> This site does not offer or advertise in-person services of any kind. It is exclusively a digital content creator website.</p>`,
    modal_privacy_title: 'Privacy Policy',
    modal_privacy_html: `<p><strong>Data collected.</strong> This site does not collect personal data. Only the browser's localStorage is used to save your age confirmation.</p><p><strong>Cookies.</strong> We do not use tracking or advertising cookies. Only strictly necessary technical storage for site functionality.</p><p><strong>Third-party links.</strong> Clicking our external links will redirect you to platforms with their own privacy policies. We recommend reading them.</p><p><strong>Minors.</strong> This site is strictly restricted to those over 18. If you are under age, leave this site immediately.</p><p><strong>Contact.</strong> For any privacy-related queries, reach out through the official channels available on this page.</p>`,
  }
};

/* ============================================================
   I18N
============================================================ */
function applyLang(lang) {
    if (!TRANSLATIONS[lang]) lang = 'es';
    const t = TRANSLATIONS[lang];

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.dataset.i18n;
        if (t[key] !== undefined) el.textContent = t[key];
    });

    document.querySelectorAll('[data-i18n-html]').forEach(el => {
        const key = el.dataset.i18nHtml;
        if (t[key] !== undefined) el.innerHTML = t[key];
    });

    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    localStorage.setItem('jadde_lang', lang);
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : lang;
}

function initI18n() {
    const saved = localStorage.getItem('jadde_lang');
    let lang = saved;
    if (!lang) {
        const browser = (navigator.language || navigator.userLanguage || 'es').toLowerCase();
        if (browser.startsWith('pt')) lang = 'pt';
        else if (browser.startsWith('en')) lang = 'en';
        else lang = 'es';
    }
    applyLang(lang);
}

/* ============================================================
   AGE GATE
============================================================ */
(function initAgeGate() {
    initI18n();

    const gate  = document.getElementById('age-gate');
    const site  = document.getElementById('site');
    const btnIn = document.getElementById('btn-enter');
    const btnOut= document.getElementById('btn-exit');

    function showSite() {
        gate.style.transition    = 'opacity 0.55s ease';
        gate.style.opacity       = '0';
        gate.style.pointerEvents = 'none';
        setTimeout(() => {
            gate.classList.add('hidden');
            site.classList.remove('hidden');
            initSite();
        }, 560);
    }

    if (localStorage.getItem('jadde_age_ok') === '1') {
        gate.classList.add('hidden');
        site.classList.remove('hidden');
        initSite();
        return;
    }

    btnIn.addEventListener('click', () => {
        localStorage.setItem('jadde_age_ok', '1');
        showSite();
    });
    btnOut.addEventListener('click', () => {
        window.location.href = 'https://www.google.com';
    });
})();

/* ============================================================
   SITE INIT
============================================================ */
function initSite() {
    initNavbar();
    initScrollReveal();
    initModals();
    initFab();
    initCountdown();
}

/* ============================================================
   LANG SWITCHER (global — age gate + navbar)
============================================================ */
document.addEventListener('click', (e) => {
    const btn = e.target.closest('.lang-btn');
    if (btn && btn.dataset.lang) applyLang(btn.dataset.lang);
});

/* ============================================================
   NAVBAR
============================================================ */
function initNavbar() {
    const nav = document.getElementById('navbar');
    if (!nav) return;
    const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
}

/* ============================================================
   SCROLL REVEAL
============================================================ */
function initScrollReveal() {
    const els = document.querySelectorAll('.reveal');
    if (!els.length) return;
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                e.target.classList.add('visible');
                observer.unobserve(e.target);
            }
        });
    }, { threshold: 0.12, rootMargin: '0px 0px -48px 0px' });
    els.forEach(el => observer.observe(el));
}

/* ============================================================
   FAB
============================================================ */
function initFab() {
    const fab  = document.getElementById('fab');
    const hero = document.getElementById('hero');
    if (!fab || !hero) return;
    const observer = new IntersectionObserver(
        ([entry]) => fab.classList.toggle('hidden', entry.isIntersecting),
        { threshold: 0.2 }
    );
    observer.observe(hero);
}

/* ============================================================
   MODALES
============================================================ */
function initModals() {
    const modals = {
        legal:   document.getElementById('modal-legal'),
        privacy: document.getElementById('modal-privacy'),
    };

    function openModal(key) {
        const modal = modals[key];
        if (!modal) return;
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
        const btn = modal.querySelector('button');
        if (btn) setTimeout(() => btn.focus(), 60);
    }

    function closeAll() {
        Object.values(modals).forEach(m => m && m.classList.add('hidden'));
        document.body.style.overflow = '';
    }

    document.addEventListener('click', (e) => {
        const trigger = e.target.closest('[data-modal]');
        if (trigger) { e.preventDefault(); openModal(trigger.dataset.modal); }
        if (e.target.classList.contains('modal__backdrop')) closeAll();
        if (e.target.closest('.modal__close')) closeAll();
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeAll();
    });
}

/* ============================================================
   COUNTDOWN
============================================================ */
function initCountdown() {
    const dEl = document.getElementById('cd-d');
    const hEl = document.getElementById('cd-h');
    const mEl = document.getElementById('cd-m');
    const sEl = document.getElementById('cd-s');
    if (!dEl) return;

    function getEndOfMonth() {
        const now = new Date();
        return new Date(now.getFullYear(), now.getMonth() + 1, 1, 0, 0, 0);
    }

    function pad(n) { return String(n).padStart(2, '0'); }

    function tick() {
        const diff = getEndOfMonth() - Date.now();
        if (diff <= 0) { dEl.textContent = hEl.textContent = mEl.textContent = sEl.textContent = '00'; return; }
        dEl.textContent = pad(Math.floor(diff / 86400000));
        hEl.textContent = pad(Math.floor((diff % 86400000) / 3600000));
        mEl.textContent = pad(Math.floor((diff % 3600000) / 60000));
        sEl.textContent = pad(Math.floor((diff % 60000) / 1000));
    }

    tick();
    setInterval(tick, 1000);
}

/* ============================================================
   PARALLAX
============================================================ */
document.addEventListener('mousemove', (e) => {
    const name = document.querySelector('.hero__name');
    if (!name) return;
    const dx = (e.clientX - window.innerWidth  / 2) / window.innerWidth;
    const dy = (e.clientY - window.innerHeight / 2) / window.innerHeight;
    name.style.transform = `translate(${dx * 6}px, ${dy * 3}px)`;
}, { passive: true });
