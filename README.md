<h1 align="center"> 기프티곤 거래 웹애플리케이션 클론 프로젝트 </h1>

<h3 align="center"> 서비스 링크: https://ncnc-app-iota.vercel.app/ </h3>

<p align="center"><img width="500" src="https://bit.ly/3HUSY9s" /></p>

# 👏 프로젝트 소개

> TypeScript와 Next.js를 사용하여 기프티콘 거래 모바일 반응형 웹페이지를 구현하였습니다.

## 🚀 스택

`React` `typescript` `Next.js` `emotion`

## ⚙ 설치

```
# clone the project
$ git clone https://github.com/console-lo9/messenger.git

# install modules
$ cd ncnc-app
$ npm install || yarn install

# start
$ npm run dev || yarn dev

⠀
⠀  You can now view this project in the browser.
⠀  http://localhost:3000/
⠀
```

## 🔗 의존성

```
"dependencies": {
    "@emotion/react": "^11.7.1",
    "@emotion/styled": "^11.6.0",
    "@reduxjs/toolkit": "^1.7.2",
    "@types/react-redux": "^7.1.22",
    "axios": "^0.26.0",
    "next": "12.0.10",
    "next-redux-wrapper": "^7.0.5",
    "react": "17.0.2",
    "react-dom": "17.0.2",
    "react-redux": "^7.2.6"
},
```

## 📂 파일 구조

        ├── components
        │   ├── Brand
        │   ├── Carousel
        │   ├── Category
        │   ├── Contact
        │   ├── Deal
        │   ├── ItemLists
        │   │   ├── styled
        │   │   └── types
        │   ├── Main
        │   └── Mypage
        ├── cypress
        │   ├── fixtures
        │   ├── integration
        │   ├── plugins
        │   └── support
        ├── hooks
        ├── layout
        ├── pages
        │   ├── api
        │   ├── brands
        │   ├── categories
        │   ├── contacts
        │   └── items
        ├── public
        ├── store
        ├── styles
        ├── types
        └── utils
            └── functions

## ✨ 구현 사항

> **`맡은 역할`** <br>
> 카테고리 페이지 구현, 홈 배너 캐러셀 슬라이딩 기능 구현, 마이페이지 메뉴 매끄럽게 움직이도록 구현, 헤더 및 여러 컴포넌트에서 재사용 가능한 컨텐츠박스 구현

-   [x] `Next.js`와 `Typescript` 사용
-   [x] 니콘내콘 모바일 웹 페이지와 같은 라우팅
-   [x] 3분 이내의 E2E 테스트 구현
-   [x] 재사용 가능한 Container

-   [x] Header

    -   [x] 홈인 경우 햄버거 버튼, 홈이 아닐 경우 왼쪽 상단에 뒤로가기 버튼
    -   [x] 카테고리, 브랜드 페이지에서 선택한 메뉴를 중앙에 출력

-   [x] 홈

    -   [x] 배너 캐러셀 라이브러리 없이 랜덤 이미지로 직접 구현
    -   [x] 브랜드 메뉴 출력 (API)
    -   [x] 땡처리 리스트 출력 (API)

-   [x] 브랜드 페이지 /categories

    -   [x] 카테고리 상단 메뉴바는 슬라이드가 되도록 구현
    -   [x] 카테고리 내에서 브랜드 리스트 출력
    -   [x] 땡처리콘, 까페 등 각 카테고리 페이지 생성
    -   [x] 브랜드 클릭 or 터치 시 해당 브랜드 상세로 이동

-   [x] 상품 리스트 /brands

    -   [x] 상품 리스트 출력 (API)
    -   [x] 상품 개수 좌측 상단에 출력
    -   [x] 이미지, 상품명, 할인율, 할인가, ~~정가~~

-   [x] 상품 상세 /items

    -   [x] 옵션 미선택 시 옵션 선택하기 버튼 렌더링
    -   [x] 옵션 선택 버튼 클릭 시 옵션 선택 창 노출
    -   [x] 옵션 선택 시 옵션 창 닫히고 선택 옵션과 구매하기 버튼 렌더링
    -   [x] 옵션 선택 창 백그라운드 클릭 시 창 닫힘
    -   [x] 선택한 옵션 클릭 시 옵션 선택 창 노출

-   [x] 고객 센터 /contacts
    -   [x] 홈 화면의 좌측 상단 햄버거 메뉴 눌렀을 때 고객 센터 페이지로 이동하는 메뉴 노출
    -   [x] 왼쪽에서 오른쪽으로 화면을 100% 덮는 애니메이션
    -   [x] 상담 시간 안내
    -   [x] 구매 / 판매 탭 구현
    -   [x] 구매 / 판매 탭에 맞는 QnA 리스트 조회

## 🗺 한 눈으로 보는 구현 기능

1. 메인 및 카테고리, 브랜드, 상품 상세 페이지

<img width="400" src="https://user-images.githubusercontent.com/87363422/160919459-6e6db9d4-133e-4b55-ab60-c1bce6622398.gif" />

2. 마이페이지와 고객 센터

<img width="400" src="https://user-images.githubusercontent.com/28384562/154145176-07ec7cde-020b-4139-9335-65d47a4664e8.gif" />
