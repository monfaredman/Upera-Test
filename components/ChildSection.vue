<template>
  <div class="wrapper">
    <div class="child-section-container">
      <!-- First Column -->
      <b-col md="3" class="d-flex flex-column align-items-start justify-content-start">
        <div class="d-flex align-items-center justify-content-start mb-4">
          <img src="@/assets/images/child-icon.png" alt="Bob Image" class="img-fluid" />
          <h2 class="mr-2">آپرا کودک</h2>
        </div>
        <img src="@/assets/images/bob-image.png" alt="Icon" class="me-2" style="width: 340px; height: 240px;" />
      </b-col>

      <!-- Second Column -->
      <b-col md="6" class="text-right" style="margin-right: -6rem;">
        <div class="mb-4"
          style="background-color: #1c2163; padding: 1rem; border-radius: 8px; display: inline-block; width: fit-content;">
          <h4>🎈 بخش اختصاصی کودکان</h4>
          <p>آپرا یک بخش ویژه برای کودکان دارد که محیطی امن، سرگرم‌کننده و آموزنده را برای فرزندان شما فراهم می‌کند.</p>
        </div>
        <div class="mb-4"
          style="background-color: #0f161f; padding: 1rem; border-radius: 8px; display: inline-block; width: 100%; box-shadow: -4px -4px 0 #0e264a, 4px 4px 0 #0e264a, -4px 4px 0 #0e264a, 4px -4px 0 #0e264a; margin-right: 12rem;">
          <h4>👶 پروفایل مخصوص کودک شما</h4>
          <p>🔒 امنیت و کنترل والدین</p>
          <p>💡 یادگیری در کنار سرگرمی</p>
        </div>
      </b-col>

      <!-- Third Column -->
      <b-col md="3" class="text-center d-flex flex-row align-items-center justify-content-end mb-4">
        <b-button variant="primary" size="lg">ورود به آپرا کودک</b-button>
      </b-col>
    </div>
  </div>
</template>
<style scoped>
.child-section-container {
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  font-family: 'IRANSans', sans-serif;
  direction: rtl;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 95%;
  margin: 0 auto;
  margin-top: 4rem;
  margin-bottom: 4rem;
}

.child-section-container> :last-child {
  align-self: flex-end;
}

.wrapper {
  width: 100%;
  background: linear-gradient(to bottom, transparent, #012964);
}
</style>