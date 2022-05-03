# Hook

Hook은 함수형 컴포넌트에서 사용할 수 있는 함수이다.

Hook은 React state와 생명주기 기능(lifecycle features)을 “연동(hook into)“할 수 있게 해주는 함수이다.

[Hook 사용 규칙](https://ko.reactjs.org/docs/hooks-overview.html#rules-of-hooks)

## useEffect

useEffect는 React가 DOM을 업데이트할 때마다 실행되는 함수이다. [이는 내부적인 스팩이며, 버그를 방지할 수 있다.](https://ko.reactjs.org/docs/hooks-effect.html#explanation-why-effects-run-on-each-update)

useEffect는 첫번째 인자인 callback을 호출하여 어떠한 side effect를 일으킬 수 있다.

useEffect에서 외부 데이터에 구독을 설정하는 경우 [clean-up](https://ko.reactjs.org/docs/hooks-effect.html#effects-with-cleanup)을 하여 메모리 누수를 방지할 수 있다.

DOM이 업데이트 되었을때 상태의 변경이 없는 경우 [effect skipping](https://ko.reactjs.org/docs/hooks-effect.html#tip-optimizing-performance-by-skipping-effects)할 수 있다

[Multiple Effect](https://ko.reactjs.org/docs/hooks-effect.html#tip-use-multiple-effects-to-separate-concerns)를 적용한다면 관심사를 분리하여 useEffect를 사용할 수 있다.

### 비동기 통신을 할때 useEffect를 사용할 경우 어떻게 처리해야할까?

[해당](https://blog.logrocket.com/understanding-react-useeffect-cleanup-function/)글에 설명이 자세히 되어있다.

## useContext

일반적으로 리액트에서 props를 전파할때 상위 컴포넌트에서 하위 컴포넌트로 props를 전달해준다. 하위 컴포넌트의 수가 증가할수록 props를 전달해주어야 할 컴포넌트가 점점 늘어나게 되어 복잡한 컴포넌트가 될 수 있다. 이 상황을 context의 사용을 통해 해결할 수 있다.

### 언제 사용할까?

context는 보통 전역 변수를 모든 컴포넌트에게 전파하기 위해 자주 사용한다. 하지만 context를 아무대나 사용하게 되면 해당 컴포넌트는 context의 변수값에 의존하게 되어 재사용성이 저하된다.

정리하자면 상위 컴포넌트에서 props를 전달하기 위해서 context를 사용하고 있다면, [컴포넌트 합성](https://ko.reactjs.org/docs/context.html#before-you-use-context)을 통해 해결할 수 있다.

### redux를 대체할 수 있을까?

[context와 redux는 사용이유가 다르다.](https://olaf-go.medium.com/context-api-vs-redux-e8a53df99b8)글에 설명이 자세히 되어있다.

## customHook

customHook은 동일한 hook을 다른 컴포넌트에서 재사용하기 위해 사용자가 직접 작성하는 hook이다.
[리액트 공식](https://ko.reactjs.org/docs/hooks-custom.html)에서 잘 설명해주고 있다.

## useReducer

redux를 사용했다면 useReducer를 단번에 이해할 수 있을 것이다.
[리액트 공식](https://ko.reactjs.org/docs/hooks-reference.html#usereducer)에서 잘 설명해주고 있다.
추가적으로 reducer는 [여기](https://kentcdodds.com/blog/the-state-reducer-pattern-with-react-hooks)에서 제시한 패턴이다.

## useCallback useMemo

useMemo는 메모이제이션된 값을 반환한다.
useCallback은 메모이제이션된 콜백을 반환한다.

의존성 값을 배열에 전달하면 의존성 값이 변경될 때에만 메모이제이션값을 다시 계산한다.

즉, 컴퓨팅 비용이 많이드는 계산을 메모이제이션을 하여 다음 렌더링될때 메모이제이션되어있는 데이터를 보여주는 방식이다.

[참고1](https://leehwarang.github.io/2020/05/02/useMemo&useCallback.html)
[참고2](https://ui.toast.com/weekly-pick/ko_20190731)

## useRef

useRef는 DOM 뿐만이 아니라 어떤 값이든 저장할 수 있는 일반적인 자바스크립트 객체이다.

### useRef의 특성

값을 변경하더라도 컴포넌트가 리렌더링 되지않는다.
매 렌더링할때마다 동일한 객체를 제공한다.

즉, 컴포넌트에 변수를 선언하게 되면 리렌더링 될때 전부 사라지게 되는데, 리렌더링 되더라도 변수의 값이 사라지는 것을 방지할 수 있다. (class의 인스턴스 프로퍼티와 동일하다고 보면된다.)

##

자세한 설명은 [여기](https://minoo.medium.com/useref-%EA%B0%80-%EC%88%9C%EC%88%98-%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EA%B0%9D%EC%B2%B4%EB%A5%BC-%EC%83%9D%EC%84%B1%ED%95%9C%EB%8B%A4%EB%8A%94-%EC%9D%98%EB%AF%B8%EB%A5%BC-%EA%B3%B1%EC%94%B9%EC%96%B4%EB%B3%B4%EA%B8%B0-8a0857fc5ebb)에서 잘설명해주고 있다.

[참고1](https://ko.reactjs.org/docs/hooks-overview.html)
[참고2](https://dev.to/otamnitram/react-useeffect-cleanup-how-and-when-to-use-it-2hbm)
