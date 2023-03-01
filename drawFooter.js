const address = '141305, Московская область, г.Сергиев Посад, улица Центральная, дом 1';
const phone = '8 (496) 549-12-21';
const email = 'RSLIO@list.ru';


function draw() {
    let footer = document.querySelector('footer');
    let div, p;

    let container = document.createElement('div');
    container.classList = 'footer-container';
    footer.append(container);

    let title = document.createElement('h3');
    title.innerHTML = 'Контакты';
    container.append(title);

    let info = document.createElement('div');
    info.classList = 'info';
    container.append(info);

    div = document.createElement('div');
    info.append(div);
    p = document.createElement('p');
    p.classList = 'header';
    p.innerHTML = 'Адрес';
    div.append(p);
    p = document.createElement('p');
    p.innerHTML = address;
    div.append(p);

    div = document.createElement('div');
    info.append(div);
    p = document.createElement('p');
    p.classList = 'header';
    p.innerHTML = 'Телефон';
    div.append(p);
    p = document.createElement('p');
    p.innerHTML = phone;
    div.append(p);
    p = document.createElement('p');
    p.classList = 'header';
    p.innerHTML = 'e-mail';
    div.append(p);
    p = document.createElement('p');
    p.innerHTML = email;
    div.append(p);

    div = document.createElement('div');
    info.append(div);
    p = document.createElement('p');
    p.classList = 'header';
    p.innerHTML = 'Горячая линия';
    div.append(p);
    p = document.createElement('p');
    p.innerHTML = 'по противодействию коррупции';
    div.append(p);
}

draw();