<template>
    <div id="show-resume">
        <div id="resume_content" class="resume-content clearfloat" :style="{width:pfdSize.width+'px',height:pfdSize.height+'px'}">
            <section class="section-left">
                <div class="head">
                    <h2>{{resumeData.head.name}}</h2>
                    <h3>求职意向:{{resumeData.head.intention}}</h3>
                    <p><i class="icon-phone icon-2x"></i></p>
                    <p>{{resumeData.head.tel}}</p>
                    <p><i class="icon-envelope-alt icon-2x"></i></p>
                    <p>{{resumeData.head.email}}</p>
                    <ul class="clearfloat">
                        <li>
                            <p>住址</p>
                            <p>{{resumeData.head.address}}</p>
                        </li>
                        <li>
                            <p>年龄</p>
                            <p>{{resumeData.head.age}}</p>
                        </li>
                        <li>
                            <p>性别</p>
                            <p>{{resumeData.head.sex}}</p>
                        </li>
                    </ul>
                </div>
                <div class="edu">
                    <h3><span class="item-title">教育背景</span></h3>
                    <p>{{resumeData.head.school}} ({{resumeData.head.graduation}})</p>
                    <p>{{resumeData.head.graduationTime}}</p>
                    <p>专业:{{resumeData.head.major}}</p>
                    <p class="honor-title">荣获</p>
                    <p v-for="(item,index) in resumeData.head.honor.split('、')" :key="index">{{item}}</p>
                </div>
                <div class="interest">
                    <h3><span class="item-title">兴趣爱好</span></h3>
                    <p><span class="inte-span" v-for="(item,index) in resumeData.head.interest.split('、')" :key="index">{{item}}</span></p>
                </div>
                <div class="skill">
                    <h3><span class="item-title">技能特长</span></h3>
                    <div class="sk" v-for="(item,index) in resumeData.head.speciality.split('、')"  :key="index">{{item}}
                        <div class="sk-wrap">
                            <span class="sk-per" :style="{width:resumeData.head.specialityPer.split('、')[index]+'%'}"></span>
                        </div>
                    </div>
                </div>
            </section>
            <section class="section-right">
                <!-- <div class="blog-box clearfloat">
                    <div class="blog">
                        <div class="title-name">BLOG LINK</div>
                        <div class="link github"><i class="icon-github-alt icon-1x"></i>Github: <a target="_blank" href="https://github.com/ZengTianShengZ">{{resumeData.blogLink.github}}</a></div>
                        <div class="link personal-blog"><i class="icon-flag icon-1x"></i>技术博文 <a target="_blank" href="https://segmentfault.com/u/zss">{{resumeData.blogLink.blog}}</a></div>
                    </div>
                </div> -->
                <div class="experience work-experience">
                    <div class="title">
                        <div class="title-name">工作经验</div>
                        <div class="title-date">{{resumeData.workExperience.time}}</div>
                    </div>
                    <div class="show" v-for="(item,index) in resumeData.workExperience.experience" :key="index">
                        <div class="item"  v-if="item.name" >
                            <div class="item-title">
                                <span class="item-name">{{item.name}}</span>
                                <span class="item-skill">/ {{item.skill}}</span>
                                <span class="item-date">{{item.time}}</span>
                            </div>
                            <ul>
                                <li v-for="(des,index) in item.describe" :key="index">{{des}}</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="experience project-experience">
                    <div class="title">
                        <div class="title-name">项目经验</div>
                        <div class="title-date">{{resumeData.projectExperience.time}}</div>
                    </div>
                    <div class="show" v-for="(item,index) in resumeData.projectExperience.experience" :key="index">
                        <div class="item" v-if="item.name">
                            <div class="item-title">
                                <span class="item-name">{{item.name}}</span>
                                <span class="item-skill">/ {{item.skill}}</span>
                                <span class="item-date">{{item.time}}</span>
                            </div>
                            <ul>
                                <li v-for="(des,index) in item.describe"  :key="index" v-if="des!=''">{{des}}</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="experience skill-experience">
                    <div class="title">
                        <div class="title-name">掌握技能</div>
                    </div>
                    <div class="show" v-for="(item,index) in resumeData.skill"  :key="index">
                        <div class="item"  v-if="item.type">
                            <div class="item-title">
                                <span class="item-name">{{item.type}}</span>
                            </div>
                            <ul>
                                <li v-for="(des,index) in item.describe"  :key="index">{{des}}</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="experience self-evaluation">
                    <div class="title">
                        <div class="title-name">自我评价</div>
                    </div>
                    <p class="eval-detail" v-for="(item,index) in resumeData.selfAssessment" :key="index">{{item}}</p>
                </div>
            </section>
        </div>
        <div v-html="resStyleCode"></div>
    </div>
</template>

<script type="text/ecmascript-6">
import Data from 'static/resumedata.json'
export default {
  data () {
    return {
      msg: 'hello vue',
      ttc: 80,
      resStyleCode: '',
      pfdSize: {
        width: '',
        height: ''
      },
      resumeData: Data
    }
  },
  props: {
  },
  methods: {
    responseStyleCode: function (code) {
      this.resStyleCode = '<style>' + code + '</style>'
    }
  },
  components: {
  }
}
</script>

<style scoped>
    #show-resume{
        float: left;
        width: 100%;
        height: 100%;
        background: #ffffff;
        padding: 1rem 2rem;
        overflow: auto;
        box-sizing: border-box;
    }
    .resume-content{
        width: 100%;
        height: 99%;
        box-shadow: 0 4px 12px 0 rgba(0,0,0,0.5);
        overflow: auto;
        background: rgb(249,249,249);
    }
    .resume-content::-webkit-scrollbar {
         display: none;
     }
