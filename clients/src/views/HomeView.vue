<script>
import { mapActions, mapWritableState } from 'pinia';
import { useAppStore } from '../stores/app';


export default {
  computed: {
    ...mapWritableState(useAppStore, ['answer']),
  },
  methods: {
    ...mapActions(useAppStore, ['getPosts']),
    async getAnswer() {
      console.log(this.form, 'form')
      this.getPosts(this.form);
    }
  },
  data() {
    return {
      form: {
        question: '',
      }
    }
  },
}
</script>

<template>
    <!-- ======= Portfolio Section ======= -->
    <section id="portfolio" class="portfolio">
        <div class="container" style="margin-top: 100px;">
            <div class="row portfolio-container" data-aos="fade-up">

                <!-- Search form -->
            <form @submit.prevent="getAnswer" class="form-inline d-flex justify-content-center md-form form-sm active-pink active-pink-2 mt-2">     
                <input v-model="form.question" class="form-control form-control-lg ml-3 w-75" type="text" placeholder="Use Me :)"
                > 
                <button class="btn btn-danger" type="submit">Go! <i class="bi bi-search" aria-hidden="true"></i></button>             
            </form>
            </div>
        </div>
    </section><!-- End Portfolio Section -->

    <section class="py-5" v-if="answer" style="background-color: aliceblue;">
    
    <div class="container px-4 px-lg-5 my-5">
        <div class="row gx-4 gx-lg-5 align-items-center">
            <div class="col-md-6">
                <p style="font-size: 40px;">{{ answer.bot }}</p>
            </div>
        </div>
    </div>
</section>
</template>

