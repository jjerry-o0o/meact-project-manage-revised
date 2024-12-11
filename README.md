'meact-project-manage-revised' 는 이전에 연습 프로젝트로 진행했던 'meact-project-manage-app' 를 강의를 보며 개선한 프로젝트입니다. 강의 내용을 그대로 반영 하기 보다는 기존에 연습시 작성한 코드에서 개선이 필요하다 생각한 부분만 변경 하였습니다.

**[ 주요 개선 사항 ]**
1. 기존에 잘 모르고 사용했던 html tag (div, section 등) 를 의미와 기능에 맞는 tag (main, ul 등) 로 변경
   - 강의에서 input 을 p 태그로 감싸는 내용이 있었으나, div가 더 적합하다 판단하여 수정x
2. 반응형 디자인 추가 (md: , hover: 등) , 정렬 하는 부분 개선 (flex, center 등)
3. 중복 되던 코드 수정
   - input, button 코드들 -> Input, Button 컴포넌트로 분리
