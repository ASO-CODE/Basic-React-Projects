const paginate = (followers) => {
  const itemsPerPage = 9;
  const numberOfPpages = Math.ceil(followers.length / itemsPerPage);

  const newFollowers = Array.from({ length: numberOfPpages }, (_, index) => {
    const start = index * itemsPerPage;
    return followers.slice(start, start + itemsPerPage);
  });
// console.log(newFollowers);
  return newFollowers;
};

export default paginate;
