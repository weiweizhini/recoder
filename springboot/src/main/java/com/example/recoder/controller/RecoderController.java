package com.example.recoder.controller;



import cn.hutool.core.io.FileUtil;
import com.example.recoder.common.Result;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;
import java.io.IOException;

@Controller
@RequestMapping("/recoder")
public class RecoderController {

    private static final Logger logger = LoggerFactory.getLogger(RecoderController.class);

    @RequestMapping(value = "/upload",method = RequestMethod.POST)
    public Result<?> upload(HttpServletRequest request, @RequestParam("upfile")MultipartFile  file) throws IOException {
        String originalFilename = file.getOriginalFilename();
        String rootFilesPath = System.getProperty("user.dir") + "/springboot/src/main/resources/files/" + originalFilename;
        FileUtil.writeBytes(file.getBytes(), rootFilesPath);
        return Result.success();

    }
}
