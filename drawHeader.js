const main = 'index.html';

const typesOfProduction = {
    'Виды производства': '#',
    'Изготовление и наладка компьютеров серии "Эльбрус"': '#',
    'SMD монтаж': '#',
    'Механообрабатывающее производство': '#',
    'Производство печатных плат': '#',
    'Контрактное производство электроники': '#',
    'Каркасно-штамповочное производство': '#',
    'Литье алюминия': '#',
    'Литье изделий из пластмасс': '#',
    'Производство изделий из пластмассы': '#',
    'Производство лакокрасочных покрытий': '#',
    'Производство химико-гальванических покрытий': '#',
    'Перечень видов испытаний': '#',
};

const products = {
    'Продукция': '#',
    'Шкафы телекоммуникационные': '#',
    'Светодиодные светильники': '#',
    'Светодиодные драйверы': '#',
	'Быстроразъемные соединения': '#',
	'Изделия механообрабатывающего производства': '#',
	'Каркасы ферритовых сердечников': '#',
	'Наконечники': '#',
	'Пластмассовые и резиновые изделия': '#',
	'Пневмопресс с регулируемым усилием': '#',
	'Производство корпусных изделий': '#',
	'Промышленная мебель': '#',
	'Противотаранное останавливающее устройство ПОУ-1': '#',
	'Тара технологическая': '#',
	'Теплообменник ТВВ': '#',
	'Электротехнические радиаторы': '#',
	'Вычислительный комплекс "Эльбрус"': '#',
	'Компьютеры серии "Эльбрус"': '#',
	'Модули процессорные': '#',
};

const partnership = {
    'Партнерам': '#',
};

const docs = {
    'Документы': '#',
	'Закупки по 223-ФЗ': '#',
	'Формы раскрытия информации': '#',
};

const about = {
    'О компании': '#',
    'История': '#',
	'Руководство': '#',
	'Реквизиты': '#',
	'Вакансии': '#',
	'Партнёры': '#',
	'Завод сегодня': '#',
};

const contacts = {
    'Контакты': 'contacts.html',
};

const categories = [typesOfProduction, products, partnership, docs, about, contacts];

export function draw() {
    const header = document.querySelector('header');
    const nav = document.querySelector('nav');

    // делаем картинку с орденами
    let orderns = document.createElement('div');
    orderns.classList = 'orders';
    header.prepend(orderns);

    // делаем логотип
    let logoA = document.createElement('a');
    logoA.href = main;
    header.prepend(logoA);
    let logo = document.createElement('div');
    logo.classList = 'logo';
    logoA.append(logo);
    
    
    // перебираем массив объектов
    for (let item of categories) {
        // делаем div с классом dropdown
        let dropdown = document.createElement('div');
        dropdown.classList = 'dropdown';
        nav.append(dropdown);

        // помещаем в dropdown первый элемент
        for (let prop in item) {
            let a = document.createElement('a');
            a.href = item[prop];
            a.innerHTML = prop;
            dropdown.append(a);
            break;
        }

        // помещаем остальные элементы в div list
        let objectLength = Object.keys(item).length;
        if (objectLength > 1) {
            let list = document.createElement('div');
            list.classList = 'list';
            dropdown.append(list);
            for (let i = 1; i < objectLength; i++) {
                let key = Object.keys(item)[i];
                let value = item[Object.keys(item)[i]];
                let a = document.createElement('a');
                a.href = value;
                a.innerHTML = key;
                list.append(a);
            }
        }
    }
}

// draw();