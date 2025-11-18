// dev-nav/src/data/sites.ts

export interface Site {
  id: string;
  name: string;
  description: string;
  url: string;
  category: string;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
}

export const categories: Category[] = [
  { id: 'learning', name: '核心课程与学习', icon: '📚' },
  { id: 'algorithm', name: '算法与刷题平台', icon: '📊' },
  { id: 'community', name: '技术社区与博客', icon: '👥' },
  { id: 'docs', name: '编程语言与文档', icon: '🔧' },
];

export const sites: Site[] = [
  // 核心课程与学习
  {
    id: 'mooc-cn',
    name: '中国大学MOOC',
    description: '汇集国内顶尖高校的课程资源',
    url: 'https://www.icourse163.org/',
    category: 'learning',
  },
  {
    id: 'coursera',
    name: 'Coursera',
    description: '顶尖大学和公司的在线课程',
    url: 'https://www.coursera.org/',
    category: 'learning',
  },
  {
    id: 'edx',
    name: 'edX',
    description: '哈佛和MIT创建的开放式课程',
    url: 'https://www.edx.org/',
    category: 'learning',
  },
  {
    id: 'xuetangx',
    name: '学堂在线',
    description: '清华大学发起的在线学习平台',
    url: 'https://www.xuetangx.com/',
    category: 'learning',
  },
  {
    id: 'cs-diy',
    name: 'CS DIY Wiki',
    description: '计算机科学自学指北',
    url: 'https://csdiy.wiki/',
    category: 'learning',
  },
  {
    id: 'bilibili',
    name: 'Bilibili',
    description: '丰富的计算机学习视频',
    url: 'https://www.bilibili.com/',
    category: 'learning',
  },

  // 算法与刷题平台
  {
    id: 'leetcode-cn',
    name: '力扣 (LeetCode)',
    description: '算法与数据结构练习平台',
    url: 'https://leetcode.cn',
    category: 'algorithm',
  },
  {
    id: 'nowcoder',
    name: '牛客网',
    description: '求职、刷题、内推、面经社区',
    url: 'https://www.nowcoder.com/',
    category: 'algorithm',
  },
  {
    id: 'hackerrank',
    name: 'HackerRank',
    description: '国际化的编程技能练习平台',
    url: 'https://www.hackerrank.com/',
    category: 'algorithm',
  },
  {
    id: 'codeforces',
    name: 'Codeforces',
    description: '全球顶级的算法竞赛平台',
    url: 'https://codeforces.com/',
    category: 'algorithm',
  },

  // 技术社区与博客
  {
    id: 'juejin',
    name: '掘金',
    description: '中文技术文章分享社区',
    url: 'https://juejin.cn',
    category: 'community',
  },
  {
    id: 'stackoverflow',
    name: 'Stack Overflow',
    description: '解决编程问题的首选社区',
    url: 'https://stackoverflow.com',
    category: 'community',
  },
  {
    id: 'infoq-cn',
    name: 'InfoQ',
    description: '前沿技术动态与实践',
    url: 'https://www.infoq.cn/',
    category: 'community',
  },
  {
    id: 'github-trending',
    name: 'GitHub Trending',
    description: '发现热门的开源项目',
    url: 'https://github.com/trending',
    category: 'community',
  },

  // 编程语言与文档
  {
    id: 'github',
    name: 'GitHub',
    description: '全球最大的代码托管平台',
    url: 'https://github.com',
    category: 'docs',
  },
  {
    id: 'java-docs',
    name: 'Java 官方文档',
    description: '学习 Java 的权威资料',
    url: 'https://docs.oracle.com/en/java/',
    category: 'docs',
  },
  {
    id: 'spring',
    name: 'Spring',
    description: 'Java 开发必备框架',
    url: 'https://spring.io/',
    category: 'docs',
  },
  {
    id: 'mdn',
    name: 'MDN Web Docs',
    description: 'Web 技术权威参考',
    url: 'https://developer.mozilla.org/zh-CN/',
    category: 'docs',
  },
];
