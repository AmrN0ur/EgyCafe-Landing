<script setup>
import Title from "../Title.vue";

const features = ref([
  {
    icon: `
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M4 5H20C21.1038 5 22 5.89617 22 7V17C22 18.1038 21.1038 19 20 19H4C2.89617 19 2 18.1038 2 17V7C2 5.89617 2.89617 5 4 5" stroke="#C27AFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M2 10H22" stroke="#C27AFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    `,
    title: "إدارة الكروت والباقات",
    text: "إنشاء وتخصيص وطباعة كروت الشحن بكل سهولة.",
    bgColor: "#AD46FF33",
  },
  {
    icon: `
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M21 12C21.552 12 22.005 11.551 21.95 11.002C21.4747 6.26858 17.7305 2.52527 12.997 2.051C12.447 1.996 11.999 2.449 11.999 3.001V11.001C11.999 11.5529 12.4471 12.001 12.999 12.001" stroke="#51A2FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M21.21 15.89C19.4598 20.0289 15.1638 22.492 10.7078 21.9115C6.25172 21.331 2.73014 17.8494 2.09879 13.4003C1.46743 8.95117 3.88137 4.6273 8 2.83" stroke="#51A2FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    `,
    title: "تقارير وإحصائيات لحظية",
    text: "تتبع المبيعات والاستهلاك والإيرادات بشكل مباشر.",
    bgColor: "#2B7FFF33",
  },
  {
    icon: `
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M10.852 14.772L10.469 15.695" stroke="#05DF72" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M13.148 14.772C14.6779 14.1384 15.4056 12.3819 14.772 10.852C14.1384 9.32209 12.3819 8.5944 10.852 9.228L10.469 8.305" stroke="#05DF72" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M13.148 9.228L13.531 8.305" stroke="#05DF72" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M13.53 15.696L13.148 14.772C11.6181 15.4056 9.8616 14.6779 9.228 13.148C8.5944 11.6181 9.32209 9.8616 10.852 9.228" stroke="#05DF72" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M14.772 10.852L15.695 10.469" stroke="#05DF72" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M14.772 13.148L15.695 13.531" stroke="#05DF72" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M4.5 10H4C2.89617 10 2 9.10383 2 8V4C2 2.89617 2.89617 2 4 2H20C21.1038 2 22 2.89617 22 4V8C22 9.10383 21.1038 10 20 10H19.5" stroke="#05DF72" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M4.5 14H4C2.89617 14 2 14.8962 2 16V20C2 21.1038 2.89617 22 4 22H20C21.1038 22 22 21.1038 22 20V16C22 14.8962 21.1038 14 20 14H19.5" stroke="#05DF72" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M6 18H6.01" stroke="#05DF72" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M6 6H6.01" stroke="#05DF72" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M9.228 10.852L8.305 10.469" stroke="#05DF72" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M9.228 13.148L8.305 13.531" stroke="#05DF72" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    `,
    title: "تكامل مع أجهزتك",
    text: "يدعم Mikrotik, FreeRADIUS, OpenWrt والمزيد.",
    bgColor: "#00C95033",
  },
  {
    icon: `
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M20 13C20 18 16.5 20.5 12.34 21.95C12.1222 22.0238 11.8855 22.0203 11.67 21.94C7.5 20.5 4 18 4 13V6C4 5.44808 4.44808 5 5 5C7 5 9.5 3.8 11.24 2.28C11.6777 1.90607 12.3223 1.90607 12.76 2.28C14.51 3.81 17 5 19 5C19.5519 5 20 5.44808 20 6" stroke="#FF6467" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M9 12L11 14L15 10" stroke="#FF6467" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    `,
    title: "أمان متقدم",
    text: "حماية ضد الاختراق مع نظام صلاحيات دقيق.",
    bgColor: "#FB2C3633",
  },
  {
    icon: `
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M22 17C22 18.1038 21.1038 19 20 19H6.828C6.29761 19.0001 5.78899 19.2109 5.414 19.586L3.212 21.788C3.00894 21.991 2.70359 22.0517 2.43831 21.9419C2.17302 21.832 2.00004 21.5731 2 21.286V5C2 3.89543 2.89543 3 4 3H20C21.1038 3 22 3.89617 22 5" stroke="#FCC800" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M7 11H17" stroke="#FCC800" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M7 15H13" stroke="#FCC800" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M7 7H15" stroke="#FCC800" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    `,
    title: "دعم الدفع و التنبيهات",
    text: "بوابات دفع إلكتروني و تنبيهات SMS و Telegram.",
    bgColor: "#F0B10033",
  },
  {
    icon: `
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M16 21V19C16 16.7923 14.2077 15 12 15H6C3.79234 15 2 16.7923 2 19V21" stroke="#7C86FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M16 3.128C17.7642 3.58536 18.9962 5.17747 18.9962 7C18.9962 8.82253 17.7642 10.4146 16 10.872" stroke="#7C86FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M22 21V19C21.9986 17.1771 20.765 15.5857 19 15.13" stroke="#7C86FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M9 3C6.79234 3 5 4.79234 5 7C5 9.20766 6.79234 11 9 11C11.2077 11 13 9.20766 13 7C13 4.79234 11.2077 3 9 3" stroke="#7C86FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    `,
    title: "لوحات تحكم متعددة",
    text: "واجهة مخصصة لكل دور وصلاحية في النظام.",
    bgColor: "#615FFF33",
  },
]);
</script>

<template>
  <section class="features-section">
    <div class="section-content">
      <div class="container">
        <Title
          title="كل ما تحتاجه في مكان واحد"
          text="مميزات قوية مصممة لتبسيط عملياتك وزيادة أرباحك."
        />

        <div class="features">
          <div class="feature" v-for="feature in features" :key="feature.title">
            <div
              class="icon"
              v-html="feature.icon"
              :style="{ backgroundColor: feature.bgColor }"
            ></div>
            <div class="title">{{ feature.title }}</div>
            <div class="text">{{ feature.text }}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.features-section {
  & .section-content {
    & .container {
      gap: 32px;

      & .features {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(2, 1fr);
        gap: 32px;

        & .feature {
          display: flex;
          width: 420px;
          height: 190px;
          padding: 33px;
          flex-direction: column;
          justify-content: space-between;
          align-items: flex-start;
          border-radius: 16px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(6px);
          cursor: pointer;

          &:hover {
            scale: 1.02;
            background: rgba(255, 255, 255, 0.1);
          }

          & .icon {
            display: flex;
            width: 48px;
            height: 48px;
            justify-content: center;
            align-items: center;
            border-radius: 8px;
          }

          & .title {
            color: #fff;
            font-size: 20px;
            font-weight: 600;
            line-height: 28px;
          }

          & .text {
            color: #90a1b9;
            font-size: 16px;
            font-weight: 400;
            line-height: 24px;
          }
        }
      }
    }
  }
}
</style>
