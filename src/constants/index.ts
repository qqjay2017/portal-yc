import {
  mobile,
  backend,
  creator,
  web,
  // javascript,
  // typescript,
  // html,
  // css,
  // reactjs,
  // redux,
  // tailwind,
  // nodejs,
  // mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  threejs,
  taobao,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "关于我们",
  },
  {
    id: "work",
    title: "产品中心",
  },
  {
    id: "contact",
    title: "联系我们",
  },
];

const services = [
  {
    title: "按需定制",
    icon: web,
  },
  {
    title: "生态环保",
    icon: mobile,
  },
  {
    title: "自主研发",
    icon: backend,
  },
  {
    title: "高性价比",
    icon: creator,
  },
];

const technologies = [
  // {
  //   name: "HTML 5",
  //   icon: html,
  // },
  // {
  //   name: "CSS 3",
  //   icon: css,
  // },
  // {
  //   name: "JavaScript",
  //   icon: javascript,
  // },
  // {
  //   name: "TypeScript",
  //   icon: typescript,
  // },
  // {
  //   name: "React JS",
  //   icon: reactjs,
  // },
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
  // {
  //   name: "Tailwind CSS",
  //   icon: tailwind,
  // },
  // {
  //   name: "Node JS",
  //   icon: nodejs,
  // },
  // {
  //   name: "MongoDB",
  //   icon: mongodb,
  // },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "公司成立",
    company_name: "XXXX",
    icon: starbucks,
    iconBg: "#383E56",
    date: "2021年",
    points: ["xxxxxx", "xxxxxx", "xxxxxx", "xxxxxx"],
  },
  {
    title: "公司发展",
    company_name: "xxxxx",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "2022年",
    points: ["xxxxxx", "xxxxxx", "xxxxxx", "xxxxxx"],
  },
  {
    title: "公司壮大",
    company_name: "xxx",
    icon: shopify,
    iconBg: "#383E56",
    date: "2022年",
    points: ["xxxxxx", "xxxxxx", "xxxxxx", "xxxxxx"],
  },
  {
    title: "公司xx",
    company_name: "XX",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "2023年",
    points: ["xxxxxx", "xxxxxx", "xxxxxx", "xxxxxx"],
  },
];

const testimonials = [
  {
    testimonial:
      "很好用,很好用,很好用,很好用,很好用,很好用,很好用,很好用,很好用,很好用,",
    name: "老王",
    designation: "CFO",
    company: "XXX旅游区管理员",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "很好用,很好用,很好用,很好用,很好用,很好用,很好用,很好用,很好用,很好用,",
    name: "老张",
    designation: "COO",
    company: "XXX登山爱好者",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "很好用,很好用,很好用,很好用,很好用,很好用,很好用,很好用,很好用,很好用,",
    name: "老李",
    designation: "CTO",
    company: "XXX游泳爱好者",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "产品1",
    description: "这个产品xxxxxxxxxxxxxxxxxx,这个产品xxxxxxxxxxxxxxxxxx,",
    tags: [
      {
        name: "休闲",
        color: "blue-text-gradient",
      },
      {
        name: "年轻人",
        color: "green-text-gradient",
      },
      {
        name: "性价比",
        color: "pink-text-gradient",
      },
    ],
    image: taobao,
    source_code_link: "https://baidu.com/",
  },
  {
    name: "产品2",
    description: "这个产品xxxxxxxxxxxxxxxxxx,这个产品xxxxxxxxxxxxxxxxxx,",
    tags: [
      {
        name: "便携",
        color: "blue-text-gradient",
      },
      {
        name: "美观",
        color: "green-text-gradient",
      },
      {
        name: "性价比",
        color: "pink-text-gradient",
      },
    ],
    image: taobao,
    source_code_link: "https://baidu.com/",
  },
  {
    name: "产品3",
    description: "这个产品xxxxxxxxxxxxxxxxxx,这个产品xxxxxxxxxxxxxxxxxx,",
    tags: [
      {
        name: "高配置",
        color: "blue-text-gradient",
      },
      {
        name: "面积大",
        color: "green-text-gradient",
      },
      {
        name: "舒适",
        color: "pink-text-gradient",
      },
    ],
    image: taobao,
    source_code_link: "https://baidu.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
