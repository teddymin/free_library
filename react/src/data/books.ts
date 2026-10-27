import type { Book } from "../types/book";

// 화면 확인용 샘플 데이터입니다. 서버(API)가 준비되면 fetch 결과로 교체하세요.
export const BOOKS: Book[] = [
  {
    id: 1,
    title: "운수 좋은 날",
    author: "현진건",
    year: 1924,
    categories: ["소설", "단편", "근대문학"],
    description:
      "인력거꾼 김 첨지에게 유난히 손님이 많았던 비 오는 하루를 그린 단편소설입니다.\n\n오랜만에 큰돈을 벌어 들뜬 하루가 아픈 아내에 대한 불안과 겹치며, 제목의 '운수 좋은'이라는 말이 어떤 아이러니를 품고 있는지 보여 줍니다.",
    cover: `/covers/cover-${(1).toString().padStart(2,'0')}.jpg`,
  },
  {
    id: 2,
    title: "메밀꽃 필 무렵",
    author: "이효석",
    year: 1936,
    categories: ["소설", "단편", "근대문학"],
    description:
      "장돌뱅이 허 생원이 봉평에서 대화로 향하는 밤길을 걸으며 지난 추억을 떠올리는 이야기입니다.\n\n달빛 아래 하얗게 핀 메밀꽃밭의 서정적인 묘사로 한국 단편소설의 대표작으로 꼽힙니다.",
    cover: "/covers/cover-02.jpg",
  },
  {
    id: 3,
    title: "동백꽃",
    author: "김유정",
    year: 1936,
    categories: ["소설", "단편", "근대문학"],
    description:
      "강원도 산골 마을을 배경으로 소작인의 아들 '나'와 마름의 딸 점순이 사이의 티격태격한 관계를 해학적으로 그린 작품입니다.\n\n토속적인 말투와 유머 덕분에 지금 읽어도 생생하게 다가옵니다.",
    cover: "/covers/cover-03.jpg",
  },
  {
    id: 4,
    title: "하늘과 바람과 별과 시",
    author: "윤동주",
    year: 1948,
    categories: ["시", "근대문학"],
    description:
      "윤동주 시인의 유고 시집으로, 「서시」와 「별 헤는 밤」 등 대표작이 실려 있습니다.\n\n부끄러움과 성찰, 그리고 맑은 서정이 담긴 시편들을 만나 볼 수 있습니다.",
    cover: "/covers/cover-04.jpg",
  },
  {
    id: 5,
    title: "진달래꽃",
    author: "김소월",
    year: 1925,
    categories: ["시", "근대문학"],
    description:
      "김소월의 생전 유일한 시집으로, 이별과 그리움의 정서를 민요적인 리듬에 실어 노래한 작품들이 담겨 있습니다.\n\n표제작 「진달래꽃」을 비롯해 한국 근대시의 출발점으로 평가받는 시편들을 읽을 수 있습니다.",
    cover: "/covers/cover-05.jpg",
  },
  {
    id: 6,
    title: "날개",
    author: "이상",
    year: 1936,
    categories: ["소설", "단편", "근대문학"],
    description:
      "아내에게 의존해 살아가는 '나'의 내면을 따라가는 심리 소설입니다.\n\n의식의 흐름을 살린 독특한 문체로 한국 모더니즘 소설의 대표작으로 손꼽힙니다.",
    cover: "/covers/cover-06.jpg",
  },
  {
    id: 7,
    title: "춘향전",
    author: "작자 미상",
    year: null,
    categories: ["소설", "고전"],
    description:
      "기생의 딸 춘향과 양반가 자제 이몽룡의 사랑을 중심으로, 신분의 벽과 부당한 권력에 맞서는 이야기를 담은 고전 소설입니다.\n\n판소리로 전해지다 소설로 정착했으며, 여러 이본이 전해 내려옵니다.",
    cover: "/covers/cover-07.jpg",
  },
  {
    id: 8,
    title: "홍길동전",
    author: "허균",
    year: null,
    categories: ["소설", "고전"],
    description:
      "서자로 태어나 차별을 겪던 홍길동이 집을 떠나 활빈당을 이끌고 불의에 맞서는 이야기입니다.\n\n한글로 쓰인 소설의 시초로 널리 알려져 있습니다.",
    cover: "/covers/cover-08.jpg",
  },
  {
    id: 9,
    title: "사랑손님과 어머니",
    author: "주요섭",
    year: 1935,
    categories: ["소설", "단편", "근대문학"],
    description:
      "여섯 살 옥희의 눈으로 바라본 어머니와 사랑방 손님 사이의 조심스러운 감정을 그린 단편소설입니다.\n\n어린 화자의 순수한 시선이 오히려 어른들의 말하지 못한 마음을 더 선명하게 보여 줍니다.",
    cover: "/covers/cover-09.jpg",
  },
  {
    id: 10,
    title: "무정",
    author: "이광수",
    year: 1917,
    categories: ["소설", "근대문학"],
    description:
      "신문에 연재되어 큰 반향을 일으킨 작품으로, 흔히 한국 근대 장편소설의 출발점으로 평가됩니다.\n\n교사 이형식과 두 여인 사이의 관계를 통해 새로운 시대를 맞는 청년들의 고민을 담았습니다.",
    cover: "/covers/cover-10.jpg",
  },
];



export function findBook(id: number): Book | undefined {
  return BOOKS.find((book) => book.id === id);
}
