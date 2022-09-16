/*
* Сессия теперь создается в общей области видимости.
* Будет "захватываться" тремя функциями
*/
let session = new Map();

/*
* Сохранение данных сессии сразу при заходе пользователя на страницу
*/
function handleSession() {
    // Сохраним время начала сессии
    session.set("startDate", new Date().toLocaleString())
    // Сохраним UserAgent
    session.set("userAgent", window.navigator.userAgent)
}

/*
* Проверка возраста пользователя
*/
function checkAge() {
    session.set("age", prompt("Пожалуйста, введите ваш возраст?"))

    if (session.get("age") >= 18) {
        alert("Приветствуем на LifeSpot! " + '\n' + "Текущее время: " + new Date().toLocaleString());
    }
    else {
        alert("Наши трансляции не предназначены для лиц моложе 18 лет. Вы будете перенаправлены");
        window.location.href = "http://www.google.com"
    }
}

/*
* Вывод данных сессии в консоль
*/
let sessionLog = function logSession() {
    for (let result of session) {
        console.log(result)
    }
}
        
let filterVideo = function FilterVideo() {
    // Сохраняем текст пользовательского запроса.
    // let inputString = document.getElementsByTagName('input')[0].value.toLowerCase();
    // Находим контейнеры с видео, которые необходимо фильтровать
    let elements = document.getElementsByClassName('video-container');

    // Пробегаемся по контейнерам
    for (let i = 0; i <= elements.length; i++) {
        // Вытаскиваем текст описания видео, которое необходимо отфильтровать
        //let videoText = elements[i].querySelector(".video-title").innerText;

        // Получим всё что внутри контейнера
        let childElements = elements[i];
        // Получим элемент, содержащий описание видео
        // Он у нас единственный с тегом h3, снова воспользуемся поиском по тегу,
        let videoDescription = childElements.getElementsByTagName('h3')[0];
        // Получаем текст
        let videoText = videoDescription.innerText;

        // Выполняем фильтрацию, сравнивая значения в нижнем регистре
        if (!videoText.toLowerCase().includes(inputParseFunction().toLowerCase())) {
            // Описание
            elements[i].style.display = 'none';
        } else {
            elements[i].style.display = 'inline-block';
        }
    }
}
/*
document.addEventListener("DOMContentLoaded", function () {
    $("#text").on('input', function () {
        let inputString = $(this).val().toLowerCase();

        let elements = $(".video-container");
        for (let i = 0; i <= elements.length; i++) {
            let childElements = elements[i];

            let videoText = $(childElements).children('h3').text();
            if (!videoText.toLowerCase().includes(inputString.toLowerCase())) {
                elements[i].style.display = 'none';
            } else {
                elements[i].style.display = 'inline-block';
            }

        }
    })

    $(function () {
        $('#slideUp').click(function () {
            $('#text').slideUp();
        });
        $('#slideDown').click(function () {
            $('#text').slideDown();
        });
    });
});
*/


/*
const inp = document.querySelector("input")

function getElements() {// Получим все контейнеры с видео
    const elements = document.querySelectorAll('.video-container');
    // Пробежимся в цикле и выведем все в консоль
    elements.forEach(element => {
        const videoTitle = element.innerText

        if (!videoTitle.toLowerCase().includes(inp.value.toLowerCase()))
            element.style.display = 'none'
        else
            element.style.display = 'inline-block'
    })
}

inp.addEventListener('input', getElements)
*/