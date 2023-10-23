// route to get logged in user's info (needs the token)
export const getMe = (token) => {
  if (!token) {
    return Promise.reject(new Error('No token provided'));
  }

  return fetch('/api/users/me', {
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${token}`,
    },
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Failed to retrieve user information');
    }
    return response.json();
  });
};

export const createUser = (userData) => {
  return fetch('/api/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('User creation failed');
    }
    return response.json();
  });
};

export const loginUser = (userData) => {
  return fetch('/api/users/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Login failed');
    }
    return response.json();
  });
};


export const saveBook = (bookData, token) => {
  if (!token) {
    return Promise.reject(new Error('No token provided'));
  }

  return fetch('/api/users', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(bookData),
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Failed to save the book');
    }
    return response.json();
  });
};


export const deleteBook = (bookId, token) => {
  if (!token) {
    return Promise.reject(new Error('No token provided'));
  }

  return fetch(`/api/users/books/${bookId}`, {
    method: 'DELETE',
    headers: {
      authorization: `Bearer ${token}`,
    },
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Failed to delete the book');
    }
    return response.json();
  });
};


export const searchGoogleBooks = (query) => {
  return fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`)
  .then(response => {
    if (!response.ok) {
      throw new Error('Google Books search failed');
    }
    return response.json();
  });
};
