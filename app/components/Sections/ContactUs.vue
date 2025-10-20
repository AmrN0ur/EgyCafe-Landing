<script setup>
import Title from "@/components/Title.vue";

const isLoading = ref(false);

const userData = ref({
  fullName: "",
  phone: "",
  message: "",
});

const contactInfo = ref({
  address: {
    icon: "/icons/location.svg",
    title: "مدينة نصر , القاهرة",
    link: "https://maps.app.goo.gl/LenJd1hxfLpTFHEA7",
  },
  phone: {
    icon: "/icons/phone.svg",
    title: "01035478124",
    link: "tel:01035478124",
  },
  email: {
    icon: "/icons/email.svg",
    title: "support@egycafe.com",
    link: "mailto:support@egycafe.com",
  },
});

const socials = ref([
  {
    title: "Instagram",
    icon: `
        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_1115_17233)">
            <path d="M7.3229 0.087805C5.99269 0.150305 5.08436 0.362805 4.29165 0.674263C3.45802 0.990046 2.70307 1.4834 2.07915 2.1201C1.44508 2.74574 0.954593 3.50173 0.641653 4.33572C0.334361 5.13156 0.124986 6.04197 0.066653 7.37114C0.00831964 8.70031 -0.00522203 9.12947 0.00102797 12.5243C0.00727797 15.9191 0.022903 16.3441 0.0874863 17.6774C0.151028 19.0076 0.362486 19.9159 0.673945 20.7097C0.994778 21.5316 1.42394 22.2274 2.11978 22.9211C2.74602 23.5555 3.50275 24.046 4.33749 24.3586C5.13228 24.6659 6.04165 24.8753 7.37186 24.9336C8.70311 24.992 9.13124 25.0055 12.525 24.9993C15.9187 24.993 16.3458 24.9774 17.6781 24.9138C19.0114 24.8513 19.9146 24.6378 20.7094 24.3274C21.5426 24.0115 22.2972 23.5181 22.9208 22.8816C23.5551 22.2553 24.0456 21.4986 24.3583 20.6638C24.6656 19.8691 24.875 18.9597 24.9323 17.6305C24.9906 16.2972 25.0052 15.8701 24.9979 12.4763C24.9916 9.0826 24.9771 8.65656 24.9135 7.32322C24.851 5.98989 24.6385 5.08572 24.326 4.29093C24.0104 3.45777 23.5174 2.70319 22.8812 2.07947C22.2553 1.44528 21.4989 0.954778 20.6646 0.641972C19.8687 0.335722 18.9604 0.125305 17.6292 0.069055C16.2989 0.00967995 15.8708 -0.00594506 12.476 0.000304942C9.08124 0.00655494 8.65624 0.0221799 7.3229 0.087805ZM7.46874 22.6847C6.24999 22.6326 5.58853 22.4295 5.1479 22.2597C4.60411 22.061 4.11207 21.7423 3.70832 21.3274C3.29201 20.9254 2.97159 20.4348 2.77082 19.892C2.59894 19.4513 2.39269 18.7899 2.33644 17.5711C2.27394 16.2545 2.26144 15.8586 2.25311 12.5211C2.24686 9.18364 2.25936 8.78885 2.31665 7.47114C2.36874 6.25343 2.5729 5.59093 2.74165 5.15031C2.96665 4.56593 3.23853 4.15031 3.67394 3.71072C4.07626 3.29429 4.56724 2.97385 5.1104 2.77322C5.55103 2.60135 6.21144 2.39718 7.43019 2.33885C8.7479 2.27635 9.14269 2.26385 12.4802 2.25551C15.8167 2.24926 16.2125 2.26176 17.5323 2.3201C18.7489 2.37218 19.4114 2.57426 19.8521 2.7451C20.4354 2.9701 20.8521 3.23989 21.2917 3.67739C21.7312 4.11489 22.001 4.52843 22.2292 5.11281C22.401 5.55239 22.6062 6.21281 22.6635 7.4326C22.726 8.75031 22.7406 9.14614 22.7469 12.4826C22.7521 15.8191 22.7406 16.2149 22.6833 17.5326C22.6302 18.7513 22.4281 19.4128 22.2583 19.8555C22.0333 20.4388 21.7614 20.8555 21.325 21.293C20.923 21.7093 20.4324 22.0297 19.8896 22.2305C19.45 22.4024 18.7875 22.6076 17.5708 22.6659C16.2521 22.7284 15.8573 22.7409 12.5187 22.7482C9.18019 22.7555 8.78749 22.7409 7.46874 22.6847ZM17.6594 5.81906C17.6598 6.11577 17.7482 6.4057 17.9134 6.65217C18.0786 6.89863 18.3132 7.09056 18.5875 7.20368C18.8618 7.3168 19.1635 7.34603 19.4544 7.28766C19.7453 7.2293 20.0124 7.08596 20.2219 6.87579C20.4313 6.66561 20.5737 6.39804 20.6311 6.10692C20.6884 5.8158 20.6581 5.51421 20.5441 5.2403C20.43 4.96639 20.2373 4.73246 19.9902 4.5681C19.7432 4.40375 19.4529 4.31635 19.1562 4.31697C18.7586 4.3178 18.3775 4.47649 18.0969 4.75815C17.8162 5.03982 17.6588 5.42141 17.6594 5.81906ZM6.08228 12.5128C6.08559 14.215 6.76498 15.8462 7.97097 17.0475C9.17697 18.2488 10.8108 18.9219 12.513 18.9185C14.2152 18.9152 15.8464 18.2358 17.0477 17.0298C18.249 15.8238 18.9221 14.19 18.9187 12.4878C18.8942 10.7996 18.2055 9.18909 17.0018 8.00511C15.7982 6.82114 14.1765 6.15909 12.4882 6.16237C10.7998 6.16566 9.18073 6.83403 7.9817 8.02268C6.78267 9.21133 6.10024 10.8245 6.08228 12.5128ZM8.33332 12.5086C8.33167 11.6846 8.57443 10.8785 9.0309 10.1924C9.48737 9.50625 10.137 8.9709 10.8978 8.65401C11.6585 8.33712 12.4961 8.25294 13.3047 8.41209C14.1133 8.57125 14.8565 8.9666 15.4404 9.54815C16.0242 10.1297 16.4226 10.8713 16.5849 11.6793C16.7473 12.4872 16.6665 13.3251 16.3527 14.0871C16.0388 14.8491 15.5061 15.5009 14.8218 15.9601C14.1375 16.4193 13.3324 16.6653 12.5083 16.667C11.9611 16.6681 11.4191 16.5614 10.9132 16.353C10.4072 16.1446 9.94728 15.8386 9.5596 15.4525C9.17191 15.0663 8.86408 14.6076 8.65367 14.1025C8.44327 13.5974 8.33441 13.0558 8.33332 12.5086Z" fill="#C1D4EE"/>
            </g>
            <defs>
            <clipPath id="clip0_1115_17233">
            <rect width="25" height="25" fill="white"/>
            </clipPath>
            </defs>
        </svg>
    `,
    link: "https://www.instagram.com",
  },
  {
    title: "X - Twitter",
    icon: `
        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.5219 10.825L22.4328 1.5625H20.5578L13.6906 9.60469L8.20313 1.5625H1.875L10.1719 13.725L1.875 23.4375H3.75L11.0031 14.9438L16.7984 23.4375H23.1266L14.5219 10.825ZM11.9547 13.8313L11.1141 12.6203L4.425 2.98438H7.30469L12.7016 10.7609L13.5422 11.9719L20.5594 22.0812H17.6797L11.9547 13.8313Z" fill="#C1D4EE"/>
        </svg>
    `,
    link: "https://www.x.com",
  },
  {
    title: "Whatsapp",
    icon: `
    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19.8437 5.11431C18.8886 4.14984 17.751 3.38511 16.4974 2.86469C15.2437 2.34427 13.899 2.07857 12.5416 2.08306C6.85413 2.08306 2.21871 6.71848 2.21871 12.406C2.21871 14.2289 2.69788 15.9997 3.59371 17.5622L2.13538 22.9164L7.60413 21.4789C9.11454 22.3018 10.8125 22.7393 12.5416 22.7393C18.2291 22.7393 22.8645 18.1039 22.8645 12.4164C22.8645 9.65598 21.7916 7.06223 19.8437 5.11431ZM12.5416 20.9893C11 20.9893 9.48954 20.5726 8.16663 19.7914L7.85413 19.6039L4.60413 20.4581L5.46871 17.2914L5.26038 16.9685C4.40365 15.6008 3.94884 14.0198 3.94788 12.406C3.94788 7.67681 7.80204 3.82265 12.5312 3.82265C14.8229 3.82265 16.9791 4.71848 18.5937 6.34348C19.3933 7.13917 20.027 8.08571 20.4579 9.1282C20.8888 10.1707 21.1085 11.2884 21.1041 12.4164C21.125 17.1456 17.2708 20.9893 12.5416 20.9893ZM17.25 14.5726C16.9895 14.4476 15.7187 13.8226 15.4895 13.7289C15.25 13.6456 15.0833 13.6039 14.9062 13.8539C14.7291 14.1143 14.2395 14.6976 14.0937 14.8643C13.9479 15.0414 13.7916 15.0622 13.5312 14.9268C13.2708 14.8018 12.4375 14.5206 11.4583 13.6456C10.6875 12.9581 10.177 12.1143 10.0208 11.8539C9.87496 11.5935 9.99996 11.4581 10.1354 11.3226C10.25 11.2081 10.3958 11.0206 10.5208 10.8747C10.6458 10.7289 10.6979 10.6143 10.7812 10.4476C10.8645 10.2706 10.8229 10.1247 10.7604 9.99973C10.6979 9.87473 10.177 8.6039 9.96871 8.08306C9.76038 7.58306 9.54163 7.64556 9.38538 7.63515H8.88538C8.70829 7.63515 8.43746 7.69765 8.19788 7.95806C7.96871 8.21848 7.30204 8.84348 7.30204 10.1143C7.30204 11.3851 8.22913 12.6143 8.35413 12.781C8.47913 12.9581 10.177 15.5622 12.7604 16.6768C13.375 16.9476 13.8541 17.1039 14.2291 17.2185C14.8437 17.4164 15.4062 17.3851 15.8541 17.3226C16.3541 17.2497 17.3854 16.6976 17.5937 16.0935C17.8125 15.4893 17.8125 14.9789 17.7395 14.8643C17.6666 14.7497 17.5104 14.6976 17.25 14.5726Z" fill="#C1D4EE"/>
    </svg>
    `,
    link: "https://wa.me/201012345678",
  },
]);

