<template>
  <!-- <div class="wraper">
    <div class="content self"  @click.self="hide">
      <div class="m-box" :style="{'opacity': opacity}">
        <div class="box-head">
          <p class="box-name"></p>
        </div>
        <div class="box-content">
          <p class="title">叩首为梦 码梦为生</p>
          <p>从明天起, 做一个幸福的人, 喂马, 劈柴, 周游世界 </p>
          <p>一个人有两个我，一个在黑暗中醒着，一个在光明中睡着。</p>
          <p>若我会见到你，事隔经年。我如何向你招呼，以眼泪，以沉默。</p>
        </div>
      </div>
    </div>
  </div> -->
  <div>
    <div  @click.self="hide">
      <div  :style="{'opacity': opacity}">
        <div>
          <p></p>
        </div>
        <div>
         关于作者
web开发，现在主前端，技术背景JavaScript、Vue、Angular、React、Node、Python等。爱折腾爱玩

关于博客
该博客用Angular4实现，koa2提供数据接口，mongoDB储存数据，部署在腾讯云的服务器上，博客的初衷是希望把自己平常工作学习总结的东西记录下来，以便不时之需可以查阅。 博客源码GitHub

联系作者
电子邮箱：1368033036@qq.com
GitHub： https://github.com/linguowei
SegmentFault： https://segmentfault.com/u/linguowei
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      opacity: 0.9
    }
  },
  computed: {
  },
  methods: {
    hide () {
      this.opacity === 0.9 ? this.opacity = 0 : this.opacity = 0.9
    }
  },
  components: {
  }
}
</script>

<style scoped>
.self {
  position: fixed;
  width: 100%;
  height: 100%;
  /* background-image: url('http://ofyaji162.bkt.clouddn.com/bg2.jpg'); */
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: cover;
}

.m-box {
  position: absolute;
  width: 620px;
  height: 540px;
  top: 50%;
  margin-top: -270px;
  left: 50%;
  margin-left: -310px;
  background: #fff;
  border-radius: 10px;
  opacity: 0.9;
  animation: mBox 0.5s ease-out 1;
  transition: opacity 0.5s ease;
}

@keyframes mBox {
  0% {
    opacity: 0;
    transform: translate3d(-10px, 0, 0);
  }
  25% {
    transform: translate3d(10px, 0, 0);
  }
  50% {
    transform: translate3d(-10px, 0, 0);
  }
  75% {
    transform: translate3d(10px, 0, 0);
  }
  100% {
    opacity: 0.9;
  }
}

.box-head {
  position: relative;
  width: 100%;
  height: 65%;
  background: url(http://ofyaji162.bkt.clouddn.com/bg1.jpg) center no-repeat;
  background-size: cover;
  border-radius: 4px 4px 0 0;
  text-align: center;
  box-shadow: inset 0 -70px 100px -50px rgba(0,0,0,.5);

  .box-name {
    font-size: 25px;
    padding-top: 20%;
    color: white;
  }
}

.box-content {
  font-size: 15px;
  padding: 8px 5%;
  text-align: center;

  p {
    line-height: 30px;
  }

  .title {
    font-size: 25px;
    font-weight: bold;
    line-height: 50px;
    text-align: center;
  }
}

@media screen and (max-width: 640px) {
  .m-box {
    top: 60%;
    margin-left: -49%;
    width: 98%;
    height: 430px;
  }

  .box-head {
    height: 50%;
  }

  .box-content {
    padding: 10px 10px;
    font-size: 14px;

    p {
      text-align: left;
    }
  }
}
</style>
