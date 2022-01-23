<template>
<div class="container">
    <!-- 显示波形图 -->
    <div id="waveform" class="waveform" >
    <!-- 波形绘制区域 -->
    
    <div class="pd waveBox">
        <div style="border:1px solid #ccc;display:inline-block ;width:100%"><div style="height:100px; display: none;" id="recwave" class="recwave"></div></div>
    </div>
    
        
    </div>
    <div id="wave-timeline" ></div>
    <!-- <div class="progress-bar" id="player-progress" role="progressbar" style="width: 10%;height:10px">               -->

    <!-- 显示语谱图 -->
    <div id="wave-spectrogram" class="wave-spectrogram">
       
    </div>
</div>
</template>

<script>
export default {
    name: 'Photo',
}

</script>

<style scoped>
#waveform {
  max-width: 550px;
  height: 150px;
      
}
.wave-spectrogram {
  height: 150px;
  max-width: 550px;
  
}

</style>