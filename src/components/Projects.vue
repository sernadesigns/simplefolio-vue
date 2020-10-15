<template>
	<section id="projects">
		<div class="container">
			<!-- Personal projects -->
			<div class="project-wrapper">
				<h2
					class="section-title dark-blue-text"
					v-scroll-reveal="{ duration: 1000, delay: 300 }"
				>
					Projects
				</h2>

				<!-- Each .row is a project block -->
				<b-row v-for="project in Projects" :key="project.id">
					<b-col col lg="4" sm="12">
						<div
							class="project-wrapper__text"
							v-scroll-reveal="{ distance: '30px', duration: 1000, delay: 500, origin: leftToBottom }"
						>
							<!-- 1) project title -->
							<h3 class="project-wrapper__text-title">{{project.name}}</h3>
							
							<!-- 2) project info -->
							<div>
								<p class="mb-4">
									{{project.description}}
								</p>
							</div>

							<!-- 3) project url  -->
							<a rel="noopener noreferrer" target="_blank" class="cta-btn cta-btn--hero" :href="project.url">
								See Live
							</a>

							<!-- 4) project repository url -->
							<a rel="noopener noreferrer" target="_blank" class="cta-btn text-color-main" :href="project.repo">
								Source Code
							</a>
						</div>
					</b-col>
					<b-col col lg="8" sm="12">
						<div
							class="project-wrapper__image"
							v-scroll-reveal="{ distance: '30px', duration: 1000, delay: 1000, origin: rightToBottom }"
						>
							<!-- 1) project url -->
							<a v-if="project.url" :href="project.url" rel="noopener noreferrer" target="_blank">
								<div
									class="thumbnail rounded"
									max=7
									glare=true
									max-glare=0.5
								>
									<!-- 2) project image path  -->
									<b-img fluid :src="project.thumbnail.image" :alt="project.thumbnail.alt"></b-img>
								</div>
							</a>
							<div v-else
								class="thumbnail rounded"
								max=7
								glare=true
								max-glare=0.5
							>
								<!-- 2) project image path  -->
								<b-img fluid :src="project.thumbnail.image" :alt="project.thumbnail.alt"></b-img>
							</div>
						</div>
					</b-col>
				</b-row>
				<!-- /END Project block -->
			</div>
			<!-- /END Personal projects -->
		</div>
	</section>
</template>

<script>
import uniqueId from 'lodash.uniqueid';

export default {
	data() {
		return {
			Projects: [
				{ 
					id: uniqueId('project-'), 
					name: 'Project Title',
					description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi neque, ipsa animi maiores repellendus distinctio aperiam earum dolor voluptatum consequatur blanditiis inventore debitis fuga numquam voluptate ex architecto itaque molestiae.',
					url: '#!',
					repo: '#!',
					thumbnail: {
						image: require('../assets/images/project.jpg'),
						alt: 'project banner'
					}
				},
				{ 
					id: uniqueId('project-'), 
					name: 'Project Title',
					description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi neque, ipsa animi maiores repellendus distinctio aperiam earum dolor voluptatum consequatur blanditiis inventore debitis fuga numquam voluptate ex architecto itaque molestiae.',
					url: '#!',
					repo: '#!',
					thumbnail: {
						image: require('../assets/images/project.jpg'),
						alt: 'project banner'
					}
				},
				{ 
					id: uniqueId('project-'), 
					name: 'Project Title',
					description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi neque, ipsa animi maiores repellendus distinctio aperiam earum dolor voluptatum consequatur blanditiis inventore debitis fuga numquam voluptate ex architecto itaque molestiae.',
					url: '#!',
					repo: '#!',
					thumbnail: {
						image: require('../assets/images/project.jpg'),
						alt: 'project banner'
					}
				}
			]
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

#projects {
  background-color: $white-color;
  color: $dark-blue-text;
  margin-top: -10rem;
  padding-top: 15rem;

  @include respond(tab-land) {
    margin-top: 0;
    padding-top: 5rem;
  }

  .project-wrapper {
    margin-bottom: 15rem;

    @include respond(phone) {
      margin-bottom: 0rem;
    }

    .row {
      margin-bottom: 8rem;

      @include respond(phone) {
        margin-bottom: 4rem;
      }
    }

    &__text {
      text-align: left;

      @include respond(phone) {
        margin-bottom: 2.5rem !important;
      }
      @include respond(tab-land) {
        margin-bottom: 4.8rem;
      }

      &-title {
        font-weight: bold;
        margin-bottom: 1.8rem;
        font-size: $mid-font-size;

        @include respond(phone) {
          font-size: 2rem;
        }
      }

      & p > a {
        color: $secondary-color;
      }
    }

    &__image {
      width: 90%;
      margin: 0 auto;

      @include respond(tab-land) {
        width: 100%;
        margin: 0;
      }

      & .thumbnail {
        border: none;
        box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
        transition: all 0.2s ease-out;
        box-shadow: 0 6px 10px rgba(0, 0, 0, 0.08), 0 0 6px rgba(0, 0, 0, 0.05);
        transition: 0.5s transform cubic-bezier(0.155, 1.105, 0.295, 1.12),
          0.5s box-shadow,
          0.5s -webkit-transform cubic-bezier(0.155, 1.105, 0.295, 1.12);

        @include respond(phone) {
          border: 1px solid #d2d2d2;
          box-shadow: none;
          margin-bottom: 3.2rem;
        }
      }
    }
  }
}
</style>