const seerahData = [
    {
        id: 'elephant-year',
        yearLabel: '570 CE',
        yearSort: 570,
        title: 'Jaar van de Olifant',
        summary: 'Geboorte van de Profeet Muhammad ﷺ in Makkah.',
        detail:
            'Hij werd geboren in het jaar waarin Abraha met een olifantenleger Makkah wilde aanvallen. Allah beschermde de Ka\'bah, en dit jaar werd een historisch ankerpunt in de Arabische wereld.',
        image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Kaaba_masjid_haram.jpg/1280px-Kaaba_masjid_haram.jpg',
        caption: 'Makkah en de Ka\'bah, centrum van de vroege gebeurtenissen.'
    },
    {
        id: 'first-revelation',
        yearLabel: '610 CE',
        yearSort: 610,
        title: 'Eerste Openbaring',
        summary: 'In de grot van Hira begint de openbaring van de Qur\'an.',
        detail:
            'Tijdens een periode van bezinning ontving de Profeet ﷺ de eerste woorden: "Iqra\'". Dit markeerde het begin van de profetische missie en de start van de islamitische boodschap.',
        image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Jabal_al-Nour.jpg/1280px-Jabal_al-Nour.jpg',
        caption: 'Jabal al-Nour, met daarin de grot van Hira.'
    },
    {
        id: 'public-call',
        yearLabel: '613 CE',
        yearSort: 613,
        title: 'Openbare Da\'wah',
        summary: 'De boodschap wordt openlijk gedeeld in Makkah.',
        detail:
            'Na de eerste jaren in kleine kring riep de Profeet ﷺ de Quraysh publiekelijk op tot tawhid. Dit leidde tot weerstand, spot en later vervolging van de vroege moslims.',
        image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Mount_Safa_Marwa.jpg/1280px-Mount_Safa_Marwa.jpg',
        caption: 'Safa en Marwa, een plek verbonden aan de vroege oproep.'
    },
    {
        id: 'year-of-sorrow',
        yearLabel: '619 CE',
        yearSort: 619,
        title: 'Jaar van Verdriet',
        summary: 'Overlijden van Khadijah en Abu Talib.',
        detail:
            'In korte tijd verloor de Profeet ﷺ twee grote steunpilaren. Deze zware periode benadrukte zijn geduld, standvastigheid en vertrouwen op Allah.',
        image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Jannat_al-Mualla_Mecca.jpg/1280px-Jannat_al-Mualla_Mecca.jpg',
        caption: 'Jannat al-Mu\'alla, historische begraafplaats in Makkah.'
    },
    {
        id: 'hijrah',
        yearLabel: '622 CE',
        yearSort: 622,
        title: 'Hijrah naar Madinah',
        summary: 'Migratie van Makkah naar Madinah en start van de ummah-staat.',
        detail:
            'De Hijrah markeert het begin van de islamitische jaartelling. In Madinah werden broederschap, recht en gemeenschapsbouw de basis van een nieuw hoofdstuk.',
        image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Medina_Masjid_Al_Nabawi.jpg/1280px-Medina_Masjid_Al_Nabawi.jpg',
        caption: 'Madinah: het centrum van opbouw, onderwijs en leiderschap.',
        video: 'https://www.youtube.com/embed/e4DYxX6g9U8'
    },
    {
        id: 'farewell',
        yearLabel: '632 CE',
        yearSort: 632,
        title: 'Afscheidspreek & Voltooiing',
        summary: 'Universele principes van rechtvaardigheid, waardigheid en amanah.',
        detail:
            'Tijdens de afscheidshadj gaf de Profeet ﷺ kernboodschappen mee over mensenrechten, verantwoordelijkheid en broederschap. Kort daarna volgde zijn overlijden.',
        image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Arafat.jpg/1280px-Arafat.jpg',
        caption: 'Vlakte van Arafat, verbonden met de afscheidshadj.'
    }
];

const timelineEl = document.getElementById('timeline');
const sliderEl = document.getElementById('year-slider');
const milestoneRowEl = document.getElementById('milestone-row');
const modalEl = document.getElementById('modal');

const modalYearEl = document.getElementById('modal-year');
const modalTitleEl = document.getElementById('modal-title');
const modalDescriptionEl = document.getElementById('modal-description') || document.getElementById('modal-body');
const imageWrapEl = document.getElementById('image-wrap');
const videoWrapEl = document.getElementById('video-wrap');

let dragState = {
    active: false,
    startX: 0,
    scrollStart: 0,
    moved: false
};

