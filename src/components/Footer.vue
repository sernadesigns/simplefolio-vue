<template>
	<footer class="footer navbar-static-bottom">
		<div class="container">
			<a class="back-to-top" href="#top"> <!-- {{jumpscroll}} -->
				<span class="sr-only">Back to top</span>
				<font-awesome-icon :icon="['fas', 'angle-up']" size="2x" />
			</a>
			
			<div class="social-links" v-if="SocialLinks">
				<!-- Social Links -->
				<a v-for="social in SocialLinks" :key="social.name" :href="social.url" rel="noopener noreferrer" target="_blank" aria-label="Follow me on {social.name}">
					<font-awesome-icon :icon="['fab', social.name]" inverse :aria-label="social.name" />
				</a>
				<!-- /END Social Links -->
			</div>

			<hr>

			<!-- Please leave this in place and give credit where it is due -->
			<p class="footer__text">
				&copy; 2020 - Developed by
				<a href="https://github.com/sernadesigns" rel="noopener noreferrer" target="_blank">
					Michael Serna
				</a>
			</p>
		</div>
	</footer>
</template>

<script>
export default {
	data() {
		return {
			SocialLinks: [
				{ name: 'twitter', url: '#!' },
				{ name: 'codepen', url: '#!' },
				{ name: 'linkedin', url: '#!' },
				{ name: 'github', url: '#!' }
			]
		}
	}
}
</script>

<style lang="scss">
@import '../scss/variables';
@import '../scss/mixins';

.footer {
  background-color: $dark-grey;
  color: $white-color;
  padding: 4.8rem 0;

  @include respond(phone) {
    border: 0px;
  }

  &__text {
    color: darken(white, 50%);
    font-size: 1.3rem;

    a {
      color: darken(white, 50%);
      font-size: 1.3rem;
      transition: all 0.4s;
      display: inline-block;
      background-color: $dark-grey;

      &:hover,
      &:active {
        color: $primary-color;
        -webkit-box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.15);
        box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.15);
      }
    }
  }

  & hr {
    margin-top: 1rem;
    margin-bottom: 1rem;
    border: 0;
    width: 50%;
    border-top: 2px solid rgba(255, 255, 255, 0.1);
  }
}

.social-links {
  display: flex;
  flex-direction: row;
  justify-content: center;

  a {
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: $white-color;
    font-size: 3rem;
    width: 5rem;
    height: 5rem;
    margin: $default-font-size $default-font-size;
    transition: all 0.2s ease-in;

    &:hover {
      transform: translateY(-2px);
    }
	}
	
	svg {
		pointer-events: none;
	}
}

.back-to-top svg {
  color: $white-color;
  margin: 1rem 0 $default-font-size;
	transition: all 0.2s ease-in;
	pointer-events: none;

  &:hover {
    transform: translateY(-2px);
  }
}
</style>