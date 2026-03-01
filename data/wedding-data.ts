export const WEDDING_DATA = {
  // 신랑신부 정보
  groom: {
    name: "이혁기",
    phone: "010-2639-1928",
    account: {
      bank: "우리은행",
      accountNumber: "1002-361-300008",
      depositor: "이혁기",
    },
    parents: {
      father: {
        name: "이병익",
        phone: "010-3228-0214"
      },
      mother: {
        name: "김미숙",
        phone: "010-4738-0214"
      },
    },
  },
  bride: {
    name: "최영재",
    phone: "010-9340-7520",
    account: {
      bank: "샘플은행",
      accountNumber: "9876-54-3210987",
      depositor: "최영재",
    },
    parents: {
      father: {
        name: "최재천",
        phone: "010-6542-4050",
      },
      mother: {
        name: "하경심",
        phone: "010-9722-2374",
      },
    },
  },
  parents: {
    groom: {
      father: {
        name: "이병익",
        phone: "010-3228-0214",
        // account: {
        //     bank: "샘플은행",
        //     accountNumber: "1002-123-456789",
        //     depositor: "이병익"
        // }
      },
      mother: {
        name: "김미숙",
        phone: "010-4738-0214",
      },
    },
    bride: {
      father: {
        name: "최재천",
        phone: "010-6542-4050",
        // account: {
        //     bank: "샘플은행",
        //     accountNumber: "123-45-6789012",
        //     depositor: "박상현"
        // }
      },
      mother: {
        name: "하경심",
        phone: "010-9722-2374",
      },
    },
  },

  // 예식 정보
  date: "2026.06.14 SUN PM 2:00",
  venue: {
    name: "셀럼앤어셈 / 퓨처스타즈",
    address: "서울특별시 강남구 언주로 711 건설회관 별관 1,2층",
    phone: "02-545-2222",
    date: "2026년 6월 14일 일요일 오후 2시",
    coordinates: {
      lat: 37.5173,
      lng: 127.0341,
    },
  },

  // UI 텍스트
  content: {
    navigation: {
      home: "HOME",
      intro: "초대합니다",
      venue: "오시는 길",
      transport: "교통안내",
      contact: "연락처",
      gallery: "갤러리",
      menu: "메뉴",
      close: "닫기",
      appTitle: "Wedding Invitation",
    },
    hero: {
      groom: "혁기",
      bride: "영재",
      date: "2026.06.14",
      time: "SUN PM 2:00",
      location: "셀럼앤어셈 / 퓨처스타즈",
    },
    intro: {
      eyebrow: "소중한 분들을 초대합니다",
      title: "INVITATION",
      mainText:
        "서로가 마주보며 다져온 사랑을<br />이제 함께 한 곳을 바라보며<br />걸어갈 수 있는 큰 사랑으로 키우고자 합니다.<br /><br />저희 두 사람이 사랑의 이름으로<br />지켜나갈 수 있게 앞날을<br />축복해 주시면 감사하겠습니다.",
      groomName: "이혁기",
      brideName: "최영재",
      groomParents: "의 아들",
      brideParents: "의 딸",
      groomLabel: "신랑",
      brideLabel: "신부",
    },
    venue: {
      eyebrow: "Location",
      title: "오시는 길",
      naverMap: "네이버지도",
      kakaoMap: "카카오맵",
    },
    transport: {
      eyebrow: "Transportation",
      title: "교통안내",
      parking: {
        title: "주차",
        desc: "예식장 지하주차장 B1~B3층 이용 가능",
      },
    },
    contact: {
      eyebrow: "Contact",
      title: "마음 전하실 곳",
      groomSide: "신랑측",
      brideSide: "신부측",
      call: "전화하기",
      message: "문자하기",
      account: "계좌번호",
      copy: "복사",
      copied: "복사완료",
      depositor: "예금주",
      father: "아버지",
      mother: "어머니",
      accountButton: "축의금 계좌번호",
    },
    gallery: {
      eyebrow: "Gallery",
      title: "우리의 순간",
      close: "닫기",
      photoAlt: "웨딩 사진",
    },
    footer: {
      copyright: "© 2026 Wedding Invitation. All rights reserved.",
    },
  },

  // 이미지
  images: {
    main: "/gallery/i9.jpg",
    background: "/gallery/main.jpg",
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80",
        alt: "Wedding moment 1",
        isHorizontal: false,
      },
      {
        src: "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=800&q=80",
        alt: "Wedding moment 2",
        isHorizontal: false,
      },
      {
        src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=1200&q=80",
        alt: "Wedding moment 3",
        isHorizontal: true,
      },
      {
        src: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&q=80",
        alt: "Wedding moment 4",
        isHorizontal: false,
      },
      {
        src: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=800&q=80",
        alt: "Wedding moment 5",
        isHorizontal: false,
      },
      {
        src: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=1200&q=80",
        alt: "Wedding moment 6",
        isHorizontal: true,
      },
      {
        src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80",
        alt: "Wedding moment 7",
        isHorizontal: false,
      },
      {
        src: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=800&q=80",
        alt: "Wedding moment 8",
        isHorizontal: false,
      },
      {
        src: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=1200&q=80",
        alt: "Wedding moment 9",
        isHorizontal: true,
      },
      {
        src: "https://images.unsplash.com/photo-1544191696-102dbdaeeaa0?w=800&q=80",
        alt: "Wedding moment 10",
        isHorizontal: false,
      },
      {
        src: "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=800&q=80",
        alt: "Wedding moment 11",
        isHorizontal: false,
      },
      {
        src: "https://images.unsplash.com/photo-1460978812857-470ed1c77af0?w=1200&q=80",
        alt: "Wedding moment 12",
        isHorizontal: true,
      },
      {
        src: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=800&q=80",
        alt: "Wedding moment 13",
        isHorizontal: false,
      },
      {
        src: "https://images.unsplash.com/photo-1529636798458-92182e662485?w=800&q=80",
        alt: "Wedding moment 14",
        isHorizontal: false,
      },
      {
        src: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=1200&q=80",
        alt: "Wedding moment 15",
        isHorizontal: true,
      },
      {
        src: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&q=80",
        alt: "Wedding moment 16",
        isHorizontal: false,
      },
      {
        src: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=800&q=80",
        alt: "Wedding moment 17",
        isHorizontal: false,
      },
      {
        src: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?w=1200&q=80",
        alt: "Wedding moment 18",
        isHorizontal: true,
      },
      {
        src: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=800&q=80",
        alt: "Wedding moment 19",
        isHorizontal: false,
      },
      {
        src: "https://images.unsplash.com/photo-1544191696-102dbdaeeaa0?w=800&q=80",
        alt: "Wedding moment 20",
        isHorizontal: false,
      },
      {
        src: "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?w=1200&q=80",
        alt: "Wedding moment 21",
        isHorizontal: true,
      },
      {
        src: "https://images.unsplash.com/photo-1522413452208-996ff3f3e740?w=800&q=80",
        alt: "Wedding moment 22",
        isHorizontal: false,
      },
      {
        src: "https://images.unsplash.com/photo-1530047625168-4b29bfbbe1fc?w=800&q=80",
        alt: "Wedding moment 23",
        isHorizontal: false,
      },
      {
        src: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=1200&q=80",
        alt: "Wedding moment 24",
        isHorizontal: true,
      },
      {
        src: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=800&q=80",
        alt: "Wedding moment 25",
        isHorizontal: false,
      },
      {
        src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&q=80",
        alt: "Wedding moment 26",
        isHorizontal: false,
      },
      {
        src: "https://images.unsplash.com/photo-1460978812857-470ed1c77af0?w=1200&q=80",
        alt: "Wedding moment 27",
        isHorizontal: true,
      },
      {
        src: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=800&q=80",
        alt: "Wedding moment 28",
        isHorizontal: false,
      },
      {
        src: "https://images.unsplash.com/photo-1529636798458-92182e662485?w=800&q=80",
        alt: "Wedding moment 29",
        isHorizontal: false,
      },
      {
        src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=1200&q=80",
        alt: "Wedding moment 30",
        isHorizontal: true,
      },
    ],
  },
};
