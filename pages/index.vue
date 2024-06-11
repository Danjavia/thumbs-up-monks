<script setup lang="ts">
import Participants from "~/components/Home/Participants.vue";
definePageMeta({
  title: "Welcome to home",
  meta: [
    { name: "description", content: "Vote for your favorite personality" },
    { property: "og:title", content: "Leaderboard" },
    {
      property: "og:description",
      content: "This is the main leaderboard for thumbs up",
    },
  ],
});
</script>

<template>
  <div class="max-centered">
    <aside class="banner banner-top" role="doc-tip" aria-label="Speak Out">
      <div class="banner__left">
        <span class="banner__hairline">Speak out. Be heard.</span>
        <span class="banner__title">Be counted</span>
      </div>
      <div class="banner__right">
        <p class="banner__text">
          Rule of Thumb is a crowd sourced court of public opinion where anyone
          and everyone can speak out and speak freely. It’s easy: You share your
          opinion, we analyze and put the data in a public report.
        </p>
      </div>
      <button class="icon-button" aria-label="close">
        <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
          <g stroke="#000" stroke-width="2" fill="none" fill-rule="evenodd">
            <path d="M1 19L19 1M1 1l18 18" />
          </g>
        </svg>
      </button>
    </aside>

    <main role="main">
      <!-- Start: Implementation -->
      <div class="max-centered">
        <Participants />
      </div>
      <!-- End: Implementation -->
    </main>

    <aside
      class="banner banner-bottom"
      role="doc-tip"
      aria-label="Submit a name"
    >
      <img
        srcset="
          assets/img/bg-people.png      750w,
          assets/img/bg-people.@2x.png 1440w
        "
        sizes="(min-width: 750px) 1440px, 100vw"
        class="banner__background"
        src="assets/img/bg-people.png"
        alt=""
        role="none"
      />
      <div class="banner__left">
        <h2 class="banner__heading">
          Is there anyone else you would want us to add?
        </h2>
      </div>
      <div class="banner__right">
        <button class="banner__cta">Submit a name</button>
      </div>
    </aside>

    <hr role="separator" />
  </div>
</template>

<style>
hr[role="separator"] {
  border: 0 none;
  border-bottom: 2px dotted var(--color-dark-gray);
  margin: 1.5rem 1rem;
}

.icon-button {
  padding: 0;
  border: 0;
  background-color: transparent;
}

.icon-button[aria-label="thumbs up"] {
  background-color: rgba(var(--color-green-positive), 0.8);
}

.icon-button[aria-label="thumbs up"]:hover {
  background-color: rgba(var(--color-green-positive), 1);
}

.icon-button[aria-label="thumbs down"] {
  background-color: rgba(var(--color-yellow-negative), 0.8);
}

.icon-button[aria-label="thumbs down"]:hover {
  background-color: rgba(var(--color-yellow-negative), 1);
}

.icon-button > img {
  width: 100%;
  height: 100%;
}

.nav__links li {
  width: 100%;
  margin: 3rem 0;
  font-size: 2rem;
  text-align: center;
}

.nav__links a {
  color: var(--color-white);
  text-decoration: none;
}

.nav__hamburger:focus + .nav__links,
.nav__links:focus-within {
  transform: translateX(0);
}

.nav__links li:last-child {
  order: -1;
}

.featured-card__buttons > .icon-button {
  width: 50%;
  height: 2.75rem;
}

.featured-card__buttons > .icon-button > img {
  max-width: 1.25rem;
}

.banner {
  position: relative;
  display: flex;
  overflow: hidden;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  margin: 1rem;
  background-color: var(--color-light-gray);
}

.banner__background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  object-fit: cover;
  opacity: 0.2;
  pointer-events: none;
}

.banner-top .banner__left {
  flex-basis: 40%;
  padding-right: 1rem;
}

.banner-top .banner__left > .banner__hairline {
  color: var(--color-dark-gray);
  font-size: 1.25rem;
  font-weight: 300;
  letter-spacing: -0.07rem;
}

.banner-top .banner__left > .banner__title {
  display: block;
  color: var(--color-dark-gray);
  font-size: 2rem;
  font-weight: 700;
  letter-spacing: -0.05rem;
}

.banner-top .banner__right {
  flex-basis: 60%;
}

