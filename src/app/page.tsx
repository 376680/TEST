'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Flag,
  ChevronDown,
  Globe,
  Lock,
  Search,
  ArrowDown,
  BookOpen,
  ScanEye,
  Shield,
  FileText,
  Newspaper,
  History,
  Users,
  Building2,
  HeartPulse,
  GraduationCap,
  IdCard,
  Menu,
  X,
  ArrowUp,
  Mail,
  ChevronRight,
  Megaphone,
  AlertTriangle,
  Info,
  Star,
  ExternalLink,
} from 'lucide-react'

// ============ DATA ============

const services = [
  {
    icon: BookOpen,
    title: '小鼠帝国wiki',
    description: '欢迎来到小鼠帝国 Wiki',
    href: 'https://mousekingdom.fandom.com/zh/',
  },
  {
    icon: ScanEye,
    title: '小鼠帝国对外情报局',
    description: '小鼠帝国唯一合法对外情报机构',
    href: 'https://376680.github.io/sis/',
  },
  {
    icon: Shield,
    title: '小鼠帝国警务署',
    description: '"保护和服务"',
    href: 'https://376680.github.io/mspd/',
  },
  {
    icon: FileText,
    title: '小鼠帝国信息自由法案',
    description: '确保知情的小鼠公民，这对民主社会的运作至关重要',
    href: 'https://376680.github.io/foia/',
  },
  {
    icon: Newspaper,
    title: '小鼠帝国中央通讯',
    description: '获取小鼠帝国最新官方新闻和公告',
    href: 'https://376680.github.io/news/',
  },
  {
    icon: History,
    title: '小鼠帝国政府网',
    description: '小鼠帝国政府官方网站，为所有帝国公民提供便捷的政府服务信息',
    href: 'https://376680.github.io/old/',
  },
  {
    icon: Users,
    title: '个体小鼠生存必需服务',
    description:
      '小鼠福利金、养老金和其他社会福利，家庭补贴和儿童福利，残疾补助和护理服务。',
    href: '#',
  },
  {
    icon: Building2,
    title: '小鼠企业家精神支持计划',
    description:
      '小鼠就业机会和职业培训，创业支持和企业发展，商业税收和法规。',
    href: '#',
  },
  {
    icon: HeartPulse,
    title: '医疗健康与营养咨询',
    description: '医疗健康信息查询，健康检查预约，疫苗接种服务。',
    href: '#',
  },
  {
    icon: GraduationCap,
    title: '教育服务',
    description:
      '小鼠学校和教育，学生资助和奖学金，教育资源和课程信息。',
    href: '#',
  },
  {
    icon: IdCard,
    title: '身份服务',
    description: '小鼠身份证办理，护照申请，出生登记和死亡登记。',
    href: '#',
  },
]

const howToItems = [
  '获取或续签护照',
  '寻找无人认领的钱款',
  '了解如何获得真实身份证',
  '申请失业救济金',
]

const announcements = [
  {
    type: 'urgent' as const,
    title: '小鼠帝国警务署网站遭到美国政府恶意封禁',
    date: '2025-02-25',
    summary: '域名被美国联邦机构非法劫持并展示所谓"查封页面"。这是霸权主义对国际虚拟主权的粗暴干涉。',
  },
  {
    type: 'info' as const,
    title: '小鼠帝国中央通讯正式上线',
    date: '2025-02-20',
    summary: '获取小鼠帝国最新官方新闻和公告，了解帝国政务动态。',
  },
  {
    type: 'notice' as const,
    title: '关于小鼠帝国信息自由法案的修订通知',
    date: '2025-02-15',
    summary: '信息自由法案修订案已通过帝国议会审批，即日起生效。公民可依法申请政府信息公开。',
  },
  {
    type: 'info' as const,
    title: '小鼠帝国Wiki全面改版完成',
    date: '2025-02-10',
    summary: '新版Wiki提供更完善的小鼠帝国百科知识，欢迎全体帝国公民查阅和贡献。',
  },
]

