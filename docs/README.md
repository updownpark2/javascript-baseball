## 기능목록

- 게임 시작을 알리는 멘트 출력하기

- 컴퓨터로부터 랜덤값받기(model)

- 유저로부터 입력받기 (view)

- 유저에게 받은 입력값 타당성 검사(model)

잘못 입력했을 경우 throw문을 사용해 종료(model)
숫자가 아닌걸 입력했을 때
숫자가 3개가 아닐 때
겹치는 숫자를 입력했을 때

- 유저에게 받은 입력값을 룰에따라 처리(model)

컴퓨터 값과 유저의 입력값의 배열을 비교
strikeCount와 ballCount를 내부에서 해결
일치하면 strike Up 존재하면 ballCount Up

- 처리된 입력값에 따라 출력하기 (view)

- 3개의 숫자를 모두 맞히면 boolean 리턴(model)

- 3개의 숫자를 맞췄을 때 재시작/종료함수 호출 (controller)

- 재시작/종료 입력값 받기 (view)

- 재시작/종료 입력값 타당성 검사(model)

잘못 입력했을 경우 throw문을 사용해 종료(model)

- 재시작/종료에 따라 함수호출 (controller)
