# -*- coding: cp936 -*-
import time
import webbrowser

count = 0

print ("��������ʱ�䣺"+time.ctime())
while (count<3):
    time.sleep(1*60*60)
    webbrowser.open("http://v.yinyuetai.com/playlist/1291371")
    print ("���ִ�ʱ�䣺"+time.ctime())
    count = count +1
