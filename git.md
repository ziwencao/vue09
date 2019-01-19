## //初始化你的项目为git仓库
## git init
## //添加所有的文件（注意"."）
## git add .
## //提交注释(每一次提交代码到github的时候必须得写注释，否则也提交不上去)
## git commit -m "first commit"
## //添加源头(你要提交的地址,第一次提交的时候才会设置,设置过了之后就不用设置了)
## git remote add origin https://github.com/用户名/项目名.git
## //提交代码到指定的分支(你要提交的项目地址有可能有多个分支)
## git push -u origin master
## --------------------- 
## 注意事项：
## 
## git remote add origin https://github.com/用户名/项目名.git
## 1
## 这个命令是第一次提交项目的时候需要执行的，第二次以及以后都不用执行了

##---------------------------------
##用（传统方式）命令行把修改过后的代码上传到github？？
1.git add .
2.git commit -m "提交信息"
3.git push
