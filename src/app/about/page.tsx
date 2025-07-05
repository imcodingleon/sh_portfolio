"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { BookOpen, Award, Heart, Code2, Lightbulb, Users } from "lucide-react";
import Link from "next/link";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              배성현을 소개합니다
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              AI 도구를 활용한 현대적 웹 개발에 전념하는 개발자입니다.
              <br />
              효율성과 혁신을 추구하며, 사용자 중심의 솔루션을 만들어갑니다.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Personal Story */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="mb-12">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <Code2 className="h-6 w-6 text-blue-600" />
                  개발자로서의 여정
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-600 space-y-4">
                <p>
                  안녕하세요! 저는 AI 도구를 활용한 현대적 웹 개발에 전념하는 개발자 배성현입니다. 
                  전통적인 개발 방식에서 벗어나 AI 도구들을 적극적으로 활용하여 개발 생산성을 극대화하고 있습니다.
                </p>
                <p>
                  Cursor AI, Claude, ChatGPT와 같은 AI 도구들을 일상적인 개발 워크플로우에 통합하여 
                  코드 작성, 디버깅, 리팩토링 등의 작업을 더욱 효율적으로 수행하고 있습니다.
                </p>
                <p>
                  특히 Next.js, React, TypeScript를 기반으로 한 모던 웹 개발에 집중하며, 
                  사용자 경험을 최우선으로 하는 인터페이스 설계에 열정을 가지고 있습니다.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">핵심 가치와 철학</h2>
            <p className="text-gray-600">개발자로서 추구하는 가치와 업무 철학</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <Lightbulb className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-lg">혁신적 사고</CardTitle>
                  <CardDescription>
                    AI 도구를 활용한 새로운 개발 방법론 연구
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">
                    전통적인 개발 방식에 안주하지 않고, AI 도구들을 적극적으로 활용하여 
                    개발 효율성을 극대화하는 방법을 끊임없이 연구합니다.
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
              <Card className="h-full">
                <CardHeader>
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-green-600" />
                  </div>
                  <CardTitle className="text-lg">사용자 중심</CardTitle>
                  <CardDescription>
                    사용자 경험을 최우선으로 하는 개발 철학
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">
                    모든 개발 결정은 사용자의 관점에서 시작합니다. 
                    직관적이고 접근하기 쉬운 인터페이스 설계를 통해 최고의 사용자 경험을 제공합니다.
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
              <Card className="h-full">
                <CardHeader>
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                    <Heart className="h-6 w-6 text-purple-600" />
                  </div>
                  <CardTitle className="text-lg">지속적 학습</CardTitle>
                  <CardDescription>
                    빠르게 변화하는 기술에 대한 끊임없는 학습
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">
                    AI 및 웹 개발 기술의 빠른 발전에 발맞춰 지속적으로 학습하고, 
                    새로운 기술을 프로젝트에 적용하는 것을 즐깁니다.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Professional Experience */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">전문 경험</h2>
            <p className="text-gray-600">AI 도구를 활용한 개발 경험과 성과</p>
          </motion.div>

          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">AI 도구 워크플로우 최적화</CardTitle>
                  <CardDescription className="text-gray-600">
                    개발 생산성 향상을 위한 AI 도구 활용법 연구 및 실무 적용
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">Cursor AI</Badge>
                      <Badge variant="secondary">Claude</Badge>
                      <Badge variant="secondary">ChatGPT</Badge>
                      <Badge variant="secondary">GitHub Copilot</Badge>
                    </div>
                    <ul className="text-sm text-gray-600 space-y-2">
                      <li>• Cursor AI를 활용한 코드 자동완성 및 리팩토링으로 개발 속도 200% 향상</li>
                      <li>• Claude를 통한 코드 리뷰 및 아키텍처 설계 검토 자동화</li>
                      <li>• ChatGPT를 활용한 기술 문서 작성 및 문제 해결 프로세스 최적화</li>
                    </ul>
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
                  <CardTitle className="text-xl">현대적 웹 애플리케이션 개발</CardTitle>
                  <CardDescription className="text-gray-600">
                    Next.js, React, TypeScript를 기반으로 한 고성능 웹 애플리케이션 구축
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">Next.js 14</Badge>
                      <Badge variant="secondary">React</Badge>
                      <Badge variant="secondary">TypeScript</Badge>
                      <Badge variant="secondary">Tailwind CSS</Badge>
                      <Badge variant="secondary">shadcn/ui</Badge>
                    </div>
                    <ul className="text-sm text-gray-600 space-y-2">
                      <li>• SSG/SSR을 활용한 SEO 최적화 및 빠른 페이지 로딩 속도 구현</li>
                      <li>• TypeScript를 통한 타입 안정성 확보 및 개발 생산성 향상</li>
                      <li>• Tailwind CSS와 shadcn/ui를 활용한 일관된 디자인 시스템 구축</li>
                    </ul>
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
                  <CardTitle className="text-xl">사용자 경험 최적화</CardTitle>
                  <CardDescription className="text-gray-600">
                    성능과 접근성을 고려한 사용자 중심의 웹 애플리케이션 설계
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">Performance</Badge>
                      <Badge variant="secondary">Accessibility</Badge>
                      <Badge variant="secondary">SEO</Badge>
                      <Badge variant="secondary">Responsive Design</Badge>
                    </div>
                    <ul className="text-sm text-gray-600 space-y-2">
                      <li>• Lighthouse 점수 90점 이상 달성을 통한 우수한 웹 성능 구현</li>
                      <li>• WCAG 2.1 AA 준수를 통한 접근성 향상</li>
                      <li>• 모바일 우선 반응형 디자인으로 모든 디바이스에서 최적화된 경험 제공</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Education & Skills */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">교육 및 스킬</h2>
            <p className="text-gray-600">지속적인 학습과 기술 역량 개발</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BookOpen className="h-5 w-5 text-blue-600" />
                    교육 배경
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-gray-900">컴퓨터 공학 전공</h3>
                      <p className="text-sm text-gray-600">웹 개발 및 소프트웨어 엔지니어링 기초</p>
                    </div>
                    <Separator />
                    <div>
                      <h3 className="font-semibold text-gray-900">AI 도구 활용 전문 과정</h3>
                      <p className="text-sm text-gray-600">Cursor AI, Claude, ChatGPT 활용법 연구</p>
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
                  <CardTitle className="flex items-center gap-2">
                    <Award className="h-5 w-5 text-green-600" />
                    주요 성과
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-gray-900">개발 생산성 200% 향상</h3>
                      <p className="text-sm text-gray-600">AI 도구 활용을 통한 개발 효율성 극대화</p>
                    </div>
                    <Separator />
                    <div>
                      <h3 className="font-semibold text-gray-900">고성능 웹 애플리케이션 구축</h3>
                      <p className="text-sm text-gray-600">Lighthouse 점수 90점 이상 달성</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Personal Interests */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">개인적 관심사</h2>
            <p className="text-gray-600">개발 외의 관심사와 취미 활동</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardContent className="pt-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <BookOpen className="h-8 w-8 text-blue-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">기술 서적 독서</h3>
                    <p className="text-sm text-gray-600">
                      최신 기술 트렌드와 AI 관련 서적을 통한 지식 확장
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Code2 className="h-8 w-8 text-green-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">오픈소스 기여</h3>
                    <p className="text-sm text-gray-600">
                      개발 커뮤니티에 기여하며 지식 공유 및 네트워킹
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Lightbulb className="h-8 w-8 text-purple-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">신기술 연구</h3>
                    <p className="text-sm text-gray-600">
                      새로운 AI 도구와 개발 방법론에 대한 지속적인 연구
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              더 자세한 이야기를 나누고 싶으시다면
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              AI 도구를 활용한 개발 경험과 프로젝트에 대해 언제든 연락주세요.
            </p>
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Link href="/contact">
                연락하기
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 