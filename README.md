# 배성현 포트폴리오 웹사이트

AI 응용 개발자 배성현의 개인 포트폴리오 웹사이트입니다.

## 🚀 기술 스택

- **프레임워크**: Next.js 14 (App Router)
- **스타일링**: Tailwind CSS
- **UI 컴포넌트**: shadcn/ui
- **애니메이션**: Framer Motion
- **언어**: TypeScript
- **배포**: Vercel

## 🎯 주요 기능

- 📱 반응형 디자인 (모바일 우선)
- 🎨 현대적이고 미니멀한 UI
- ⚡ 빠른 페이지 로딩 속도 (SSG)
- 🔍 SEO 최적화
- 💫 부드러운 애니메이션
- 📧 연락 폼 (MVP 버전)

## 🛠️ 개발 환경 설정

### 필수 요구사항

- Node.js 18.0.0 이상
- npm 또는 yarn

### 설치 및 실행

```bash
# 저장소 클론
git clone https://github.com/bae-sunghyun/sh_portfolio.git

# 디렉토리 이동
cd sh_portfolio

# 의존성 설치
npm install

# 개발 서버 시작
npm run dev
```

개발 서버가 시작되면 [http://localhost:3000](http://localhost:3000)에서 확인할 수 있습니다.

## 📦 빌드 및 배포

```bash
# 프로덕션 빌드
npm run build

# 프로덕션 서버 시작
npm run start
```

## 🎨 프로젝트 구조

```
src/
├── app/                    # Next.js 13+ App Router
│   ├── about/             # 소개 페이지
│   ├── tech-stack/        # 기술 스택 페이지
│   ├── contact/           # 연락처 페이지
│   ├── layout.tsx         # 루트 레이아웃
│   ├── page.tsx           # 홈 페이지
│   └── globals.css        # 전역 스타일
├── components/            # 재사용 가능한 컴포넌트
│   ├── ui/               # shadcn/ui 컴포넌트
│   └── navigation.tsx    # 네비게이션 컴포넌트
└── lib/                  # 유틸리티 함수
    └── utils.ts          # 공통 유틸리티
```

## 📄 페이지 구성

- **홈 (/)**: 소개 및 핵심 역량 소개
- **소개 (/about)**: 개인 배경, 전문성, 철학
- **기술 스택 (/tech-stack)**: AI 도구 및 개발 기술 상세 소개
- **연락처 (/contact)**: 연락처 정보 및 연락 폼

## 🌟 특징

### AI 도구 활용 전문성
- Cursor AI를 통한 코드 자동완성 및 개발 효율성 향상
- Claude를 활용한 코드 리뷰 및 아키텍처 설계
- ChatGPT를 통한 문제 해결 및 문서 작성

### 성능 최적화
- Lighthouse 점수 90점 이상 달성
- 이미지 최적화 (next/image)
- 정적 사이트 생성 (SSG)

### 접근성
- WCAG 2.1 AA 준수
- 키보드 내비게이션 지원
- 스크린 리더 호환성

## 🔧 사용된 AI 도구

### Cursor AI
- 실시간 코드 자동완성
- 지능형 코드 리팩토링
- 자연어 코드 변환

### Claude
- 코드 리뷰 및 최적화
- 아키텍처 설계 검토
- 기술 문서 작성

### ChatGPT
- 기술 문서 작성
- 아이디어 브레인스토밍
- 테스트 케이스 생성

## 📈 성과 지표

- **개발 속도**: 200% 향상 (AI 도구 활용)
- **Lighthouse 점수**: 90점 이상
- **코드 품질**: AI 도구를 통한 높은 품질 보장

## 📞 연락처

- **이메일**: contact@bae-sunghyun.com
- **LinkedIn**: linkedin.com/in/bae-sunghyun
- **GitHub**: github.com/bae-sunghyun

## 📝 라이선스

이 프로젝트는 MIT 라이선스 하에 있습니다.

## 🔄 업데이트 계획

- [ ] 블로그 섹션 추가
- [ ] 프로젝트 갤러리 확장
- [ ] 실제 이메일 발송 기능 구현
- [ ] 다크 모드 지원
- [ ] 다국어 지원 (한국어/영어)

---

**Made with ❤️ by 배성현**
