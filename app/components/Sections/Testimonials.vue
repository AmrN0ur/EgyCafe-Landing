<script setup>
import Title from "@/components/Title.vue";

const testimonials = ref([]);

const currentView = ref(2);

const currentTestimonials = computed(() => {
  return testimonials.value.slice(
    (currentView.value - 1) * 3,
    currentView.value * 3
  );
});

const star =
  ref(`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M9.60417 1.9125C9.67866 1.76199 9.83207 1.66676 10 1.66676C10.1679 1.66676 10.3213 1.76199 10.3958 1.9125L12.3208 5.81167C12.5783 6.33262 13.0751 6.69395 13.65 6.77833L17.955 7.40833C18.1214 7.43244 18.2597 7.54894 18.3117 7.70884C18.3637 7.86873 18.3204 8.04429 18.2 8.16167L15.0867 11.1933C14.6699 11.5995 14.4795 12.1847 14.5775 12.7583L15.3125 17.0417C15.3419 17.208 15.2738 17.3766 15.1371 17.4758C15.0004 17.5751 14.8191 17.5877 14.67 17.5083L10.8217 15.485C10.3069 15.2147 9.69223 15.2147 9.1775 15.485L5.33 17.5083C5.18095 17.5872 4.99997 17.5744 4.86358 17.4752C4.72719 17.376 4.65919 17.2078 4.68833 17.0417L5.4225 12.7592C5.52095 12.1852 5.33052 11.5996 4.91333 11.1933L1.8 8.1625C1.67859 8.04524 1.63463 7.86904 1.68673 7.70849C1.73883 7.54795 1.87787 7.43113 2.045 7.4075L6.34917 6.77833C6.92476 6.6946 7.42237 6.33315 7.68 5.81167" fill="gray"/>
  <path d="M9.60417 1.9125C9.67866 1.76199 9.83207 1.66676 10 1.66676C10.1679 1.66676 10.3213 1.76199 10.3958 1.9125L12.3208 5.81167C12.5783 6.33262 13.0751 6.69395 13.65 6.77833L17.955 7.40833C18.1214 7.43244 18.2597 7.54894 18.3117 7.70884C18.3637 7.86873 18.3204 8.04429 18.2 8.16167L15.0867 11.1933C14.6699 11.5995 14.4795 12.1847 14.5775 12.7583L15.3125 17.0417C15.3419 17.208 15.2738 17.3766 15.1371 17.4758C15.0004 17.5751 14.8191 17.5877 14.67 17.5083L10.8217 15.485C10.3069 15.2147 9.69223 15.2147 9.1775 15.485L5.33 17.5083C5.18095 17.5872 4.99997 17.5744 4.86358 17.4752C4.72719 17.376 4.65919 17.2078 4.68833 17.0417L5.4225 12.7592C5.52095 12.1852 5.33052 11.5996 4.91333 11.1933L1.8 8.1625C1.67859 8.04524 1.63463 7.86904 1.68673 7.70849C1.73883 7.54795 1.87787 7.43113 2.045 7.4075L6.34917 6.77833C6.92476 6.6946 7.42237 6.33315 7.68 5.81167" stroke="gray" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`);

