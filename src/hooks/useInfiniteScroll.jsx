import React, { useState, useEffect, useRef } from "react";

export const useInfiniteScroll = (posts) => {
  const [pageNumber, setPageNumber] = useState(1);
  const loadingRef = useRef(null);
  const postsLength = posts.length;
  const hasMorePosts = pageNumber <= Math.ceil(postsLength / pageNumber);
  const [loading, setLoading] = useState(false);
  let interval = null;

  const handleObserver = (entries) => {
    if (entries[0].isIntersecting && hasMorePosts) {
      setLoading(true);
      interval = setTimeout(() => {
        setLoading(false);
        setPageNumber((prevPageNumber) => prevPageNumber + 1);
      }, 1000);
    }
  };

  useEffect(() => {
    const target = loadingRef.current;
    const observer = new IntersectionObserver(handleObserver, {
      threshold: 1,
    });
    if (target) {
      observer.observe(target);
    }
    return () => {
      if (interval) clearInterval(interval);
      if (target) observer.unobserve(target);
    };
  }, [hasMorePosts]);

  return { loadingRef, pageNumber, hasMorePosts, loading };
};
