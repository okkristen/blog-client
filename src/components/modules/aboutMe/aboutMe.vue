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
import styleCode from './style.js'
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
      resumeData: Data,
      time: null
    }
  },
  props: {
  },
  mounted () {
    this.setTimeout()
  },
  methods: {
    responseStyleCode: function (code) {
      this.resStyleCode = '<style>' + code + '</style>'
    },
    setTimeout () {
      let n = 0
      let vm = this
      vm.time = window.setInterval(function () {
        vm.responseStyleCode(styleCode.substring(0, n))
        if (n === styleCode.length) {
          window.clearTimeout(vm.time)
        } else {
          n = n + 1
        }
      }, 5)
    }
  },
  components: {
  }
}
</script>

<style scoped>
</style>
