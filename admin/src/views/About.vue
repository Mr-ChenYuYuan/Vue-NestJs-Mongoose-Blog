<template>
  <avue-form :option="option" v-model="form"> 
</avue-form>
</template>

<script>
export default{
  data() {
    return {
      form: {
          imgUrl3:'/images/logo-bg.jpg',
      },
      option: {
        labelWidth: 120,
        column: [
          {
            label: '水印头像',
            prop: 'imgUrl3',
            type: 'upload',
            listType: 'picture-img',
            span: 24,
            propsHttp: {
              res: 'data'
            },
            canvasOption: {
              text: 'avue',
              ratio: 0.1
            },
            tip: '只能上传jpg/png用户头像，且不超过500kb',
            action: '/imgupload'
          }
        ]
      }
    }
  }
}
</script>