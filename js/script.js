function updateWelcomeMessage() {
  const nameInput = document.querySelector('[name="name"]').value;
  const welcomeHeader = document.querySelector("header h1");

  if (nameInput.trim() !== "") {
    welcomeHeader.textContent = `Hi ${nameInput}, welcome to our website, !`;
  } else {
    alert("Mohon isi nama terlebih dahulu.");
  }
}

// submit formulir
document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.querySelector('[name="name"]').value;
  const birthdate = document.querySelector('[name="birthdate"]').value;
  const gender = document.querySelector('[name="gender"]:checked');
  const message = document.querySelector('[name="message"]').value;

  if (!name || !birthdate) {
    alert("Mohon isi Nama dan Tanggal Lahir");
    return;
  }

  if (!gender) {
    alert("Mohon pilih Jenis Kelamin");
    return;
  }

  // hasil output
  document.getElementById("output").innerHTML = `
        <p>Nama: ${name}</p>
        <p>Tanggal Lahir: ${birthdate}</p>
        <p>Jenis Kelamin: ${gender.value}</p>
        <p>Message: ${message}</p>
    `;

  updateWelcomeMessage();
});
