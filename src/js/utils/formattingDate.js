/* eslint-disable import/prefer-default-export */
export const formattingDate = () => {
  const dayMilliseconds = 24 * 60 * 60 * 1000 * 7;
  const previousDate = new Date(new Date().getTime() - dayMilliseconds).toISOString();
  return previousDate;
};