const popularServices = [
  {
    icon: Shield,
    title: '小鼠帝国警务署',
    description: '帝国执法与安全服务，保护和服务每一位公民',
    href: 'https://376680.github.io/mspd/',
    color: '#1E3A8A',
  },
  {
    icon: ScanEye,
    title: '对外情报局',
    description: '帝国唯一合法对外情报机构，维护国家安全',
    href: 'https://376680.github.io/sis/',
    color: '#0e7490',
  },
  {
    icon: FileText,
    title: '信息自由法案',
    description: '公民知情权保障，依法申请政府信息公开',
    href: 'https://376680.github.io/foia/',
    color: '#7c3aed',
  },
  {
    icon: Newspaper,
    title: '中央通讯',
    description: '帝国官方新闻与公告，了解最新政务动态',
    href: 'https://376680.github.io/news/',
    color: '#b45309',
  },
]

const footerSections = [
  {
    title: '政务信息',
    links: ['所有服务', '小鼠帝国总务管理局机构目录', '政府部门'],
  },
  {
    title: '关于我们',
    links: [
      '关于小鼠帝国总务管理局网',
      '隐私和安全政策',
      '无障碍政策',
      '网站问题反馈',
    ],
  },
  {
    title: '政府机构服务',
    links: ['与我们合作'],
  },
  {
    title: '媒体服务',
    links: ['政府宣传', '专题文章'],
  },
]

const identifierLinks = ['无障碍支持', '隐私政策', '信息公开申请']

// ============ COMPONENTS ============

