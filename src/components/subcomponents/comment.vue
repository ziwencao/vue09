<template>
    <div class="cmt-container">
        <h3>发表评论</h3>
        <hr>
        <textarea v-model="textAdd" placeholder="请输入要BB的内容（最多120字）" maxlength="120"></textarea>
        <mt-button @click="writeCommentPinglun" type="primary" size="large">发表评论</mt-button>

        <div v-for="(item ,index) in commentPinglun" :key="item.content" class="cmt-list">
            <div class="cmt-item">
                <div class="cmt-title">
                    第{{ index+1 }}楼&nbsp;&nbsp;用户：{{item.authors.length?item.authors:''}}&nbsp;&nbsp;发表时间：{{ new Date() | dateFormat}}
                </div>
                <div class="cmt-body">
                    {{ item.content }}
                </div>
            </div>
        </div>
        
        
        <mt-button @click="addPinglun" type="danger" size="large" plain>加载更多</mt-button>
    </div>
</template>

<script>
import {Toast} from 'mint-ui'
export default {
    data() {
        return{
            commentPinglun: [],
            pages:1,
            textAdd:''
        }
    },
    created(){
        this.getpinglun()
    },
    methods:{
        getpinglun() {
            this.$http.get('https://api.apiopen.top/getSongPoetry?page='+this.pages+'&count=12').then(result => {
                console.log(result)
                if(result.body.code === 200){
                    this.commentPinglun = this.commentPinglun.concat(result.body.result)
                    console.log(this.commentPinglun)
                    console.log(this.textAdd)
                }else{
                    Toast("加载评论失败！")
                }
            })
        },
        addPinglun(){
            this.pages +=1;
            this.getpinglun()
        },
        writeCommentPinglun() {
            if(!this.textAdd.trim()){
                return Toast("请填写评论内容")
            }
            this.commentPinglun.unshift({
                authors:"小张三",
                content: this.textAdd,
                title: "牛牛牛！"
            })

        }
    }
}
</script>

<style lang="scss" scoped>
.cmt-container{
    h3{
        font-size: 18px;
    }
    textarea{
        font-size: 14px;
        height: 85px;
        margin: 0;
    }
    .cmt-list{
        margin:6px 0;
        .cmt-item{
            font-size: 13px;
            .cmt-title{
                line-height: 30px;
                background-color: #ccc;
            }
            .cmt-body{
                line-height: 35px;
                text-indent: 2em;
            }
        }
    }
}
</style>
