<script setup>
function goToLogin() {
  window.location.href = "https://egycafe.net/login";
}

function goToElement(Id) {
  document.getElementById(Id).scrollIntoView({
  behavior: "smooth"
});
}
</script>

<template>
  <header class="header">
    <div class="container">
      <div class="part logo">
        <img src="/images/logo.svg" alt="شعار ايجى كافى" />
      </div>

      <ul class="part nav">
        <li class="active"><a href="#home">الرئيسية</a></li>
        <li @click="goToElement('features')">المميزات</li>
        <li @click="goToElement('howItsWork')">كيف يعمل</li>
        <li @click="goToElement('pricing')">الأسعار</li>
        <li @click="goToElement('contact')">تواصل معنا</li>
        <li @click="goToElement('faq')">الأسئلة الشائعة</li>
      </ul>

      <div class="part actions">
        <button class="btn btn-primary" @click="goToLogin">تسجيل الدخول</button>
      </div>
    </div>
  </header>
</template>

<style scoped>
.header {
  width: 100%;
  padding: 30px;

  & .container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: transparent;
    width: 100% !important;

    & .part {
      width: fit-content;

      &.logo {
      }

      &.nav {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        gap: 35px;
        font-size: 16px;
        font-weight: 700;
        line-height: 150%;

        & li {
          cursor: pointer;

          &.active {
            color: #3588ff;
          }

          &:hover {
            color: #3588ff;
          }

          &:active {
            color: white;
            scale: 0.95;
          }
        }
      }

      &.actions {
        & .btn {
          padding: 10px;
          background-color: var(--primary-normal-active);
          color: var(--text-color);
          font-size: 16px;
          font-weight: 700;
          line-height: 24px;
        }
      }
    }
  }
}
</style>
