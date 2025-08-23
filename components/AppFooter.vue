<template>
  <b-container fluid class="p-0">
    <b-row no-gutters style="box-shadow: 0 -2px 15px #525252;">
      <b-col v-for="(item, index) in footerItems" :key="item.title" cols="12" md="3"
        style="border: 0.8px solid #525252 ;border-bottom: none;"
        class="p-4 text-white d-flex flex-column align-items-start"
        :style="{ backgroundColor: index % 2 === 0 ? '#404040' : '#373737' }">
        <img :src="item.icon" height="40" />
        <h6 class="my-3" style="font-size: large;">{{ item.title }}</h6>
        <p class="text-right">{{ item.description }}</p>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      footerItems: [
        {
          title: 'پشتیبانی از تمامی دستگاه‌ها',
          icon: require('@/assets/images/1.png'),
          description:
            'سازگاری با انواع دستگاه‌ها از جمله تلفن‌های هوشمند، تبلت‌ها، رایانه‌ها و تلویزیون امکان تماشای محتوا را در هر زمان و مکانی فراهم می‌کند.'
        },
        {
          title: 'صرفه جویی در هزینه',
          icon: require('@/assets/images/2.png'),
          description:
            'بجای هزینه‌ی ماهانه برای کل محتوا، در آپرا میتوانید فقط برای فیلمی که دوست دارید هزینه پرداخت کنید.'
        },
        {
          title: 'محتوای متنوع و کامل',
          icon: require('@/assets/images/3.png'),
          description:
            'کامل ترین مجموعه فیلم و سریال های ایرانی و خارجی، دسترسی به محتوای متنوع و تجربه ای جدید در تماشای آنلاین'
        },
        {
          title: 'کیفیت پخش بالا',
          icon: require('@/assets/images/4.png'),
          description:
            'پلتفرم آپرا با ارائه کیفیت‌های متنوع پخش، به کاربران امکان می‌دهد تا بر اساس سرعت اینترنت خود، بهترین کیفیت را انتخاب کنند.'
        }
      ]
    }
  }
}
</script>