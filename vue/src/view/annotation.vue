<template>
    <div class="recognition">
        <div class="content">
            <div class="taste-left">
                <div class="taste-left-header">语音输入</div>
                 <div class="taste-left-body" >
                    <div class="selectFile">
                        <label style="width: 100px;" id="text">录音文件</label>
                        <el-upload
                            ref="upload"
                            class="upload-demo"
                            action="https://jsonplaceholder.typicode.com/posts/"
                            :limit="1"
                            :on-exceed="handleExceed"
                            :auto-upload="false"
                            :data="upload"
                            :file-list="uploadFiles"
                            :on-change="loadJsonFromFile"
                        >
                            <template #trigger>
                            <el-button  class="reBtn1" type="primary" plain size="small" >选择文件</el-button>
                            </template>
                            <el-button class="reBtn2" type="success" plain size="small" @click="test">开始识别</el-button>
                        </el-upload>

                    </div>
                 </div>
                
            </div>
            <div class="taste-left">
                <div class="taste-right-header">识别结果</div>
                <div class="taste-right-body" id="result_output">嗯，周杰伦。</div>
            </div>
            
            
        </div>
    </div>
</template>

<script>


export default {
    name: 'annotation',  

    data() {
        return {
           uploadFiles: []
        }
    },
    
    methods: {

        loadJsonFromFile(file, fileList) {
        this.uploadFiles = fileList
        },
        
        test(){
            let file = this.uploadFiles[0]
            console.log(file);
        }
    },
}



</script>

<style scoped>
.content{
    width: 1200px;
    margin: 0 auto;
    display: flex
}

.selectFile{
    display: flex
}

.taste-left{
    width: 550px;
}

.taste-left-header{
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 20px;
    margin-left: 20px;
    margin-top: 10px;
}

.taste-right-header{
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 20px;
    margin-top: 10px;
}

.taste-right-body{
    border: 1px solid #7f709c;
    height: 80px;
    padding: 10px;
    line-height: 24px;
}

.taste-left-body{
    border: 1px solid #7c6f8f;
    height: 80px;
    padding: 10px;
    line-height: 24px;
    width: 500px;
    margin-left: 20px;
}

#text{
    margin-top: 4px;
    font-size:15px;
}
.reBtn2{
    margin-left: 20px;
}
</style>
