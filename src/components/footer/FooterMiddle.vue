<template>
  <div class="footer__middle">
    <div class="container footer__container">
      <div
        class="footer__columns"
        data-accordion="parent"
        data-single
        data-destroy="(max-width: 1023px)"
      >
        <div
          class="footer__col"
          data-accordion="element"
          v-for="item in items"
          :key="item.id"
          :class="item.classModifier"
        >
          <div class="footer__col-accordion-btn" data-accordion="button">
            <span class="footer__col-heading">{{ item.title }}</span>
            <span class="footer__col-accordion-btn-icon">
              <svg width="14" height="14" aria-hidden="true">
                <use xlink:href="#icon-chevron-down"></use>
              </svg>
            </span>
          </div>
          <ul class="footer__col-list" data-accordion="content">
            <li
              class="footer__col-list-item"
              v-for="subitem in item.links"
              :key="subitem.id"
            >
              <router-link class="footer__col-link" :to="subitem.href">{{
                subitem.text
              }}</router-link>
            </li>
          </ul>
        </div>
        <div class="footer__col footer__col--04">
          <div class="footer__subscribe subscribe-block">
            <div class="subscribe-block__wrapper">
              <div class="subscribe-block__text-wrapper">
                <p class="subscribe-block__text">
                  {{ subs.title }}
                </p>
              </div>
              <div
                class="subscribe-block__form-wrapper"
                data-validate
                data-callback="subscribeForm"
              >
                <form class="subscribe-block__form">
                  <div
                    class="custom-input subscribe-block__form-input"
                    data-validate-type="email"
                  >
                    <label>
                      <input
                        type="email"
                        :id="subs.input.inputId"
                        :name="subs.input.inputName"
                        :placeholder="subs.input.inputPlaceholder"
                      />
                    </label>
                    <div class="custom-input__error">
                      {{ subs.input.inputError }}
                    </div>
                  </div>
                  <button
                    class="btn subscribe-block__form-submit"
                    type="submit"
                  >
                    <svg width="14" height="14" aria-hidden="true">
                      <use xlink:href="#icon-chevron-right"></use>
                    </svg>
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div class="footer__contact-us-wrapper">
            <div class="footer__contact-us">
              <a
                class="footer__contact-us-social footer__contact-us-social--whatsapp"
                href="#"
              >
                <svg width="26" height="26" aria-hidden="true">
                  <use xlink:href="#icon-whatsapp"></use></svg></a
              ><a class="link footer__contact-us-link" :href="href">{{
                text
              }}</a>
            </div>
            <div class="footer__address">
              <span>{{ address }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          id: "id-footer-col-1",
          title: "Компания",
          links: [
            {
              id: "id-history",
              href: "history",
              text: "История",
            },
            {
              id: "id-news",
              href: "news",
              text: "Новости",
            },
            {
              id: "id-vacancies",
              href: "vacancies",
              text: "Вакансии",
            },
            {
              id: "id-contacts",
              href: "contacts",
              text: "Контакты",
            },
          ],
          classModifier: "footer__col--01",
        },
        {
          id: "id-footer-col-2",
          title: "Направления",
          links: [
            {
              id: "id-demolition",
              href: "demolition",
              text: "Снос и Демонтаж",
            },
            {
              id: "id-disposal",
              href: "disposal",
              text: "Вывоз и утилизация",
            },
            {
              id: "id-roads",
              href: "roads",
              text: "Строительство дорог",
            },
            {
              id: "id-technic-rent",
              href: "technic-rent",
              text: "Аренда спецтехники",
            },
          ],
          classModifier: "footer__col--02",
        },
        {
          id: "id-footer-col-3",
          title: "Блог",
          links: [
            {
              id: "id-technic",
              href: "technic",
              text: "Техника",
            },
            {
              id: "id-projects",
              href: "projects",
              text: "Объекты",
            },
            {
              id: "id-gallery",
              href: "gallery",
              text: "Галерея",
            },
            {
              id: "id-video",
              href: "video",
              text: "Видео",
            },
          ],
          classModifier: "footer__col--03",
        },
      ],
      subs: {
        title: "Подписка на Новости & Акции:",
        input: {
          inputPlaceholder: "Ваш email...",
          inputError: "Пожалуйста введите корректный email",
          inputType: "email",
          inputId: "subscribe-email",
          inputName: "subscribe-email",
        },
      },
      href: "tel:+79672117171",
      text: "+7 967 211-71-71",
      address: "105318, г. Москва, ул. Ибрагимова, 31",
    };
  },
};
</script>

<style></style>
