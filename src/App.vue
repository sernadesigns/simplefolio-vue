<template>
  <div id="app">
    <div id="top"></div>

		<folio-hero></folio-hero>
		<folio-about></folio-about>
		<folio-projects></folio-projects>
		<folio-contact></folio-contact>
		<folio-footer></folio-footer>
  </div>
</template>

<script>
import FolioHero from './components/Hero.vue';
import FolioAbout from './components/About.vue';
import FolioProjects from './components/Projects.vue';
import FolioContact from './components/Contact.vue';
import FolioFooter from './components/Footer.vue';

export default {
  name: 'App',
  components: {
		FolioHero,
		FolioAbout,
		FolioProjects,
		FolioContact,
		FolioFooter
  }
}
</script>

<style lang="scss">
@import './scss/variables';
@import './scss/mixins';
@import './assets/base.css';

p,
a {
  font-family: 'Montserrat', sans-serif;
  font-size: $default-font-size;
}

.section-title {
  margin: 0px;
  margin-bottom: 4.5rem;
  font-size: $big-font-size;
  font-weight: bold;
  text-transform: uppercase;

  @include respond(phone) {
    font-size: 2.8rem;
  }
}

.dark-blue-text {
  color: $dark-blue-text !important;
}

.text-color-main {
  @include supportColorForIE11();
  
  // Responsive text purple style
  @include respond(phone) {
    background-image: none;
    -webkit-text-fill-color: $secondary-color;
  }

  &:hover {
    transform: translateX(2px);
  }
}

/* Call to Action Button */
.cta-btn {
  display: inline-block;
  position: relative;
  padding: 0.8rem $default-font-size;
  font-weight: bold;
  line-height: 1;
  z-index: 1;
  transition: all cubic-bezier(0.19, 1, 0.22, 1) 0.6s;
  
  &::after {
    content: '';
    display: block;
    position: absolute;
    width: 0px;
    height: 100%;
    left: 0;
    bottom: 0;
    z-index: -1;
    transition: all cubic-bezier(0.19, 1, 0.22, 1) 0.3s;
  }
}

/* Hero Style */
.cta-btn--hero {
  @include supportColorForIE11();
  border: 2px solid transparent;
  border-image: linear-gradient(
    135deg,
    $primary-color 0%,
    $secondary-color 100%
  );
  border-image-slice: 1;
  @include supportIE11() {
    color:$secondary-color !important;
    &:hover {
      color:$white-color !important;
    }
  }
  // Responsive Button hero style
  @include respond(phone) {
    background-image: none;
    border: 2px solid $secondary-color;
    -webkit-text-fill-color: $secondary-color;
  }

  &::after {
    background-image: linear-gradient(
      135deg,
      $primary-color 0%,
      $secondary-color 100%
    );
    // Responsive Button hero style
    @include respond(phone) {
      background-image: none;
    }
  }

  &:hover {
    -webkit-text-fill-color: $white-color;
    text-decoration: none;
    // Responsive Button hover hero style
    @include respond(phone) {
      -webkit-text-fill-color: $secondary-color;
    }

    &::after {
      width: 100%;
    }
  }
}

/* Resume Style */
.cta-btn--resume {
  color: $white-color;
  border: 2px solid $white-color;
  
  &::after {
    background: $white-color;
  }

  &:hover {
    color: $secondary-color;
    text-decoration: none;

    &::after {
      width: 100%;
    }
  }
}

/* Arrow Button */
.up i {
  color: #272727;
}
section {
  padding: 5rem 0rem;

  @include respond(phone) {
    border: none;
    padding-left: 1rem;
    padding-right: 1rem;
  }
}
</style>
