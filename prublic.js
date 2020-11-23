//火山去邀请好友
threads.start(function () {
    while (true) {
    sleep(2000)
    id("a6j").exists()
    id("a6j").findOne().click()
    log("火山去邀请好友")
} 
})
threads.start(function () {
    while (true) {
    sleep(2000)
    id("rj").exists()
    id("rj").findOne().click()
    log("火山青少年模式")
} 
})
if(ud>4){
    swipe(random(500,600),random(1500,1600),random(400,700),random(300,500),random(1500,2600))}else{
    swipe(random(500,600),random(300,500),random(400,700),random(1500,1600),random(1500,2600))}       
    sleep(random(3000,5000));  
    }

function red_packet() {
    if(id("circular_progress_bar").exists()){
    var red_packet =id("circular_progress_bar").findOne()
    var red_packetx =red_packet.bounds().centerX()
    var red_packety =red_packet.bounds().centerY()
    click(red_packetx,red_packety)
    log("点击红包"+red_packetx,red_packety)
    }
    else{
        if(id("gold_egg_packet").exists()){
        var gold_egg_packet =id("gold_egg_packet").findOne()
        var gold_egg_packetx =gold_egg_packet.bounds().centerX()
        var gold_egg_packety =gold_egg_packet.bounds().centerY()
        click(gold_egg_packetx,gold_egg_packety)
        log("点击红包"+gold_egg_packetx,gold_egg_packety)   
        }        
        }
    log("快手已经进入领宝箱页面")
}

function 刷视频() {
    var 刷视频 = random(0,10)
    log(刷视频)
    if(刷视频 > 4 ){
        log("刷抖音")
        刷抖音()        
    }else{ 
        log("刷快手")
        刷快手()        
    }
}

function 趣头条() {
    home()
    sleep(1000)
    text("趣头条").findOne().click()
        }

function 刷淘宝() {
home()
text("淘宝直播").findOne().click()
var  淘宝直播 = text("视频").findOne()
var 淘宝直播x =淘宝直播.bounds().centerX()
var 淘宝直播y =淘宝直播.bounds().centerY()
click(淘宝直播x,淘宝直播y)
log("砸金蛋"+淘宝直播x,淘宝直播y)
}