</style>

<style scoped>
 /* 又到了招聘季啦 !
        用 vue 做了个能自动生成简历的小项目
        能支持简历编辑和生成 PDF格式的简历哦!
        如果想定制化可以点击左上角的 Logo
        clone 本项目进行修改,顺便star一下哈! ^-^
     ------------------------------------*/
     /* 好了,开始制作简历
        先对左边进行布局
     ------------------------------------*/
     .section-left{
         float: left;
         width: 30%;
         height: 100%;
         text-align: center;
         color: #313131;
         line-height: 1.8;

     }
     /* 右边布局
      ------------------------------------*/
     .section-right{
         float: left;
         width: 69%;
         height: 100%;
         padding: 1rem;
         box-sizing: border-box;
         background: #ffffff;

     }
     .section-left i{
     color: rgb(151, 151, 151);
     font-size: 0.5rem;

    }
    .section-left h2{
        font-size: 1.5rem;
    }
    .section-left h3{
        font-size: 0.5rem;
    }
    .section-left p{
        font-size: 0.5rem;
    }
    /* 头部信息
    ------------------------------------*/
    .section-left .head{
        padding-top: 2rem;
        background: rgb(236,236,236);

    }
    .head ul{
        width: 100%;
        margin: 1rem 0;
        border-top: 2px solid rgba(151, 151, 151,0.5);
        border-bottom:2px solid rgba(151, 151, 151,0.5);
    }
    .head ul li{
        float: left;
        width: 32.1%;
    }
    .head ul li + li{
        border-left: 2px solid rgba(151, 151, 151,0.5);
    }
    .section-left .item-title{
        border-bottom: 2px solid rgba(151, 151, 151,0.5);
        padding: 0 0.4rem;
    }
    /* 教育背景
    ------------------------------------*/
    .section-left .edu{
        line-height: 2;
        margin-bottom: 0.8rem;
    }
    .edu .honor-title{
        font-size: 1.8rem;
        color: #3d3d3d;
        font-weight: 500;
    }
    /* 兴趣爱好
    ------------------------------------*/
    .section-left .interest{
        margin-bottom: 0.8rem;

    }
    .section-left .inte-span{
        display: inline-block;
        font-size: 0.4rem;
        border: 1px solid rgba(151, 151, 151,0.5);
        padding: 0 1rem;
        margin: 0.2rem 1rem;
        border-radius: 2.5rem;
    }
    /* 技能特长
    ------------------------------------*/
    .section-left .skill{
        width: 100%;
    }
    .skill h3{
        margin-bottom: 1rem;
    }
    .skill .sk{
      position: relative;
      width: 98%;
      margin: 0 auto;
      text-align: left;
      text-indent: 1.5rem;
      font-size: 0.6rem;
    }
    .skill .sk-wrap{
        position: absolute;
        top:0;
        right: 0;
        bottom: 0;
        margin: auto 0;
        width: 70%;
        height: 1rem;
        border-radius: 0.5rem;
        background:  rgba(151, 151, 151,0.5);
    }
    .skill .sk-per{
        display: block;
        width: 90%;
        height: 100%;
        background: rgba(151, 151, 151,0.9);
        border-radius: 0.4rem;
    }

    /* 右边 博客链接
     ------------------------------------*/
    .section-right .blog-box{
        margin-bottom: 4rem;
    }
    .section-right .blog{
        float: right;
        font-size: 1.4rem;
        margin-right: 2rem;
    }
    .blog .title-name{
        font-size: 1rem;
    }
    .blog .title-name:after{
        content: '';
        height: 2px;
        width: 100%;
        display:block;
        margin-bottom: 2px;
    }
    .blog .link{
        line-height: 2rem;
        margin-bottom: 2px;
        padding-right: 0.5rem;

    }
    .blog .link i{
        margin-right: 1rem;
    }
    .blog .link a{
        color: #313131;
    }
    /* 工作经验
     ------------------------------------*/
    .experience{
        padding: 2.5rem;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        font-size: 1rem;
        margin-bottom: 1rem;
        /*box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);*/
    }
    .experience .title{
        width: 100%;
        height: 2rem;
    }
    .experience .title:after{
        content: '';
        height: 2px;
        width: 100%;
        display:block;
        margin-bottom: 2px;
        background: linear-gradient(to right, #ffffff, rgba(135, 135, 135, 0.5) 50%, #ffffff);
    }
    .item {
      text-align: -webkit-auto;
    }
    .title .title-name{
        font-size: 1.8rem;
        display: inline-block;
    }
    .title .title-date{
        float: right;
    }
    .experience .item-title{
        padding: 0.6rem 0;
        color: #42b983;
    }
    .experience .item-title span{
        display: inline-block;
    }
    .item-title .item-name{
        font-size: 1.6rem;
    }
    .item-title .item-skill{

    }
    .item-title .item-date{
        float: right;
    }
    .experience .item ul{
        margin-left: 1.5rem;
        list-style: circle;
    }
    .self-evaluation .title{
        margin-bottom: 1rem;
    }
    .self-evaluation p{
        line-height: 1.4;
    }
    /* 编辑结束 !!!!
       界面设计丑了点,欢迎star和issue
       能提供好看的设计图那更是感激不尽!!!!
     ------------------------------------*/
     li {
       list-style-type:none;
     }
</style>
