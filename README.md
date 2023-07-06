# pet-side

- 주요 기능

  - 캘린더와 todo리스트를 이용한 견주 스케줄링 (산책, 사료, 간식 등 일정 체크)
  - 견종백서 - 견종 별 특징 등 정보 제공
  - 커뮤니티(게시판)

- 데이터 저장

  - AsyncStorage 이용

- 화면 Flow

  - 앱 진입시 - 로그인 기록 있을 경우 - 메인스크린 / 없을 경우 - 로그인(회원가입)

- MainScreen

  - BottomTab 구성
    - Home / Community / Plus Button / Schedule List / My
  - Home Screen
    - 오늘 일정이 있을 경우 배너로 안내
      - 배너 - 오늘 일정이 있을 경우 리스트 제공 / 없을 경우 ‘일정을 등록해보세요’ 등의 문구 제공
    - 캘린더 - 일정 등록
      - 일정 -> 크게 산책 / 밥 / 간식 / 직접입력으로 나누어 제공
  - Community (dummy)
    - 게시글 flat list로 제공 (이미지 위주 or 텍스트 위주? - 인스타 or 핀터레스트 or 게시판 ?)
    - 게시판st 일경우 - 조회수에 따른 인기글 best3 상단에 제공
  - Plus Button
    - bottomSheet 혹은 당근마켓 + 버튼 UI인용
    - 일정, todo, 게시글 작성 form으로 바로 이동할 수 있는 버튼 제공
    - 후에 bottomTab에 스크린 추가 될 경우 FAB로 변경하여 제공
  - 자체 컨텐츠 제공 ( ex. 견종백서, 애견 동반 장소 추천 - dummy)
  - My
    - 내가 작성한 글
    - 설정 스크린 필요
      - 로그아웃, 회원정보 수정 (닉네임)

- 회원가입 및 로그인
  - 로그인 성공시 -> 환영 스크린으로 진입
  - 회원가입 (받을 필수 정보 : id, password, name, petName / 선택 정보 : 주소, 설명, 프로필 이미지)
    - 회원 가입 후 받은 정보 AsyncStorage에 ‘Users’로 저장
  - 로그인시 LocalStorage에 정보 저장
- AppIcon , Splash screen 작업 필요
