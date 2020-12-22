import Mock from 'mockjs'

Mock.mock('/login', 'post', (req) => {
    const { username, password } = JSON.parse(req.body)
    if(username === 'admin' && password === 'admin'){
        return Mock.mock({
            Code: 200,
            Msg: '登陆成功',
            Data: 'admin-token'
        })
    }
    return Mock.mock({
        Code: 401,
        Msg: '登陆失败',
        Data: ''
    })
})

const routes = [
    {
        id: 1,
        parentId: 0,
        name: 'Project',
        path: '/Project',
        component: 'Layout',
        redirect: '/Project/ProjectList',
        meta: { title: '项目管理', icon: 'el-icon-phone' },
    },
    {
        id: 10,
        parentId: 1,
        name: 'ProjectList',
        path: '/Project/ProjectList',
        component: 'ProjectList',
        meta: { title: '项目列表', icon: 'el-icon-goods' }
    },
    {
        id: 11,
        parentId: 1,
        name: 'ProjectDetail',
        path: '/Project/ProjectDetail/:projName',
        component: 'ProjectDetail',
        meta: { title: '项目详情', icon: 'el-icon-question', activeMenu: '/Project/ProjectList' },
        hidden: true
    },
    {
        id: 12,
        parentId: 1,
        name: 'ProjectImport',
        path: '/Project/ProjectImport',
        component: 'ProjectImport',
        meta: { title: '项目导入', icon: 'el-icon-help', permission: ['add'] }
    },
    {
        id: 2,
        parentId: 0,
        name: 'Nav',
        path: '/Nav',
        component: 'Layout',
        redirect: '/Nav/SecondNav/ThirdNav',
        meta: { title: '多级导航', icon: 'el-icon-picture' },
    },
    {
        id: 20,
        parentId: 2,
        name: 'SecondNav',
        path: '/Nav/SecondNav',
        redirect: '/Nav/SecondNav/ThirdNav',
        component: 'SecondNav',
        meta: { title: '二级导航', icon: 'el-icon-camera' },
    },
    {
        id: 200,
        parentId: 20,
        name: 'ThirdNav',
        path: '/Nav/SecondNav/ThirdNav',
        component: 'ThirdNav',
        meta: { title: '三级导航', icon: 'el-icon-s-platform' }
    },
    {
        id: 21,
        parentId: 2,
        name: 'SecondText',
        path: '/Nav/SecondText',
        redirect: '/Nav/SecondText/ThirdText',
        component: 'SecondText',
        meta: { title: '二级文本', icon: 'el-icon-s-opportunity' },
    },
    {
        id: 210,
        parentId: 21,
        name: 'ThirdText',
        path: '/Nav/SecondText/ThirdText',
        component: 'ThirdText',
        meta: { title: '三级文本', icon: 'el-icon-menu' }
    },
    {
        id: 3,
        parentId: 0,
        name: 'Components',
        path: '/Components',
        component: 'Layout',
        redirect: '/Components/OpenWindowTest',
        meta: { title: '组件测试', icon: 'el-icon-phone' },
    },
    {
        id: 30,
        parentId: 3,
        name: 'OpenWindowTest',
        path: '/Components/OpenWindowTest',
        component: 'OpenWindowTest',
        meta: { title: '选择页', icon: 'el-icon-goods' }
    },
    {
        id: 31,
        parentId: 3,
        name: 'CardListTest',
        path: '/Components/CardListTest',
        component: 'CardListTest',
        meta: { title: '卡片列表', icon: 'el-icon-question' },
    },
]
Mock.mock('/getRouterList', 'get', () => {
    return Mock.mock({
        Code: 200,
        Data: routes,
        Msg: 'aaaa'
    })
})
