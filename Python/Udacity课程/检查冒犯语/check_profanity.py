import urllib

def read_text():
    quotes = open("电影对白.txt")
    contents_of_file = quotes.read()
    print(contents_of_file)
    quotes.close()
    check(contents_of_file)

def check(text_to_check):
    #打开链接
    connection = urllib.urlopen("http://www.wdylike.appspot.com/?q="+ text_to_check)
    output = connection.read()
    #print(output)
    connection.close()
    if "true" in output:
        print("Profanity Alert!!")
    elif "false" in output:
        print("This document has no curse words!")
    else:
        print("Could not scan the document properly")

    
read_text()
