<script setup>
import Title from "@/components/Title.vue";
</script>

<template>
  <section class="how-its-work-section">
    <div class="section-content" id="howItsWork">
      <div class="container">
        <Title
          title="ابدأ في 4 خطوات بسيطة"
          text="نظامنا مصمم للسهولة والسرعة في الإعداد والتشغيل."
          class="section-title"
        />

        <div class="explanations">
          <div class="part right">
            <div class="explains-box">
              <div class="explain 1">
                <img src="/images/explanations/1.png" alt="explain image" />

                <div class="text">
                  <div class="number" style="color: #c27aff">01</div>
                  <div class="title">اربط النظام مع جهازك</div>
                  <p class="explain-content">
                    بيع الكروت مباشرة أو عبر الموزعين والوكلاء بسهولة تامة.
                  </p>
                </div>
              </div>

              <div class="explain 3">
                <img src="/images/explanations/3.png" alt="explain image" />

                <div class="text">
                  <div class="number" style="color: #05df72">03</div>
                  <div class="title">وزعها على المشتركين</div>
                  <p class="explain-content">
                    بيع الكروت مباشرة أو عبر الموزعين والوكلاء بسهولة تامة.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="part left">
            <div class="explains-box">
              <div class="explain 2">
                <img src="/images/explanations/2.png" alt="explain image" />

                <div class="text">
                  <div class="number" style="color: #51a2ff">02</div>
                  <div class="title">أنشئ كروت وباقات</div>
                  <p class="explain-content">
                    حدد السرعات، مدة الصلاحية، وأسعار الباقات لتناسب عملائك.
                  </p>
                </div>
              </div>

              <div class="explain 4">
                <img src="/images/explanations/4.png" alt="explain image" />

                <div class="text">
                  <div class="number" style="color: #fdc700">04</div>
                  <div class="title">تابع الاستهلاك والإيرادات</div>
                  <p class="explain-content">
                    احصل على رؤى فورية وتقارير مفصلة لاتخاذ قرارات أفضل.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.how-its-work-section {
  padding: 150px 0;
  & .section-content {
    & .container {
      display: grid;
      grid-template-rows: auto 1fr;
      grid-template-columns: 1fr;
      gap: 65px;

      & .explanations {
        display: grid;
        grid-template-rows: 1fr;
        grid-template-columns: 1fr 1fr;
        height: 900px;
        gap: 22px;

        & .part {
          display: flex;
          flex-direction: column;
          align-items: center;
          height: 100%;
          gap: 22px;

          & .explains-box {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            height: 75%;
          }

          & .explain {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            gap: 22px;

            & .text {
              display: flex;
              flex-direction: column;
              justify-content: space-between;
              align-items: flex-start;
              gap: 12px;

              & .number {
                font-size: 30px;
                font-weight: 600;
                line-height: 36px;
              }

              & .title {
                color: #fff;
                font-size: 20px;
                font-weight: 600;
                line-height: 28px;
              }

              & .explain-content {
                color: #b0bfd4;
                font-size: 18px;
                font-weight: 400;
                line-height: 24px;
              }
            }
          }

          &.right {
            border-left: 2px solid #314158;
            justify-content: flex-start;
          }

          &.left {
            justify-content: flex-end;
          }
        }
      }
    }
  }
}
</style>
