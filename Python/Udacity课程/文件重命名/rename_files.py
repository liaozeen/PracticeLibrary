import os
def rename_files():
    #1.��ȡ�ļ����������ļ����ļ���
    file_list = os.listdir(r"C:\Users\liao\Desktop\prank")
    print(file_list)
    saved_path = os.getcwd()
    os.chdir("C:\Users\liao\Desktop\prank")

    #2.��ÿ���ļ�����������
    for file_name in file_list:
        os.rename(file_name,file_name.translate(None,"1234567890"))

    os.chdir(saved_path)
    

rename_files()
