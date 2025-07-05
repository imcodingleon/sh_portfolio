"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { 
  Brain, 
  Code2, 
  Database, 
  Cloud, 
  Monitor, 
  Zap, 
  Bot,
  FileText,
  Figma,
  Terminal
} from "lucide-react";

const aiTools = [
  {
    name: "Cursor AI",
    description: "AI 기반 코드 에디터로 코드 자동완성, 리팩토링, 디버깅을 지원합니다.",
    icon: <Bot className="h-6 w-6" />,
    proficiency: 95,
    experience: "매일 사용하는 주요 개발 도구로, 개발 생산성을 200% 향상시켰습니다.",
    features: [
      "실시간 코드 자동완성",
      "지능형 코드 리팩토링",
      "버그 자동 감지 및 수정",
      "자연어 코드 변환",
      "코드 설명 및 문서화"
    ]
  },
  {
    name: "Claude",
    description: "Anthropic의 AI 어시스턴트로 코드 리뷰, 아키텍처 설계, 문제 해결에 활용합니다.",
    icon: <Brain className="h-6 w-6" />,
    proficiency: 90,
    experience: "복잡한 기술적 문제 해결과 코드 리뷰에 적극 활용하고 있습니다.",
    features: [
      "코드 리뷰 및 최적화",
      "아키텍처 설계 검토",
      "기술 문서 작성",
      "문제 해결 컨설팅",
      "학습 자료 큐레이션"
    ]
  },
  {
    name: "ChatGPT",
    description: "OpenAI의 GPT 모델로 기술 문서 작성, 아이디어 발굴, 문제 해결에 활용합니다.",
    icon: <FileText className="h-6 w-6" />,
    proficiency: 85,
    experience: "일상적인 개발 업무에서 문서 작성과 아이디어 발굴에 활용하고 있습니다.",
    features: [
      "기술 문서 작성",
      "API 문서 생성",
      "테스트 케이스 작성",
      "아이디어 브레인스토밍",
      "코드 주석 생성"
    ]
  },
  {
    name: "Figma",
    description: "AI 기반 디자인 워크플로우를 통해 UI/UX 설계와 프로토타이핑을 수행합니다.",
    icon: <Figma className="h-6 w-6" />,
    proficiency: 80,
    experience: "디자인 시스템 구축과 사용자 인터페이스 설계에 활용하고 있습니다.",
    features: [
      "UI/UX 디자인",
      "프로토타이핑",
      "디자인 시스템 관리",
      "컴포넌트 라이브러리",
      "협업 워크플로우"
    ]
  }
];

const techStack = [
  {
    category: "Frontend",
    icon: <Monitor className="h-6 w-6" />,
    color: "bg-blue-100 text-blue-600",
    technologies: [
      { name: "Next.js", proficiency: 95, description: "React 프레임워크, SSG/SSR 구현" },
      { name: "React", proficiency: 90, description: "컴포넌트 기반 UI 라이브러리" },
      { name: "TypeScript", proficiency: 85, description: "타입 안정성과 개발 생산성 향상" },
      { name: "Tailwind CSS", proficiency: 90, description: "유틸리티 퍼스트 CSS 프레임워크" },
      { name: "shadcn/ui", proficiency: 85, description: "모던 UI 컴포넌트 라이브러리" },
      { name: "Framer Motion", proficiency: 75, description: "React 애니메이션 라이브러리" }
    ]
  },
  {
    category: "Backend",
    icon: <Database className="h-6 w-6" />,
    color: "bg-green-100 text-green-600",
    technologies: [
      { name: "Node.js", proficiency: 80, description: "서버사이드 JavaScript 런타임" },
      { name: "Python", proficiency: 75, description: "AI/ML 프로젝트 및 스크립팅" },
      { name: "FastAPI", proficiency: 70, description: "고성능 Python 웹 프레임워크" },
      { name: "PostgreSQL", proficiency: 75, description: "관계형 데이터베이스" },
      { name: "MongoDB", proficiency: 70, description: "NoSQL 데이터베이스" },
      { name: "Prisma", proficiency: 80, description: "Next.js와 TypeScript용 ORM" }
    ]
  },
  {
    category: "Cloud & DevOps",
    icon: <Cloud className="h-6 w-6" />,
    color: "bg-purple-100 text-purple-600",
    technologies: [
      { name: "Vercel", proficiency: 90, description: "Next.js 애플리케이션 배포 플랫폼" },
      { name: "AWS", proficiency: 70, description: "클라우드 인프라 서비스" },
      { name: "Docker", proficiency: 75, description: "컨테이너화 및 배포" },
      { name: "GitHub Actions", proficiency: 80, description: "CI/CD 파이프라인" },
      { name: "Netlify", proficiency: 85, description: "정적 사이트 배포" },
      { name: "Supabase", proficiency: 75, description: "오픈소스 Firebase 대안" }
    ]
  },
  {
    category: "Tools & Workflow",
    icon: <Terminal className="h-6 w-6" />,
    color: "bg-orange-100 text-orange-600",
    technologies: [
      { name: "Git", proficiency: 90, description: "버전 관리 시스템" },
      { name: "GitHub", proficiency: 85, description: "코드 협업 플랫폼" },
      { name: "VS Code", proficiency: 80, description: "통합 개발 환경" },
      { name: "Postman", proficiency: 75, description: "API 테스팅 도구" },
      { name: "Figma", proficiency: 80, description: "UI/UX 디자인 도구" },
      { name: "Notion", proficiency: 85, description: "프로젝트 관리 및 문서화" }
    ]
  }
];

