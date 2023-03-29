import axios from 'axios'
import { defineStore } from 'pinia'
const BASE_URL='https://flagrant-temper-production.up.railway.app'
export const useAppStore = defineStore('app', {
  state: () => ({
    answer: []
  }),
  actions:{
    async getPosts(form){
      try {
        console.log("<<<<<<<<<<<<<<<<<<<<<<<")
        const {data}= await axios({
          method: 'post',
          url: `${BASE_URL}/ai`,
          data:form
        })
        console.log(data,form)
        this.answer = data
      } catch (error) {
        console.log(error)
      }
    }
  }
})