/* eslint-disable */
export default {
    goodTime(str) {
        console.log('ceshi')
        let now = new Date().getTime()
        let oldTime = new Date(str).getTime()
        let difference = now - oldTime
        let result = ''
        let minute = 1000 * 60
        let hour = minute * 60
        let day = hour * 24
        let month = day * 30
        let year = month * 12
        let _year = difference / year
        let _month = difference / month
        let _week = difference / (7 * day)
        let _day = difference / day
        let _hour = difference / hour
        let _min = difference / minute
        if (_year >= 1) {
            result = '发表于 ' + ~~(_year) + ' 年前'
        } else if (_month >= 1) {
            result = '发表于 ' + ~~(_month) + ' 个月前'
        } else if (_week >= 1) {
            result = '发表于 ' + ~~(_week) + ' 周前'
        } else if (_day >= 1) {
            result = '发表于 ' + ~~(_day) + ' 天前'
        } else if (_hour >= 1) {
            result = '发表于 ' + ~~(_hour) + ' 个小时前'
        } else if (_min >= 1) {
            result = '发表于 ' + ~~(_min) + ' 分钟前'
        } else {
            result = '刚刚'
        }
        return result
    },
    // 生成首页特效
    createCanvas() {
        var _gaq = _gaq || [];
        _gaq.push(['_setAccount', 'UA-38965494-1']);
        _gaq.push(['_setDomainName', 'evanyou.me']);
        _gaq.push(['_trackPageview']);

        (function () {
            var ga = document.createElement('script');
            ga.type = 'text/javascript';
            ga.async = true;
            ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
            var s = document.getElementsByTagName('script')[0];
            s.parentNode.insertBefore(ga, s);
        })();

        // document.getElementByClassName('index').addEventListener('touchmove', function(e) {
        //   e.preventDefault()
        // })
        var c = document.getElementsByTagName('canvas')[0],
            x = c.getContext('2d'),
            pr = window.devicePixelRatio || 1,
            w = window.innerWidth,
            h = window.innerHeight,
            f = 90,
            q,
            m = Math,
            r = 0,
            u = m.PI * 2,
            v = m.cos,
            z = m.random
        c.width = w * pr
        c.height = h * pr
        x.scale(pr, pr)
        x.globalAlpha = 0.6

        function i() {
            x.clearRect(0, 0, w, h)
            q = [{
                x: 0,
                y: h * .7 + f
            }, {
                x: 0,
                y: h * .7 - f
            }]
            while (q[1].x < w + f) d(q[0], q[1])
        }

        function d(i, j) {
            x.beginPath()
            x.moveTo(i.x, i.y)
            x.lineTo(j.x, j.y)
            var k = j.x + (z() * 2 - 0.25) * f,
                n = y(j.y)
            x.lineTo(k, n)
            x.closePath()
            r -= u / -50
            x.fillStyle = '#' + (v(r) * 127 + 128 << 16 | v(r + u / 3) * 127 + 128 << 8 | v(r + u / 3 * 2) * 127 + 128).toString(16)
            x.fill()
            q[0] = q[1]
            q[1] = {
                x: k,
                y: n
            }
        }

        function y(p) {
            var t = p + (z() * 2 - 1.1) * f
            return (t > h || t < 0) ? y(p) : t
        }
        document.onclick = i
        document.ontouchstart = i
        i()
    },
    runTime() {
        let seconds = 1000
        let minutes = seconds * 60
        let hours = minutes * 60
        let days = hours * 24
        let years = days * 365
        let today = new Date()
        let todayYear = today.getFullYear()
        let todayMonth = today.getMonth()
        let todayDate = today.getDate()
        let todayHour = today.getHours()
        let todayMinute = today.getMinutes()
        let todaySecond = today.getSeconds()
        /* Date.UTC() -- 返回date对象距世界标准时间(UTC)1970年1月1日午夜之间的毫秒数(时间戳)
        year - 作为date对象的年份，为4位年份值
        month - 0-11之间的整数，做为date对象的月份
        day - 1-31之间的整数，做为date对象的天数
        hours - 0(午夜24点)-23之间的整数，做为date对象的小时数
        minutes - 0-59之间的整数，做为date对象的分钟数
        seconds - 0-59之间的整数，做为date对象的秒数
        microseconds - 0-999之间的整数，做为date对象的毫秒数 */
        let t1 = Date.UTC(self.originalYear, self.originalMonth, self.originalDate, self.originalHour, self.originalMinute, self.originalSecond)
        let t2 = Date.UTC(todayYear, todayMonth, todayDate, todayHour, todayMinute, todaySecond)
        let diff = t2 - t1
        let diffYears = Math.floor(diff / years)
        let diffDays = Math.floor((diff / days) - diffYears * 365)
        let diffHours = Math.floor((diff - (diffYears * 365 + diffDays) * days) / hours)
        let diffMinutes = Math.floor((diff - (diffYears * 365 + diffDays) * days - diffHours * hours) / minutes)
        let diffSeconds = Math.floor((diff - (diffYears * 365 + diffDays) * days - diffHours * hours - diffMinutes * minutes) / seconds)
        self.moment = diffYears + " 年 " + diffDays + " 天 " + diffHours + " 小时 " + diffMinutes + " 分钟 " + diffSeconds + " 秒"
        return self.moment
    },

    createStartCanvas(idName) {
        let canvas = document.getElementById(idName),
            ctx = canvas.getContext('2d'),
            width = window.innerWidth,
            height = window.innerHeight,
            //实例化月亮和星星。流星是随机时间生成，所以只初始化数组
            moon = new Moon(ctx, width, height),
            stars = new Stars(ctx, width, height, 200),
            meteors = [],
            count = 0
        canvas.width = width;
        canvas.height = height;
        const meteorGenerator = () => {
            //x位置偏移，以免经过月亮
            let x = Math.random() * width + 800
            meteors.push(new Meteor(ctx, x, height))
            //每隔随机时间，生成新流星
            setTimeout(() => {
                meteorGenerator()
            }, Math.random() * 2000)
        }
        const frame = () => {
            count++
            count % 10 == 0 && stars.blink()
            moon.draw()
            stars.draw()
            meteors.forEach((meteor, index, arr) => {
                //如果流星离开视野之内，销毁流星实例，回收内存
                if (meteor.flow()) {
                    meteor.draw()
                } else {
                    arr.splice(index, 1)
                }
            })
            requestAnimationFrame(frame)
        }
        meteorGenerator()
        frame()
    },
    resultData (result) {
      let obj = {
        'resNo': 0,
        'data': result
      }
      return JSON.parse(JSON.stringify(obj))
    }
}
