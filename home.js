const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)        

document.addEventListener("DOMContentLoaded", function () {
    var urlParams = new URLSearchParams(window.location.search);
    var nameValue = urlParams.get('name');
    console.log(nameValue);
    $('.login-name').innerHTML = nameValue;
    document.getElementById('plan-link').addEventListener('click', function(event) {
        event.preventDefault(); // Ngăn chặn trình duyệt chuyển hướng mặc định
        window.location.href = 'plan.html?name=' + encodeURIComponent(nameValue);
    });
    document.getElementById('spice-link').addEventListener('click', function(event) {
        event.preventDefault(); // Ngăn chặn trình duyệt chuyển hướng mặc định
        window.location.href = 'spice.html?name=' + encodeURIComponent(nameValue);
    });
    document.getElementById('favorite-link').addEventListener('click', function(event) {
        event.preventDefault(); // Ngăn chặn trình duyệt chuyển hướng mặc định
        window.location.href = 'favourite.html?name=' + encodeURIComponent(nameValue);
    });
    


    // Lấy danh sách tất cả các liên kết trang
    var pageLinks = document.querySelectorAll('.page-numbers');

    // Lặp qua từng liên kết
    pageLinks.forEach(function (link) {
        // Gắn sự kiện click cho từng liên kết
        link.addEventListener('click', function (event) {
            // Ngăn chặn hành vi mặc định của liên kết (ngăn trình duyệt chuyển hướng)
            event.preventDefault();

            // Loại bỏ class "current" từ tất cả các liên kết trang
            pageLinks.forEach(function (pageLink) {
                pageLink.classList.remove('current');
            });

            // Thêm class "current" cho liên kết vừa được nhấp chuột
            link.classList.add('current');

            // Lấy số trang từ nội dung liên kết
            const pageNumber = parseInt(link.textContent);
            if (!isNaN(pageNumber)) {
                // Gọi hàm chuyển đến trang số pageNumber ở đây
                cooking.goToPage(pageNumber);
            }
        });
    });
});

const cooking = {
    cooks: [],
    currentPage: 1, // Trang hiện tại
    itemsPerPage: 12, // Số món ăn trên mỗi trang
    //render
    render: function(cooksToRender) {
        const startIndex = (this.currentPage - 1) * this.itemsPerPage;
        const endIndex = startIndex + this.itemsPerPage;
        const visibleCooks = cooksToRender.slice(startIndex, endIndex);
        const htmls = visibleCooks.map(cook => {
            return `
                <div class="grid__column-3">
                    <div class="mainpage-item">
                        <div class="mainpage-item__link">
                            <a class="cook-link" href="${cook.path}">
                                <img class="mainpage-item__img" src="${cook.image}" alt="${cook.name}">
                            </a>
                        </div>
                        <div class="mainpage-item__info">
                            <a class="cook-link" href="${cook.path}">
                                <h3 class="mainpage-item__info-text">${cook.name}</h3>
                            </a>
                            <ul>
                                <li>
                                    <span class="mainpage-item__info-icon"> ${cook.ration} </span>
                                </li>
                                <li>
                                    <span class="mainpage-item__info-vote"> ${cook.vote} </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            `;
        });
        $('.mainpage-list').innerHTML = htmls.join('');


        // Tạo trang trích dẫn
        this.createPagination(cooksToRender.length);
    },

    createPagination: function(totalItems) {
        const totalPages = Math.ceil(totalItems / this.itemsPerPage);
        const paginationDiv = $('.pagination');
        paginationDiv.innerHTML = '';

        for (let i = 1; i <= totalPages; i++) {
            const pageLink = document.createElement('a');
            pageLink.href = '#';
            pageLink.textContent = i;
            pageLink.classList.add('page-numbers');

            if (i === this.currentPage) {
                pageLink.classList.add('current');
            }

            paginationDiv.appendChild(pageLink);
        }
    },

    goToPage: function(pageNumber) {
        this.currentPage = pageNumber;
        this.render(this.cooks);
    },

    start: function() {

        // Fetch the data from the JSON file
        fetch('cooks-detail/datas/cooks.json')
            .then(response => response.json())
            .then(data => {
                this.cooks = data; // Set the cooks array with the data
                this.render(this.cooks); // Render the data
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });

        const searchInput = $('#searchInput');
        const searchButton = $('#searchButton');

        // Xử lý tìm kiếm khi người dùng ấn Enter
        searchInput.addEventListener('keyup', event => {
            if (event.key === 'Enter') {
                this.performSearch();
            }
        });

        // Xử lý tìm kiếm khi người dùng nhấp vào nút tìm kiếm
        searchButton.addEventListener('click', () => {
            this.performSearch();
        });

        window.onload = function() {
            // Lấy giá trị từ URL
            var urlParams = new URLSearchParams(window.location.search);
            var inputValue = urlParams.get('search');
            console.log(inputValue);
            if (inputValue) {
                const searchResults = cooking.cooks.filter(cook => cook.name.toLowerCase().includes(inputValue));
                cooking.render(searchResults);
            }
        }
    },
    

    performSearch: function() {
        this.currentPage = 1; // Reset trang về 1 sau khi tìm kiếm
        const searchTerm = $('#searchInput').value.toLowerCase(); // Lấy từ khóa tìm kiếm

        // Lọc danh sách các món ăn dựa trên từ khóa tìm kiếm
        const searchResults = this.cooks.filter(cook => cook.name.toLowerCase().includes(searchTerm));

        // Hiển thị kết quả tìm kiếm
        this.render(searchResults);
    },

    // favourite
}
cooking.start();
    
    