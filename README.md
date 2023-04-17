# My-Todo-List
과제에 요구되는 사항
1. 제목과 내용을 입력하고, [추가하기] 버튼을 클릭하면 Working에 새로운 Todo가 추가되고 제목 input과 내용 input은 다시 빈 값으로 바뀌도록 구성    
2. Todo의 **isDone 상태가 true이면, 상태 버튼의 라벨을 `취소`, isDone이 false 이면 라벨을 `완료`** 로 조건부 렌더링
3. Todo의 상태가 `Working` 이면 위쪽에 위치하고, `Done`이면 아래쪽에 위치하도록 구현합니다.
4. Layout의 최대 넓이는 1200px, 최소 넓이는 800px로 제한하고, 전체 화면의 가운데로 정렬
5. **컴포넌트 구조는 자유롭게 구현해보세요.**
- 반복되는 컴포넌트를 찾아서, 직접 컴포넌트를 분리해보시고, 분리한 컴포넌트를 `README`에 작성합니다.

![TodoList](https://user-images.githubusercontent.com/128782170/232424458-d0b1eaee-77ad-44a1-98cd-e0123aff205d.gif)
## Todolist.jsx
제목 내용 컨테이너 부분
## Button.jsx
추가하기 버튼을 클릭하면 Working에 새로운 Todo가 추가되고 제목 input과 내용 input은 다시 빈 값으로 바뀌도록 구성
## Todo.jsx
완료, 취소버튼 클릭
