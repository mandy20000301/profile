export default defineEventHandler(() => {
    return {
        "data": {
            "seo": {
                "title": "李欣恬 | 前端工程師",
                "description": "前端工程師-李欣恬 Mandy Li 的個人網站",
                "image": 'https://mandy2000.com/image/mandy_logo.png',
            },
            "headerInfo": {
                "items": [
                    {
                        "id": 'about',
                        "title": '關於我',
                    },
                    {
                        "id": 'works',
                        "title": '作品集',
                    }
                ]
            },
            "bannerInfo": {
                "name": "李欣恬",
                "image": "/image/mandy.png",
                "imageAlt": "李欣恬 Mandy",
                "enNane": "Mandy",
                "jobTitle": "前端工程師",
                "mail": 'c26931230@gmail.com',
                "ctaBtn": 'Contact Me',
                "contactInfo": [
                    {
                        "id": 'github',
                        "link": 'https://github.com/c26931230',
                        "icon": 'github1'
                    },
                    {
                        "id": 'resume',
                        "link": '/mandy_cv.pdf',
                        "icon": 'resume'
                    },
                ]
            },
            "aboutInfo": {
                "title": '關於我',
                "description": '您好，我是李欣恬，很高興有機會讓您認識我。過去半年期間，我在沙拉互動有限公司擔任前端工程師，參與5個專案的開發及維護。這些專案涵蓋不同類型及規模，主要使用Nuxt2及3開發。在過去工作經驗中，我與產品經理、後端工程師及設計師密切合作，以實現完美的網站效果。我能理解客戶的需求，做出有創意、美感及有良好使用者體驗的網站。我相信我過去的經歷，能滿足您團隊的需求，期待我們能一起做出另人滿意的前端產品！'
            },
            "experienceAndSkill": {
                "tabList": [
                    {
                        "id": 'experience',
                        "title": '過往經歷'
                    },
                    {
                        "id": 'skill',
                        "title": '專業技能'
                    }
                ],
                "experinceList": [
                    {
                        "id": 'digisalad',
                        "logo": '/image/digisalad_logo1.png',
                        "title": '沙拉互動有限公司',
                        "subTitle": '前端工程師',
                        "date": '2023/02 - 2023/08',
                        "desc": '在職期間，主要以Nuxt.js(2和3)進行網站前端開發，與設計師、專案經理及後端工程師互相配合，順利開發及維護了5個專案。內容包含購物商場網站、飯店網站及各式官網。'
                    },
                    {
                        "id": 'tibame',
                        "logo": '/image/tibame_logo.png',
                        "title": '緯育Tibame',
                        "subTitle": '前端工程師就業養成班',
                        "date": '2022/09 - 2023/01',
                        "desc": '在學期間，學習了網站前後端技術，順利完成了兩項專題'
                    },
                    {
                        "id": 'nkuht',
                        "logo": '/image/nkuht_logo.png',
                        "title": '國立高雄餐旅大學',
                        "subTitle": '餐飲管理系',
                        "date": '2017/09 - 2022/06',
                        "desc": '大四時，我修了Excel VBA 及 Python 課程，對程式語言產生了興趣，為了更了解網路爬蟲，我認為要熟悉網頁架構，因此我自學了HTML及CSS，覺得非常有趣，於是我決定畢業後繼續學習前端工程師所需要的技能。'
                    }

                ],
                "skillList": ['html', 'css', 'javascript', 'rwd', 'vue', 'nuxt', 'react', 'pinia', 'cicd', 'tailwindcss', 'sass', 'bootstrap', 'php', 'mysql', 'jquery', 'git', 'github', 'sourcetree', 'bitbucket', 'gulp', 'webpack', 'postman', 'python', 'figma'],
            },
            "worksInfo": {
                "title": "作品集",
                "worksItems": [
                    {
                    "id": 'wynn',
                    "title": 'Wynn',
                    "image": '/image/works/wynn_logo.png',
                    "url": 'https://www.wynnresortsmacau.com/en/"wynn"-macau/whats-on/art-macao2023',
                    "description": '本網站客戶為永利度假村以及旗下兩家頂級酒店和度假村：永利澳門和永利皇宮。以飯店介紹及訂房服務為主。',
                    "skill": ['Vue.js', 'Nuxt2', 'Tailwind.css']
                },
                {
                    "id": '5fcoffee',
                    "title": '5F COFFEE',
                    "image": '/image/works/5f_coffee.png',
                    "url": 'https://c26931230.github.io/5F_Coffee_v3/',
                    "description": '本網站為個人專題網站。5fcoffee創立於2020年，起初是啡啡館，除了喜歡分享咖啡外，也致力將咖啡知識推廣給大家，在2021年創立了咖啡教室，讓想在咖啡領域發展的人，有專業的學習環境。',
                    "skill": ['HTML', 'CSS', 'JavaScript', 'Vue.js', 'jQuery']
                },
                {
                    "id": 're_outfit',
                    "title": 'RE OUTFIT',
                    "image": '/image/works/re_outfit.png',
                    "url": 'https://tibamef2e.com/cgd103/g2/',
                    "description": '本網站為團體專題作品。在近年快時尚的風潮中，成衣製造一直有生產過剩的問題，一旦衣服過季時就會造成存貨過多，帶來服飾滯銷問題，造成生產資源的浪費。 為了解決剩餘服飾問題，我們提供造型師搭配服務，將過剩衣服重新搭配，並幫助消費者找到自己的風格，達到資源有效利用。',
                    "skill": ['HTML', 'CSS', 'JavaScript', 'SCSS', 'Vue.js', 'PHP', 'My SQL']
                },
                {
                    "id": 'hopewell',
                    "title": 'Hopewell Cluster',
                    "image": '/image/works/hopewell.png',
                    "url": null,
                    "description": '本網站客戶為合和實業有限公司，為購物商場網站，呈現店家及活動內容為主。',
                    "skill": ['Vue.js', 'Nuxt3', 'Tailwind.css']
                },
                {
                    "id": 'airside',
                    "title": 'Airside',
                    "image": '/image/works/airside_logo.png',
                    "url": null,
                    "description": 'AIRSIDE是位於啟德發展區的190萬平方呎多用途商業空間。用心感受每次呼吸，擁抱「和而為一」的生活概念，與自己、身邊的人和自然環境重新聯繫，體會節奏的變化。',
                    "skill": ['Vue.js', 'Nuxt2', 'Tailwind.css']
                },
                {
                    "id": 'nft',
                    "title": 'NF Touch',
                    "image": '/image/works/nft_logo.png',
                    "url": null,
                    "description": '本網站的客戶為南豐集團。南豐集團的「NF Touch南豐會員計劃」，讓會員在旗下商場消費儲分。',
                    "skill": ['Vue.js', 'Nuxt3', 'Tailwind.css']
                }
            ]
            }
        }
    }
})