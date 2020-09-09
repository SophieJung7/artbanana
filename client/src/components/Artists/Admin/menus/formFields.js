export const COMMON_FIELDS = [
  {
    label: '제품명 *',
    name: 'name',
    size: 'col-md-6',
    noValueError: '제품명을 입력해주세요.',
    placeholder: '펜슬드로잉',
  },
  {
    label: '작품소재 *',
    name: 'medium',
    size: 'col-md-6',
    noValueError: '작품소재를 입력해주세요.',
    placeholder: '연필, 색연필, 디지털 등',
  },
  {
    label: '기타 주문제작소개 및 주문제작 유의사항',
    name: 'description',
    size: 'col',
    noValueError: '',
    placeholder: '제작방법, 제품장점 등을 기입해주세요.',
  },
];

export const PHYSICAL_PRICE_FIELDS = [
  {
    label: 'S사이즈 가격 *',
    name: 'price.sm',
    size: 'col-md-6',
    noValueError: 'S사이즈 가격을 입력해주세요.',
    placeholder: '숫자만 입력 예)155000',
  },
  {
    label: 'M사이즈 가격 *',
    name: 'price.md',
    size: 'col-md-6',
    noValueError: 'M사이즈 가격을 입력해주세요.',
    placeholder: '숫자만 입력 예)155000',
  },
  {
    label: 'L사이즈 가격 *',
    name: 'price.lg',
    size: 'col-md-6',
    noValueError: 'L사이즈 가격을 입력해주세요.',
    placeholder: '숫자만 입력 예)155000',
  },
  {
    label: 'XL사이즈 가격 *',
    name: 'price.xl',
    size: 'col-md-6',
    noValueError: 'XL사이즈 가격을 입력해주세요.',
    placeholder: '숫자만 입력 예)155000',
  },
];

export const DIGITAL_PRICE_FIELDS = [
  {
    label: '오브젝트수 1명(혹은 1개) *',
    name: 'price.sm',
    size: 'col-md-6',
    noValueError: '오브젝트수 1명 가격을 입력해주세요.',
    placeholder: '숫자만 입력 예)155000',
  },
  {
    label: '오브젝트수 2명(혹은 2개) 가격 *',
    name: 'price.md',
    size: 'col-md-6',
    noValueError: '오브젝트수 2명 가격을 입력해주세요.',
    placeholder: '숫자만 입력 예)155000',
  },
  {
    label: '오브젝트수 3명(혹은 3개) 가격 *',
    name: 'price.lg',
    size: 'col-md-6',
    noValueError: '오브젝트수 3명 가격을 입력해주세요.',
    placeholder: '숫자만 입력 예)155000',
  },
  {
    label:
      '오브젝트당 가격(오브젝트가 3명이상일 때 추가적으로 발생하는 비용) *',
    name: 'price.per',
    size: 'col-md-6',
    noValueError: '오브젝트당 가격을 입력해주세요.',
    placeholder: '숫자만 입력 예)155000',
  },
];