async function submitForm() {
  try {
    isLoading.value = true;

    const data = {
      fullName: userData.value.fullName,
      phone: userData.value.phone,
      message: userData.value.message,
    };

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error("Failed to send message");
    }

    alert("Message sent successfully");
  } catch (error) {
    console.error("Error sending message:", error);
    alert("Failed to send message");
  } finally {
    isLoading.value = false;
    userData.value.fullName = "";
    userData.value.phone = "";
    userData.value.message = "";
  }
}
</script>

<template>
  <section class="contact-us-section">
    <div class="section-content" id="contact">
      <div class="container">
        <div class="part right">
          <Title
            title="تواصل معنا"
            text="نحن هنا لمساعدتك املأ النموذج أو تواصل معنا مباشرة عبر القنوات المتاحة. فريقنا مستعد للإجابة على استفساراتك."
            dir="right"
            class="section-title"
          />

          <ul class="contact-info links">
            <li class="link" v-for="i in contactInfo" :class="'link ' + i">
              <a :href="i.link" target="_blank">
                <img :src="i.icon" alt="" />
                <p>{{ i.title }}</p>
              </a>
            </li>
          </ul>

          <div class="socials">
            <a
              class="social"
              v-for="social in socials"
              :key="social.title"
              :href="social.link"
              v-html="social.icon"
              target="_blank"
            ></a>
          </div>
        </div>

        <form class="part left" @submit.prevent="submitForm">
          <div class="form-group">
            <div class="form-item">
              <input
                type="text"
                placeholder="الاسم بالكامل"
                v-model="userData.fullName"
                id="fullName"
                required
              />
            </div>

            <div class="form-item">
              <input
                type="tel"
                placeholder="رقم الهاتف"
                v-model="userData.phone"
                minlength="9"
                maxlength="15"
                id="phone"
                dir="rtl"
                required
              />
            </div>
          </div>

          <div class="form-item">
            <textarea
              placeholder="الرسالة"
              v-model="userData.message"
              id="message"
              required
            ></textarea>
          </div>

          <button class="btn submit" type="submit">
            {{ isLoading ? 'جاري الارسال...' : 'أرسل رسالتك'}}
            <svg
              v-show="!isLoading"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
            >
              <path
                d="M10 14.5L21 3.5M10 14.5L13.5 21.5C13.5439 21.5957 13.6143 21.6769 13.703 21.7338C13.7916 21.7906 13.8947 21.8209 14 21.8209C14.1053 21.8209 14.2084 21.7906 14.2971 21.7338C14.3857 21.6769 14.4561 21.5957 14.5 21.5L21 3.5M10 14.5L3.00001 11C2.90427 10.9561 2.82314 10.8857 2.76626 10.7971C2.70938 10.7084 2.67914 10.6053 2.67914 10.5C2.67914 10.3947 2.70938 10.2916 2.76626 10.2029C2.82314 10.1143 2.90427 10.0439 3.00001 10L21 3.5"
                stroke="#E8EEEB"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </form>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact-us-section {
  & .section-content {
    & .container {
      display: grid !important;
      grid-template-columns: 1fr 1fr;
      gap: 25px;

      & .section-title {
        margin-bottom: 25px;
      }

      & .part {
        &.left {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: center;
          gap: 25px;
          width: 600px;
          margin: 0 auto;

          & .form-item {
            width: 100%;

            & input,
            & textarea {
              width: 100%;
            }

            & textarea {
              min-height: 150px;
              max-height: 200px;
              height: max-content;
              min-width: 100%;
              width: 100%;
              max-width: 100%;
            }
          }

          & .btn.submit {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 55px;
            padding: 20px 10px;
            gap: 10px;
            border: none;
            border-radius: 8px;
            background-color: var(--primary-normal);
            color: white;
            text-align: right;
            font-size: 20px;
            font-weight: 800;
          }

          & .form-group {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            gap: 15px;
            width: 100%;
          }
        }

        &.right {
          & .contact-info {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: flex-start;
            gap: 15px;

            & p {
              color: #c2c7ce;
              text-align: right;
              font-size: 18px;
              font-weight: 400;
              line-height: 24px;
            }

            &.links {
              margin-bottom: 25px;

              & .link {
                color: #90a1b9;
                font-size: 16px;
                font-weight: 400;
                line-height: 24px;

                &:hover {
                  filter: brightness(1.3);
                }

                & a {
                  display: flex;
                  flex-direction: row;
                  justify-content: space-between;
                  align-items: center;
                  flex-wrap: nowrap;
                  gap: 6px;
                }

                & p {
                  cursor: pointer !important;
                }
              }
            }
          }

          & .socials {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: max-content !important;
            gap: 30px;

            & .social {
              width: 25px;
              height: 25px;

              &:hover {
                scale: 1.02;
                filter: brightness(2);
              }

              &:active {
                scale: 0.9;
              }
            }
          }
        }
      }
    }
  }
}
</style>
