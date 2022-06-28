# Code Convention

> 기본적인 코드 컨벤션입니다.

# Github

## 형상 관리

git flow, git-hub flow, git-lab flow중 프로젝트에 맞는 형상 관리를 채택합니다.

## Commit message

[Conventional Commits](https://www.conventionalcommits.org/ko/v1.0.0-beta.4/)을 준수합니다

## Merge History

[Squash and Merge ( Linear History )](https://tilog.io/argon1025/46)를 준수합니다

## Issue

정확한 정보와 근거를 바탕으로 리뷰합니다.

## PR

쉽게 읽을 수 있어야 합니다
하나의 PR은 하나의 단위 기능만 개발해야 합니다

## eslint

[eslint-config-airbnb](https://github.com/apple77y/javascript/tree/master/react)를 사용합니다.

- eslint-config-airbnb-typescript를 확장합니다.

- [ReactV17의 JSX의 Transform 방식](https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html)으로 인해 plugin:react/jsx-runtime를 확장합니다.

- 프로젝트에 따라 룰을 수정합니다.

# 패키지 관리

> 이 섹션은 패키지 관리 규칙에 대해 다룹니다.

## 패키지 매니저

패키지 매니저는 `yarn` 을 사용합니다.

## 패키지 의존성

[devDependencies](https://docs.npmjs.com/cli/v8/configuring-npm/package-json#devdependencies)와 [dependencies](https://docs.npmjs.com/cli/v8/configuring-npm/package-json#dependencies)를 구분하여 패키지를 관리합니다.

### peerDependencies warn이 발생한 경우

1. PeerDependencies 패키지가 이미 설치 되어 있는지 확인합니다.
2. 메이저 업데이트를 제외한 업데이트가 필요할 시 업데이트합니다.
3. 작업을 PR에 명시합니다.

### 버전 범위 지정

버전 범위 지정를 통해 모든 팀이 동일한 환경으로 개발하는 것을 보장합니다.

→ [https://semver.org/lang/ko/](https://semver.org/lang/ko/)

## 패키지 파일 접근

Package.json, yarn.lock 파일은 직접 수정하지 않고 패키지 관리자 명령어를 통해 수정합니다.

→ [npm command](https://docs.npmjs.com/cli/v8/commands), [yarn command](https://classic.yarnpkg.com/en/docs/cli/)

# Typescript

strict 모드를 활성화합니다.

유틸리티관련 코드를 다룰 때 인자가 두개 이상인 경우 객체 리터럴로 인자를 전달합니다.

props가 2개이상인 경우 interface를 해당 파일 위에 생성합니다.

각 객체간의 메세지를 주고받을 때 반드시 typeSafe 하게 타입을 정의합니다.

# 네이밍 컨벤션

tsx,jsx 파일은 파스칼 케이스를 준수합니다.

그밖의 다른 파일들은 카멜 케이스를 준수합니다.

폴더 이름은 케밥케이스를 준수합니다.

# Import 정렬

외부 라이브러리 → 컴포넌트 → 타입

순으로 Import를 정렬합니다.

# Article

## webpack에서 BabelConfig를 구성하지않고 babel.config.js를 따로 구성하는 이유

webpack에서 option으로 설정하게 되면 webpack에서만 babel을 사용할 수 있고, 다른 babel을 사용하는 라이브러리는 따로 설정을 해줘야하기 때문이다.

[참고](https://stackoverflow.com/questions/43206062/why-do-i-have-to-put-babel-presets-inside-babelrc-and-webpack-config-js/43208353#43208353)

## polyfill을 따로 설정하는 걸까?

E11, 오래된 브라우저는 아래와 같은 JS문법을 지원하지 않는다.

- Promises
- Map
- Set
- Symbol
- Weakmap
- Weakset
- Array.from, Array.includes, Array.of, Array#find, Array.buffer, Array#findIndex
- Object.assign, Object.entries, Object.values

es5로 변환이 되어도 위의 문법을 지원하지 않는 오래된 브라우저를 위해 polyfill을 사용하여 추가적으로 동작할 수 있게 해야한다.

[참고](https://levelup.gitconnected.com/why-you-should-add-babel-polyfill-for-every-react-application-1997bdb8a524)

## ts-loader vs babel-typeScript

트렌스파일링을 할때 타입을 체크하고 싶으면 ts-loader를 webpack에서 설정해준다.

트렌스파일링을 빠르게 하여 빌드 속도를 높히고 싶다면 babel-typeScript를 사용한다.

babel-typeScript를 사용하게 되면 타입체크를 하지않기 때문에 ts compiler로 타입을 체크하고, 빌드해야함.

[참고1](https://evanlouie.github.io/posts/typescript-babel-preset-typescript-ts-loader)
[참고2](https://stackoverflow.com/questions/38320220/how-to-setup-typescript-babel-webpack)
[참고3](https://www.typescriptlang.org/ko/docs/handbook/babel-with-typescript.html)
