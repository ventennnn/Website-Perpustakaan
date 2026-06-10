function searchBook() {
  let input = document.getElementById("searchInput").value;

  if (input === "") {
    alert("Masukkan judul buku dulu");
  } else {
    alert("Mencari buku: " + input);
  }
}

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
