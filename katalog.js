// Data buku (isi sesuai koleksi asli)
const koleksiBuku = [
  {
    judul: "Pemrograman Web",
    pengarang: "Abdul Kadir",
    penerbit: "Elex Media",
    tahun: "2023",
    stok: 5,
    cover: "💻",
  },
  {
    judul: "Matematika Kelas 11",
    pengarang: "Tim Kemdikbud",
    penerbit: "Kemendikbud",
    tahun: "2022",
    stok: 10,
    cover: "📐",
  },
  {
    judul: "Basis Data",
    pengarang: "Rosa A.S.",
    penerbit: "Informatika",
    tahun: "2023",
    stok: 3,
    cover: "🗄️",
  },
  {
    judul: "Pemrograman Java",
    pengarang: "Rahmat M.",
    penerbit: "Andi Offset",
    tahun: "2023",
    stok: 4,
    cover: "☕",
  },
  {
    judul: "Bahasa Inggris",
    pengarang: "John Smith",
    penerbit: "Oxford",
    tahun: "2022",
    stok: 7,
    cover: "🇬🇧",
  },
  {
    judul: "Novel Laskar Pelangi",
    pengarang: "Andrea Hirata",
    penerbit: "Bentang Pustaka",
    tahun: "2019",
    stok: 2,
    cover: "📖",
  },
  {
    judul: "Fisika Dasar",
    pengarang: "Halliday",
    penerbit: "Erlangga",
    tahun: "2021",
    stok: 6,
    cover: "⚛️",
  },
];

let currentFilter = "judul";

function displayBooks(books) {
  const grid = document.getElementById("katalogGrid");
  if (!grid) return;

  if (books.length === 0) {
    grid.innerHTML = `<div class="no-result">📚 Buku tidak ditemukan. Coba kata kunci lain.</div>`;
    return;
  }

  grid.innerHTML = books
    .map(
      (book) => `
        <div class="katalog-item">
            <div class="book-cover">${book.cover}</div>
            <div class="book-info">
                <h3>${book.judul}</h3>
                <p><strong>Pengarang:</strong> ${book.pengarang}</p>
                <p><strong>Penerbit:</strong> ${book.penerbit}</p>
                <p><strong>Tahun:</strong> ${book.tahun}</p>
                <p><strong>Stok:</strong> ${book.stok} eksemplar</p>
                <button class="pinjam-btn" onclick="alert('Fungsi peminjaman sedang dalam pengembangan. Datang langsung ke perpustakaan.')">Pinjam Buku</button>
            </div>
        </div>
    `,
    )
    .join("");
}

function searchBooks() {
  const keyword = document.getElementById("katalogSearch").value.toLowerCase();
  const filter = document.getElementById("filterBy").value;

  let hasil = koleksiBuku.filter((book) => {
    if (filter === "judul") return book.judul.toLowerCase().includes(keyword);
    if (filter === "pengarang")
      return book.pengarang.toLowerCase().includes(keyword);
    if (filter === "penerbit")
      return book.penerbit.toLowerCase().includes(keyword);
    return false;
  });

  displayBooks(hasil);
}

// Event listener
document.addEventListener("DOMContentLoaded", () => {
  displayBooks(koleksiBuku);

  const searchBtn = document.getElementById("searchKatalogBtn");
  if (searchBtn) searchBtn.addEventListener("click", searchBooks);

  const searchInput = document.getElementById("katalogSearch");
  if (searchInput)
    searchInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") searchBooks();
    });
});

// Back to top
window.onscroll = function () {
  let btn = document.getElementById("backToTop");
  if (btn) {
    if (
      document.body.scrollTop > 300 ||
      document.documentElement.scrollTop > 300
    ) {
      btn.style.display = "block";
    } else {
      btn.style.display = "none";
    }
  }
};

function topFunction() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
