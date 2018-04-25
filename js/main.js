/**
 *
 */
var result=`
    /*
    *面试官你好，我是胡阳林
    *我会以动画的形式介绍自己
    */
    *{
      transition:all 1s;
    }
    html{
        background: rgb(222,222,222);
        font-size:16px;
    }
    .code{
        border:1px solid grey;
        padding:16px;
        width:45vw;
        height:90vh;
    }
    /*
    *代码颜色太单调，接下来高亮代码
    */
    .token.property{
        color: #690;
    }
    .token.selector{
        color: #905;
    }
    .token.function{
        color: #DD4A68;
    }
    /*
    *加点3D效果
    */
     .code{
        position:fixed;
        animation: breath 0.5s infinite alternate-reverse;
        transform:translateY(30px) translateX(30px);
    }
    /*
    *我需要一张白纸
    *作为我的简历
    *我会在白纸上写我的个人信息
    */
    #paper{
        position:fixed;
        right:0;
        width:45vw;
        height:90vh;
        margin:30px;

    }
    #paperWerpper{
        width:100%;
        height:100%;
    }
    .content{
        background: white;
        height: 100%;
        width: 100%;
    }
    `
var md= `
# 我的简历
姓名：胡阳林

年龄：25

学历：本科

专业：计算机科学与技术（网络方向）

学校：贺州学院

毕业于广西贺州学院，专业是计算机科学与技术(网络方向)，自学前端半年，目前找一份前端技术方面的工作,熟悉HTML5/CSS3、JavaScript、JQuery、Vue、node.js命令行。期待在3年内可以更深入学习前端方面的知识和横向的技术知识。

## 技能介绍
* JavaScript
* CSS3
* HTML5
* node.js命令行
* Vue
* JQuery

## 项目介绍
* 导航页面
* 我的简历
* 画板
* 会动的简历
* 皮卡丘
* 网易云音乐

## 联系方式
* QQ: 314773165
* Email: 314773165@qq.com
* 手机: 18378401191
* GitHub: hyl007.github.io
`
var result2=
    `
   /*
    *重要的事情说三遍
    *
    *接下来用marked.js把markDown变成html
    *
    *接下来用marked.js把markDown变成html
    *
    *接下来用marked.js把markDown变成html
    *
    */
    `
 result3 =
    `
   /*
    *
    *我来加点css
    *
    */
#paperWerpper div{
    position : absolute;
    width: 100%;
    height: 100%;
    background-color : deepskyblue;
    backface-visibility : hidden;
}
#paper>.html{
    padding: 16px;
    overflow: auto;
    background-color : deepskyblue;
}
.html h1{
    text-align:center;
}
.html ul li{
    margin-left: 20px;
    color: white;
}
#paper:hover #paperWerpper{
    transform : rotateY(180deg);
    cursor : pointer;
}
#paperWerpper{
    width: 100%;
    height: 100%;
    transform-origin : 50% 50% 30px;
    transform : rotateY(0deg);
    transform-style : preserve-3d;
    transition : all 1s ease;
    box-shadow : 0 0 15px #333;
}
#paperWerpper div:nth-child(2){
    transform : rotateY(180deg);
}
.html ul li:hover{
    text-shadow: 0 0 25px white;
}
    /*
    * 这就是我的会动的简历
    * 谢谢观看
    */
    `

writeCode('', result, ()=>{
    createPaper(() => {
       writeMarkdown(md,()=> {
          writeCode(result, result2, ()=>{
            convertMarkdownToHtml(()=>{
                createDiv(()=>{
                    writeCode(result + result2, result3, ()=> {
                        console.log('完成')
                    })
                })
            })
          })
       })
    })
})
function createPaper(fn){
    var paper =document.createElement('div')
    var paperWerpper =document.createElement('div')
    paper.id='paper'
    paperWerpper.id='paperWerpper'
    var content =document.createElement('pre')
    content.className='content'
    document.body.appendChild(paper)
    paper.appendChild(paperWerpper)
    paperWerpper.appendChild(content)
    fn && fn.call()
}
function convertMarkdownToHtml(fn){
    var div = document.createElement('div')
    div.className = 'html markdown-body'
    div.innerHTML = marked(md)
    let markdownContainer = document.querySelector('#paperWerpper > .content')
    markdownContainer.replaceWith(div)
    fn && fn.call()
}
function writeCode(prefix,code,fn){
    let domCode=document.querySelector('#code')
    domCode.innerHTML=prefix||''
    var n= 0
    var id= setInterval(()=>{
        n+=1
        domCode.innerHTML= Prism.highlight(prefix+code.substring(0,n), Prism.languages.css);
        codeCss.innerHTML=prefix+code.substring(0,n)
        domCode.scrollTop=domCode.scrollHeight
        if(n>code.length){
            window.clearInterval(id)
            fn&&fn.call()
        }
    },10)
}
function writeMarkdown(markdown,fn){
    let domPaper = document.querySelector('#paperWerpper>.content')
    let n=0
    let id=setInterval(()=>{
        n+=1
        domPaper.innerHTML=markdown.substring(0,n)
        domPaper.scrollTop=domPaper.scrollHeight
        if(n>=markdown.length){
            window.clearInterval(id)
            fn&&fn.call()
        }
    },10)
}
function createDiv(fn){
    var div1 =document.createElement('div')
    div1.className = 'html1'
    var findDiv=document.querySelector('#paperWerpper')
    findDiv.appendChild(div1)
    div1.innerHTML="<div><h1>你好</h1><p>我什么也没有-。 -</p></div>"
    fn.call()
}