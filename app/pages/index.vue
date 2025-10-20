<script setup>
import Features from "@/components/Sections/Features.vue";
import HowItsWork from "@/components/Sections/HowItsWork.vue";
import Permissions from "@/components/Sections/Permissions.vue";
import WhyUs from "@/components/Sections/WhyUs.vue";
import Pricing from "@/components/Sections/Pricing.vue";
import Testimonials from "@/components/Sections/Testimonials.vue";
import ContactUs from "@/components/Sections/ContactUs.vue";
import FAQ from "@/components/Sections/FAQ.vue";
import Footer from "@/components/Footer.vue";

const showBackToTop = ref(false);

const scrollToTop = () => {
  if (typeof window !== "undefined") {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
};

const onScroll = () => {
  if (typeof window !== "undefined") {
    showBackToTop.value = window.scrollY > 200; // غيّر العتبة حسب الحاجة
  }
};

onMounted(() => {
  if (typeof window !== "undefined") {
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll(); // تحديث أولي
  }
});

onBeforeUnmount(() => {
  if (typeof window !== "undefined") {
    window.removeEventListener("scroll", onScroll);
  }
});
</script>

<template>
  <div class="page" el-type="page">
    <!-- Sections -->
    <main class="sections">
      <!-- Hero Section -->
      <section id="hero" class="hero">
        <div class="section-content">
          <!-- Header -->
          <Header />

          <!-- Hero Content -->
          <div class="hero-content">
            <div class="container">
              <div class="side text">
                <h3 class="title">حوّل إدارة الواي فاي في كافيهك إلى تجربة</h3>
                <h3 class="sub-title">ذكية وسهلة</h3>
                <p class="description">
                  نظام شامل لإدارة كروت الإنترنت والمشتركين والباقات والمبيعات –
                  مع تقارير وإحصائيات لحظية – متكامل مع MikroTik وFreeRADIUS.
                </p>
              </div>

              <div class="side image"></div>
            </div>
          </div>
        </div>
      </section>

      <!-- Features Section -->
      <Features />

      <!-- How Its Work Section -->
      <HowItsWork />

      <!-- Permissions Section -->
      <Permissions />

      <!-- Why Us Section -->
      <WhyUs />

      <!-- Pricing Section -->
      <Pricing />

      <!-- Testimonials Section -->
      <Testimonials />

      <!-- Contact Us Section -->
      <ContactUs />

      <!-- FAQ Section -->
      <FAQ />
    </main>

    <!-- Footer -->
    <Footer />

    <!-- Back To Top -->
    <img
      v-show="showBackToTop"
      @click="scrollToTop"
      @keydown.enter="scrollToTop"
      @keydown.space.prevent="scrollToTop"
      role="button"
      tabindex="0"
      class="back-to-top"
      src="/icons/up.gif"
      alt="العودة للأعلى"
    />
  </div>
</template>

<style scoped>
.page {
  display: grid;
  grid-template-rows: 1fr auto;
  grid-template-columns: 1fr;
  min-height: 100vh;
  width: 100%;
  height: 100%;
  max-width: 100vw !important;
  max-height: 100vh !important;
  overflow-x: hidden;

  & .header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: transparent;
    padding: 30px 60px;
    z-index: 4 !important;

    & .part {
      width: fit-content;

      &.logo {
      }

      &.nav {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
      }

      &.actions {
      }
    }
  }

  & .sections {
    display: flex;
    flex-direction: column;
    justify-content: stretch;
    align-items: center;
    z-index: 0;
    max-width: 100vw !important;

    & section {
      /* Start Hero */
      &.hero {
        & .section-content {
          display: grid;
          grid-template-rows: auto 1fr;
          grid-template-columns: 1fr;

          & .hero-content {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            & .container {
              display: flex;
              flex-direction: row;
              justify-content: space-between;
              align-items: center;

              & .side {
                &.text {
                  & .title {
                    color: #fff;
                    font-size: 40px;
                    font-weight: 700;
                    line-height: 150%;
                  }
                  & .sub-title {
                    font-size: 40px;
                    font-weight: 700;
                    line-height: 150%;
                    background: linear-gradient(
                      89deg,
                      #0754ff 62.89%,
                      #b854ff 93.32%
                    );
                    background-clip: text;
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                  }
                  & .description {
                    color: #cad5e2;
                    font-size: 18px;
                    font-weight: 500;
                    line-height: 200%;
                  }
                }

                &.image {
                  width: 500px;
                  height: 500px;
                  flex-shrink: 0;
                  aspect-ratio: 1/1;
                  border-radius: 16px;
                  background: url("/images/hero_side_image.png")
                    var(--primary-normal-active) 50% / cover no-repeat;
                }
              }
            }
          }
        }
      }
      /* End Hero */
    }
  }

  & .footer {
  }

  & .back-to-top {
    width: 40px;
    height: 40px;
    border-radius: 50px;
    background-color: var(--primary-normal-active);
    position: fixed;
    bottom: 20px;
    right: 20px;
    z-index: 10000;
    cursor: pointer;
  }
}
</style>
