// const favoriteIcon = document.getElementById("favoriteIcon");
// let isFavorite = false;
// let favoriteCooks = JSON.parse(localStorage.getItem('favoriteCooks')) || [];

// // Kiểm tra trạng thái "Yêu thích" từ Local Storage khi trang web được tải
// const storedFavoriteState = localStorage.getItem('isFavorite');
// if (storedFavoriteState !== null) {
//     isFavorite = storedFavoriteState === 'true';
//     updateFavoriteIcon();
// }

// favoriteIcon.addEventListener("click", function () {
//     isFavorite = !isFavorite; // Chuyển đổi trạng thái "Yêu thích"
//     updateFavoriteIcon();

//     // Lưu trạng thái "Yêu thích" vào Local Storage
//     localStorage.setItem('isFavorite', isFavorite.toString());
// });

// favoriteIcon.addEventListener("mouseover", function () {
//     favoriteIcon.classList.add("hover");
// });

// favoriteIcon.addEventListener("mouseout", function () {
//     favoriteIcon.classList.remove("hover");
// });

// function updateFavoriteIcon() {
//     const h1Element = document.querySelector('.banhRanTrungPhoMai');
//     const searchedCookName = h1Element.textContent.trim();
//     console.log(localStorage);
//     if (isFavorite) {
//         favoriteIcon.classList.add("active"); // Thêm lớp "active" để thay đổi màu nền khi bật
//         fetch('datas/cooks.json')
//             .then(response => response.json())
//             .then(cooks => {
//                 console.log(cooks.name);
//                 // Tìm kiếm món ăn có tên trùng với searchedCookName
//                 const foundCook = cooks.find(cook => cook.name === searchedCookName);
//                 if (foundCook) {
//                     // Thêm món ăn vào mảng favoriteCooks nếu chưa tồn tại
//                     if (!favoriteCooks.some(cook => cook.name === foundCook.name)) {
//                         favoriteCooks.push(foundCook);
//                         // Lưu mảng favoriteCooks vào Local Storage
//                         localStorage.setItem('favoriteCooks', JSON.stringify(favoriteCooks));
//                     }
//                 }
//             });
//     } else {
//         favoriteIcon.classList.remove("active"); // Xóa lớp "active" để trở lại màu nền ban đầu khi tắt
//         // Xóa thông tin món ăn khỏi mảng favoriteCooks nếu tồn tại
//         const foundIndex = favoriteCooks.findIndex(cook => cook.name === searchedCookName);
//         if (foundIndex !== -1) {
//             favoriteCooks.splice(foundIndex, 1);
//             // Lưu mảng favoriteCooks vào Local Storage
//             localStorage.setItem('favoriteCooks', JSON.stringify(favoriteCooks));
//         }
//     }
// }


// const favoriteIcon = document.getElementById("favoriteIcon");
// let isFavorite = false;
// let favoriteCooks = JSON.parse(localStorage.getItem('favoriteCooks')) || [];

// // Kiểm tra trạng thái "Yêu thích" từ Local Storage khi trang web được tải
// const storedFavoriteState = localStorage.getItem('isFavorite');
// if (storedFavoriteState !== null) {
//     isFavorite = storedFavoriteState === 'true';
//     updateFavoriteIcon();
// }

// favoriteIcon.addEventListener("click", function () {
//     isFavorite = !isFavorite; // Chuyển đổi trạng thái "Yêu thích"
//     updateFavoriteIcon();

//     // Lưu trạng thái "Yêu thích" vào Local Storage
//     localStorage.setItem('isFavorite', isFavorite.toString());
// });

// favoriteIcon.addEventListener("mouseover", function () {
//     favoriteIcon.classList.add("hover");
// });

// favoriteIcon.addEventListener("mouseout", function () {
//     favoriteIcon.classList.remove("hover");
// });

// function updateFavoriteIcon() {
//     const h1Element = document.querySelector('.cook-name');
//     const searchedCookName = h1Element.textContent.trim();
//     console.log(localStorage);
//     if (isFavorite) {
//         favoriteIcon.classList.add("active"); // Thêm lớp "active" để thay đổi màu nền khi bật
//         fetch('datas/cooks.json')
//             .then(response => response.json())
//             .then(cooks => {
//                 console.log(cooks.name);
//                 // Tìm kiếm món ăn có tên trùng với searchedCookName
//                 const foundCook = cooks.find(cook => cook.name === searchedCookName);
//                 if (foundCook) {
//                     // Thêm món ăn vào mảng favoriteCooks nếu chưa tồn tại
//                     if (!favoriteCooks.some(cook => cook.name === foundCook.name)) {
//                         favoriteCooks.push(foundCook);
//                         // Lưu mảng favoriteCooks vào Local Storage
//                         localStorage.setItem('favoriteCooks', JSON.stringify(favoriteCooks));
//                     }
//                 }
//             });
//     } else {
//         favoriteIcon.classList.remove("active"); // Xóa lớp "active" để trở lại màu nền ban đầu khi tắt
//         // Xóa thông tin món ăn khỏi mảng favoriteCooks nếu tồn tại
//         const foundIndex = favoriteCooks.findIndex(cook => cook.name === searchedCookName);
//         if (foundIndex !== -1) {
//             favoriteCooks.splice(foundIndex, 1);
//             // Lưu mảng favoriteCooks vào Local Storage
//             localStorage.setItem('favoriteCooks', JSON.stringify(favoriteCooks));
//         }
//     }
// }