const activeStar =
  ref(`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M9.60417 1.9125C9.67866 1.76199 9.83207 1.66676 10 1.66676C10.1679 1.66676 10.3213 1.76199 10.3958 1.9125L12.3208 5.81167C12.5783 6.33262 13.0751 6.69395 13.65 6.77833L17.955 7.40833C18.1214 7.43244 18.2597 7.54894 18.3117 7.70884C18.3637 7.86873 18.3204 8.04429 18.2 8.16167L15.0867 11.1933C14.6699 11.5995 14.4795 12.1847 14.5775 12.7583L15.3125 17.0417C15.3419 17.208 15.2738 17.3766 15.1371 17.4758C15.0004 17.5751 14.8191 17.5877 14.67 17.5083L10.8217 15.485C10.3069 15.2147 9.69223 15.2147 9.1775 15.485L5.33 17.5083C5.18095 17.5872 4.99997 17.5744 4.86358 17.4752C4.72719 17.376 4.65919 17.2078 4.68833 17.0417L5.4225 12.7592C5.52095 12.1852 5.33052 11.5996 4.91333 11.1933L1.8 8.1625C1.67859 8.04524 1.63463 7.86904 1.68673 7.70849C1.73883 7.54795 1.87787 7.43113 2.045 7.4075L6.34917 6.77833C6.92476 6.6946 7.42237 6.33315 7.68 5.81167" fill="#FCC800"/>
  <path d="M9.60417 1.9125C9.67866 1.76199 9.83207 1.66676 10 1.66676C10.1679 1.66676 10.3213 1.76199 10.3958 1.9125L12.3208 5.81167C12.5783 6.33262 13.0751 6.69395 13.65 6.77833L17.955 7.40833C18.1214 7.43244 18.2597 7.54894 18.3117 7.70884C18.3637 7.86873 18.3204 8.04429 18.2 8.16167L15.0867 11.1933C14.6699 11.5995 14.4795 12.1847 14.5775 12.7583L15.3125 17.0417C15.3419 17.208 15.2738 17.3766 15.1371 17.4758C15.0004 17.5751 14.8191 17.5877 14.67 17.5083L10.8217 15.485C10.3069 15.2147 9.69223 15.2147 9.1775 15.485L5.33 17.5083C5.18095 17.5872 4.99997 17.5744 4.86358 17.4752C4.72719 17.376 4.65919 17.2078 4.68833 17.0417L5.4225 12.7592C5.52095 12.1852 5.33052 11.5996 4.91333 11.1933L1.8 8.1625C1.67859 8.04524 1.63463 7.86904 1.68673 7.70849C1.73883 7.54795 1.87787 7.43113 2.045 7.4075L6.34917 6.77833C6.92476 6.6946 7.42237 6.33315 7.68 5.81167" stroke="#FCC800" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`);

function getStarsArray(stars) {
  const n = Math.max(0, Math.min(5, Number(stars) || 0));
  return Array.from({ length: 5 }, (_, i) =>
    i < n ? activeStar.value : star.value
  );
}

onMounted(() => {
  testimonials.value = [
    {
      id: 1,
      name: "أحمد العلي 1",
      job: "صاحب كافيه",
      image: "/images/testimonials/ahmed.png",
      text: `النظام غير طريقة إدارتنا للواي فاي بالكامل. أصبح
كل شيء أسرع وأكثر تنظيماً، والأهم أن الأرباح زادت
بشكل ملحوظ.`,
      stars: 5,
      color: "#C27AFF",
    },
    {
      id: 2,
      name: "أحمد العلي 2",
      job: "صاحب كافيه",
      image: "/images/testimonials/ahmed.png",
      text: `النظام غير طريقة إدارتنا للواي فاي بالكامل. أصبح
كل شيء أسرع وأكثر تنظيماً، والأهم أن الأرباح زادت
بشكل ملحوظ.`,
      stars: 4,
      color: "#C27AFF",
    },
    {
      id: 3,
      name: "أحمد العلي 3",
      job: "صاحب كافيه",
      image: "/images/testimonials/ahmed.png",
      text: `النظام غير طريقة إدارتنا للواي فاي بالكامل. أصبح
كل شيء أسرع وأكثر تنظيماً، والأهم أن الأرباح زادت
بشكل ملحوظ.`,
      stars: 2,
      color: "#C27AFF",
    },
    {
      id: 4,
      name: "أحمد العلي 4",
      job: "صاحب كافيه",
      image: "/images/testimonials/ahmed.png",
      text: `النظام غير طريقة إدارتنا للواي فاي بالكامل. أصبح
كل شيء أسرع وأكثر تنظيماً، والأهم أن الأرباح زادت
بشكل ملحوظ.`,
      stars: 3,
      color: "#C27AFF",
    },
    {
      id: 5,
      name: "أحمد العلي 5",
      job: "صاحب كافيه",
      image: "/images/testimonials/ahmed.png",
      text: `النظام غير طريقة إدارتنا للواي فاي بالكامل. أصبح
كل شيء أسرع وأكثر تنظيماً، والأهم أن الأرباح زادت
بشكل ملحوظ.`,
      stars: 5,
      color: "#C27AFF",
    },
    {
      id: 6,
      name: "أحمد العلي 6",
      job: "صاحب كافيه",
      image: "/images/testimonials/ahmed.png",
      text: `النظام غير طريقة إدارتنا للواي فاي بالكامل. أصبح
كل شيء أسرع وأكثر تنظيماً، والأهم أن الأرباح زادت
بشكل ملحوظ.`,
      stars: 4,
      color: "#C27AFF",
    },
    {
      id: 7,
      name: "أحمد العلي 7",
      job: "صاحب كافيه",
      image: "/images/testimonials/ahmed.png",
      text: `النظام غير طريقة إدارتنا للواي فاي بالكامل. أصبح
كل شيء أسرع وأكثر تنظيماً، والأهم أن الأرباح زادت
بشكل ملحوظ.`,
      stars: 5,
      color: "#C27AFF",
    },
  ];
});
</script>