function createTimelineItem(event, index) {
    const item = document.createElement('article');
    item.className = 'timeline-item';
    item.style.animationDelay = `${index * 70}ms`;
    item.innerHTML = `
        <div class="dot" aria-hidden="true"></div>
        <div class="event-card">
            <p class="event-year">${event.yearLabel}</p>
            <h3 class="event-title">${event.title}</h3>
            <p class="event-summary">${event.summary}</p>
            <button class="detail-btn" type="button">Ontdek verhaal</button>
        </div>
    `;

    const button = item.querySelector('.detail-btn');
    button.addEventListener('click', () => openModal(index));

    item.addEventListener('click', (event) => {
        if (dragState.moved) return;
        if (event.target.closest('.detail-btn')) return;
        openModal(index);
    });

    item.addEventListener('dblclick', () => openModal(index));

    return item;
}

function openModal(index) {
    const event = seerahData[index];
    if (!event || !modalEl) return;

    if (modalYearEl) {
        modalYearEl.textContent = event.yearLabel || event.year || '';
    }
    if (modalTitleEl) {
        modalTitleEl.textContent = event.title || 'Gebeurtenis';
    }
    if (modalDescriptionEl) {
        modalDescriptionEl.textContent = event.detail || event.description || '';
    }

    if (imageWrapEl && event.image) {
        imageWrapEl.innerHTML = `
            <img src="${event.image}" alt="${event.title}">
            <figcaption>${event.caption || ''}</figcaption>
        `;
    } else if (imageWrapEl) {
        imageWrapEl.innerHTML = '';
    }

    if (videoWrapEl && event.video) {
        videoWrapEl.innerHTML = `
            <iframe
                src="${event.video}"
                title="Video over ${event.title}"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen>
            </iframe>
        `;
    } else if (videoWrapEl) {
        videoWrapEl.innerHTML = '';
    }

    modalEl.hidden = false;
    modalEl.style.display = 'grid';
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    if (!modalEl) return;
    modalEl.hidden = true;
    modalEl.style.display = 'none';
    document.body.style.overflow = '';
    if (videoWrapEl) {
        videoWrapEl.innerHTML = '';
    }
}

function scrollToItem(index) {
    const item = timelineEl.children[index];
    if (!item) return;

    item.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center'
    });

    sliderEl.value = String(index);
}

function setupSlider() {
    sliderEl.min = '0';
    sliderEl.max = String(seerahData.length - 1);
    sliderEl.value = '0';

    sliderEl.addEventListener('input', () => {
        scrollToItem(Number(sliderEl.value));
    });

    milestoneRowEl.innerHTML = '';
    seerahData.forEach((event, index) => {
        const chip = document.createElement('button');
        chip.type = 'button';
        chip.className = 'jump-btn';
        chip.textContent = event.yearLabel;
        chip.addEventListener('click', () => scrollToItem(index));
        milestoneRowEl.appendChild(chip);
    });
}

function setupDragScroll() {
    if (!timelineEl) return;
    timelineEl.addEventListener('pointerdown', (event) => {
        if (event.target.closest('button, a, input, iframe, video')) return;
        if (event.button !== 0) return;
        dragState.active = true;
        dragState.moved = false;
        dragState.startX = event.clientX;
        dragState.scrollStart = timelineEl.scrollLeft;
    });

    timelineEl.addEventListener('pointermove', (event) => {
        if (!dragState.active) return;
        const delta = event.clientX - dragState.startX;
        if (Math.abs(delta) > 6) {
            dragState.moved = true;
        }
        timelineEl.scrollLeft = dragState.scrollStart - delta;
    });

    function endDrag(event) {
        if (!dragState.active) return;
        dragState.active = false;
        if (dragState.moved) {
            // Reset on next tick so click handlers can skip a drag-release click.
            setTimeout(() => {
                dragState.moved = false;
            }, 0);
        } else {
            dragState.moved = false;
        }
    }

    timelineEl.addEventListener('pointerup', endDrag);
    timelineEl.addEventListener('pointercancel', endDrag);
    timelineEl.addEventListener('pointerleave', endDrag);
}

function setupModalActions() {
    if (!modalEl) return;

    const closeBtn = document.getElementById('modal-close');
    if (closeBtn) {
        closeBtn.addEventListener('click', closeModal);
    }

    modalEl.addEventListener('click', (event) => {
        if (event.target === modalEl) closeModal();
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && !modalEl.hidden) {
            closeModal();
        }
    });
}

function initTimeline() {
    if (!timelineEl || !sliderEl || !milestoneRowEl) return;

    seerahData.forEach((event, index) => {
        timelineEl.appendChild(createTimelineItem(event, index));
    });

    setupSlider();
    setupDragScroll();
    setupModalActions();
}

initTimeline();
closeModal();

// Expose for inline fallback handlers.
window.openModal = openModal;
window.closeModal = closeModal;
