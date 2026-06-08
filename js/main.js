// ============================================================
// Main JavaScript - Navigation, Animations, Interactive Features
// ============================================================

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initMobileMenu();
  initScrollAnimations();
  initStatCounters();
  renderHardwareCards();
  fetchAndRenderTestimonials();
});

// ---- Navbar Scroll Effect ----
function initNavbar() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
  });
}

// ---- Mobile Menu Toggle ----
function initMobileMenu() {
  const toggle = document.getElementById('mobileToggle');
  const navLinks = document.getElementById('navLinks');
  if (!toggle || !navLinks) return;
  toggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    const icon = toggle.querySelector('i');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-times');
  });
  // Close on link click
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
      const icon = toggle.querySelector('i');
      icon.classList.add('fa-bars');
      icon.classList.remove('fa-times');
    });
  });
}

// ---- Scroll Animations (Intersection Observer) ----
function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  document.querySelectorAll('.fade-up, .fade-left, .fade-right').forEach(el => {
    observer.observe(el);
  });
}

// ---- Stat Counter Animation ----
function initStatCounters() {
  const statNumbers = document.querySelectorAll('.stat-number[data-count]');
  if (!statNumbers.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  statNumbers.forEach(el => observer.observe(el));
}

function animateCounter(el) {
  const target = parseInt(el.dataset.count);
  const duration = 2000;
  const increment = target / (duration / 16);
  let current = 0;

  const update = () => {
    current += increment;
    if (current < target) {
      el.textContent = Math.floor(current) + '+';
      requestAnimationFrame(update);
    } else {
      el.textContent = target + '+';
    }
  };
  requestAnimationFrame(update);
}

// ---- Render Hardware Cards ----
function renderHardwareCards() {
  const grid = document.getElementById('hardwareGrid');
  if (!grid || typeof hardwareData === 'undefined') return;

  grid.innerHTML = hardwareData.map((hw, index) => `
    <div class="hardware-card fade-up" style="transition-delay: ${index * 0.08}s;" onclick="window.location.href='detail.html?id=${hw.id}'">
      <div class="hardware-card-image" style="background: linear-gradient(135deg, ${hw.color}15, ${hw.color}08); color: ${hw.color};">
        <i class="${hw.icon}" style="color: ${hw.color};"></i>
      </div>
      <div class="hardware-card-body">
        <h3>${hw.name}</h3>
        <p>${hw.shortDesc}</p>
        <button class="btn-learn" style="color: ${hw.color}; border-color: ${hw.color};" onmouseover="this.style.background='${hw.color}'" onmouseout="this.style.background='transparent'; this.style.color='${hw.color}'">
          Pelajari <i class="fas fa-arrow-right"></i>
        </button>
      </div>
    </div>
  `).join('');

  // Re-init scroll animations for new cards
  setTimeout(() => initScrollAnimations(), 100);
}

// ---- Firebase Setup & Testimonials ----
const firebaseConfig = {
  apiKey: "AIzaSyAWdviMJNmm5aqQlHBQrE6TUSR1xy_TUvc",
  authDomain: "hardware-learning.firebaseapp.com",
  projectId: "hardware-learning",
  storageBucket: "hardware-learning.firebasestorage.app",
  messagingSenderId: "937731513118",
  appId: "1:937731513118:web:8424e0f04bba7b4802870f"
};

let db;
if (window.firebase) {
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
  db = firebase.firestore();
} else {
  console.error("Firebase CDN failed to load.");
}

async function fetchAndRenderTestimonials() {
  const grid = document.getElementById('testimonialsGrid');
  if (!grid || !db) return;

  grid.innerHTML = '<p style="text-align:center; width:100%; color:var(--gray-500);">Memuat testimoni...</p>';

  try {
    const snapshot = await db.collection('testimonials')
                             .orderBy('created_at', 'desc')
                             .get();

    if (snapshot.empty) {
      grid.innerHTML = '<p style="text-align:center; width:100%; color:var(--gray-500);">Belum ada testimoni. Jadilah yang pertama!</p>';
      return;
    }

    const data = [];
    snapshot.forEach(doc => {
      data.push({ id: doc.id, ...doc.data() });
    });

    grid.innerHTML = data.map((t, index) => `
      <div class="testimonial-card fade-up" style="transition-delay: ${index * 0.1}s;">
        <div class="quote-icon">&ldquo;</div>
        <div class="stars">${'<i class="fas fa-star"></i>'.repeat(t.rating)}${'<i class="far fa-star"></i>'.repeat(5 - t.rating)}</div>
        <p>${t.text}</p>
        <div class="testimonial-author">
          <div class="author-avatar">${t.avatar}</div>
          <div class="author-info">
            <strong>${t.name}</strong>
            <span>${t.role}</span>
          </div>
        </div>
      </div>
    `).join('');

    setTimeout(() => initScrollAnimations(), 100);
  } catch (error) {
    console.error('Error fetching testimonials:', error);
    grid.innerHTML = '<p style="text-align:center; width:100%; color:var(--danger);">Gagal memuat testimoni. Pastikan konfigurasi Firebase benar.</p>';
  }
}

// ---- Show Testimonial Form ----
function showTestimonialForm() {
  const formContainer = document.getElementById('testimonialFormContainer');
  if (formContainer) {
    formContainer.style.display = 'block';
    formContainer.scrollIntoView({ behavior: 'smooth' });
  }
}

// ---- Submit Testimonial Form ----
async function submitTestimonial(e) {
  e.preventDefault();
  if (!db) {
    alert("Koneksi ke Firebase gagal. Silakan muat ulang halaman atau periksa konfigurasi.");
    return;
  }
  
  const submitBtn = e.target.querySelector('button[type="submit"]');
  const originalText = submitBtn.innerHTML;
  submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Mengirim...';
  submitBtn.disabled = true;

  const name = document.getElementById('tName').value;
  const role = document.getElementById('tRole').value;
  const rating = parseInt(document.getElementById('tRating').value);
  const text = document.getElementById('tText').value;
  const avatar = name.charAt(0).toUpperCase();

  try {
    await db.collection('testimonials').add({
      name,
      role,
      rating,
      text,
      avatar,
      created_at: firebase.firestore.FieldValue.serverTimestamp()
    });

    // Clear form
    document.getElementById('testimonialForm').reset();
    
    // Hide form
    document.getElementById('testimonialFormContainer').style.display = 'none';
    
    // Show success alert
    alert('Terima kasih! Testimoni Anda berhasil dikirim.');
    
    // Re-fetch testimonials
    fetchAndRenderTestimonials();
  } catch (error) {
    console.error('Error submitting testimonial:', error);
    alert('Gagal mengirim: Pastikan database Firebase sudah disiapkan dan rules mengizinkan write.');
  } finally {
    submitBtn.innerHTML = originalText;
    submitBtn.disabled = false;
  }
}


// ---- Interactive Diagram ----
function showComponentInfo(componentId) {
  const hw = hardwareData.find(h => h.id === componentId);
  if (!hw) return;
  // Navigate to detail page
  window.location.href = `detail.html?id=${componentId}`;
}

// Tooltip on hover for SVG components
document.addEventListener('DOMContentLoaded', () => {
  const tooltip = document.getElementById('componentTooltip');
  if (!tooltip) return;

  document.querySelectorAll('.pc-component').forEach(comp => {
    comp.addEventListener('mouseenter', (e) => {
      const id = comp.dataset.component;
      const hw = hardwareData.find(h => h.id === id);
      if (!hw) return;
      tooltip.innerHTML = `<strong>${hw.name}</strong><br>${hw.shortDesc}`;
      tooltip.classList.add('visible');

      const diagramRect = document.getElementById('pcDiagram').getBoundingClientRect();
      const compRect = comp.getBoundingClientRect();
      tooltip.style.left = (compRect.left - diagramRect.left + compRect.width/2 - tooltip.offsetWidth/2) + 'px';
      tooltip.style.top = (compRect.bottom - diagramRect.top + 12) + 'px';
    });

    comp.addEventListener('mouseleave', () => {
      tooltip.classList.remove('visible');
    });
  });
});
