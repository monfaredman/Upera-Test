<template>
  <div style="background-color: black;">
    <Header />
    <Banner />
    <AppLinks />
    <NewMoviesSlider :newMovies="newMovies" />
    <TopRatedSlider :topRated="topRated" />
    <ChildSection />
    <LogoSection />
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
import LogoSection from '../components/LogoSection.vue'

export default {
  components: { Header, Banner, AppLinks, NewMoviesSlider, TopRatedSlider, ChildSection, Footer, LogoSection },
  data() {
    return {
      newMovies: [],    // Fetch from API or static
      topRated: []      // Fetch from API or static
    }
  }
}
</script>