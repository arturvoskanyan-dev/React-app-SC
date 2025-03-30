const arr = ["Դասընթացներ", "Առավելություններ", "Թրեյներներ", "Մեր մասին"];
// const arr = ["Դասընթացներ"];
const infoIcons = ["facebook", "linkedin", "instagram", "tik-tok"];

const lessons = [
    {
        id: 1,
        img: "front-end",
        title: "WEB Front-End",
        month: "9 ամիս",
        money: "58,000 ֏"
    },
    {
        id: 2,
        img: "python-ml",
        title: "Python (ML / AI)",
        month: "7 ամիս",
        money: "68,000 ֏"
    },
    {
        id: 3,
        img: "java",
        title: "Java",
        month: "6 ամիս",
        money: "68,000 ֏"
    },
    {
        id: 4,
        img: "javaScript",
        title: "JavaScript",
        month: "3.5 ամիս",
        money: "58,000 ֏"
    }
]

const features = [
    {
        id: 1,
        icon: "user",
        title: "Փորձառու մասնագետներ",
        info: "Դասավանդում են փորձառու մասնագետներ, ովքեր կմատուցեն Ձեզ բարդ թվացող ինֆորմացիան բավականին պարզեցված տեսքով:"
    },
    {
        id: 2,
        icon: "checked",
        title: "Փոքր խմբեր անհատական մոտեցում",
        info: "Դասընթացները անցկացվում են՝ 6-8 ուսանողից կազմված խմբերից, ապահովելով անհատական մոտեցում յուրաքանչյուր ուսանողին:"
    },
    {
        id: 3,
        icon: "coffee-cup",
        title: "Հարմարավետ կահավորված լսարաններ",
        info: "Մեր հարմարավետ կահավորված լսարաններում Ձեր ուսման պրոցեսը կդառնա էլ ավելի հաճելի։"
    },
    {
        id: 4,
        icon: "giving",
        title: "Փորձնական 3 դաս",
        info: "Բոլոր ուսանողներին կտրամադրվի 3 փորձնական դաս, որը Ձեզ հնարավորություն կտա փորձել Ձեր ուժերը և ծանոթանալ դասապրոցեսի ընթացքին։"
    },
    // {
    //     id: 5,
    //     title: "Դասի ձայնագրություն",
    //     info: "Յուրաքանչյուր դասի ավարտին կստանաք նաև դասի տեսագրությունը՝ տանը կրկնելու համար։"
    // },
    // {
    //     id: 6,
    //     title: "Օնլայն օգնական",
    //     info: "Կուրսի ամբողջ ընթացքում դուք կստանաք հեռավար աջակցություն` մասնագետի կողմից:"
    // },
    // {
    //     id: 7,
    //     title: "Ապառիկ ուսուցում",
    //     info: "Շատ լավ հնարավորություն՝ սովորել ապառիկ պայմաններով և վճարել ուսման համար դասընթացի ավարտին՝ աշխատանքի անցնելուց հետո:"
    // },
    // {
    //     id: 8,
    //     title: "Կարիերային աճ",
    //     info: "Բոլոր ուսանողները կստանան 1 ամսյա անվճար թրեյնինգ մեր HR մասնագետի կողմից` հաջողակ կարիերա ստեղծելու համար"
    // },
    // {
    //     id: 9,
    //     title: "Աշխատանքի առաջարկ",
    //     info: "Դասընթացի ավարտին լավագույն արդյունք ցուցաբերած ուսանողներին կաջակցենք աշխատանքի ընդունման հարցում:"
    // }
]

const trainers = [
    {
        id: 1,
        img: "https://smartcode.am/public/image/staff/29.png",
        name: "Ապրես",
        theme: "Java"
    },
    {
        id: 2,
        img: "https://smartcode.am/public/image/staff/6.png?v=1.2",
        name: "Ալբերտ",
        theme: "Python / ML"
    },
    {
        id: 3,
        img: "https://smartcode.am/public/image/staff/19.png?v=1.2",
        name: "Ռոման",
        theme: "React.js"
    },
    {
        id: 4,
        img: "https://smartcode.am/public/image/staff/12.png",
        name: "Ալբերտ",
        theme: "Python / ML"
    },
    {
        id: 5,
        img: "https://smartcode.am/public/image/staff/31.png",
        name: "Արմենուհի",
        theme: "UX / UI"
    },
    {
        id: 6,
        img: "https://smartcode.am/public/image/staff/14.png",
        name: "Վարդգես",
        theme: "Python / Django"
    },
    {
        id: 7,
        img: "https://smartcode.am/public/image/staff/30.png",
        name: "Անժելա",
        theme: "UX / UI"
    },
    {
        id: 8,
        img: "https://smartcode.am/public/image/staff/15.png",
        name: "Հայկ",
        theme: "HTML / CSS"
    },
    {
        id: 9,
        img: "https://smartcode.am/public/image/staff/28.png?v=1",
        name: "Կառլեն",
        theme: "C#"
    },
    {
        id: 10,
        img: "https://smartcode.am/public/image/staff/16.png",
        name: "Գոռ",
        theme: "Python / OOP"
    },
    {
        id: 11,
        img: "https://smartcode.am/public/image/staff/17.png",
        name: "Նարեկ",
        theme: "React.js"
    },
    {
        id: 12,
        img: "https://smartcode.am/public/image/staff/22.png",
        name: "Էրիկ",
        theme: "Java"
    },
    {
        id: 13,
        img: "https://smartcode.am/public/image/staff/23.png",
        name: "Արման",
        theme: "HTML / CSS"
    },
    {
        id: 14,
        img: "https://smartcode.am/public/image/staff/24.png",
        name: "Սերգեյ",
        theme: "Front-End"
    },
    {
        id: 15,
        img: "https://smartcode.am/public/image/staff/26.png",
        name: "Վահե",
        theme: "HTML / CSS"
    },
]

const contact = [
    {
        id: 1,
        img: "call",
        info: "+374 41 435344"
    },
    {
        id: 2,
        img: "call",
        info: "+374 98 435341"
    },
    {
        id: 3,
        img: "email",
        info: "support@smartcode.am"
    },
    {
        id: 4,
        img: "email",
        info: "hr@smartcode.am"
    },
    {
        id: 5,
        img: "maps",
        info: "Հանրապետության 22"
    },
]


export {arr, infoIcons, lessons, features, trainers, contact}