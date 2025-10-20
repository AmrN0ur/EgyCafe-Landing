import { ref, onMounted, onUnmounted } from "vue";

export function useScreenWidth() {
  const screenWidth = ref(0); // نبدأ بصفر بدون استخدام window

  const updateWidth = () => {
    screenWidth.value = window.innerWidth;
  };

  onMounted(() => {
    if (process.client) {
      screenWidth.value = window.innerWidth; // نحدث أول قيمة بعد ما الصفحة تشتغل على المتصفح
      window.addEventListener("resize", updateWidth);
    }
  });

  onUnmounted(() => {
    if (process.client) {
      window.removeEventListener("resize", updateWidth);
    }
  });

  return { screenWidth };
}
