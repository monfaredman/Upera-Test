<template>
    <b-container class="bg-dark text-white py-4">
      <b-row>
        <b-col cols="3" v-for="item in footerItems" :key="item.title" class="text-center">
          <img :src="item.icon" height="40" class="mb-2"/>
          <h6>{{ item.title }}</h6>
        </b-col>
      </b-row>
    </b-container>
  </template>
  
  <script>
  export default {
    data() {
      return {
        footerItems: [
          { title: 'کمک', icon: '/icons/help.svg' },
          { title: 'درباره', icon: '/icons/about.svg' },
          { title: 'ارتباط', icon: '/icons/contact.svg' },
          { title: 'سایر', icon: '/icons/other.svg' }
        ]
      }
    }
  }
  </script>
  