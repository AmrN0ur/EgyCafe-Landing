<script setup>
import Title from "@/components/Title.vue";

const permissions = ref([
  {
    icon: "/icons/permissions/admin.svg",
    title: "سوبر أدمن",
    text: "تحكم كامل وإدارة مالية",
  },
  {
    icon: "/icons/permissions/owner.svg",
    title: "صاحب الكافيه",
    text: "إدارة المبيعات والكروت",
  },
  {
    icon: "/icons/permissions/distributor.svg",
    title: "الموزع",
    text: "توزيع ومتابعة الكروت",
  },
  {
    icon: "/icons/permissions/agent.svg",
    title: "الوكيل",
    text: "إدارة الكافيهات التابعة",
  },
  {
    icon: "/icons/permissions/manager.svg",
    title: "المدير",
    text: "إشراف بدون وصول مالي",
  },
]);
</script>

<template>
  <section class="permissions-section">
    <div class="section-content" id="permissions">
      <div class="container">
        <Title
          title="لوحات تحكم لكل مهمة"
          text="صلاحيات مخصصة تضمن لكل مستخدم الوصول للمعلومات التي يحتاجها فقط."
          class="section-title"
        />

        <div class="permissions">
          <div
            class="permission"
            v-for="permission in permissions"
            :key="permission.title"
          >
            <img class="icon" :src="permission.icon" alt="" />
            <div class="content">
              <div class="title">{{ permission.title }}</div>
              <p class="text">{{ permission.text }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.permissions-section {
  & .section-content {
    & .container {
      gap: 65px;

      & .permissions {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        gap: 25px;

        & .permission {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 12px;
          border-radius: 16px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          background-color: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(6px);
          padding: 20px 40px;
          cursor: pointer;

          &:hover {
            background-color: rgba(255, 255, 255, 0.1);
            scale: 1.02;
          }

          & .icon {
            width: 48px;
            height: 48px;
            flex-shrink: 0;
          }

          & .content {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 5px;

            & .title {
              color: #fff;
              text-align: center;
              font-size: 18px;
              font-weight: 600;
              line-height: 28px;
            }

            & .text {
              color: #90a1b9;
              text-align: center;
              font-size: 14px;
              font-weight: 400;
              line-height: 20px;
            }
          }
        }
      }
    }
  }
}
</style>
