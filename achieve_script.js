window.onload = function() {
    var achieve = [];

    $.getJSON('./info_files/achievements.json', function (data) {
        for (const key in data) {
            achieve.push([key, data[key]]);
        }
        add_achieve(achieve);
    });

    function add_achieve(achieve) {
        var d = document.getElementById('achieve');
        achieve.forEach(element => {
            var ul = document.createElement('ul');
            d.innerHTML += "<h3>" + element[0] + "</h3>"
            element[1].forEach(element2 => {
                var li = document.createElement("li");
                li.innerText = element2;
                ul.appendChild(li);
            });
            d.appendChild(ul);
        });
    }
    
}
