// eslint-disable-next-line import/prefer-default-export
export const dataTransform = (data) => {
  const date = new Date(data);
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();
  const monthes = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
  return `${day} ${monthes[month]} ${year}`;
};
