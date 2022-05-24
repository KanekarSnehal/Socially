export const getSortedPosts = (posts, sortBy) => {
  switch (sortBy.toUpperCase()) {
    case "LATEST":
      return [...posts].sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      );
    case "OLDEST":
      return [...posts].sort(
        (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
      );
    case "TRENDING":
      return [...posts].sort((a, b) => b.likes.likeCount - a.likes.likeCount);
  }
};
