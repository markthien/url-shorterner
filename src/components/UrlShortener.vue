<template>
  <div class="borderPadding">
    <h4>{{ msg }}</h4>
    <p>
        <b-form-group>
          <b-form-input id="url" class="formText"
                        type="text"
                        v-model="form.url"
                        required
                        placeholder="Enter a url to shorten">
          </b-form-input>
        </b-form-group>
        <b-button variant="info" class="btn-block buttonText" :disabled="shorteningUrl == true" v-on:click="onShortenUrl">{{ btnTextShortenUrl }}</b-button>
    </p>
    <h5 v-clipboard:copy="shorternUrl" v-tooltip="{ content: 'Click to copy'}">
      {{ shorternUrl }}
    </h5>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: 'UrlShortener',
    data () {
      return {
        msg: 'Welcome to Magic Url Shorterner',
        form: {
          url: ''
        },
        shorternUrl: '',
        show: true,
        shorteningUrl: false,
        btnTextShortenUrl: 'Shorten It!',
        apiUrl: 'http://localhost:4555/shortenUrl',
        data: {}
      }
    },
    methods: {
      onShortenUrl (evt) {
        evt.preventDefault()
        this.shorteningUrl = true
        this.data = {url: this.form.url}
        this.btnTextShortenUrl = 'Shortening your url ...'
        axios.post(this.apiUrl, this.data).then(response => {
          this.shorternUrl = response.data
          this.form.url = ''
          // for firefox
          this.enableButton()
        }).catch(e => {
          alert(e.response.data)
          // for firefox
          this.enableButton()
        }).finally(() => {
          this.enableButton()
        })
      }
    },
    enableButton () {
      this.btnTextShortenUrl = 'Shorten It!'
      this.shorteningUrl = false
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .borderPadding {
    margin:50px
  }
  .buttonText {
    font-size:24px;
    font-weight:bold;
  }
  .formText {
    font-size:20px;
    text-align:center;
  } 
</style>
