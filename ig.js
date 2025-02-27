function toggleFollow() {
    let followBtn = document.querySelector(".follow-btn");
    let followerCount = document.getElementById("follower-count");
    
    if (followBtn.classList.contains("following")) {
        followBtn.classList.remove("following");
        followBtn.textContent = "ติดตาม";
        followerCount.textContent = "50K"; // ปรับค่ากลับ
    } else {
        followBtn.classList.add("following");
        followBtn.textContent = "กำลังติดตาม";
        followerCount.textContent = "50.1K"; // จำลองว่ามีผู้ติดตามเพิ่มขึ้น
    }
}
