<template>
  <div class="borderPadding">
    <h4>{{ msg }}</h4>
    <a href="javascript:void(0)" v-on:click="gotoShorternUrl()" v-if="show"><strong>Let shortern some url :)</strong></a>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: 'ShortenUrlRedirect',
    data () {
      return {
        msg: 'Please wait ...',
        apiUrl: 'http://localhost:4555/getOriginalUrl',
        show: false
      }
    },
    methods: {
      getOriginalUrl () {
        const urlCode = this.$route.params.urlCode

        if (!urlCode) {
          this.msg = 'Invalid code'
          return
        }

        axios.post(this.apiUrl, {urlCode: urlCode}).then(response => {
          window.location = response.data
        }).catch(e => {
          this.msg = e.response.data
          this.show = true
        }).finally(() => {
        })
      },
      gotoShorternUrl () {
        this.$router.push('shortenUrl')
      }
    },
    beforeMount () {
      this.getOriginalUrl()
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .borderPadding {
    margin:50px
  }
</style>
