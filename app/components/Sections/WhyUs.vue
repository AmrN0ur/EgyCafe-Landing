<script setup>
import Title from "@/components/Title.vue";

const reasons = ref([
  {
    icon: `
      <svg class="icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.98859 5.99998H11.988V2H9.98859V5.99998ZM1.99097 12H5.98978V10H1.99097V12ZM6.74719 8.17152L3.91997 5.34252L5.33353 3.92848L8.1607 6.75748L6.74719 8.17152ZM5.33348 18.0709L3.91992 16.6569L6.74704 13.8279L8.16065 15.2419L5.33348 18.0709ZM15.23 8.17152L13.8164 6.75748L16.6435 3.92848L18.0571 5.34252L15.23 8.17152ZM15.3779 16.5172L18.1711 19.3112L19.3027 18.1792L16.5086 15.3852L18.521 13.3732L11.4611 11.4662L13.3675 18.5282L15.3779 16.5172ZM12.4408 22.0002L8.90686 8.91219L21.991 12.4462L19.0538 15.3852L21.848 18.1792L18.1711 21.8562L15.3779 19.0622L12.4408 22.0002Z" fill="#C27AFF"/>
      </svg>
    `,
    title: "سهولة الاستخدام",
    text: "واجهة بسيطة وبديهية.",
    color: "#ad46ff33",
  },
  {
    icon: `
    <svg class="icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 15C11.4481 15 11 15.4481 11 16C11 16.5519 11.4481 17 12 17C12.5519 17 13 16.5519 13 16C13 15.4481 12.5519 15 12 15" stroke="#FF6467" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M5 10H19C20.1038 10 21 10.8962 21 12V20C21 21.1038 20.1038 22 19 22H5C3.89617 22 3 21.1038 3 20V12C3 10.8962 3.89617 10 5 10" stroke="#FF6467" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M7 10V7C7 4.24042 9.24042 2 12 2C14.7596 2 17 4.24042 17 7V10" stroke="#FF6467" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    `,
    title: "أمان متقدم",
    text: "بياناتك في أيد أمينة.",
    color: "#FB2C3633",
  },
  {
    icon: `
    <svg class="icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2C6.48085 2 2 6.48085 2 12C2 17.5192 6.48085 22 12 22C17.5192 22 22 17.5192 22 12C22 6.48085 17.5192 2 12 2" stroke="#51A2FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M4.93 4.93L9.17 9.17" stroke="#51A2FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M14.83 9.17L19.07 4.93" stroke="#51A2FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M14.83 14.83L19.07 19.07" stroke="#51A2FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M9.17 14.83L4.93 19.07" stroke="#51A2FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M12 8C9.79234 8 8 9.79234 8 12C8 14.2077 9.79234 16 12 16C14.2077 16 16 14.2077 16 12C16 9.79234 14.2077 8 12 8" stroke="#51A2FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    `,
    title: "دعم فني 24/7",
    text: "نحن هنا لمساعدتك دائماً.",
    color: "#2B7FFF33",
  },
  {
    icon: `
    <svg class="icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 3V19C3 20.1038 3.89617 21 5 21H21" stroke="#05DF72" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M18 17V9" stroke="#05DF72" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M13 17V5" stroke="#05DF72" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M8 17V14" stroke="#05DF72" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    `,
    title: "تقارير دقيقة",
    text: "قرارات مبنية على بيانات.",
    color: "#00C95033",
  },
]);
</script>

<template>
  <section class="why-us-section">
    <div class="section-content" id="whyUs">
      <Title
        title="لماذا نظامنا هو خيارك الأفضل؟"
        text="نحن لا نقدم مجرد برنامج، بل شريك نجاح متكامل لمشروعك."
        class="section-title"
      />

      <div class="reasons">
        <div class="reason" v-for="reason in reasons" :key="reason.title">
          <div
            class="icon-box"
            v-html="reason.icon"
            :style="{ backgroundColor: reason.color }"
          ></div>
          <div class="content">
            <div class="title">{{ reason.title }}</div>
            <p class="text">{{ reason.text }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.why-us-section {
  width: 100%;
  min-height: max-content !important;
  padding: 95px 65px;
  background: linear-gradient(92deg, #0f2a4d 0.38%, #53015a 79.03%);

  &::before {
    display: none !important;
  }

  &::after {
    display: none !important;
  }

  & .section-content {
    flex-direction: row !important;
    justify-content: space-between !important;
    align-items: center !important;

    & .section-title {
      justify-content: flex-start !important;
      width: 40%;
      min-width: 40%;
    }

    & .reasons {
      display: grid;
      grid-template-columns: auto auto;
      grid-template-rows: auto auto;
      width: 40%;
      gap: 40px;

      & .reason {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        gap: 16px;

        & .icon-box {
          display: flex;
          width: 40px;
          height: 40px;
          justify-content: center;
          align-items: center;
          flex-shrink: 0;
          border-radius: 8px;
        }

        & .content {
          & .title {
            color: #fff;
            text-align: right;
            font-size: 16px;
            font-weight: 600;
            line-height: 24px;
            width: max-content;
          }
  
          & .text {
            color: #90a1b9;
            text-align: right;
            font-size: 14px;
            font-weight: 400;
            line-height: 20px;
          }
        }
      }
    }
  }
}
</style>
