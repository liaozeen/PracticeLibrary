import os
def rename_files():
    #1.获取文件夹里所有文件的文件名
    file_list = os.listdir(r"C:\Users\liao\Desktop\prank")
    print(file_list)
    saved_path = os.getcwd()
    os.chdir("C:\Users\liao\Desktop\prank")

    #2.对每个文件进行重命名
    for file_name in file_list:
        os.rename(file_name,file_name.translate(None,"1234567890"))

    os.chdir(saved_path)
    

rename_files()
