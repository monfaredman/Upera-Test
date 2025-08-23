<template>
    <div>
      <Header />
      <Banner />
      <AppLinks />
      <NewMoviesSlider :newMovies="newMovies" />
      <TopRatedSlider :topRated="topRated" />
      <ChildSection />
      <Footer />
    </div>
  </template>
  
  <script>
  import Header from '../components/AppHeader.vue'
  import Banner from '../components/Banner'
  import AppLinks from '../components/AppLinks'
  import NewMoviesSlider from '../components/NewMoviesSlider'
  import TopRatedSlider from '../components/TopRatedSlider.vue'
  import ChildSection from '../components/ChildSection'
  import Footer from '../components/AppFooter.vue'
  
  export default {
    components: { Header, Banner, AppLinks, NewMoviesSlider, TopRatedSlider, ChildSection, Footer },
    data() {
      return {
        newMovies: [],    // Fetch from API or static
        topRated: []      // Fetch from API or static
      }
    }
  }
  </script>
  