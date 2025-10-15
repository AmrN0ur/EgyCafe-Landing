<script setup>
import Title from "@/components/Title.vue";

const questions = ref([
  {
    question: "هل أحتاج أجهزة خاصة؟",
    answer: "لا، النظام متكامل مع MikroTik وFreeRADIUS.",
    isOpen: false,
  },
  {
    question: "ما مدى أمان النظام؟",
    answer: "نظامنا مصمم لحماية البيانات وضمان سلامة المعلومات.",
    isOpen: false,
  },
  {
    question: "هل يمكنني تجربة النظام قبل الاشتراك؟",
    answer: "نعم، يمكنك تجربة النظام لمدة 14 يوماً مجاناً.",
    isOpen: false,
  },
  {
    question: "هل يدعم النظام طباعة الكروت؟",
    answer: "نعم، النظام يدعم طباعة الكروت.",
    isOpen: false,
  },
]);
</script>

<template>
  <section class="faq-section">
    <div class="section-content" id="faq">
      <div class="container">
        <Title
          title="الأسئلة الشائعة"
          text="أجوبة لبعض استفساراتكم الأكثر تكراراً."
          class="section-title"
        />

        <div class="questions">
          <div
            class="question-box"
            v-for="question in questions"
            :key="question.question"
            :class="{ opened: question.isOpen }"
          >
            <div
              class="question-title"
              @click="question.isOpen = !question.isOpen"
            >
              {{ question.question }}
            </div>
            <div class="question-answer" v-show="question.isOpen">
              <p class="answer">
                {{ question.answer }}
              </p>
            </div>

            <div class="arrow-icon" @click="question.isOpen = !question.isOpen">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M5 7.5L10 12.5L15 7.5"
                  stroke="#90A1B9"
                  stroke-width="1.66667"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.faq-section {
  & .section-content {
    & .container {
      & .questions {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 800px;
        gap: 25px;

        & .question-box {
          display: flex;
          padding: 25px;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          align-self: stretch;
          border-radius: 12px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(6px);
          position: relative;
          gap: 20px;
          width: 100%;
          height: max-content;

          &:hover {
            background-color: #ffffff1a;
          }

          &.opened {
            background-color: #ffffff1a;

            & .question-title {
              height: max-content;
            }

            & .arrow-icon {
              transform: rotate(180deg);
            }
          }

          & .question-title {
            width: 100%;
            height: 100%;
            color: #fff;
            text-align: right;
            font-size: 16px;
            font-weight: 600;
            line-height: 24px;
            cursor: pointer;
          }

          & .question-answer {
            color: #90a1b9;
            text-align: center;
            font-size: 14px;
            font-weight: 400;
            line-height: 20px;
            border-top: 1px solid #90a1b9;
            width: 80%;
            padding: 10px 20px;

            & p {
              animation: showing 0.3s ease-in-out;
            }
          }

          & .arrow-icon {
            width: 20px;
            height: 20px;
            position: absolute;
            left: 25px;
            top: 50%;
            transform: translateY(-50%);
            transform-origin: center;
            cursor: pointer;
          }
        }
      }
    }
  }
}

@keyframes showing {
  0% {
    opacity: 0;
    transform: translateX(100px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>
