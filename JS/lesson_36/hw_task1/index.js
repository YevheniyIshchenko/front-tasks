const fetchUser = (userId) =>
  fetch(`https://api.github.com/users/${userId}`).then((res) => res.json());

export const getUsersBlogs = async (user) => {
  try {
    return await Promise.all(
      user.map((el) => fetchUser(el).then((res) => res.blog))
    );
  } catch {
    throw new Error('Failed to fetch user');
  }
};

getUsersBlogs(['google', 'facebook', 'twitter']).then((linksList) =>
  console.log(linksList)
);
// ["https://opensource.google/", "https://opensource.fb.com", "http://twitter.com/dan_abramov"]
