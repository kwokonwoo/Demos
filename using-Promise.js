function successCallback() {
    console.log("音频文件创建成功: " + result);
}

function failureCallback(error) {
    console.log("音频文件创建失败: " + error);
}

createAudioFileAsync(audioSettings, successCallback, failureCallback);

const promise = createAudioFileAsync(audioSettings);
promise.then(successCallback, failureCallback);