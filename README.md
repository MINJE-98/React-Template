# react-init

## webpack

- [x] [HMR](https://github.com/webpack/webpack-dev-server)
- [x] css loader
- [x] babel loader
- [x] ts loader
- [x] file loader
- [ ] 프로덕션, 개발 모드 설정
- [x] 추가 필요한 플러그인 적용

## babel

- [x] env
- [x] JSX

## [tsconfig 설정](https://github.com/MINJE-98/react-init/blob/main/tsconfig.json)

## [eslint 설정](https://github.com/MINJE-98/react-init/blob/main/.eslintrc)

## [prettier 설정](https://github.com/MINJE-98/react-init/blob/main/.prettierrc)

# 아티클

## babel 설정을 webpack에서 직접 설정해줄 수도 있는데 왜 따로 babel.config.js로 빼는 이유
webpack에서 option으로 설정하게 되면 webpack에서만 babel을 사용할 수 있고, 다른 babel을 사용하는 라이브러리는 따로 설정을 해줘야하기 때문이다.

[참고](https://stackoverflow.com/questions/43206062/why-do-i-have-to-put-babel-presets-inside-babelrc-and-webpack-config-js/43208353#43208353)

## babel이 힘들게 esnext를 es5로 변환해주는데 왜 polyfill을 따로 설정하는 걸까?

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
