<template>
  <div class="banner text-center text-white d-flex align-items-center justify-content-center" role="img" aria-label="تو تصمیم می‌گیری چقدر پرداخت کنی!
دنیایی از فیلم‌های متنوع ایرانی و خارجی
 آماده تماشا هستید؟">
    <h3 class="display-4 m-0" style="font-size: 2.3rem;line-height: 3.5rem;font-weight: 900;">
      <slot>"تو تصمیم می‌گیری چقدر پرداخت کنی!"
        <br>
        دنیایی از فیلم‌های متنوع ایرانی و خارجی
        <br>
         آماده تماشا هستید؟
      </slot>
    </h3>
  </div>
</template>

<style scoped>
.banner {
  /* defaults; override by: <Banner style="--banner-image: url('/other.jpg'); --banner-height: 300px;" /> */
  --banner-image: url('../assets/images/banner.png');
  --banner-height: 600px;
  --banner-min-width: 300px;
  --banner-min-height: 200px;
  background: var(--banner-image) center/cover no-repeat;
  height: var(--banner-height);
  width: 100%;
  min-width: var(--banner-min-width);
  min-height: var(--banner-min-height);
}
</style>
