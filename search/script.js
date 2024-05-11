
//在input中回车触发search()方法
var input = document.getElementById("search-text");
input.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.key === 'Enter') {
        document.getElementById("search-button").click();
    }
});
//新窗口打开百度
function search() {
    console.log('click search button');
    const url = 'https://cn.bing.com/search?q=';
    const search_text = document.getElementById('search-text').value;
    console.log(search_text);
    window.location.href = url + search_text;
};


function link() {
    window.open.href = "https://www.baidu.com";
};