<template>
  <section class="testimonials-section" id="testimonials">
    <div class="section-content">
      <div class="container">
        <Title
          title="عملائنا يثقون بنا"
          text="آراء بعض من شركائنا الذين نعتز بهم."
          class="section-title"
        />

        <div class="testimonials">
          <div
            class="testimonial"
            v-for="testimonial in currentTestimonials"
            :key="testimonial.id"
          >
            <div class="stars">
              <div
                class="star"
                v-for="(i, idx) in getStarsArray(testimonial.stars)"
                :key="idx"
                v-html="i"
              ></div>
            </div>

            <div class="text">
              <p>{{ testimonial.text }}</p>
            </div>

            <div class="testimonialer">
              <div
                class="image-box"
                :style="`border-color: ${testimonial.color ?? '#fff'}`"
              >
                <img
                  :src="testimonial.image"
                  :alt="`أ. ${testimonial.name.split(' ')[0]}`"
                />
              </div>

              <div class="info">
                <div class="name">{{ testimonial.name }}</div>
                <div class="job">{{ testimonial.job }}</div>
              </div>
            </div>
          </div>
        </div>

        <div class="pagination">
          <button
            :class="{ active: currentView === 1 }"
            @click="currentView = 1"
          ></button>
          <button
            :class="{ active: currentView === 2 }"
            @click="currentView = 2"
          ></button>
          <button
            :class="{ active: currentView === 3 }"
            @click="currentView = 3"
          ></button>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.testimonials-section {
  & .section-content {
    & .container {
      gap: 65px;

      & .testimonials {
        display: grid;
        grid-template-columns: repeat(3, auto);
        gap: 30px;

        & .testimonial {
          display: grid;
          grid-template-rows: auto 1fr auto;
          gap: 20px;
          width: 100%;
          height: 100%;
          min-height: 280px;
          border-radius: 16px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(6px);
          padding: 30px;

          &:hover {
            scale: 1.02;
            background-color: rgba(255, 255, 255, 0.1);
          }

          & .stars {
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
            align-items: center;
            gap: 5px;

            & .star {
              width: 20px;
              height: 20px;
            }
          }

          & .text {
            color: #cad5e2;
            font-size: 16px;
            font-weight: 400;
            line-height: 24px;
          }

          & .testimonialer {
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
            align-items: center;
            gap: 10px;

            & .image-box {
              width: 45px;
              height: 45px;
              border-radius: 50%;
              overflow: hidden;
              border: 2px solid transparent;
            }

            & .info {
              & .name {
                color: #fff;
                font-size: 16px;
                font-weight: 600;
                line-height: 24px;
              }

              & .job {
                color: #90a1b9;
                font-size: 14px;
                font-weight: 400;
                line-height: 20px;
              }
            }
          }
        }
      }

      & .pagination {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 8px;
        margin: 0 auto;

        & button {
          width: 77px;
          height: 8px;
          border-radius: 8px;
          background: #62748e;
          border: none;

          &:hover,
          &.active {
            background-color: #155dfc;
          }
        }
      }
    }
  }
}
</style>