.banner-top .banner__text {
  margin: 0;
  color: var(--color-dark-gray);
  font-size: 1.25rem;
  font-weight: 300;
  letter-spacing: -0.05rem;
}

.banner-bottom {
  flex-direction: column;
  padding: 1rem 3rem;
  margin-top: 2rem;
}

.banner-bottom .banner__heading {
  position: relative;
  margin: 0 0 1rem;
  color: var(--color-dark-gray);
  font-size: 2rem;
  font-weight: 400;
  text-align: center;
}

.banner-bottom .banner__right {
  width: 100%;
}

.banner-bottom .banner__cta {
  position: relative;
  display: block;
  width: 100%;
  padding: 1rem 0;
  border: 2px solid var(--color-darker-background);
  background: transparent;
  color: var(--color-darker-gray);
  font-size: 1.5rem;
}

main[role="main"] {
  padding: 0 1rem;
  margin-top: 2rem;
}

main h2,
main h3,
main h4 {
  color: var(--color-dark-gray);
  font-weight: 300;
}

main h2 {
  margin: 0 0 2rem;
  font-size: 2rem;
}

.footer {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin: 0 1rem 3rem;
}

.footer__links li {
  padding: 0.5rem 0;
  font-size: 1.25rem;
}

.footer__links li a {
  color: var(--color-dark-gray);
  text-decoration: none;
}

.footer__links li a:hover {
  color: var(--color-darker-gray);
  text-decoration: underline;
}

.footer__social > span {
  color: var(--color-darker-gray);
  font-size: 1.25rem;
  text-align: right;
}

.footer__social > ul {
  display: flex;
  margin-top: 1rem;
}

.footer__social > ul > li {
  margin-right: 1rem;
}

.banner-top .icon-button {
  display: none;
}

.max-centered {
  display: contents;
}

@media all and (min-width: 500px) {
  .banner-top .banner__left {
    flex-basis: 30%;
  }

  .banner-top .banner__right {
    flex-basis: 70%;
  }
}

@media all and (min-width: 768px) {
  html,
  body {
    font-size: 14px;
  }

  .banner-top .banner__left {
    flex-basis: 20%;
  }

  .banner-top .banner__right {
    flex-basis: 80%;
  }

  .banner-bottom {
    flex-direction: row;
    justify-content: space-between;
    padding: 1rem 2rem;
  }

  .banner-bottom .banner__background {
    top: -230%;
  }

  .banner-bottom .banner__right {
    width: auto;
  }

  .banner-bottom .banner__heading {
    margin-bottom: 0;
    font-size: 1.5rem;
  }

  .banner-bottom .banner__cta {
    width: 16rem;
  }

  .footer__links ul {
    display: flex;
  }

  .footer__links ul li {
    padding: 0;
    margin-right: 2rem;
    font-size: 1rem;
  }

  .footer__social span {
    margin-right: 1rem;
    color: var(--color-dark-gray);
    font-size: 0.833rem;
  }

  .footer__social > ul {
    margin-top: 3px;
  }
}

@media all and (min-width: 1100px) {
  html,
  body {
    font-size: 18px;
  }

  .max-centered {
    position: relative;
    display: block;
    width: 100vw;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
  }

  .max-centered > *,
  .max-centered > hr[role="separator"] {
    margin-right: 0;
    margin-left: 0;
  }

  .max-centered main {
    padding: 0;
  }

  .nav__links li {
    width: fit-content;
    margin: 0 1rem 0 0;
    font-size: 1rem;
    font-weight: 300;
    text-align: right;
  }

  .nav__links li:last-child {
    order: 0;
  }

  .featured-card__buttons > .icon-button {
    height: auto;
  }

  .featured-card__buttons > .icon-button > img {
    max-width: 2rem;
    height: 2rem;
    margin: 1.3rem 0;
  }

  .banner-top .banner__text,
  .banner-top .banner__left > .banner__hairline {
    font-size: 1rem;
  }

  .banner-top .banner__left > .banner__title {
    font-size: 1.5rem;
    letter-spacing: 0;
  }

  .banner-top .icon-button {
    display: block;
    margin-left: 2rem;
  }

  .banner-bottom .banner__cta {
    width: 20rem;
  }

  main h2 {
    font-size: 2.5rem;
  }

  hr[role="separator"] {
    margin: 2rem 0;
  }
}
</style>
