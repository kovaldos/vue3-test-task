<template>
  <div class="footer__top">
    <div class="container footer__container">
      <h2 class="title footer__top-title">{{ title }}</h2>
      <ul class="footer__list">
        <li
          class="footer__list-item"
          v-for="item in items"
          :key="item.id"
          :class="item.classModifier"
        >
          <router-link class="footer__list-link" :to="item.href">
            <svg
              class="footer__list-icon"
              width="60"
              height="60"
              aria-hidden="true"
            >
              <use v-bind="{ 'xlink:href': '#' + item.icon }"></use>
            </svg>
            <h2 class="footer__list-title">{{ item.title }}</h2>
            <p class="footer__list-text">
              {{ item.text }}
            </p></router-link
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "Дополнительные услуги",
      items: [
        {
          id: "footer-top-item-1",
          href: "#",
          icon: "footer-items-icon-1",
          title: "«Конструктив-СД»",
          text: "In donec elementum faucibus euismod sit vitae. Id ut tempus vitae pellentesque fermentum.",
          classModifier: "footer__list-item--01",
        },
        {
          id: "footer-top-item-2",
          href: "#",
          icon: "footer-items-icon-2",
          title: "Аренда техники",
          text: "In donec elementum faucibus euismod sit vitae. Id ut tempus vitae pellentesque fermentum.",
          classModifier: "footer__list-item--02",
        },
        {
          id: "footer-top-item-3",
          href: "#",
          icon: "footer-items-icon-3",
          title: "Строительство дорог",
          text: "In donec elementum faucibus euismod sit vitae. Id ut tempus vitae pellentesque fermentum.",
          classModifier: "footer__list-item--03",
        },
        {
          id: "footer-top-item-4",
          href: "#",
          icon: "footer-items-icon-4",
          title: "Продажа материалов",
          text: "In donec elementum faucibus euismod sit vitae. Id ut tempus vitae pellentesque fermentum.",
          classModifier: "footer__list-item--04",
        },
      ],
    };
  },
};
</script>

<style></style>
