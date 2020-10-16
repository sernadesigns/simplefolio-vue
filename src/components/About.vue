<template>
	<section id="about">
		<b-container>
			<h2
				class="section-title"
				v-scroll-reveal="{ duration: 1000, delay: 300 }"
			>
				About me
			</h2>
			
			<b-row class="about-wrapper">
				<b-col md="6" sm="12">
					<div
						class="about-wrapper__image"
						v-scroll-reveal="{ distance: '30px', duration: 1000 }"
					>
						<!-- Profile image: change path: assets/images/yourpic.jpg -->
						<b-img
							class="shadow-lg"
							height="auto"
							width="300px"
							:src="images.profile"
							fluid
							rounded
							alt="Profile"
						>
						</b-img>
						<!-- /END Profile image -->
					</div>
				</b-col>
				<b-col md="6" sm="12">
					<div
						class="about-wrapper__info"
						v-scroll-reveal="{ distance: '30px', duration: 1000, delay: 300, origin: leftToBottom }"
					>
						<!--
						Profile about-text: I recommend to have no more than 4 blocks 
						of text
						-->
						<p class="mb-8 text-left">
							Lorem ipsum dolor sit, amet consectetur adipisicing elit.
							Excepturi neque, ipsa animi maiores repellendus distinctio
							aperiam earum.
						</p>
						<p class="mb-8 text-left">
							Lorem ipsum dolor sit, amet consectetur adipisicing elit.
							Excepturi neque, ipsa animi maiores repellendus distinctio
							aperiam earum.
						</p>
						<p class="mb-8 text-left">
							Lorem ipsum dolor sit, amet consectetur adipisicing elit.
							Excepturi neque, ipsa animi maiores repellendus distinctio
							aperiam earum.
						</p>
						<!--
							Resume Link: Put your external link for resume.
							If you want you can comment this link
							-->
							<p class="mb-8 text-left">
								<a rel="noopener noreferrer" target="_blank" class="mt-8 cta-btn cta-btn--resume" href="#!">
									View Resume
								</a>
							</p>
							<!-- /END Resume link -->
						<!-- /END Profile about text  -->
					</div>
				</b-col>
			</b-row>
		</b-container>
	</section>
</template>

<script>
export default {
	data() {
		return {
			images: {
				profile: require('../assets/images/profile.jpg')
			}
		}
	},
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

#about {
  background-color: $primary-color;
  background-image: linear-gradient(
    135deg,
    $primary-color 0%,
    $secondary-color 100%
  );
  color: $white-color;
  height: 100%;
  border-top: 0px;
  -webkit-clip-path: polygon(0 0, 100% 0, 100% 80%, 0 100%);
  clip-path: polygon(0 0, 100% 0, 100% 80%, 0 100%);
  padding-bottom: 10%;

  @include respond(tab-land) {
    height: 100%;
    -webkit-clip-path: none;
    clip-path: none;
  }

  .about-wrapper {
    @include respond(phone) {
      padding-bottom: 5rem;
    }

    &__image {
      display: flex;
      height: 100%;
      align-items: center;
      justify-content: center;

      @include respond(tab-land) {
        height: 100%;
      }
      @include respond(tab-port-sm) {
        padding-bottom: 6.4rem;
      }
    }

    &__info {
      display: flex;
      height: 100%;
      justify-content: center;
      flex-direction: column;

      @include respond(tab-port-sm) {
        align-items: center;
      }

      &-text {
        text-align: left;

        @include respond(tab-port) {
          text-align: left;
        }
        @include respond(tab-port-sm) {
          text-align: center;
        }

        &--important {
          background: darken($secondary-color, 1%);
          display: inline-block;
          font-style: italic;
          padding: 0 0.3rem;
          margin: 0.3rem 0;
          line-height: 1.6;

          @include respond(phone) {
            display: inline;
            margin: 0;
            padding: 0;
            background: transparent;
            font-style: normal;
          }
        }
      }
    }
  }
}
</style>