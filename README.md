# ShopWeb

#### 介绍
1. 这是一个汽车购物网站。
2. 前端实现用户的注册、登录、添加购物车、提交订单
3. 后端实现 添加车辆，修改车辆信息，删除车辆，查询车辆，展示所有车辆，车辆搜索，添加客户（同用户注册），客户搜索，客户列表，订单列表，订单发货，删除违规订单，订单展示

#### 软件架构
1. 前端使用Vue-cli脚手架 Vue-Router路由跳转 VueX状态管理 界面美化使用ElementUI HTTP请求使用axios(Ajax)
2. 后端使用Node.js epxress框架搭建小型服务器
3. 数据库使用NoSQL代表 ->  MongoDB

#### 安装教程

1.  Client端 使用  npm install 安装相关依赖包  然后使用npm run serve 运行（或使用npm run build打包）
2.  Serve端 使用 npm install 安装相关依赖包 然后使用 npm run start 运行 (运行之前，请先打开MongoDB)
3.  MongoDB 打开教程 -> 在MongoDB安装文件夹中的bin文件夹下面打开

#### 使用说明

1.  Client端 用户可以注册，注册完之后即可登录 ，在你喜欢的商品页面将商品加入购物车，然后在购物车界面提交订单即可
2.  Serve端 管理员可以查看用户列表，车辆列表，订单列表，可以增加车辆，修改车辆信息，删除车辆，搜索客户，订单发货，违规订单删除



