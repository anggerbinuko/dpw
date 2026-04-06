// script.js
function showToast(message, type) {
    var toast = document.getElementById("toast");
    // if toast element doesn't exist, create it
    if (!toast) {
        toast = document.createElement("div");
        toast.id = "toast";
        document.body.appendChild(toast);
    }
    
    toast.className = "show " + type;
    toast.innerHTML = message;
    
    setTimeout(function(){ 
        toast.className = toast.className.replace("show " + type, ""); 
    }, 3000);
}

function validasiForm() {
    var nama = document.getElementById("nama").value.trim();
    var nik = document.getElementById("nik").value.trim();
    var jalur = document.getElementById("jalur").value;

    if (nama === "" || nik === "" || jalur === "") {
        showToast("Mohon lengkapi semua data pendaftaran!", "error");
    } else if (nik.length !== 16) {
        showToast("NIK harus terdiri dari 16 digit angka!", "error");
    } else {
        showToast("Terima kasih " + nama + ", data berhasil dikirim melalui jalur " + jalur, "success");
        // Reset form
        document.getElementById("ppdbForm").reset();
    }
}
