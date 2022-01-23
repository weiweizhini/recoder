<template>
    <div class="Aside1">
        <el-menu
            default-active="recoder"
            class="menu"
            router
        >
            <el-menu-item index="recoder" >
            <el-icon><icon-menu /></el-icon>
            <span>语音录制</span>
            </el-menu-item>

            <el-menu-item index="annotation">
            <el-icon><icon-menu /></el-icon>
            <span>语音标注</span>
            </el-menu-item>
        </el-menu>
    </div>
</template>

<script>
export default {
    name: 'Aside',  
}

</script>
<style>
.Aside1 {
    background-color: #ccd5e6;
    width:200px; 
    min-height:80vh
}

.menu{
    background-color:#ccd5e6;
    
}

.el-menu-item {
    background-color: #ccd5e6;
    font-weight : bold;
}
</style>