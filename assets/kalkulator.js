const nilai1 = document.getElementById('nilai-1')
const nilai2 = document.getElementById('nilai-2')
const hasil = document.getElementById('hasil')

function tambah() {
    const jumlah = parseInt(nilai1.value) + parseInt(nilai2.value)
    hasil.innerHTML = jumlah
}

function kurang() {
    const jumlah = parseInt(nilai1.value) - parseInt(nilai2.value)
    hasil.innerHTML = jumlah
}

function kali() {
    const jumlah = parseInt(nilai1.value) * parseInt(nilai2.value)
    hasil.innerHTML = jumlah
}

function bagi() {
    const jumlah = parseInt(nilai1.value) / parseInt(nilai2.value)
    hasil.innerHTML = jumlah
}

function reset() {
    nilai1.value = ""
    nilai2.value = ""
    hasil.innerHTML = ""
}