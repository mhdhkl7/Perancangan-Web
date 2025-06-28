import React from 'react';
import './App.css';
import BookList from './BookList';

function App() {
  // Data untuk 3 buku populer
  const popularBooks = [
    { title: 'Menguasai Pemrograman Berorientasi Objek', author: 'Ade Rahmat Iskandar', publisher: 'Informatika', image: 'img/menguasai-pemrograman-berorientasi-objek.jpg.jpg' },
    { title: 'Dasar Pemrograman Python 3', author: 'Abdul Kadir', publisher: 'Andi Publisher', image: 'img/dasar-pemrograman-python-3.jpg.jpg' },
    { title: 'Sistem Basis Data Dan Sql', author: 'Didik Setyadi', publisher: 'Mitra Wacana Media', image: 'img/sistem-basis-data-dan-sql.jpg.jpg' }
  ];

  // Data untuk semua buku lainnya
  const otherBooks = [
    { title: 'Menguasai Pemrograman Berorientasi Objek', author: 'Ade Rahmat Iskandar', publisher: 'Informatika', image: 'img/menguasai-pemrograman-berorientasi-objek.jpg.jpg' },
    { title: 'Dasar-Dasar Pemrograman dengan .NET', author: 'Ade Rahmat Iskandar', publisher: 'Informatika', image: 'img/dasar-dasar-pemrograman-net.jpg.jpg' },
    { title: 'Metodologi Pengembangan Sistem Informasi', author: 'Samiaji Sarosa', publisher: 'Indeks', image: 'img/metodologi-pengembangan-sistem-informasi.jpg.jpg' },
  ];

  return (
    <div className="container">
      <h2 className="section-title">Popular</h2>
      <BookList books={popularBooks} />

      <h2 className="section-title" style={{ marginTop: '40px' }}>Our Books</h2>
      <BookList books={otherBooks} />
    </div>
  );
}

export default App;