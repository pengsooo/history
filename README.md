# history — 개인 이력 홈페이지

이력 데이터(YAML)를 수정하면 GitHub Pages에 자동 배포되는 정적 자기소개 사이트입니다.

- 배포 주소: https://pengsooo.github.io/history/
- 기술 스택: [Astro](https://astro.build) + GitHub Actions + GitHub Pages

## 이력 수정 방법

화면 코드는 건드리지 않고 `data/` 폴더의 YAML 파일만 수정하면 됩니다.

| 파일 | 내용 |
|---|---|
| `data/profile.yml` | 이름, 소개, 핵심 지표, 연락처 링크 |
| `data/career.yml` | 경력 (최신순, `end` 비우면 "현재") |
| `data/certifications.yml` | 보유 자격증 |
| `data/audits.yml` | 인증 수행 이력 (연도별 매트릭스로 표시) |
| `data/projects.yml` | 주요 프로젝트·성과 |

GitHub 웹에서 파일을 열고 ✏️(Edit) → 수정 → Commit 하면 `main` 브랜치 기준 약 1~2분 후 사이트에 반영됩니다.

## 공개 전 보안 체크리스트

- [ ] 고객사명·심사 결과 등 NDA 대상 정보가 없는가 (비식별·집계 형태로 표기)
- [ ] 사내 조직·시스템·취약점 정보가 사내 공개 정책에 부합하는가
- [ ] 휴대폰 번호·상세 주소 등 불필요한 개인정보가 없는가
- [ ] 샘플 데이터(홍길동, 샘플 주식회사 등)를 모두 실제 내용으로 교체했는가

> 한 번 푸시된 내용은 파일을 지워도 Git 이력에 남습니다. 민감 정보는 처음부터 넣지 마세요.

## 최초 1회 설정

1. 저장소 **Settings → Pages → Build and deployment → Source**를 **GitHub Actions**로 선택
2. 작업 브랜치를 `main`에 병합하면 자동 배포

## 로컬 실행

```bash
npm install
npm run dev      # http://localhost:4321/history/
npm run build    # dist/ 생성
```
