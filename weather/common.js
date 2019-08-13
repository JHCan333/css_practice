
/**
 * @author 靳宏灿
 * @date 2019/8/13
 * @time 下午9:32
 * @Description: 下载css文件
*/
function downLoadCssFile (url){
    let head = document.getElementsByTagName('head')[0];
    let link = document.createElement('link');
    link.type = 'text/css';
    link.rel = 'stylesheet';
    link.href = url + '?v=' + new Date().getTime();
    head.appendChild(link)
}