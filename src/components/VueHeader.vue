<template>
  <header class="header">
    <div class="header__top">
      <div class="container header__container header__container--top">
        <div class="header__top-col header__top-col--01">
          <router-link class="link header__top-link" to="/">{{
            mainLink
          }}</router-link>
        </div>
        <div class="header__top-col header__top-col--02">
          <ul class="header__top-list">
            <li
              class="header__top-list-item"
              v-for="link in links"
              :key="link.id"
              :class="link.itemClassMod"
            >
              <router-link
                class="link header__top-link"
                :class="link.classModifier"
                :to="link.href"
                >{{ link.text }}</router-link
              >
            </li>
            <li class="header__top-list-item header__top-list-item--03">
              <span class="header__top-list-item-icon">{{
                emailLink.icon
              }}</span>
              <a
                class="link header__top-link"
                :class="emailLink.classModifier"
                :href="emailLink.href"
                >{{ emailLink.text }}</a
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="header__bottom" data-fix-block>
      <div class="container header__container header__container--bottom">
        <span class="header__logo" v-if="currentPage === '/'"
          ><img
            src="../assets/img/content/logo-ksd-black.png"
            srcset="../assets/img/content/logo-ksd-black@2x.png 2x"
            alt="logo-ksd-black"
        /></span>
        <router-link to="/" class="header__logo" v-else
          ><img
            src="../assets/img/content/logo-ksd-black.png"
            srcset="../assets/img/content/logo-ksd-black@2x.png 2x"
            alt="logo-ksd-black"
        /></router-link>

        <main-nav />

        <div class="header__contacts">
          <a class="link header__contacts-link" href="tel:74994306487"
            ><span class="header__contacts-link-text">7 (499) 430-64-87</span
            ><span class="header__contacts-link-wrap-icon">
              <svg
                class="header__contacts-link-icon"
                width="22"
                height="22"
                aria-hidden="true"
              >
                <use xlink:href="#icon-call"></use></svg></span
          ></a>
        </div>
        <button
          class="main-nav__toggle btn btn--reset"
          type="button"
          aria-label="Переключатель отображения меню"
          aria-pressed="false"
          data-burger-btn
        >
          <svg width="100" height="100" viewBox="0 0 100 100">
            <path
              class="line line1"
              d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
            ></path>
            <path class="line line2" d="M 20,50 H 80"></path>
            <path
              class="line line3"
              d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  </header>
</template>

<script>
import MainNav from "./MainNav.vue";

export default {
  data() {
    return {
      currentPage: "/",
      mainLink: "Группа компаний КСД",
      emailLink: {
        icon: "@",
        href: "mailto:info@ksd.msk.ru",
        text: "info@ksd.msk.ru",
        classModifier: "header__top-link--email",
      },
      links: [
        {
          id: 1,
          itemClassMod: "header__top-list-item--01",
          href: "vacancies",
          text: "Вакансии",
        },
        {
          id: 2,
          itemClassMod: "header__top-list-item--02",
          href: "for-suppliers",
          text: "Поставщикам",
        },
      ],
    };
  },
  components: { MainNav },
  props: {},
  methods() {},
  mounted() {},
};
</script>

<style lang="scss" scoped></style>
