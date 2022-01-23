<template>

    <div class="container">
        <!-- 选择文本 -->
        <div class="kong1"></div>
        <div class="song">
          <input type="button" class="btn btn-primary btn-sm " value= "选择录制的文本" id="add-txt-button" v-on:click="clickLoad">
          <input type="file" id="files" ref="refFile" style="display: none" v-on:change="fileLoad">
        </div>
        <div class="luzhitxt">
          <i class="fa fa-caret-square-o-left" id="rownumleft" @click="rownumleft()"></i>
          <input id="rownum" type="text" style="height:26x ;width:30px" ref="rowNum" :value="rowNumValue"/>
          <i class="fa fa-caret-square-o-right" id="rownumright" @click="rownumright()"></i>
          <button class="jump" id="jump" @click="jump()">跳转</button>
          <!-- <textarea id="textArea"  style='width:500px; height:100px ; text-align:center;overflow-y:hidden '></textarea> -->
          <div class="kong"></div>
          <span id="textArea" class="textArea" >{{txtpre}}</span>
        </div>
    </div>
  
</template>

<script>

var songTextArray;
var songtxt
var textArea

export default {
    name: 'Text',
    components: {
      
    },

    data(){
      return {
        txtpre: "录制文本",
        rowNumValue: " ",
      };
      
    },

    methods: {
      //这里的this 是 vm  vue实例 
      //点击选择录制文本按钮方法
      clickLoad(){
        this.$refs.refFile.dispatchEvent(new MouseEvent('click'))
        },

      //读取录制文本的方法
      fileLoad() {
        const selectedFile = this.$refs.refFile.files[0];
        console.log(this.$refs.refFile.files)
        //控制台打印
        var name = selectedFile.name; //选中文件的文件名
        var size = selectedFile.size; //选中文件的大小
        console.log("文件名:" + name + "大小:" + size);

        var reader = new FileReader();
        reader.readAsText(selectedFile);
        //reader必须onloader
        reader.onload = function() {
            songTextArray = this.result.split(/[\r\n]/)            
            textArea = songTextArray[0];
            console.log(textArea);
           
           //去掉文本数组中的空格元素
            songtxt = []
            for(var i = 0; i < songTextArray.length; i++){
              if(songTextArray[i] != ""){
                songtxt.push(songTextArray[i])
              }
          }
        }

        //解决onload函数异步问题 延迟执行
        setTimeout(() => {
            console.log(this.$data)
            console.log(textArea);
            this.$data.txtpre = textArea
            console.log(this.$data.txtpre)
            this.rowNumValue = 1;
        },500);
        
        

      },  
      
      //实现根据输入的行数进行跳转
      
      jump() {
        var rownum = this.$refs.rowNum.value;
        console.log(rownum);
        textArea = songtxt[rownum-1];
        console.log(textArea);
        //改变对应行数的数据
        this.$data.txtpre = textArea
        console.log(this.$data.txtpre)
        this.rowNumValue = rownum;
      },

      //实现文本的左移
      rownumleft() {
        var rownum = this.$refs.rowNum.value;
        console.log(rownum);
        var curRownum = Number(rownum)-1;
        console.log(curRownum);
        textArea = songtxt[curRownum-1];
        this.$data.txtpre = textArea;
        //修改当前行数 进行-1
        this.rowNumValue = curRownum;        
      },

      //实现文本的右移
      rownumright() {
        var rownum = this.$refs.rowNum.value;
        console.log(rownum);
        var curRownum = Number(rownum)+1;
        console.log(curRownum);
        textArea = songtxt[curRownum-1];
        this.$data.txtpre = textArea;
        this.rowNumValue = curRownum;  
      }
    }
    
}




</script>
<style scoped>
/* //直接引入在线 */
@import "https://cdn.staticfile.org/font-awesome/4.7.0/css/font-awesome.css";
.luzhitxt.rownum{
  width:5px;
}
.luzhitxt{
  margin-top: 40px 30px ;
  width: 510px; 
}

.textArea{
  display: inline-block;
  height: 30px;
  width: 510px;
  border: 2px solid black;
  margin-top: 20px ;
  text-align:center;
}

.kong{
  height: 3px;
}

.luzhitxt.jump {
  font-size: 10px;
}

.add-music-button{
  margin-top: 0px 20px ;
}
</style>