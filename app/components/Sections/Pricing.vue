<script setup>
import Title from "@/components/Title.vue";

const plans = ref({
  smallCafes: [],
  largeCafes: [],
});

const activePlan = ref("small");

const rightIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
  <path d="M10.705 1.81641C5.87576 1.81641 1.95502 5.73715 1.95502 10.5664C1.95502 15.3957 5.87576 19.3164 10.705 19.3164C15.5343 19.3164 19.455 15.3957 19.455 10.5664C19.455 5.73715 15.5343 1.81641 10.705 1.81641" stroke="#7BF1A8" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M8.08002 10.5664L9.83002 12.3164L13.33 8.81641" stroke="#7BF1A8" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

onMounted(() => {
  // Plans for small cafes
  plans.value.smallCafes = [
    {
      id: 1,
      icon: `
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
  <g filter="url(#filter0_d_1249_30659)">
    <path d="M20.3461 2.51074C20.5605 10.2749 26.8042 16.5186 34.5683 16.733C26.8042 16.9473 20.5605 23.191 20.3461 30.9552C20.1317 23.191 13.8881 16.9473 6.1239 16.733C13.8881 16.5186 20.1317 10.2749 20.3461 2.51074Z" fill="#EBF1FA"/>
  </g>
  <defs>
    <filter id="filter0_d_1249_30659" x="0.790568" y="0.732964" width="39.1111" height="39.111" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feOffset dy="3.55556"/>
      <feGaussianBlur stdDeviation="2.66667"/>
      <feComposite in2="hardAlpha" operator="out"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0.0038961 0 0 0 0 0.576623 0 0 0 0 0.896104 0 0 0 1 0"/>
      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1249_30659"/>
      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1249_30659" result="shape"/>
    </filter>
  </defs>
</svg>`,
      title: "الخطة الإقتصاديه",
      price: 5000,
      time: "شهر",
      features: [
        "عدد لا محدود من السيرفرات",
        "علامة تجارية خاصة (White-label)",
        "تكاملات مخصصة (API)",
        "مدير حساب مخصص",
      ],
    },
    {
      id: 2,
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 33 33" fill="none" style="overflow: visible;">
  <g filter="url(#filter0_d_1249_30685)">
    <g filter="url(#filter1_d_1249_30685)">
      <path d="M16.6517 13.4521C16.6463 13.4906 15.8834 18.9469 13.6419 21.8516C13.4811 22.1015 13.2922 22.3409 13.0755 22.5635C11.4692 24.213 8.93868 24.3543 7.42413 22.8799C5.90996 21.4051 5.98493 18.8724 7.59113 17.2227C7.95558 16.8484 8.36811 16.5527 8.80499 16.335C11.7436 14.2716 16.6403 13.454 16.6517 13.4521ZM17.0335 13.457C17.0751 13.4628 21.971 14.1508 24.9544 16.1289C25.3969 16.3349 25.8174 16.6191 26.1917 16.9834C27.8415 18.5897 27.9835 21.1201 26.5091 22.6348C25.0344 24.1489 22.5016 24.0749 20.8519 22.4688C20.6293 22.252 20.4343 22.0181 20.2669 21.7725C17.9491 18.9295 17.0403 13.498 17.0335 13.457ZM20.6136 3.90234C22.22 2.25276 24.7504 2.11134 26.265 3.58594C27.7793 5.06067 27.7042 7.59342 26.098 9.24316C25.879 9.46807 25.6423 9.66443 25.3939 9.83301C22.5557 12.1411 17.1534 13.0505 17.0872 13.0615C17.0921 13.0266 17.7787 8.12609 19.7581 5.14062C19.9642 4.69785 20.249 4.27683 20.6136 3.90234ZM7.21613 3.86328C8.6908 2.34923 11.2227 2.42337 12.8724 4.0293C13.0977 4.24869 13.2954 4.48546 13.4642 4.73438C15.7736 7.57547 16.6823 12.9844 16.6917 13.041C16.6917 13.041 11.7649 12.3562 8.76886 10.3691C8.32666 10.1631 7.90658 9.87784 7.53253 9.51367C5.88301 7.90734 5.74164 5.37782 7.21613 3.86328Z" fill="url(#paint0_radial_1249_30685)"/>
    </g>
    <ellipse cx="16.8483" cy="13.2532" rx="0.239228" ry="6.04906" fill="url(#paint1_radial_1249_30685)"/>
    <ellipse cx="16.8142" cy="13.253" rx="0.239228" ry="6.04906" transform="rotate(-90 16.8142 13.253)" fill="url(#paint2_radial_1249_30685)"/>
  </g>
  <defs>
    <filter id="filter0_d_1249_30685" filterUnits="objectBoundingBox" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feOffset dy="3.56"/>
      <feGaussianBlur stdDeviation="2.665"/>
      <feComposite in2="hardAlpha" operator="out"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0.00392157 0 0 0 0 0.576471 0 0 0 0 0.898039 0 0 0 0.5 0"/>
      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1249_30685"/>
      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1249_30685" result="shape"/>
    </filter>

    <filter id="filter1_d_1249_30685" filterUnits="objectBoundingBox" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feOffset dy="3.55556"/>
      <feGaussianBlur stdDeviation="2.66667"/>
      <feComposite in2="hardAlpha" operator="out"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1249_30685"/>
      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1249_30685" result="shape"/>
    </filter>

    <radialGradient id="paint0_radial_1249_30685" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(16.8625 13.233) rotate(90) scale(35.774 35.7717)">
      <stop stop-color="white"/>
      <stop offset="1" stop-color="#A5D6FD"/>
    </radialGradient>

    <radialGradient id="paint1_radial_1249_30685" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(16.8483 13.2532) rotate(90) scale(6.04906 0.239228)">
      <stop stop-color="white"/>
      <stop offset="1" stop-color="white" stop-opacity="0"/>
    </radialGradient>

    <radialGradient id="paint2_radial_1249_30685" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(16.8142 13.253) rotate(90) scale(6.04906 0.239228)">
      <stop stop-color="white"/>
      <stop offset="1" stop-color="white" stop-opacity="0"/>
    </radialGradient>
  </defs>
</svg>
`,
      title: "الخطة الفضية",
      price: 70,
      time: "شهر",
      features: [
        "حتى 5 كافيهات",
        "إدارة عدد لا محدود من الكروت",
        "تقارير متقدمة وتصدير",
        "أدوار الموزعين والوكلاء",
        "دعم فني متميز",
      ],
      favourite: true,
    },
    {
      id: 3,
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="29" height="28" viewBox="0 0 29 28" fill="none">
  <path d="M19.4352 0.0678711L14.3211 5.98408L18.0217 4.01205L18.2817 3.87289L18.5417 4.01381L19.6148 4.59611L19.4353 0.0678711H19.4352ZM7.04461 1.46141L8.47283 9.10244L13.6712 6.33201L7.04461 1.46141ZM18.278 5.11807L4.32182 12.5557L10.6975 15.9304L24.6117 8.56221L18.278 5.11807ZM20.7829 7.73639L22.2826 8.49986L10.7213 14.5901L6.8028 12.499L8.2878 11.7134L10.7213 13.0136L20.783 7.73645L20.7829 7.73639ZM26.1846 8.80397L26.7173 10.212L28.2537 8.88447L26.1846 8.80391L26.1846 8.80397ZM25.2598 9.45758L11.126 16.9429L10.7872 21.8282L26.7284 13.3431L25.2598 9.45758ZM5.65658 10.6039L0.408752 12.021L2.56946 13.1673L2.92647 12.2134L2.99971 12.0192L3.18287 11.9222L5.6567 10.6038L5.65658 10.6039ZM3.63873 13.4347L1.95053 17.9464L9.67576 22.0571L10.0364 16.8203L3.63867 13.4347L3.63873 13.4347ZM23.2878 16.4156L13.0778 21.8502L16.295 27.9112L18.5106 19.7151L26.8584 21.2752L23.2877 16.4154L23.2878 16.4156ZM5.66766 21.1655L4.52871 23.7912L7.87582 22.3391L5.66754 21.1654L5.66766 21.1655Z" fill="#EBF1FA"/>
</svg>`,
      title: "الخطة الذهبية",
      price: 5000,
      time: "شهر",
      features: [
        "عدد لا محدود من السيرفرات",
        "علامة تجارية خاصة (White-label)",
        "تكاملات مخصصة (API)",
        "أدوار الموزعين والوكلاء",
        "مدير حساب مخصص",
      ],
    },
    {
      id: 4,
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="36" height="37" viewBox="0 0 36 37" fill="none">
  <g filter="url(#filter0_d_1249_30721)">
    <path d="M18.1183 27.083L5.61829 12.083L9.36829 4.58301H26.8683L30.6183 12.083L18.1183 27.083ZM15.1495 10.833H21.087L19.212 7.08301H17.0245L15.1495 10.833ZM16.8683 21.6768V13.333H9.93079L16.8683 21.6768ZM19.3683 21.6768L26.3058 13.333H19.3683V21.6768ZM23.8683 10.833H27.1808L25.3058 7.08301H21.9933L23.8683 10.833ZM9.05579 10.833H12.3683L14.2433 7.08301H10.9308L9.05579 10.833Z" fill="#EBF1FA"/>
  </g>
  <defs>
    <filter id="filter0_d_1249_30721" x="-1.88171" y="-0.166992" width="40" height="40" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feOffset dy="4"/>
      <feGaussianBlur stdDeviation="2.5"/>
      <feComposite in2="hardAlpha" operator="out"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0.00392157 0 0 0 0 0.576471 0 0 0 0 0.898039 0 0 0 0.5 0"/>
      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1249_30721"/>
      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1249_30721" result="shape"/>
    </filter>
  </defs>
</svg>`,
      title: "الخطة الماسية",
      price: 5000,
      time: "شهر",
      features: [
        "عدد لا محدود من السيرفرات",
        "علامة تجارية خاصة (White-label)",
        "تكاملات مخصصة (API)",
        "مدير حساب مخصص",
      ],
    },
    {
      id: 5,
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 31 31" fill="none">
  <path d="M19.8692 29.4695H11.6874V28.1059H10.3238V26.7422H8.96015V25.3786H7.59651V24.015H6.23288V22.6513H4.86924V21.2877H3.5056V19.924H2.14197V11.7422H3.5056V10.3786H4.86924V9.01496H6.23288V7.65132H7.59651V6.28769H8.96015V4.92405H10.3238V3.56041H11.6874V2.19678H19.8692V3.56041H21.2329V4.92405H22.5965V6.28769H23.9601V7.65132H25.3238V9.01496H26.6874V10.3786H28.0511V11.7422H29.4147V19.924H28.0511V21.2877H26.6874V22.6513H25.3238V24.015H23.9601V25.3786H22.5965V26.7422H21.2329V28.1059H19.8692V29.4695ZM18.5056 26.7422V25.3786H19.8692V24.015H21.2329V22.6513H22.5965V21.2877H23.9601V19.924H25.3238V18.5604H26.6874V13.1059H25.3238V11.7422H23.9601V10.3786H22.5965V9.01496H21.2329V7.65132H19.8692V6.28769H18.5056V4.92405H13.0511V6.28769H11.6874V7.65132H10.3238V9.01496H8.96015V10.3786H7.59651V11.7422H6.23288V13.1059H4.86924V18.5604H6.23288V19.924H7.59651V21.2877H8.96015V22.6513H10.3238V24.015H11.6874V25.3786H13.0511V26.7422H18.5056Z" fill="#EBF1FA"/>
</svg>`,
      title: "الخطة البلاتينية",
      price: 5000,
      time: "شهر",
      features: [
        "عدد لا محدود من السيرفرات",
        "علامة تجارية خاصة (White-label)",
        "تكاملات مخصصة (API)",
        "مدير حساب مخصص",
      ],
    },
    {
      id: 6,
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="37" height="35" viewBox="0 0 37 35" fill="none">
  <g filter="url(#filter0_d_1249_30769)">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M19.5898 7.52989C20.0381 7.27561 20.3896 6.88008 20.5894 6.40502C20.7892 5.92996 20.8262 5.40211 20.6944 4.90386C20.5627 4.40561 20.2697 3.965 19.8612 3.65079C19.4526 3.33659 18.9516 3.16647 18.4362 3.16699C17.9209 3.16752 17.4202 3.33865 17.0123 3.65369C16.6044 3.96872 16.3123 4.40993 16.1816 4.90845C16.0509 5.40696 16.0888 5.93473 16.2896 6.40938C16.4904 6.88403 16.8427 7.27885 17.2915 7.53222L17.2798 7.55322C16.5157 9.14805 15.454 11.4324 13.8148 12.2899C12.4685 12.9934 10.5365 12.6399 9.1015 12.3762C9.07848 12.0499 8.96446 11.7366 8.77239 11.4718C8.58031 11.207 8.31787 11.0014 8.01483 10.8782C7.7118 10.755 7.38031 10.7192 7.05796 10.7749C6.73562 10.8306 6.43534 10.9755 6.19119 11.1932C5.94703 11.4109 5.76878 11.6927 5.67666 12.0065C5.58454 12.3204 5.58224 12.6538 5.67001 12.9689C5.75779 13.2841 5.93213 13.5683 6.17325 13.7893C6.41437 14.0104 6.71262 14.1594 7.03416 14.2196L10.4735 23.0979C10.7286 23.7561 11.1767 24.3218 11.759 24.7207C12.3414 25.1196 13.0308 25.3331 13.7367 25.3332H23.14C23.8459 25.3331 24.5353 25.1196 25.1176 24.7207C25.7 24.3218 26.1481 23.7561 26.4032 23.0979L29.8413 14.2196C30.1608 14.1601 30.4575 14.0128 30.698 13.7943C30.9386 13.5757 31.1135 13.2945 31.2032 12.9821C31.2929 12.6697 31.2938 12.3385 31.2059 12.0256C31.1179 11.7128 30.9446 11.4305 30.7053 11.2106C30.466 10.9907 30.1702 10.8418 29.8511 10.7805C29.5319 10.7192 29.202 10.748 28.8982 10.8637C28.5945 10.9794 28.329 11.1774 28.1315 11.4354C27.9339 11.6935 27.8122 12.0015 27.7798 12.3249C26.311 12.5151 24.4175 12.7577 23.0618 12.0496C21.4553 11.2096 20.3785 9.08272 19.5898 7.52989ZM18.4675 10.2914C19.3635 11.7451 20.438 13.3096 21.9815 14.1181C23.5297 14.9266 25.4348 14.8857 27.1382 14.7399L24.2273 22.2544C24.1424 22.4738 23.9931 22.6624 23.7991 22.7954C23.605 22.9285 23.3753 22.9998 23.14 22.9999H13.7367C13.5014 22.9998 13.2716 22.9285 13.0776 22.7954C12.8836 22.6624 12.7343 22.4738 12.6493 22.2544L9.77816 14.8426C11.457 15.0572 13.3563 15.1622 14.8952 14.3572C16.5028 13.5172 17.5785 11.8232 18.4675 10.2914Z" fill="#EBF1FA"/>
  </g>
  <defs>
    <filter id="filter0_d_1249_30769" x="-0.561676" y="-0.166992" width="38" height="38" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feOffset dy="4"/>
      <feGaussianBlur stdDeviation="2.5"/>
      <feComposite in2="hardAlpha" operator="out"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0.3158 0 0 0 0 0.63559 0 0 0 0 1 0 0 0 1 0"/>
      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1249_30769"/>
      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1249_30769" result="shape"/>
    </filter>
  </defs>
</svg>`,
      title: "خطة VIP",
      price: 5000,
      time: "شهر",
      features: [
        "عدد لا محدود من السيرفرات",
        "علامة تجارية خاصة (White-label)",
        "تكاملات مخصصة (API)",
        "مدير حساب مخصص",
      ],
    },
  ];

  // Plans for large cafes
  plans.value.largeCafes = [
    {
      id: 1,
      icon: "",
      title: "الخطة الأساسية",
      price: 10000,
      time: "شهر",
      features: [
        "عدد لا محدود من السيرفرات",
        "علامة تجارية خاصة (White-label)",
        "تكاملات مخصصة (API)",
        "مدير حساب مخصص",
      ],
    },
    {
      id: 2,
      icon: "",
      title: "الخطة الفضية",
      price: 10000,
      time: "شهر",
      features: [
        "حتى 5 كافيهات",
        "إدارة عدد لا محدود من الكروت",
        "تقارير متقدمة وتصدير",
        "أدوار الموزعين والوكلاء",
        "دعم فني متميز",
      ],
    },
    {
      id: 3,
      icon: "",
      title: "الخطة الفضية",
      price: 10000,
      time: "شهر",
      features: [
        "حتى 5 كافيهات",
        "إدارة عدد لا محدود من الكروت",
        "تقارير متقدمة وتصدير",
        "أدوار الموزعين والوكلاء",
        "دعم فني متميز",
      ],
    },
  ];
});
</script>

<template>
  <section class="pricing-section">
    <div class="section-content" id="pricing">
      <div class="container">
        <Title
          title="خطط أسعار مرنة للجميع"
          text="اختر الخطة التي تناسب حجم أعمالك اليوم، وقم بالترقية في أي وقت."
          class="section-title"
        />

        <div class="current-plan">
          <button
            :class="{ active: activePlan === 'small' }"
            @click="activePlan = 'small'"
          >
            الكافيهات الصغيره
          </button>
          <button
            :class="{ active: activePlan === 'large' }"
            @click="activePlan = 'large'"
          >
            الكافيهات الكبيرة
          </button>
        </div>

        <div class="plans">
          <div
            class="plan"
            :class="{ favourite: plan.favourite }"
            v-for="(plan, idx) in activePlan === 'small'
              ? plans.smallCafes
              : plans.largeCafes"
            :key="idx"
          >
            <div class="icon" v-html="plan.icon"></div>
            <h4 class="title">{{ plan.title }}</h4>
            <div class="price-container">
              <span class="price">{{ plan.price }} ج.م</span>
              <span class="time">/{{ plan.time }}</span>
            </div>

            <ul class="features">
              <li v-for="feature in plan.features" :key="feature">
                <span v-html="rightIcon"></span>
                <p>{{ feature }}</p>
              </li>
            </ul>

            <p class="note">
              اطبع براحتك! الكروت متجددة شهريًا، وكل ما يخلص كرت، تقدر تطبع غيره
              فورًا
            </p>

            <button class="btn choose" :class="{ favourite: plan.favourite }">
              {{ plan.favourite ? "ابدأ الآن" : "اختر الخطه" }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.pricing-section {
  & .section-content {
    & .container {
      justify-content: center;
      align-items: center;
      margin: 150px auto;
      
      & .current-plan {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        gap: 29px;
        border-radius: 32px;
        min-height: max-content;
        background-color: #455a64;
        overflow: hidden;

        button {
          color: white;
          font-size: 12px;
          font-weight: 700;
          background-color: transparent;
          border: none;
          padding: 6px 30px;
          min-height: max-content;
          height: 40px;
          border-radius: inherit;

          &.active {
            background: linear-gradient(90deg, #501594 0%, #372394 100%);
          }
        }
      }

      & .plans {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(2, 1fr);
        gap: 70px;

        & .plan {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
          width: 390px;
          padding: 35px 30px;
          gap: 30px;
          border-radius: 16px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(6px);
          margin: 0 auto;

          &:hover {
            scale: 1.02;
            background-color: rgba(255, 255, 255, 0.1);
          }

          &.favourite {
            padding: 48px 34px;
            border: 2px solid #ad46ff;
            background: linear-gradient(
              180deg,
              rgba(152, 16, 250, 0.5) 0%,
              rgba(21, 93, 252, 0.5) 100%
            );
            box-shadow: 0 25px 50px -12px rgba(173, 70, 255, 0.2);
            position: relative;
            scale: 1.1;
            margin: 0 20px;

            &:hover {
              scale: 1.12;
              background-color: rgba(255, 255, 255, 0.1);
            }

            &::before {
              content: "الأكثر شيوعاً";
              position: absolute;
              top: 0;
              left: 50%;
              transform: translateX(-50%);
              border-radius: 32px;
              background-color: #ad46ff;
              padding: 6px 20px;
              color: white;
            }
          }

          & .icon {
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 10px;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.05);
            filter: drop-shadow(0 3.56px 5.33px rgba(1, 147, 229, 0.5));
            gap: 7px;
          }

          & .title {
            color: #fff;
            font-size: 20px;
            font-weight: 700;
            line-height: 28px;
          }

          & .price-container {
            color: #e9d4ff;
            font-size: 16px;
            font-weight: 400;
            line-height: 24px;

            & .price {
              color: var(--primary-light);
              font-size: 28px;
              font-weight: 700;
              line-height: 24px;
            }
          }

          & .features {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;
            gap: 15px;

            & li {
              display: flex;
              align-items: center;
              color: #e2e8f0;
              font-size: 16px;
              font-weight: 400;
              line-height: 24px;
              height: max-content;
              gap: 12px;

              & p,
              span {
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100%;
              }
            }
          }

          & .note {
            color: var(--primary-light-hover);
            font-size: 12px;
            font-weight: 400;
            line-height: 170%;
          }

          & .btn.choose {
            display: flex;
            justify-content: center;
            align-items: center;
            align-self: stretch;
            padding: 12px;
            border-radius: 8px;
            border: 1px solid rgba(255, 255, 255, 0.2);
            background-color: rgba(255, 255, 255, 0.1);

            &:hover {
              background-color: rgba(255, 255, 255, 0.2);
            }

            &.favourite {
              border-radius: 8px;
              background-color: white;
              color: #8200db !important;
              font-size: 16px;
              font-weight: 700;
              line-height: 24px;
            }
          }
        }
      }
    }
  }
}
</style>
