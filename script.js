// 1. Показать / скрыть дополнительный текст на главной странице
const showMoreButton = document.getElementById("showMore");
const moreText = document.getElementById("moreText");

if (showMoreButton && moreText) {
  showMoreButton.addEventListener("click", () => {
    const isHidden = moreText.classList.toggle("d-none");
    showMoreButton.textContent = isHidden ? "Подробнее" : "Скрыть";
    showMoreButton.setAttribute("aria-expanded", String(!isHidden));
  });
}

// 2. Динамический список проектов на странице «О проекте»
const projectsContainer = document.getElementById("projects");
const projects = [
  {
    title: "Мой первый сайт",
    description: "Небольшой сайт обо мне, созданный с помощью HTML и CSS."
  },
  {
    title: "Изучение JavaScript",
    description: "Добавление кнопок, интерактивных элементов и проверки формы."
  },
  {
    title: "Дальнейшие идеи",
    description: "Планы по развитию и улучшению моего сайта."
  }
];

if (projectsContainer) {
  projects.forEach((project) => {
    const card = document.createElement("article");
    card.className = "project-card";

    const title = document.createElement("h3");
    title.textContent = project.title;

    const description = document.createElement("p");
    description.textContent = project.description;

    card.append(title, description);
    projectsContainer.appendChild(card);
  });
}

// 3. Проверка формы без перезагрузки страницы
const contactForm = document.getElementById("contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const message = document.getElementById("message");
    const formMessage = document.getElementById("formMessage");

    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const messageError = document.getElementById("messageError");

    nameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";
    formMessage.textContent = "";
    formMessage.className = "form-message";

    let isValid = true;

    if (!name.value.trim()) {
      nameError.textContent = "Введите имя.";
      isValid = false;
    }

    if (!email.value.trim()) {
      emailError.textContent = "Введите электронную почту.";
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())) {
      emailError.textContent = "Проверьте правильность email.";
      isValid = false;
    }

    if (!message.value.trim()) {
      messageError.textContent = "Введите сообщение.";
      isValid = false;
    }

    if (!isValid) {
      formMessage.textContent = "Пожалуйста, исправьте ошибки в форме.";
      formMessage.classList.add("error");
      return;
    }

    formMessage.textContent = "Спасибо, " + name.value.trim() + "! Проверка формы пройдена.";
    formMessage.classList.add("success");
    contactForm.reset();
  });
}