export default function TechStack() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              기술 스택
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              AI 도구를 활용한 현대적 웹 개발을 위한 기술 스택과 
              <br />
              각 기술에 대한 숙련도를 소개합니다.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <Tabs defaultValue="ai-tools" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="ai-tools">AI 도구</TabsTrigger>
              <TabsTrigger value="development">개발 기술</TabsTrigger>
            </TabsList>

            {/* AI Tools Tab */}
            <TabsContent value="ai-tools" className="mt-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">AI 도구 활용</h2>
                  <p className="text-gray-600">
                    개발 생산성을 극대화하는 AI 도구들과 활용 방법
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {aiTools.map((tool, index) => (
                    <motion.div
                      key={tool.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: index * 0.1 }}
                    >
                      <Card className="h-full">
                        <CardHeader>
                          <div className="flex items-center gap-3 mb-4">
                            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                              {tool.icon}
                            </div>
                            <div>
                              <CardTitle className="text-xl">{tool.name}</CardTitle>
                              <div className="flex items-center gap-2 mt-1">
                                <Progress value={tool.proficiency} className="w-20" />
                                <span className="text-sm text-gray-600">{tool.proficiency}%</span>
                              </div>
                            </div>
                          </div>
                          <CardDescription>{tool.description}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-4">
                            <div>
                              <h4 className="font-semibold text-gray-900 mb-2">활용 경험</h4>
                              <p className="text-sm text-gray-600">{tool.experience}</p>
                            </div>
                            <Separator />
                            <div>
                              <h4 className="font-semibold text-gray-900 mb-3">주요 기능</h4>
                              <div className="space-y-2">
                                {tool.features.map((feature, featureIndex) => (
                                  <div key={featureIndex} className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                                    <span className="text-sm text-gray-600">{feature}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </TabsContent>

            {/* Development Stack Tab */}
            <TabsContent value="development" className="mt-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">개발 기술 스택</h2>
                  <p className="text-gray-600">
                    현대적이고 효율적인 웹 애플리케이션 개발을 위한 기술들
                  </p>
                </div>

                <div className="space-y-12">
                  {techStack.map((stack, stackIndex) => (
                    <motion.div
                      key={stack.category}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: stackIndex * 0.1 }}
                    >
                      <Card>
                        <CardHeader>
                          <CardTitle className="flex items-center gap-3 text-2xl">
                            <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${stack.color}`}>
                              {stack.icon}
                            </div>
                            {stack.category}
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {stack.technologies.map((tech) => (
                              <div key={tech.name} className="space-y-2">
                                <div className="flex items-center justify-between">
                                  <h4 className="font-semibold text-gray-900">{tech.name}</h4>
                                  <span className="text-sm text-gray-600">{tech.proficiency}%</span>
                                </div>
                                <Progress value={tech.proficiency} className="h-2" />
                                <p className="text-sm text-gray-600">{tech.description}</p>
                              </div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Workflow Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">개발 워크플로우</h2>
            <p className="text-gray-600">AI 도구를 활용한 효율적인 개발 프로세스</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Code2 className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-center">1. 계획 & 설계</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Badge variant="outline">Claude</Badge>
                      <span className="text-sm">아키텍처 설계</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline">Figma</Badge>
                      <span className="text-sm">UI/UX 디자인</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline">ChatGPT</Badge>
                      <span className="text-sm">기술 문서 작성</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardHeader>
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Zap className="h-6 w-6 text-green-600" />
                  </div>
                  <CardTitle className="text-center">2. 개발 & 구현</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Badge variant="outline">Cursor AI</Badge>
                      <span className="text-sm">코드 자동완성</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline">Next.js</Badge>
                      <span className="text-sm">프레임워크</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline">TypeScript</Badge>
                      <span className="text-sm">타입 안정성</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardHeader>
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Cloud className="h-6 w-6 text-purple-600" />
                  </div>
                  <CardTitle className="text-center">3. 배포 & 운영</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Badge variant="outline">Vercel</Badge>
                      <span className="text-sm">자동 배포</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline">GitHub</Badge>
                      <span className="text-sm">버전 관리</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline">Claude</Badge>
                      <span className="text-sm">코드 리뷰</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Performance Stats */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">성과 지표</h2>
            <p className="text-gray-600">AI 도구 활용을 통한 개발 성과</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="text-center">
                <CardHeader>
                  <CardTitle className="text-3xl font-bold text-blue-600">200%</CardTitle>
                  <CardDescription>개발 속도 향상</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">
                    AI 도구 활용으로 개발 생산성 대폭 향상
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="text-center">
                <CardHeader>
                  <CardTitle className="text-3xl font-bold text-green-600">90+</CardTitle>
                  <CardDescription>Lighthouse 점수</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">
                    우수한 웹 성능과 사용자 경험
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Card className="text-center">
                <CardHeader>
                  <CardTitle className="text-3xl font-bold text-purple-600">100%</CardTitle>
                  <CardDescription>코드 커버리지</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">
                    AI 도구를 통한 높은 코드 품질 보장
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
} 