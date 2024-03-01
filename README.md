# React + Redux Shopping Cart Demo

- 使用Vite构建项目
- Redux管理项目数据流
- redux-tunk 处理异步action
- antd用作UI组件


P.S. : 
- infinity list 采用监听浏览器scroll事件实现。( 此项目为demo项目，实际项目中，会根据分页逻辑，加载下一页数据，并且添加state来判断是否在请求中，避免scroll时间触发多次加载。
要实现无限加载，可在最后无数据时将pageIndex重置为1，从第1页开始重新走分页加载逻辑 )

- 项目图片与视频资源来自自建阿里云ECS服务器，仅仅作为功能测试，固所有商品共用同一视频资源