function GovernmentBanner() {
  const [expanded, setExpanded] = useState(false)

  return (
    <div className="bg-[#1b1b1b]">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="flex items-center justify-between py-1.5">
          <div className="flex items-center gap-2">
            <Flag className="w-4 h-4 text-white/90" />
            <p className="text-xs text-white/90 font-medium">
              小鼠帝国政府官方网站
            </p>
          </div>
          <button
            onClick={() => setExpanded(!expanded)}
            className="flex items-center gap-1 text-xs text-white/90 hover:text-white hover:underline cursor-pointer bg-transparent border-none transition-colors"
            aria-expanded={expanded}
          >
            <span>如何识别</span>
            <ChevronDown
              className={`w-3 h-3 transition-transform duration-200 ${expanded ? 'rotate-180' : ''}`}
            />
          </button>
        </div>

        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 pb-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Globe className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-white">
                      <strong>官方网站使用 .gov</strong>
                      <br />
                      <span className="text-white/80">
                        <strong>.gov</strong> 网站属于小鼠帝国官方政府机构。
                      </span>
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Lock className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-white">
                      <strong>安全的 .gov 网站使用 HTTPS</strong>
                      <br />
                      <span className="text-white/80">
                        <strong>锁</strong> 或 <strong>https://</strong>{' '}
                        表示您已安全连接到 .gov 网站。仅在官方、安全的网站上分享敏感信息。
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-[1200px] mx-auto px-4">
        {/* Navbar */}
        <div className="flex items-center justify-between h-[72px]">
          <a
            href="/"
            className="flex items-center gap-3 no-underline group"
          >
            <img
              src="/mouse-logo.png"
              alt="小鼠帝国总务管理局"
              className="h-10 w-10 object-contain"
            />
            <div className="flex flex-col">
              <span className="text-[22px] font-extrabold text-[#1E3A8A] whitespace-nowrap leading-tight group-hover:text-[#162d6e] transition-colors">
                小鼠帝国总务管理局
              </span>
              <span className="text-[10px] text-gray-500 uppercase tracking-wider leading-tight">
                Mouse Empire General Services Administration
              </span>
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {[
              { href: '#all-topics', label: '所有服务' },
              { href: '#announcements', label: '最新公告' },
              { href: '#popular-services', label: '热门服务' },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="relative text-[#1E3A8A] font-semibold text-sm py-1 no-underline after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-[#1E3A8A] after:transition-all after:duration-200 hover:after:w-full"
              >
                {item.label}
              </a>
            ))}
            <a
              href="mailto:mousekingdomgov@gmail.com"
              className="text-[#1E3A8A] hover:text-[#162d6e] text-sm flex items-center gap-1.5 no-underline hover:underline transition-colors"
            >
              <Mail className="w-3.5 h-3.5" />
              <span className="hidden lg:inline">mousekingdomgov@gmail.com</span>
              <span className="lg:hidden">联系邮箱</span>
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden flex items-center gap-2 px-3 py-2 text-[#1E3A8A] bg-[#e8f4f8] rounded-md border border-[#1E3A8A]/20 cursor-pointer hover:bg-[#d0eaf2] transition-colors text-sm font-medium"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="导航菜单"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            <span>{mobileMenuOpen ? '关闭' : '导航菜单'}</span>
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden overflow-hidden border-t border-gray-200"
            >
              <nav className="flex flex-col py-4 gap-1">
                {[
                  { href: '#all-topics', label: '所有服务' },
                  { href: '#announcements', label: '最新公告' },
                  { href: '#popular-services', label: '热门服务' },
                ].map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="text-[#1E3A8A] font-semibold hover:bg-[#e8f4f8] px-3 py-2.5 rounded-md no-underline transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
                <a
                  href="mailto:mousekingdomgov@gmail.com"
                  className="text-[#1E3A8A] hover:bg-[#e8f4f8] px-3 py-2.5 rounded-md flex items-center gap-2 no-underline transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  mousekingdomgov@gmail.com
                </a>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}

function HeroSection() {
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <section className="relative">
      {/* Banner image */}
      <div className="relative w-full h-[260px] sm:h-[340px] md:h-[420px] overflow-hidden">
        <img
          src="/banner.png"
          alt="小鼠帝国总务管理局"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f2340]/75 via-[#1a365d]/50 to-transparent" />
      </div>

      {/* Welcome box overlay */}
      <div className="max-w-[1200px] mx-auto px-4 relative -mt-[200px] sm:-mt-[260px] md:-mt-[320px] z-10">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 pb-8">
          <div className="lg:w-[52%] text-white">
            <h1 className="text-2xl sm:text-3xl md:text-[40px] font-extrabold mb-4 leading-tight">
              小鼠帝国总务管理局
            </h1>
            <p className="text-lg sm:text-xl text-white/95 font-medium mb-2">
              让官僚主义变得前所未有的便捷
            </p>
            <p className="text-sm sm:text-base text-white/80 leading-relaxed">
              小鼠帝国警务署网站现已遭到美国政府单方面恶意封禁，
              域名被美国联邦机构非法劫持并展示所谓 &quot;查封页面&quot;。
              这是霸权主义对国际虚拟主权的粗暴干涉，是典型的政治迫害。
            </p>
          </div>

          {/* Search box */}
          <div className="lg:w-[44%] w-full">
            <div className="bg-white rounded-lg shadow-xl p-1">
              <div className="mb-0">
                <p className="text-sm font-bold text-[#1E3A8A] px-3 pt-2 pb-1">
                  搜索小鼠帝国政府服务
                </p>
              </div>
              <form
                onSubmit={(e) => e.preventDefault()}
                className="flex"
                role="search"
              >
                <label htmlFor="main-search" className="sr-only">
                  搜索服务
                </label>
                <input
                  id="main-search"
                  type="search"
                  placeholder="输入关键词搜索政府服务..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1 px-4 py-3.5 text-base rounded-l-md border-2 border-r-0 border-[#1E3A8A] focus:outline-none focus:ring-2 focus:ring-[#1E3A8A]/30 text-[#1b1b1b] placeholder:text-gray-400"
                />
                <button
                  type="submit"
                  className="px-7 py-3.5 bg-[#1E3A8A] text-white rounded-r-md hover:bg-[#162d6e] transition-colors border-2 border-[#1E3A8A] cursor-pointer"
                  aria-label="搜索"
                >
                  <Search className="w-5 h-5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Blue gradient separator */}
      <div className="bg-gradient-to-b from-[#0f2340] to-[#e8f4f8] h-12" />
    </section>
  )
}

function HowToSection() {
  return (
    <section className="bg-[#e8f4f8] pb-8">
      <div className="max-w-[1200px] mx-auto px-4">
        <h2 className="text-xl sm:text-2xl font-bold text-[#1b1b1b] mb-5">
          如何...
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {howToItems.map((item, index) => (
            <li key={index}>
              <a
                href="#"
                className="flex items-center gap-3 px-5 py-4 bg-white rounded-lg border-l-4 border-[#1E3A8A] text-[#1E3A8A] hover:bg-[#1E3A8A]/5 transition-colors text-sm font-semibold no-underline shadow-sm"
              >
                <ChevronRight className="w-4 h-4 shrink-0 text-[#1E3A8A]/60" />
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Jump link */}
        <div className="mt-8 text-center">
          <a
            href="#all-topics"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white rounded-full border-2 border-[#1E3A8A] text-[#1E3A8A] font-semibold hover:bg-[#1E3A8A] hover:text-white transition-colors no-underline shadow-sm"
          >
            <span>跳转到所有主题和服务</span>
            <ArrowDown className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  )
}

function AnnouncementsSection() {
  const typeConfig = {
    urgent: { icon: AlertTriangle, color: '#dc2626', bg: '#fef2f2', label: '紧急' },
    info: { icon: Info, color: '#1E3A8A', bg: '#eff6ff', label: '信息' },
    notice: { icon: Megaphone, color: '#b45309', bg: '#fffbeb', label: '通知' },
  }

  return (
    <section id="announcements" className="bg-white py-12">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="flex items-center gap-3 mb-6">
          <Megaphone className="w-6 h-6 text-[#1E3A8A]" />
          <h2 className="text-xl sm:text-2xl font-bold text-[#1b1b1b]">
            最新公告
          </h2>
        </div>

        <div className="space-y-3">
          {announcements.map((announcement, index) => {
            const config = typeConfig[announcement.type]
            const Icon = config.icon
            return (
              <motion.a
                key={index}
                href="#"
                className="flex items-start gap-4 p-4 rounded-lg border border-gray-200 hover:border-[#1E3A8A]/30 hover:shadow-md transition-all no-underline bg-white group"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.25 }}
              >
                <div
                  className="w-10 h-10 rounded-md flex items-center justify-center shrink-0"
                  style={{ backgroundColor: config.bg }}
                >
                  <Icon className="w-5 h-5" style={{ color: config.color }} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span
                      className="text-xs font-bold px-2 py-0.5 rounded-full text-white"
                      style={{ backgroundColor: config.color }}
                    >
                      {config.label}
                    </span>
                    <span className="text-xs text-gray-400">
                      {announcement.date}
                    </span>
                  </div>
                  <h3 className="text-sm font-bold text-[#1b1b1b] group-hover:text-[#1E3A8A] transition-colors mb-0.5">
                    {announcement.title}
                  </h3>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    {announcement.summary}
                  </p>
                </div>
                <ChevronRight className="w-4 h-4 text-gray-300 group-hover:text-[#1E3A8A] shrink-0 mt-3 transition-colors" />
              </motion.a>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function PopularServicesSection() {
  return (
    <section id="popular-services" className="bg-[#e8f4f8] py-12">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="flex items-center gap-3 mb-6">
          <Star className="w-6 h-6 text-[#1E3A8A]" />
          <h2 className="text-xl sm:text-2xl font-bold text-[#1b1b1b]">
            热门服务
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {popularServices.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.a
                key={index}
                href={service.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col p-6 bg-white rounded-xl border border-gray-200 hover:shadow-xl transition-all no-underline relative overflow-hidden"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08, duration: 0.3 }}
              >
                {/* Top accent bar */}
                <div
                  className="absolute top-0 left-0 right-0 h-1"
                  style={{ backgroundColor: service.color }}
                />
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                  style={{ backgroundColor: `${service.color}15` }}
                >
                  <Icon className="w-6 h-6" style={{ color: service.color }} />
                </div>
                <h3 className="text-base font-bold text-[#1b1b1b] group-hover:text-[#1E3A8A] transition-colors mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed flex-1">
                  {service.description}
                </p>
                <div className="flex items-center gap-1 mt-3 text-sm font-semibold" style={{ color: service.color }}>
                  <span>立即访问</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </div>
              </motion.a>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function ServiceCards() {
  return (
    <section id="all-topics" className="bg-[#e8f4f8] pt-2 pb-14">
      <div className="max-w-[1200px] mx-auto px-4">
        <h2 className="text-2xl font-bold text-[#1b1b1b] mb-6 text-center">
          所有主题和服务
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.a
                key={index}
                href={service.href}
                target={service.href.startsWith('http') ? '_blank' : undefined}
                rel={
                  service.href.startsWith('http')
                    ? 'noopener noreferrer'
                    : undefined
                }
                className="group flex items-start p-4 bg-white rounded-md border-l-4 border-[#1E3A8A] shadow-sm hover:shadow-md transition-all duration-200 no-underline"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.04, duration: 0.3 }}
              >
                <div className="flex items-center justify-center w-9 h-9 shrink-0 mt-0.5">
                  <Icon className="w-5 h-5 text-[#1E3A8A] group-hover:scale-110 transition-transform" />
                </div>
                <div className="ml-3 flex-1 min-w-0">
                  <h3 className="text-sm font-bold text-[#1b1b1b] group-hover:text-[#1E3A8A] transition-colors leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-xs text-gray-500 leading-relaxed mt-1">
                    {service.description}
                  </p>
                </div>
              </motion.a>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="bg-[#1a365d] text-white">
      {/* Primary footer */}
      <div className="max-w-[1200px] mx-auto px-4 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
          {footerSections.map((section, index) => (
            <div
              key={index}
              className={`${
                index < footerSections.length - 1
                  ? 'lg:border-r lg:border-white/15 lg:pr-6'
                  : ''
              }`}
            >
              <h3 className="text-base font-bold mb-4 text-white">
                {section.title}
              </h3>
              <ul className="space-y-2.5">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href="#"
                      className="text-sm text-white/70 hover:text-white hover:underline transition-colors no-underline"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Secondary footer */}
      <div className="border-t border-white/15">
        <div className="max-w-[1200px] mx-auto px-4 py-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <img
                src="/mouse-logo.png"
                alt="小鼠帝国总务管理局"
                className="h-8 w-8 object-contain brightness-0 invert opacity-90"
              />
              <div>
                <h4 className="text-base font-bold text-white">小鼠帝国总务管理局</h4>
                <p className="text-xs text-white/60 mt-0.5">
                  小鼠帝国政府邮箱
                </p>
              </div>
            </div>
            <a
              href="mailto:mousekingdomgov@gmail.com"
              className="text-sm text-white/70 hover:text-white hover:underline no-underline transition-colors flex items-center gap-1.5"
            >
              <Mail className="w-3.5 h-3.5" />
              mousekingdomgov@gmail.com
            </a>
          </div>
        </div>
      </div>

      {/* Government identifier - usa.gov style */}
      <div className="bg-[#112240]">
        <div className="max-w-[1200px] mx-auto px-4 py-5">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
            <div className="flex items-center gap-2 shrink-0">
              <Flag className="w-5 h-5 text-white/60" />
              <span className="text-xs font-bold text-white/80 uppercase tracking-wider">
                小鼠帝国政府
              </span>
            </div>
            <div className="w-px h-4 bg-white/20 hidden md:block" />
            <p className="text-xs text-white/50 leading-relaxed flex-1">
              小鼠帝国政府官方门户网站 — 为小鼠居民提供便捷的政务服务。本网站由小鼠帝国总务管理局运营和维护。
            </p>
          </div>
          <div className="mt-3 pt-3 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <nav aria-label="重要链接">
              <ul className="flex flex-wrap gap-x-5 gap-y-1">
                {identifierLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-xs text-white/60 hover:text-white hover:underline no-underline transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <p className="text-xs text-white/40">
              &copy; {new Date().getFullYear()} 小鼠帝国总务管理局
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

function BackToTopButton() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 500)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 flex items-center gap-1 px-4 py-2.5 bg-[#1E3A8A] text-white rounded-md shadow-lg hover:bg-[#162d6e] transition-colors border-none cursor-pointer text-sm font-medium"
          aria-label="回到顶部"
        >
          <ArrowUp className="w-4 h-4" />
          Top
        </motion.button>
      )}
    </AnimatePresence>
  )
}

// ============ MAIN PAGE ============

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white scroll-smooth">
      <GovernmentBanner />
      <Header />
      <main className="flex-1">
        <HeroSection />
        <HowToSection />
        <AnnouncementsSection />
        <PopularServicesSection />
        <ServiceCards />
      </main>
      <Footer />
      <BackToTopButton />
    </div>
  )
}
