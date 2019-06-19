<template>
  <div class="home">
    <button @click="handleClick('back')">返回上一页</button>
    <button @click="handleClick('push')">跳转页面</button>
    <button @click="handleClick('replace')">替换页面</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  methods:{
    handleClick(type){
      if(type === 'back') this.$router.back()
      else if(type === 'push'){
        //追加浏览历史，可以回退
        // this.$router.push("/parent")
        const name = 'lisen'
        this.$router.push({
          //1, 注意，如果用path,下面的params将不生效
          path:`/argu/${name}`
          //2,
          // name:'argu',
          // params:{
          //   name:'lisen'
          // }
        })
      }else if(type === 'replace'){
        //替换浏览历史，无法回退
        this.$router.push({
          name:'parent'
        })
      }
      // this.$router.go(-1)
    }
  }
}
</script>
