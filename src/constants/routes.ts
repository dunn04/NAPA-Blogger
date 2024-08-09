const COMMONS = {
  HOME: '/',
  SETTINGS: '/settings'
}

const AUTH = {
  LOGIN: '/login',
  SIGNUP: '/signup',
  LOGOUT: '/logout'
}

const BLOGS = {
  POPULAR_POST: '/popular-blogs',
  MY_BLOGS: '/my-blogs',
  SAVED_BLOGS: '/saved-blogs',
  CREATE_NEW_BLOG: '/create-new-blog',
  BLOG_DETAIL: {
    BASE: '/blogs',
    WITH_ID: '/blogs/:id'
  }
}

const USER = {
  PROFILE: {
    BASE: '/profile',
    WITH_ID: '/profile/:id'
  }
}

const ROUTE_PATHS = {
  ...COMMONS,
  ...AUTH,
  ...BLOGS,
  ...USER
}

const ROUTE_ACTIONS = {
  BLOG_DETAIL_WITH_ID: (id: string) => `${BLOGS.BLOG_DETAIL.BASE}/${id}`,
  USER_PROFILE_WITH_ID: (id: string) => `${USER.PROFILE.BASE}/${id}`
}

export { ROUTE_PATHS, ROUTE_ACTIONS }
