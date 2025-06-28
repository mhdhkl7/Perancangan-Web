document.addEventListener('DOMContentLoaded', () => {
    // Path gambar diubah dari 'images/' menjadi 'img/'
    const books = [
        { title: 'Menguasai Pemrograman Berorientasi Objek', author: 'Ade Rahmat Iskandar', publisher: 'Informatika', year: 2020, image: 'img/menguasai-pemrograman-berorientasi-objek.jpg.jpg' },
        { title: 'Dasar-Dasar Pemrograman dengan .NET', author: 'Ade Rahmat Iskandar', publisher: 'Informatika', year: 2019, image: 'img/dasar-dasar-pemrograman-net.jpg.jpg' },
        { title: 'Metodologi Pengembangan Sistem Informasi', author: 'Samiaji Sarosa', publisher: 'Indeks', year: 2017, image: 'img/metodologi-pengembangan-sistem-informasi.jpg.jpg' },
        { title: 'Struktur Data', author: 'Rosa A.S.', publisher: 'Modula', year: 2018, image: 'img/struktur-data.jpg.jpg' },
        { title: 'Dasar Pemrograman Python 3', author: 'Abdul Kadir', publisher: 'Andi Publisher', year: 2018, image: 'img/dasar-pemrograman-python-3.jpg.jpg' },
        { title: 'Teori Dan Praktek Sistem Operasi', author: 'Zaid Romegar Mair', publisher: 'Deeppublish', year: 2018, image: 'img/teori-dan-praktek-sistem-operasi.jpg.jpg' }
    ];

    const bookList = document.getElementById('book-list');
    const searchInput = document.getElementById('searchInput');
    const yearInput = document.getElementById('yearInput');
    const searchOptions = document.querySelectorAll('input[name="searchBy"]');

    function displayBooks(filteredBooks) {
        bookList.innerHTML = '';
        if (filteredBooks.length === 0) {
            bookList.innerHTML = '<p>Buku tidak ditemukan.</p>';
            return;
        }

        filteredBooks.forEach(book => {
            const bookElement = `
                <div class="book-item">
                    <img src="${book.image}" alt="${book.title}">
                    <h3>${book.title}</h3>
                    <p class="author">${book.author}</p>
                    <p class="publisher-year">${book.publisher} ${book.year}</p>
                </div>
            `;
            bookList.innerHTML += bookElement;
        });
    }

    function search() {
        const keyword = searchInput.value.toLowerCase();
        const year = yearInput.value;
        const searchBy = document.querySelector('input[name="searchBy"]:checked').value;

        let filteredBooks = books.filter(book => {
            switch (searchBy) {
                case 'title':
                    return book.title.toLowerCase().includes(keyword);
                case 'author':
                    return book.author.toLowerCase().includes(keyword);
                case 'publisher':
                    return book.publisher.toLowerCase().includes(keyword);
                case 'titleYear':
                    const titleMatch = book.title.toLowerCase().includes(keyword);
                    const yearMatch = year ? book.year.toString() === year : true;
                    return titleMatch && yearMatch;
                default:
                    return true;
            }
        });

        displayBooks(filteredBooks);
    }

    searchInput.addEventListener('input', search);
    yearInput.addEventListener('input', search);
    searchOptions.forEach(option => {
        option.addEventListener('change', search);
    });

    // Tampilan awal ketika website terbuka
    displayBooks(books);
});