// ทำงานเหมือนกันทุกหน้า: หาไฟล์ปัจจุบันแล้วไฮไลต์เมนูที่ตรงกัน
document.addEventListener('DOMContentLoaded', () => {
  const current = window.location.pathname.split('/').pop() || 'index.html';

  document.querySelectorAll('.rail .nav-item, .mobile-nav a').forEach(link => {
    const target = link.getAttribute('href');
    if (target === current) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
});
