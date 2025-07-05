document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectItems = document.querySelectorAll('.project-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Hapus kelas 'active' dari semua tombol
            filterButtons.forEach(btn => btn.classList.remove('active'));

            // Tambahkan kelas 'active' ke tombol yang baru diklik
            button.classList.add('active');

            const filterValue = button.getAttribute('data-filter');

            projectItems.forEach(item => {
                if (filterValue === 'all') {
                    item.classList.remove('hidden'); // Tampilkan semua item
                } else {
                    // Cek apakah item memiliki kelas kategori yang sesuai
                    if (item.classList.contains(filterValue)) {
                        item.classList.remove('hidden'); // Tampilkan item yang cocok
                    } else {
                        item.classList.add('hidden'); // Sembunyikan item yang tidak cocok
                    }
                }
            });
        });
    });

    // Opsional: Untuk smooth scrolling navigasi
    document.querySelectorAll('.navbar a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Opsional: Implementasi untuk header sticky atau efek scroll lainnya bisa ditambahkan di sini
});