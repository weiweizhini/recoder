<template>
    <div class="container">
    <h1>3D模拟场景配置</h1>
        <div>
            <p>房间长</p>
            <input class="roomlen" id="roomlen1" value="9">
            <p>房间宽</p>
            <input class="roomwidth" id="roomwidth1" value="7.5">
            <p>房间高</p>
            <input class="roomhight" id="roomhight1" value="3.5">
            <p>混响文件</p>
            <input id = "file" class="file" value="speech.wav">
            <br>
            <button type="button" class="btn btn-outline-primary btn-lg btn-block mt-4" id="btn1">
                生成录音
            </button>
            <button type="button" class="btn btn-outline-primary btn-lg btn-block mt-4" id="">
                重置配置
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Configer',
}

</script>

<style>

</style>