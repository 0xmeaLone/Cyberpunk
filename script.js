document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling untuk tautan navigasi
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Tambahkan efek hover pada item portofolio (opsional, bisa dilakukan dengan CSS)
    // document.querySelectorAll('.portfolio-item img').forEach(img => {
    //     img.addEventListener('mouseover', function() {
    //         this.style.transform = 'scale(1.05)';
    //     });
    //
    //     img.addEventListener('mouseout', function() {
    //         this.style.transform = 'scale(1)';
    //     });
    // });
});
