# -*- coding: cp936 -*-
import time
import webbrowser

count = 0

print ("程序启动时间："+time.ctime())
while (count<3):
    time.sleep(1*60*60)
    webbrowser.open("http://v.yinyuetai.com/playlist/1291371")
    print ("音乐打开时间："+time.ctime())
    count = count +1
