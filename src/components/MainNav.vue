<template>
  <nav class="main-nav">
    <div class="main-nav__wrapper">
      <ul class="main-nav__list">
        <li
          class="main-nav__item"
          v-for="item in mainNav.headerLinks"
          :key="item.id"
        >
          <router-link class="link main-nav__link" :to="item.href">{{
            item.text
          }}</router-link>
        </li>
      </ul>
      <div class="main-nav__sublist-wrap" tabindex="0">
        <div class="main-nav__submenu-toggle">
          <svg width="20" height="4" aria-hidden="true">
            <use xlink:href="#icon-dots"></use>
          </svg>
        </div>
        <ul class="main-nav__sublist">
          <li
            class="main-nav__subitem"
            v-for="item in mainNav.subLinks"
            :key="item.id"
          >
            <router-link class="link main-nav__link" :to="item.href">{{
              item.text
            }}</router-link>
          </li>
        </ul>
      </div>
    </div>
    <div class="burger" data-burger-body>
      <ul class="burger__list" data-accordion="parent" data-single>
        <template v-for="item in burger.items" :key="item.id">
          <li
            class="burger__list-item"
            data-accordion="element"
            v-if="item.subItems"
          >
            <span class="burger__sublist-row"
              ><router-link class="burger__link" :to="item.href">{{
                item.text
              }}</router-link>
              <button
                class="btn btn--reset burger__ac-btn"
                type="button"
                data-accordion="button"
              >
                <svg width="15" height="15" aria-hidden="true">
                  <use xlink:href="#icon-chevron-down"></use>
                </svg></button
            ></span>
            <ul class="burger__sublist" data-accordion="content">
              <li
                class="burger__sublist-item"
                v-for="subitem in item.subItems"
                :key="subitem.id"
              >
                <router-link
                  class="burger__link burger__sublist-link"
                  :to="subitem.href"
                  >{{ subitem.text }}</router-link
                >
              </li>
            </ul>
          </li>
          <li class="burger__list-item" v-else>
            <router-link class="burger__link" :to="item.href">{{
              item.text
            }}</router-link>
          </li>
        </template>
      </ul>
    </div>
  </nav>
</template>

<script>
import { initBurgerMenu } from "../js/init-burger-menu";
// import { initAccordions } from "../js/init-accordion";
export default {
  data() {
    return {
      mainNav: {
        headerLinks: [
          {
            id: "id-main-nav-1",
            href: "about",
            text: "О компании",
          },
          {
            id: "id-main-nav-2",
            href: "blog",
            text: "Блог",
          },
          {
            id: "id-main-nav-3",
            href: "projects-catalog",
            text: "Все проекты",
          },
          {
            id: "id-main-nav-4",
            href: "technic-catalog",
            text: "Каталог техники",
          },
        ],
        subLinks: [
          {
            id: "subnav-1",
            href: "/demolition/",
            text: "Демонтаж",
          },
          {
            id: "subnav-2",
            href: "roads",
            text: "Строительство дорог",
          },
          {
            id: "subnav-3",
            href: "recycling",
            text: "Рециклинг",
          },
          {
            id: "subnav-",
            href: "contacts",
            text: "Контакты",
          },
        ],
      },
      burger: {
        items: [
          {
            id: "burger-menu-1",
            href: "about",
            text: "О компании",
          },
          {
            id: "burger-menu-2",
            href: "demolition",
            text: "Демонтаж",
            subItems: [
              {
                id: "burger-menu-subitem-1",
                href: "projects-catalog",
                text: "Проекты",
              },
              {
                id: "burger-menu-subitem-2",
                href: "technic-catalog",
                text: "Каталог спецтехники",
              },
              {
                id: "burger-menu-subitem-3",
                href: "technic-rent",
                text: "Аренда техники",
              },
            ],
          },
          {
            id: "burger-menu-3",
            href: "roads",
            text: "Строительство",
            subItems: [
              {
                id: "burger-menu-subitem-4",
                href: "landscaping",
                text: "Благоустройство",
              },
              {
                id: "burger-menu-subitem-5",
                href: "roads",
                text: "Строительство дорог",
              },
              {
                id: "burger-menu-subitem-6",
                href: "excavation",
                text: "Разработка котлованов",
              },
              {
                id: "burger-menu-subitem-7",
                href: "projects-catalog",
                text: "Проекты",
              },
              {
                id: "burger-menu-subitem-8",
                href: "technic-catalog",
                text: "Каталог спецтехники",
              },
              {
                id: "burger-menu-subitem-9",
                href: "technic-rent",
                text: "Аренда спецтехники",
              },
            ],
          },
          {
            id: "burger-menu-4",
            href: "recycling",
            text: "Рециклинг",
            subItems: [
              {
                id: "burger-menu-subitem-10",
                href: "secondary-materials",
                text: "Утилизация и переработка",
              },
              {
                id: "burger-menu-subitem-11",
                href: "materials-sales",
                text: "Продажа материалов",
              },
              {
                id: "burger-menu-subitem-12",
                href: "technic-catalog",
                text: "Каталог спецтехники",
              },
              {
                id: "burger-menu-subitem-13",
                href: "technic-rent",
                text: "Аренда спецтехники",
              },
            ],
          },
          {
            id: "burger-menu-5",
            href: "blog",
            text: "Блог",
          },
          {
            id: "burger-menu-6",
            href: "contacts",
            text: "Контакты",
          },
        ],
      },
    };
  },
  mounted() {
    initBurgerMenu();
    // initAccordions();
  },
};
</script>

<style></style>
