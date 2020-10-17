<template>
	<b-jumbotron id="hero">
		<b-container>
			<!-- Opening Text -->
			<h1 
				class="hero-title load-hidden" 
				v-scroll-reveal.reset="{ distance: '30px', duration: 1000, delay: 500, origin: leftToBottom }"
			>
				Hi, my name is <span class="text-color-main">John Doe</span>.
				<span class="block">I'm the Unknown Developer.</span>
			</h1>
			<!-- /END Opening Text -->

			<!-- Opening Call To Action -->
			<p 
				class="hero-cta load-hidden"
				v-scroll-reveal.reset="{ distance: '30px', duration: 1000, delay: 1000, origin: leftToBottom }"
			>
				<a class="cta-btn cta-btn--hero" href="#about" v-scroll-to="'#about'">Know more</a>
			</p>
		</b-container>
	</b-jumbotron>
</template>

<script>
export default {
	computed: {
		leftToBottom() {
			return this.$mq.isDesktop ? 'bottom' : 'left';
		},
		rightToBottom() {
			return this.$mq.isDesktop ? 'bottom' : 'right';
		}
	}
}
</script>

<style lang="scss">
@import '../scss/variables';
@import '../scss/mixins';

#hero {
  min-height: 100vh;
  height: 100vh;
  display: flex;
  align-items: center;
  border-bottom: 0px;
  background: $white-color;
  font-weight: 400;
  color: $dark-blue-text;
  padding: 0rem 5.6rem;
  margin-bottom: 0;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -1;

  // If you want to set a background image on the hero section, uncomment these with yout custom image

  /* background: url("/src/assets/[your-image].png");
  background-position: center;
  background-size: cover; */

  @include respond(phone) {
    padding: 0rem $default-font-size;
  }

  .hero-title {
    font-size: 5.6rem;
    font-weight: 700;
    margin-bottom: 3.2rem;
    text-align: left;

    @include respond(tab-land) {
      font-size: 4rem;
    }
    @include respond(tab-port) {
      font-size: 3.6rem;
      text-align: center;
    }
    @include respond(phone) {
      font-size: 3.5rem;
      line-height: 1.5;
    }
    @include respond(phone-xs) {
      font-size: 2.8rem;
    }
  }

  .hero-cta {
    display: flex;

    @include respond(tab-port) {
      justify-content: center;
    }

    & a {
      font-size: 2.4rem;

      @include respond(phone) {
        font-size: 2rem;
      }
    }
  }
}
</style>