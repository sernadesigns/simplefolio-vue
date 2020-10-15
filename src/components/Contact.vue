<template>
	<section id="contact">
		<b-container>
			<h2
				class="section-title"
				v-scroll-reveal="{ duration: 1000, delay: 300 }"
			>
				Contact
			</h2>
			<div
				class="contact-wrapper"
				v-scroll-reveal="{ distance: '30px', duration: 1000, delay: 800 }"
			>
				<!-- 1) Contact Call To Action: change if necessary -->
				<p class="mb-4 contact-wrapper__text">
					[Put here your call to action]
				</p>
				<!-- 2) Contact mail link: change to your work email & change text if necessary -->
				<a
					rel="noopener noreferrer"
					target="_blank"
					class="cta-btn cta-btn--resume"
					href="mailto:example@email.com"
				>
					Button
				</a>
			</div>
		</b-container>
	</section>
</template>

<style lang="scss">
@import '../scss/variables';
@import '../scss/mixins';

#contact {
  background-image: linear-gradient(
    135deg,
    $primary-color 0%,
    $secondary-color 100%
  );
  -webkit-clip-path: polygon(0 15vh, 100% 0, 100% 100%, 0 100%);
  clip-path: polygon(0 15vh, 100% 0, 100% 100%, 0 100%);
  padding: 15rem 0 10rem 0;
  margin-top: -10rem;
  margin-bottom: -1px;
  color: $white-color;

  @include respond(tab-land) {
    padding: 10rem 0;
    clip-path: none;
    margin-top: 0;
    -webkit-clip-path: none;
  }

  .contact-wrapper {
    margin-top: 3.2rem;
    padding: 0 2rem;
    backface-visibility: hidden;

    &__text {
      margin-bottom: 2.5rem;
    }

    &__text,
    a {
      font-size: 2.4rem;

      // Responsive for contact text
      @include respond(phone) {
        font-size: 2rem;
      }
    }
  }
}
</style>