document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (email === "test@example.com" && password === "123456") {
        alert("เข้าสู่ระบบสำเร็จ! กำลังไปยังหน้าถัดไป...");
        window.location.href = "home.html";
    } else {
        alert("อีเมลหรือรหัสผ่านไม่ถูกต้อง!");
    }
});