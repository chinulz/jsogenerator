//generate
function runCharCodeAt() {
    if (charCodeAt.input.value == "") {
        swal.fire('X', 'Inputan Kosong', 'error');
    } else {
    swal.fire('Berhasil', 'Jso Telah dibuat, silahkan copy output jso, atau ulangi dengan mengklik tombol Reset', 'success');
    input = document.charCodeAt.input.value;
    output = "";
        for(i=0; i<input.length; ++i) {
            if (output != "") output += ", ";
               output += input.charCodeAt(i);
        }
    document.charCodeAt.output.value = 'document.documentElement.innerHTML = String.fromCharCode(' + output + ')';
    }
}

//switch mode 
let body = document.querySelector('body');
let btn = document.getElementById('toggle');
    btn.onclick = function() {
        btn.classList.toggle('aktif');
        body.classList.toggle('mode');
    }
