# 팀 빌딩을 위한 조직 내 대화 솔루션

## 배포 링크
> AWS S3, CloudFront, Route53 배포 / Github Actions CICD 구축

- [134 서비스 링크](https://134.works)

## 실행 방법
```
git clone https://github.com/134talk/frontend.git
yarn install
yarn start
```
## 서비스 개요
> 2023/04/25 ~
#### 프로젝트 주제
- 팀 빌딩을 위한 조직 내 대화에서, 상대를 심리적 또한 업무적으로 잘 성장 시킬 수 있는 코칭 리더십을 펼칠 수 있게 질문과 대화 서비스를 제공
#### 개발 목적
- 조직문화 개선, 퇴사율 방어, 소속감 증대
- 사람과 사람의 마음의 경계를 허물고, 서로 깊게 연결해주는 대화 주제와 질문 제공하는 saas 서비스

## 페이지 주요 기능
| 로그인 페이지 | 회원 등록 페이지 |
|---|---|
|<img src="" width="400" />|<img src="" width="400"/>|
|▪︎ 카카오 소셜 로그인 |▪︎ 관리자, 일반 회원 권한별 회원 등록 <br /> ▪︎ 유효성 검사 |

| 닉네임 설정 페이지 | 대화 목록 페이지 |
|---|---|
|<img src="" width="400" />|<img src="" width="400"/>|
|▪︎ 참가자 성향 조사 데이터에 따라 닉네임 제공 |▪︎ 권한별 대화 목록 조회 및 검색 <br /> ▪︎ 관리자 권한 대화 시간 설정 <br /> ▪︎ 대화 초대 모달을 통해 대화 생성 <br /> ▪︎ 대화방 입장 시 대화 가이드 제공 |

| 참가자 목록 페이지 | 대화 페이지 |
|---|---|
|<img src="" width="400" />|<img src="" width="400"/>|
| ▪︎ 참가자 목록 조회 및 검색 <br /> ▪︎ 카카오나 링크 공유를 통한 채널 초대 |▪︎ 주제 선택 > 질문 순서 배정 > 대화 참여 대기 > 대화 순서 랜덤 배정 > 대화 진행 <br /> ▪︎ 참가자 성향에 맞는 질문 랜덤 배정 후 질문 3개에 대한 순서 배정 <br /> ▪︎ 대화 참여 소켓 연결 및 랜덤 배정된 대화 컨텐츠 조회 <br /> ▪︎ 대화 진행 중 감정 기록 및 전송된 감정 애니메이션 노출 <br /> ▪︎ 대화 종료 후 피드백 작성|

| 리포트 페이지 | 마이 페이지 |
|---|---|
|<img src="" width="400" />|<img src="" width="400"/>|
|▪︎ 팀 대화 통계 리포트 열람 <br /> ▪︎ 관리자 권한 팀원 대화 통계 리포트 열람| ▪︎ 프로필 조회 <br /> ▪︎ 닉네임 수정 <br /> ▪︎ 일자별 개인 대화 통계 리포트 열람 |

## 아키텍쳐

## 기술 스택
- React, TypeScript
- React-Query, ReduxTK
- Socket.IO
- Axios
- Styled-Components

 ## 기타
 - [Convention](https://github.com/134talk/frontend/issues/1)
 - [Directory](https://github.com/134talk/frontend/issues/2)
 - [UserFlow](https://www.figma.com/file/NnApm0KFSnMFfcuEpLmyug/Untitled?type=design&node-id=0%3A1&mode=design&t=E3Y2ovnh8mFhcxcv-1)
